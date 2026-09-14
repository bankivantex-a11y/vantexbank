'use client';

import Reveal from '@/components/Reveal';
import { useAppState } from '@/components/AppState';
import SmartLink from '@/components/SmartLink';

export default function HelpCenterPage() {
  const { t } = useAppState();

  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') }
  ];

  return (
    <div>
      <section className="section" style={{ paddingTop: 90 }}>
        <div className="container">
          <Reveal>
            <div className="sec-label">{t('faq.label')}</div>
            <h1 className="sec-title">{t('faq.title')}</h1>
            <p className="sec-desc">
              {t('faq.desc')}
            </p>
          </Reveal>

          <div style={{ marginTop: 60, display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 800 }}>
            {faqs.map((faq, index) => (
              <Reveal key={index} delay={(index % 4) + 1}>
                <div style={{
                  padding: 24,
                  background: 'var(--bg)',
                  borderRadius: 16,
                  border: '1px solid var(--border)'
                }}>
                  <h3 style={{
                    fontFamily: 'var(--font-dm-serif)',
                    fontSize: 20,
                    color: 'var(--navy)',
                    marginBottom: 12
                  }}>
                    {faq.q}
                  </h3>
                  <p style={{
                    color: 'var(--muted)',
                    lineHeight: 1.6,
                    fontSize: 15
                  }}>
                    {faq.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div style={{ marginTop: 80, textAlign: 'left' }}>
            <Reveal>
              <h2 className="sec-title" style={{ fontSize: 28 }}>{t('faq.cta_title')}</h2>
              <p className="sec-desc">
                {t('faq.cta_desc')}
              </p>
              <SmartLink href="/contact" className="btn-primary" style={{ display: 'inline-block', marginTop: 24 }}>
                {t('faq.cta_btn')}
              </SmartLink>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
