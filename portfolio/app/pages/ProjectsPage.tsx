'use client';
import { useCallback } from 'react';
import useScrollReveal from '../components/hooks/useScrollRevel';

interface ProjectsPageProps {
  setPage?: (page: string) => void;
}

function ProjectsPage({ setPage }: ProjectsPageProps) {
  useScrollReveal();

  const projects = [
    {
      id: 1,
      num: '01',
      title: 'Nepali Text Summarizer',
      type: 'NLP',
      color: '#3B5FBF',
      bg: '#EEF1F8',
      desc: 'Abstractive summarization using fine-tuned mT5 & mBART models on custom Nepali corpora.',
      tech: ['Python', 'PyTorch', 'HuggingFace', 'Transformers'],
      link: '#',
      status: 'Completed',
    },
    {
      id: 2,
      num: '02',
      title: 'Nepali Speech Recognition',
      type: 'ASR',
      color: '#059669',
      bg: '#ECFDF5',
      desc: 'End-to-end automatic speech recognition using Wav2Vec 2.0 fine-tuned for Nepali language.',
      tech: ['Python', 'PyTorch', 'Wav2Vec', 'Librosa'],
      link: '#',
      status: 'In Progress',
    },
  ];

  const handleNavigate = useCallback(() => {
    if (setPage) setPage('Contact');
  }, [setPage]);

  return (
    <div style={{ background: '#F8F7F4', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ padding: '120px 48px 80px', background: 'linear-gradient(135deg, #F8F7F4 0%, #EEF1F8 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '10%', right: '-10%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(59,95,191,0.1) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <div className="section-label fade-in-up" style={{ marginBottom: 16 }}>My Work</div>
          <h1 className="syne fade-in-up" style={{ fontSize: 'clamp(36px,5vw,56px)', fontWeight: 800, color: '#1B2A4A', marginBottom: 24, letterSpacing: '-0.02em' }}>
            Featured Projects & Work
          </h1>
          <p className="manrope fade-in-up" style={{ fontSize: 18, color: '#6B7280', lineHeight: 1.8, maxWidth: 700 }}>
            A collection of AI, ML, and full-stack projects showcasing my expertise in NLP, speech recognition, and software development.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ padding: '100px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 28 }}>
            {projects.map((proj, i) => (
              <div
                key={proj.id}
                className="proj-card fade-in-up"
                style={{ animationDelay: `${i * 0.1}s`, cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ height: 200, background: proj.bg, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px', position: 'relative', overflow: 'hidden' }}>
                  <span className="syne" style={{ fontSize: 88, fontWeight: 800, color: proj.color, opacity: 0.1, lineHeight: 1 }}>
                    {proj.num}
                  </span>
                  <div style={{ display: 'flex', gap: 8, flexDirection: 'column', alignItems: 'flex-end' }}>
                    <span className="tag-badge" style={{ background: `${proj.color}18`, color: proj.color }}>
                      {proj.type}
                    </span>
                    <span className="tag-badge" style={{ background: proj.status === 'Completed' ? '#ecfdf518' : '#fef3c718', color: proj.status === 'Completed' ? '#059669' : '#D97706', fontSize: 11 }}>
                      {proj.status}
                    </span>
                  </div>
                </div>

                <div style={{ padding: '28px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 className="syne" style={{ fontSize: 18, fontWeight: 700, color: '#1B2A4A', marginBottom: 12, letterSpacing: '-0.01em' }}>
                    {proj.title}
                  </h3>
                  <p className="manrope" style={{ fontSize: 14, color: '#9CA3AF', lineHeight: 1.7, marginBottom: 20, flexGrow: 1 }}>
                    {proj.desc}
                  </p>

                  {/* Tech Stack */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                    {proj.tech.map(tech => (
                      <span
                        key={tech}
                        className="skill-chip"
                        style={{ fontSize: 12, padding: '6px 12px', background: '#F3F4F6', color: '#6B7280' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {proj.id === 1 && (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setPage && setPage('Summarizer');
                      }}
                      className="manrope"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        color: proj.color,
                        fontWeight: 600,
                        fontSize: 13,
                        transition: 'all 0.2s',
                      }}
                    >
                      View Project →
                    </a>
                  )}

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default ProjectsPage;