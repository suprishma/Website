// filepath: g:\projects\portfolio\app\components\GlobalStyles.tsx
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Manrope:wght@300;400;500;600;700&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { overflow-x: hidden; }

    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: #F8F7F4; }
    ::-webkit-scrollbar-thumb { background: #1B2A4A; border-radius: 2px; }

    @keyframes fadeSlideUp   { from { opacity:0; transform:translateY(32px); } to { opacity:1; transform:translateY(0); } }
    @keyframes fadeSlideDown { from { opacity:0; transform:translateY(-20px); } to { opacity:1; transform:translateY(0); } }
    @keyframes fadeIn        { from { opacity:0; } to { opacity:1; } }
    @keyframes pageIn        { from { opacity:0; transform:translateX(24px); } to { opacity:1; transform:translateX(0); } }
    @keyframes lineGrow      { from { transform:scaleX(0); } to { transform:scaleX(1); } }
    @keyframes float         { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
    @keyframes spin          { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
    @keyframes pulse         { 0%,100%{opacity:.5} 50%{opacity:1} }
    @keyframes marquee       { from{transform:translateX(0)} to{transform:translateX(-50%)} }
    @keyframes shimmer       { 0%{background-position:-400px 0} 100%{background-position:400px 0} }
    @keyframes countUp       { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }

    .syne    { font-family: 'Syne', sans-serif !important; }
    .manrope { font-family: 'Manrope', sans-serif !important; }

    .page-enter { animation: pageIn 0.5s cubic-bezier(0.16,1,0.3,1) forwards; }

    .nav-pill {
      position: relative;
      padding: 8px 20px;
      border-radius: 100px;
      font-size: 13px;
      font-weight: 500;
      letter-spacing: 0.02em;
      cursor: pointer;
      transition: all 0.25s ease;
      font-family: 'Manrope', sans-serif;
      border: none;
      background: transparent;
      color: #6B7280;
    }
    .nav-pill:hover { color: #1B2A4A; }
    .nav-pill.active { background: #1B2A4A; color: #fff; }

    .card-hover {
      transition: transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease;
    }
    .card-hover:hover {
      transform: translateY(-6px);
      box-shadow: 0 24px 64px rgba(27,42,74,0.12);
    }

    .btn-primary {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 14px 32px;
      background: #1B2A4A;
      color: #fff;
      border: none; border-radius: 100px;
      font-family: 'Manrope', sans-serif;
      font-size: 14px; font-weight: 600;
      letter-spacing: 0.02em;
      cursor: pointer;
      transition: all 0.25s;
    }
    .btn-primary:hover { background: #2D4170; transform: translateY(-2px); box-shadow: 0 12px 32px rgba(27,42,74,0.25); }

    .btn-outline {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 14px 32px;
      background: transparent;
      color: #1B2A4A;
      border: 1.5px solid #1B2A4A; border-radius: 100px;
      font-family: 'Manrope', sans-serif;
      font-size: 14px; font-weight: 600;
      letter-spacing: 0.02em;
      cursor: pointer;
      transition: all 0.25s;
    }
    .btn-outline:hover { background: #1B2A4A; color: #fff; transform: translateY(-2px); }

    .btn-ghost-nav {
      display: inline-flex; align-items: center; gap: 6px;
      padding: 10px 20px;
      background: transparent;
      color: #9CA3AF;
      border: 1px solid #E5E7EB; border-radius: 100px;
      font-family: 'Manrope', sans-serif;
      font-size: 13px; font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
    }
    .btn-ghost-nav:hover { border-color: #1B2A4A; color: #1B2A4A; }

    .input-modern {
      width: 100%;
      padding: 14px 18px;
      background: #F8F7F4;
      border: 1.5px solid #E8E6E0;
      border-radius: 12px;
      font-family: 'Manrope', sans-serif;
      font-size: 14px; color: #1B2A4A;
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .input-modern::placeholder { color: #B0ADA5; }
    .input-modern:focus { border-color: #3B5FBF; box-shadow: 0 0 0 3px rgba(59,95,191,0.1); }

    .skill-chip {
      display: inline-flex; align-items: center;
      padding: 8px 18px;
      background: #EEF1F8;
      color: #1B2A4A;
      border-radius: 100px;
      font-family: 'Manrope', sans-serif;
      font-size: 13px; font-weight: 500;
      transition: all 0.2s;
      cursor: default;
    }
    .skill-chip:hover { background: #1B2A4A; color: #fff; }

    .tag-badge {
      display: inline-block;
      padding: 4px 12px;
      background: rgba(59,95,191,0.08);
      color: #3B5FBF;
      border-radius: 100px;
      font-family: 'Manrope', sans-serif;
      font-size: 12px; font-weight: 600;
      letter-spacing: 0.03em;
    }

    .section-label {
      display: inline-flex; align-items: center; gap: 8px;
      font-family: 'Manrope', sans-serif;
      font-size: 12px; font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #3B5FBF;
    }
    .section-label::before {
      content: '';
      display: block; width: 20px; height: 2px;
      background: #3B5FBF;
      border-radius: 2px;
    }

    .underline-anim {
      position: relative;
      display: inline-block;
    }
    .underline-anim::after {
      content: '';
      position: absolute;
      bottom: 4px; left: 0;
      width: 100%; height: 3px;
      background: linear-gradient(90deg, #3B5FBF, #60A5FA);
      border-radius: 2px;
      transform-origin: left;
      animation: lineGrow 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s both;
    }

    .proj-card {
      background: #fff;
      border-radius: 20px;
      overflow: hidden;
      border: 1px solid #F0EDE8;
      transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
    }
    .proj-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 32px 80px rgba(27,42,74,0.13);
      border-color: transparent;
    }

    .exp-item { border-left: 2px solid #E8E6E0; padding-left: 28px; position: relative; }
    .exp-item::before { content:''; position:absolute; left:-5px; top:6px; width:8px; height:8px; background:#3B5FBF; border-radius:50%; }

    .contact-card {
      background: #fff;
      border: 1px solid #F0EDE8;
      border-radius: 20px;
      padding: 28px;
      display: flex; align-items: center; gap: 16px;
      transition: all 0.25s;
      cursor: pointer;
      text-decoration: none;
    }
    .contact-card:hover { border-color: #3B5FBF; box-shadow: 0 12px 40px rgba(59,95,191,0.1); transform: translateY(-3px); }

    .fade-in-up { opacity:0; transform:translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
    .fade-in-up.visible { opacity:1; transform:translateY(0); }

    a { text-decoration: none; color: inherit; }
  `}</style>
);

export default GlobalStyles;