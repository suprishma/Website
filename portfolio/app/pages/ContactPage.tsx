'use client';
import { useState, useCallback } from 'react';
import useScrollReveal from '../components/hooks/useScrollRevel';

interface ContactPageProps {
  setPage?: (page: string) => void;
}

function ContactPage({ setPage }: ContactPageProps) {
  useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('https://formspree.io/f/xbdzlgkp', { // 👈 Replace YOUR_FORM_ID
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError('Something went wrong. Please try again or email me directly.');
      }
    } catch (err) {
      setError('Network error. Please try again or email me directly.');
    } finally {
      setLoading(false);
    }
  }, [formData]);

  const contactMethods = [
    { icon: '📧', label: 'Email', value: 'suprishmamaharjan@gmail.com', link: 'mailto:suprishmamaharjan@gmail.com' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/suprishma-maharjan', link: 'https://www.linkedin.com/in/suprishma-maharjan-7ba49336a/' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/suprishma', link: 'https://github.com/suprishma' },
    { icon: '📍', label: 'Location', value: 'Kathmandu, Nepal', link: '#' },
  ];

  return (
    <div style={{ background: '#F8F7F4', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ padding: '120px 48px 80px', background: 'linear-gradient(135deg, #F8F7F4 0%, #EEF1F8 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '10%', right: '-10%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(59,95,191,0.1) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <div className="section-label fade-in-up" style={{ marginBottom: 16 }}>Get In Touch</div>
          <h1 className="syne fade-in-up" style={{ fontSize: 'clamp(36px,5vw,56px)', fontWeight: 800, color: '#1B2A4A', marginBottom: 24, letterSpacing: '-0.02em' }}>
            Let's Connect
          </h1>
          <p className="manrope fade-in-up" style={{ fontSize: 18, color: '#6B7280', lineHeight: 1.8, maxWidth: 700 }}>
            Whether you have a project idea, collaboration opportunity, or just want to chat about AI and technology, I'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section style={{ padding: '100px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 className="syne fade-in-up" style={{ fontSize: 'clamp(28px,4vw,40px)', fontWeight: 800, color: '#1B2A4A', marginBottom: 56, letterSpacing: '-0.02em' }}>
            Contact Methods
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {contactMethods.map((method, i) => (
              <a
                key={method.label}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="contact-card fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div style={{ fontSize: 32 }}>{method.icon}</div>
                <div>
                  <div className="manrope" style={{ fontSize: 14, fontWeight: 600, color: '#1B2A4A', marginBottom: 4 }}>
                    {method.label}
                  </div>
                  <div className="manrope" style={{ fontSize: 13, color: '#6B7280' }}>
                    {method.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section style={{ padding: '100px 48px', background: '#fff' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 className="syne fade-in-up" style={{ fontSize: 'clamp(28px,4vw,40px)', fontWeight: 800, color: '#1B2A4A', marginBottom: 16, letterSpacing: '-0.02em' }}>
            Send Me a Message
          </h2>
          <p className="manrope fade-in-up" style={{ fontSize: 16, color: '#6B7280', marginBottom: 48, lineHeight: 1.7 }}>
            Fill out the form below and I'll get back to you as soon as possible.
          </p>

          {submitted && (
            <div className="fade-in-up" style={{ padding: 20, background: '#ECFDF5', border: '1px solid #10B981', borderRadius: 12, marginBottom: 32 }}>
              <div className="manrope" style={{ color: '#059669', fontWeight: 600 }}>
                ✓ Thank you! Your message has been sent successfully. I'll get back to you soon!
              </div>
            </div>
          )}

          {error && (
            <div className="fade-in-up" style={{ padding: 20, background: '#FEF2F2', border: '1px solid #EF4444', borderRadius: 12, marginBottom: 32 }}>
              <div className="manrope" style={{ color: '#DC2626', fontWeight: 600 }}>
                ✗ {error}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
              <label className="manrope" style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#1B2A4A', marginBottom: 8 }}>
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Suprishma"
                className="input-modern"
                required
                aria-label="Your name"
              />
            </div>

            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <label className="manrope" style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#1B2A4A', marginBottom: 8 }}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="input-modern"
                required
                aria-label="Your email"
              />
            </div>

            <div className="fade-in-up" style={{ animationDelay: '0.3s' }}>
              <label className="manrope" style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#1B2A4A', marginBottom: 8 }}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or idea..."
                className="input-modern"
                rows={6}
                required
                aria-label="Your message"
                style={{ fontFamily: 'Manrope, sans-serif', resize: 'vertical' }}
              />
            </div>

            <button
              type="submit"
              className="btn-primary fade-in-up"
              style={{ animationDelay: '0.4s', alignSelf: 'flex-start', opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
              disabled={submitted || loading}
            >
              {loading ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '100px 48px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 className="syne fade-in-up" style={{ fontSize: 'clamp(28px,4vw,40px)', fontWeight: 800, color: '#1B2A4A', marginBottom: 56, letterSpacing: '-0.02em' }}>
            Frequently Asked Questions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { q: 'What is your availability?', a: 'I am currently available for internships, freelance projects, and collaborations. Feel free to reach out!' },
              { q: 'What is your tech stack?', a: 'I primarily work with Python, PyTorch, HuggingFace, and modern web technologies. I also have experience with C# and SQL Server.' },
              { q: 'Do you work with startups?', a: 'Yes! I am passionate about working with startups on AI and ML projects, especially those focused on NLP and speech recognition.' },
              { q: 'How can we collaborate?', a: 'Whether you have a full-time role, freelance project, or research collaboration in mind, let\'s discuss and see how we can work together!' },
            ].map((faq, i) => (
              <details key={faq.q} className="fade-in-up" style={{ animationDelay: `${i * 0.1}s`, padding: '20px', background: '#F8F7F4', borderRadius: 12, border: '1px solid #F0EDE8', cursor: 'pointer' }}>
                <summary className="manrope" style={{ fontWeight: 600, color: '#1B2A4A', fontSize: 15, outline: 'none' }}>
                  {faq.q}
                </summary>
                <p className="manrope" style={{ color: '#6B7280', marginTop: 12, lineHeight: 1.7, fontSize: 14 }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
