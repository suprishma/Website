// filepath: g:\projects\portfolio\app\components\Nav.tsx
'use client';
import { useState, useEffect } from 'react';

interface NavProps {
  page: string;
  setPage: (page: string) => void;
}

function Nav({ page, setPage }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const pages = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(248,247,244,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(232,230,224,0.8)' : 'none',
      transition: 'all 0.35s ease',
      padding: '0 48px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <button onClick={() => setPage('Home')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 36, height: 36, background: '#1B2A4A', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="syne" style={{ color: '#fff', fontSize: 14, fontWeight: 800, letterSpacing: '-0.02em' }}>SM</span>
          </div>
          <span className="syne" style={{ fontSize: 15, fontWeight: 700, color: '#1B2A4A', letterSpacing: '-0.01em' }}>Suprishma</span>
        </button>

        {/* Pills */}
        <div style={{ display: 'flex', gap: 4, background: scrolled ? '#F0EDE8' : 'rgba(240,237,232,0.7)', borderRadius: 100, padding: '4px' }}>
          {pages.map(p => (
            <button key={p} className={`nav-pill ${page === p ? 'active' : ''}`} onClick={() => setPage(p)}>{p}</button>
          ))}
        </div>

        {/* CTA */}
        <button className="btn-ghost-nav" onClick={() => setPage('Contact')}>
          Hire Me <span style={{ fontSize: 16 }}>→</span>
        </button>
      </div>
    </nav>
  );
}

export default Nav;