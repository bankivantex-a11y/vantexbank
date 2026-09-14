'use client';

import Reveal from '@/components/Reveal';
import { useState } from 'react';
import { useAppState } from '@/components/AppState';

export default function ContactPage() {
  const { t } = useAppState();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch('https://formspree.io/f/mqpkvoze', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <section className="section" style={{ paddingTop: 90 }}>
        <div className="container">
          <div className="sim-inner">
            <Reveal>
              <div className="sec-label">{t('contact_page.label')}</div>
              <h1 className="sec-title">{t('contact_page.title')}</h1>
              <p className="sec-desc">
                {t('contact_page.desc')}
              </p>

              <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <div className="step-ico-wrap" style={{ width: 50, height: 50, margin: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--navy)' }}>{t('contact_page.phone')}</div>
                    <div style={{ color: 'var(--muted)' }}>
                      <a href={`tel:${t('common.phone_val').replace(/\s+/g, '')}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {t('common.phone_val')}
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <div className="step-ico-wrap" style={{ width: 50, height: 50, margin: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--navy)' }}>{t('contact_page.email')}</div>
                    <div style={{ color: 'var(--muted)' }}>
                      <a href="mailto:contact@vantexbank.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                        contact@vantexbank.com
                      </a>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <div className="step-ico-wrap" style={{ width: 50, height: 50, margin: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--navy)' }}>{t('contact_page.office')}</div>
                    <div style={{ color: 'var(--muted)' }}>{t('legal.mentions_s2_text3')}</div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={2}>
              <div className="sim-card">
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>
                     <div className="success-ico" style={{ width: 60, height: 60, marginBottom: 20 }}>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={3}><polyline points="20 6 9 17 4 12"/></svg>
                     </div>
                     <h3 className="sim-card-title">{t('contact_page.success_title')}</h3>
                     <p className="sim-card-sub">{t('contact_page.success_sub')}</p>
                     <button className="btn-sim" onClick={() => setSubmitted(false)}>{t('contact_page.resend_btn')}</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="sim-card-title">{t('contact_page.form_title')}</h3>
                    <p className="sim-card-sub">{t('contact_page.form_sub')}</p>
                    <div className="form-group">
                      <label className="form-label">{t('contact_page.name_label')}</label>
                      <div className="form-row">
                        <input type="text" name="firstname" className="form-input" placeholder={t('contact_page.firstname_placeholder')} required />
                        <input type="text" name="lastname" className="form-input" placeholder={t('contact_page.lastname_placeholder')} required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">{t('contact_page.email_label')}</label>
                      <input type="email" name="email" className="form-input" placeholder={t('contact_page.email_placeholder')} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">{t('contact_page.message_label')}</label>
                      <textarea name="message" className="form-input" style={{ minHeight: 120, resize: 'vertical' }} placeholder={t('contact_page.message_placeholder')} required></textarea>
                    </div>
                    <button type="submit" className="btn-sim">{t('contact_page.send_btn')}</button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Bouton Flottant WhatsApp en bas à droite */}
      <a
        href={`https://wa.me/${t('common.phone_val').replace(/[^0-9]/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          backgroundColor: '#25D366',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
          zIndex: 9999,
          transition: 'transform 0.3s ease, background-color 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        title="Discuter sur WhatsApp"
      >
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      </a>
    </div>
  );
}
