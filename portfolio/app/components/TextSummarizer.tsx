'use client';

import { useState } from 'react';

export default function TextSummarizer() {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Check if text contains Nepali characters
  const isNepaliText = (text: string): boolean => {
    const nepaliRegex = /[\u0900-\u097F]/;
    return nepaliRegex.test(text);
  };

  // Validate input
  const validateInput = (): string => {
    const trimmedText = inputText.trim();
    
    if (!trimmedText) {
      return 'Please enter some text';
    }
    
    if (trimmedText.length < 50) {
      return 'Text too short. Minimum 50 characters required';
    }
    
    if (!isNepaliText(trimmedText)) {
      return 'Please enter Nepali text only';
    }
    
    return '';
  };

  const handleSummarize = async () => {
    const validationError = validateInput();
    
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      });

      const data = await response.json();

      if (response.ok) {
        setSummary(data.summary);
        setError('');
      } else {
        setError(`Error: ${data.error}`);
        setSummary('');
      }
    } catch (error) {
      setError('Error: Failed to summarize text');
      setSummary('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Text Summarizer</h2>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter Nepali text to summarize (minimum 50 characters)..."
        className="w-full h-32 p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
        <span>Characters: {inputText.length}</span>
        {inputText.length > 0 && inputText.length < 50 && (
          <span className="text-red-500">Too short length</span>
        )}
      </div>
      {error && (
        <div className="mt-3 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
          {error}
        </div>
      )}
      <button
        onClick={handleSummarize}
        disabled={loading || !inputText.trim()}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {loading ? 'Summarizing...' : 'Summarize'}
      </button>
      {summary && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Summary:</h3>
          <p className="text-gray-700 leading-relaxed">{summary}</p>
        </div>
      )}
    </div>
  );
}