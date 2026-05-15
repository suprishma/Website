'use client';

import { useState } from 'react';

const MIN_CHARS = 50;

const isNepali = (text: string) => /[\u0900-\u097F]/.test(text);

export default function TextSummarizer() {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const validate = (): string => {
    const t = inputText.trim();
    if (!t) return 'Please enter some text.';
    if (t.length < MIN_CHARS)
      return `Text too short — minimum ${MIN_CHARS} characters required.`;
    if (!isNepali(t)) return 'Please enter Nepali (Devanagari) text only.';
    return '';
  };

  const handleSummarize = async () => {
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError('');
    setLoading(true);
    setSummary('');

    try {
      const response = await fetch('/api/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: inputText }),
      });

      const data = await response.json();

      if (response.ok) {
        setSummary(data.summary);
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error — please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const charCount = inputText.length;
  const tooShort = charCount > 0 && charCount < MIN_CHARS;
  const notNepali = charCount >= MIN_CHARS && !isNepali(inputText);
  const ready = charCount >= MIN_CHARS && isNepali(inputText);

  return (
    <div style={{ maxWidth: 720 }}>
      {/* Input area */}
      <div style={{ marginBottom: 12 }}>
        <label
          className="manrope"
          style={{
            display: 'block',
            fontSize: 14,
            fontWeight: 600,
            color: '#1B2A4A',
            marginBottom: 8,
          }}
        >
          Input Text
        </label>
        <textarea
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
            if (error) setError('');
          }}
          placeholder="यहाँ नेपाली पाठ टाँस्नुहोस्… (कम्तिमा ५० अक्षर)"
          rows={7}
          className="input-modern"
          style={{
            fontFamily: 'Manrope, sans-serif',
            resize: 'vertical',
            lineHeight: 1.7,
          }}
        />
        {/* Character counter */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 6,
          }}
        >
          <span
            className="manrope"
            style={{
              fontSize: 12,
              color: tooShort ? '#EF4444' : notNepali ? '#D97706' : '#9CA3AF',
            }}
          >
            {tooShort && `${MIN_CHARS - charCount} more characters needed`}
            {notNepali && 'Non-Nepali characters detected'}
          </span>
          <span
            className="manrope"
            style={{
              fontSize: 12,
              color: ready ? '#22C55E' : '#9CA3AF',
              fontWeight: ready ? 600 : 400,
            }}
          >
            {charCount} / {MIN_CHARS}+
          </span>
        </div>
      </div>

      {/* Error banner */}
      {error && (
        <div
          style={{
            padding: '14px 18px',
            background: '#FEF2F2',
            border: '1px solid #FECACA',
            borderRadius: 12,
            marginBottom: 16,
          }}
        >
          <span className="manrope" style={{ fontSize: 14, color: '#DC2626', fontWeight: 500 }}>
            ✗ {error}
          </span>
        </div>
      )}

      {/* Summarize button */}
      <button
        onClick={handleSummarize}
        disabled={loading || !ready}
        className="btn-primary"
        style={{
          opacity: loading || !ready ? 0.55 : 1,
          cursor: loading || !ready ? 'not-allowed' : 'pointer',
          marginBottom: 32,
        }}
      >
        {loading ? (
          <>
            <span
              style={{
                display: 'inline-block',
                width: 14,
                height: 14,
                border: '2px solid rgba(255,255,255,0.4)',
                borderTopColor: '#fff',
                borderRadius: '50%',
                animation: 'spin 0.7s linear infinite',
              }}
            />
            Summarizing…
          </>
        ) : (
          'Summarize →'
        )}
      </button>

      {/* Model info badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '8px 14px',
          background: '#EEF1F8',
          borderRadius: 100,
          marginBottom: 32,
          marginLeft: 12,
        }}
      >
        <span style={{ fontSize: 14 }}>🤗</span>
        <span className="manrope" style={{ fontSize: 12, fontWeight: 600, color: '#3B5FBF' }}>
          Suprishma/mbart-lora-nepali
        </span>
      </div>

      {/* Summary output */}
      {summary && (
        <div
          style={{
            padding: 28,
            background: '#fff',
            border: '1px solid #F0EDE8',
            borderRadius: 20,
            boxShadow: '0 8px 32px rgba(27,42,74,0.07)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                background: '#22C55E',
                borderRadius: '50%',
              }}
            />
            <span
              className="manrope"
              style={{ fontSize: 13, fontWeight: 700, color: '#1B2A4A', letterSpacing: '0.08em', textTransform: 'uppercase' }}
            >
              Summary
            </span>
          </div>
          <p
            className="manrope"
            style={{
              fontSize: 16,
              color: '#374151',
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            {summary}
          </p>
        </div>
      )}
    </div>
  );
}