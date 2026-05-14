'use client';
import { useCallback } from 'react';
import useScrollReveal from '../components/hooks/useScrollRevel';

interface AboutPageProps {
  setPage?: (page: string) => void;
}

function AboutPage({ setPage }: AboutPageProps) {
  useScrollReveal();


  const stats = [
    { val: '2+', label: 'AI Projects', icon: '🤖' },
    { val: '5+', label: 'Years Coding ', icon: '🖥️' },
    { val: '4th', label: 'Year Engineer', icon: '🧑‍🎓' },
    { val: '2026', label: 'Graduating', icon: '🎓' },
  ];

  const education = [
    { year: '2022-2026', degree: 'B.E. Computer Engineering', school: 'Tribhuvan University', details: 'Focus: AI/ML & NLP' },
    { year: '2020-2022', degree: '+2 Science', school: 'National School', details: 'Specialized in Mathematics & Physics' },
  ];

  const learnings = [
    'Deep Learning Specialization (Coursera)',
    'NLP with Transformers (HuggingFace)',
    'Advanced Python for Data Science',
    'Cloud Computing with AWS',
  ];

  const skills = ['Python', 'PyTorch', 'HuggingFace', 'NLP', 'ASR', 'C++', 'SQL', 'scikit-learn'];


  const handleNavigate = useCallback(() => {
    if (setPage) setPage('Contact');
  }, [setPage]);

  return (
    <div style={{ background: '#F8F7F4', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ padding: '120px 48px 80px', background: 'linear-gradient(135deg, #F8F7F4 0%, #EEF1F8 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '10%', right: '-10%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(59,95,191,0.1) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <div className="section-label fade-in-up" style={{ marginBottom: 16 }}>About Me</div>
          <h1 className="syne fade-in-up" style={{ fontSize: 'clamp(36px,5vw,56px)', fontWeight: 800, color: '#1B2A4A', marginBottom: 24, letterSpacing: '-0.02em' }}>
            Passionate about AI for Language
          </h1>
          <p className="manrope fade-in-up" style={{ fontSize: 18, color: '#6B7280', lineHeight: 1.8, maxWidth: 700, marginBottom: 40 }}>
            I'm a computer engineering student dedicated to building AI solutions for underrepresented languages, particularly Nepali. My journey combines academic excellence with practical industry experience.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24, marginTop: 48 }}>
            {stats.map((stat, i) => (
              <div key={stat.label} className="fade-in-up" style={{ background: '#fff', padding: '24px', borderRadius: 16, border: '1px solid #F0EDE8', textAlign: 'center', animationDelay: `${i * 0.1}s` }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>{stat.icon}</div>
                <div className="syne" style={{ fontSize: 28, fontWeight: 700, color: '#1B2A4A' }}>{stat.val}</div>
                <div className="manrope" style={{ fontSize: 13, color: '#9CA3AF', marginTop: 8 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Education Section */}
      <section style={{ padding: '100px 48px', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="section-label fade-in-up" style={{ marginBottom: 16 }}>Academic Background</div>
          <h2 className="syne fade-in-up" style={{ fontSize: 'clamp(32px,4vw,48px)', fontWeight: 800, color: '#1B2A4A', marginBottom: 56, letterSpacing: '-0.02em' }}>
            Education
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 28 }}>
            {education.map((edu, i) => (
              <div key={edu.degree} className="fade-in-up" style={{ padding: '28px 24px', background: '#F8F7F4', borderRadius: 16, border: '1px solid #F0EDE8', animationDelay: `${i * 0.1}s` }}>
                <div className="manrope" style={{ fontSize: 12, fontWeight: 700, color: '#3B5FBF', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>
                  {edu.year}
                </div>
                <h3 className="syne" style={{ fontSize: 18, fontWeight: 700, color: '#1B2A4A', marginBottom: 4 }}>
                  {edu.degree}
                </h3>
                <p className="manrope" style={{ fontSize: 14, color: '#9CA3AF', marginBottom: 8 }}>
                  {edu.school}
                </p>
                <p className="manrope" style={{ fontSize: 13, color: '#6B7280' }}>
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section style={{ padding: '100px 48px', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="section-label fade-in-up" style={{ marginBottom: 16 }}>Technical Background</div>
          <h2 className="syne fade-in-up" style={{ fontSize: 'clamp(32px,4vw,48px)', fontWeight: 800, color: '#1B2A4A', marginBottom: 56, letterSpacing: '-0.02em' }}>
            Learnings
          </h2>

          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24, padding: 0, listStyle: 'none' }}>
            {learnings.map((item, i) => (
              <li key={item} className="fade-in-up" style={{ padding: '24px', background: '#fff', borderRadius: 16, border: '1px solid #F0EDE8', animationDelay: `${i * 0.08}s` }}>
                <span className="manrope" style={{ fontSize: 14, fontWeight: 600, color: '#1B2A4A' }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section style={{ padding: '100px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="section-label fade-in-up" style={{ marginBottom: 16 }}>Credentials</div>
          <h2 className="syne fade-in-up" style={{ fontSize: 'clamp(32px,4vw,48px)', fontWeight: 800, color: '#1B2A4A', marginBottom: 56, letterSpacing: '-0.02em' }}>
            Skills
          </h2>
          <div style={{ display: 'flex', overflowX: 'auto', gap: 16, paddingBottom: 8 }}>
            {skills.map((skill, i) => (
              <div key={skill} className="fade-in-up skill-chip" style={{ animationDelay: `${i * 0.08}s` }}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

          </div>
  );
}

export default AboutPage;