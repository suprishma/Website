'use client';
import { useCallback } from 'react';

interface FooterProps {
  setPage: (page: string) => void;
}

function Footer({ setPage }: FooterProps) {
  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLElement>) => {
    (e.target as HTMLElement).style.color = '#60A5FA';
  }, []);

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLElement>) => {
    (e.target as HTMLElement).style.color = '#6B7280';
  }, []);

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
      <footer style={{ background: '#111827', padding: '56px 48px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{ width: 32, height: 32, background: '#3B5FBF', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="syne" style={{ color: '#fff', fontSize: 12, fontWeight: 800 }}>SM</span>
                </div>
                <span className="syne" style={{ color: '#fff', fontSize: 16, fontWeight: 700 }}>Suprishma Maharjan</span>
              </div>
              <p className="manrope" style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.7 }}>AI & ML Engineer building intelligent systems for underrepresented languages.</p>
            </div>
            <div>
              <div className="manrope" style={{ fontSize: 12, fontWeight: 700, color: '#374151', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Navigation</div>
              {['Home','About','Projects','Contact'].map(p => (
                <div key={p} style={{ marginBottom: 10 }}>
                  <button 
                    onClick={() => setPage(p)} 
                    aria-label={`Navigate to ${p} page`}
                    className="manrope" 
                    style={{ background:'none', border:'none', color:'#6B7280', fontSize:14, cursor:'pointer', fontFamily:'Manrope,sans-serif', padding:0, transition:'color 0.2s' }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {p}
                  </button>
                </div>
              ))}
            </div>
            <div>
              <div className="manrope" style={{ fontSize: 12, fontWeight: 700, color: '#374151', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Connect</div>
              {[['GitHub','https://github.com/suprishma'],['LinkedIn','https://www.linkedin.com/in/suprishma-maharjan-7ba49336a/'],['Email','mailto:suprishmamaharjan@gmail.com']].map(([l,h]) => (
                <div key={l} style={{ marginBottom: 10 }}>
                  <a 
                    href={h} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={`Visit our ${l}`}
                    className="manrope" 
                    style={{ color:'#6B7280', fontSize:14, transition:'color 0.2s' }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {l} ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div style={{ borderTop: '1px solid #1F2937', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column', gap: 16 }}>
            <span className="manrope" style={{ fontSize: 13, color: '#374151' }}>© 2026 Suprishma Maharjan — All rights reserved.</span>
            <span className="manrope" style={{ fontSize: 13, color: '#374151' }}>Built with ❤️ in Kathmandu</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;