// filepath: g:\projects\portfolio\app\pages\HomePage.tsx
'use client';
import { useState } from 'react';
import useScrollReveal from '../components/hooks/useScrollRevel';

interface HomePageProps {
  setPage: (page: string) => void;
}

function HomePage({ setPage }: HomePageProps) {
  useScrollReveal();


  return (
    <div style={{ background: '#F8F7F4', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '100px 48px 80px', position: 'relative', overflow: 'hidden' }}>
        {/* BG decoration */}
        <div style={{ position: 'absolute', top: '8%', right: '-5%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(59,95,191,0.07) 0%, transparent 70%)', borderRadius: '50%', animation: 'float 8s ease-in-out infinite', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '-8%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(27,42,74,0.05) 0%, transparent 70%)', borderRadius: '50%', animation: 'float 10s ease-in-out infinite 2s', pointerEvents: 'none' }} />

        {/* Grid pattern */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, #D4CFC6 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.5, pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', position: 'relative' }}>
          <div>
            <div className="section-label" style={{ marginBottom: 24, animation: 'fadeSlideDown 0.6s ease 0.1s both' }}>
              AI & Machine Learning 
            </div>

            <h1 className="syne" style={{ fontSize: 'clamp(48px,6vw,76px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#1B2A4A', marginBottom: 24, animation: 'fadeSlideUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s both' }}>
              Building AI for<br />
              <span className="underline-anim" style={{ color: '#3B5FBF' }}>underrepresented</span>
              <br />languages.
            </h1>

            <p className="manrope" style={{ fontSize: 17, color: '#6B7280', lineHeight: 1.8, maxWidth: 440, marginBottom: 40, animation: 'fadeSlideUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.35s both' }}>
              4th-year Computer Engineering student passionate about Nepali NLP, speech recognition, and real-world AI systems.
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', animation: 'fadeSlideUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.45s both' }}>
              <button className="btn-primary" onClick={() => setPage('Projects')}>
                View Projects <span>→</span>
              </button>
              <button className="btn-outline" onClick={() => setPage('About')}>
                About Me
              </button>
            </div>

          </div>

          {/* Right card */}
          <div style={{ animation: 'fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s both' }}>
            <div style={{ background: '#fff', borderRadius: 28, padding: 40, border: '1px solid #F0EDE8', boxShadow: '0 40px 120px rgba(27,42,74,0.1)' }}>
              {/* Avatar placeholder */}
              <div style={{ width: 80, height: 80, background: 'linear-gradient(135deg, #1B2A4A 0%, #3B5FBF 100%)', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                <span className="syne" style={{ color: '#fff', fontSize: 28, fontWeight: 800 }}>SM</span>
              </div>
              <h2 className="syne" style={{ fontSize: 22, fontWeight: 700, color: '#1B2A4A', marginBottom: 4 }}>Suprishma Maharjan</h2>
              <p className="manrope" style={{ fontSize: 14, color: '#9CA3AF', marginBottom: 28 }}>Kathmandu, Nepal </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { icon: '🎓', label: 'Tribhuvan University', sub: 'B.E. Computer Engineering' },
                  { icon: '🧠', label: 'Specialization', sub: 'NLP · Speech Recognition · ML' },
                  { icon: '💻', label: 'Primary Stack', sub: 'Python · PyTorch · HuggingFace' },
                  { icon: '🌏', label: 'Focus Area', sub: 'Nepali Language AI' },
                ].map(({ icon, label, sub }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 16px', background: '#F8F7F4', borderRadius: 12 }}>
                    <span style={{ fontSize: 20 }}>{icon}</span>
                    <div>
                      <div className="manrope" style={{ fontSize: 13, fontWeight: 600, color: '#1B2A4A' }}>{label}</div>
                      <div className="manrope" style={{ fontSize: 12, color: '#9CA3AF' }}>{sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 28, padding: '16px', background: 'linear-gradient(135deg, #EEF1F8, #E8EDF8)', borderRadius: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 8, height: 8, background: '#22C55E', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
                <span className="manrope" style={{ fontSize: 13, fontWeight: 500, color: '#1B2A4A' }}>Available for internships & collaborations</span>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default HomePage;