'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import { useAppState } from './AppState';

export default function HomeFAQ() {
  const { t } = useAppState();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: t('home.faq.q1'), a: t('home.faq.a1') },
    { q: t('home.faq.q2'), a: t('home.faq.a2') },
    { q: t('home.faq.q3'), a: t('home.faq.a3') },
    { q: t('home.faq.q4'), a: t('home.faq.a4') },
  ];

  return (
    <section className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div className="sec-header center">
          <Reveal>
            <h2 className="sec-title">{t('home.faq_title')}</h2>
          </Reveal>
        </div>

        <div className="home-faq-list">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i} className={`faq-item ${openIndex === i ? 'active' : ''}`}>
              <div className="faq-q" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                <span>{faq.q}</span>
                <div className="faq-icon">
                  {openIndex === i ? '-' : '+'}
                </div>
              </div>
              {openIndex === i && (
                <div className="faq-a">
                  <p>{faq.a}</p>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
