'use client';

import Image from 'next/image';
import Reveal from './Reveal';
import { useAppState } from './AppState';

export default function Testimonials() {
  const { t } = useAppState();

  const testimonials = [
    {
      stars: '★★★★★',
      amount: `${t('testimonials.loan_obtained')} 25 000 €`,
      text: t('testimonials.t1_text'),
      avatar: 'https://i.pravatar.cc/80?img=47',
      name: 'Sophie L.',
      meta: t('testimonials.t1_meta'),
    },
    {
      stars: '★★★★★',
      amount: `${t('testimonials.loan_obtained')} 12 000 €`,
      text: t('testimonials.t2_text'),
      avatar: 'https://i.pravatar.cc/80?img=12',
      name: 'Karim M.',
      meta: t('testimonials.t2_meta'),
    },
    {
      stars: '★★★★★',
      amount: `${t('testimonials.loan_obtained')} 50 000 €`,
      text: t('testimonials.t3_text'),
      avatar: 'https://i.pravatar.cc/80?img=33',
      name: 'David T.',
      meta: t('testimonials.t3_meta'),
    },
    {
      stars: '★★★★★',
      amount: `${t('testimonials.loan_obtained')} 8 000 €`,
      text: t('testimonials.t4_text'),
      avatar: 'https://i.pravatar.cc/80?img=5',
      name: 'Aïcha B.',
      meta: t('testimonials.t4_meta'),
    },
    {
      stars: '★★★★★',
      amount: `${t('testimonials.loan_obtained')} 30 000 €`,
      text: t('testimonials.t5_text'),
      avatar: 'https://i.pravatar.cc/80?img=25',
      name: 'Mei L.',
      meta: t('testimonials.t5_meta'),
    },
    {
      stars: '★★★★☆',
      amount: `${t('testimonials.loan_obtained')} 18 000 €`,
      text: t('testimonials.t6_text'),
      avatar: 'https://i.pravatar.cc/80?img=68',
      name: 'Robert P.',
      meta: t('testimonials.t6_meta'),
    },
  ];

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="sec-header center">
          <Reveal className="sec-label">{t('testimonials.sec_label')}</Reveal>
          <Reveal delay={1}>
            <h2 className="sec-title">{t('testimonials.sec_title')}</h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="sec-desc">
              {t('testimonials.sec_desc')}
            </p>
          </Reveal>
        </div>
        <div className="testi-grid">
          {testimonials.map((testi, i) => (
            <Reveal key={testi.name} delay={(i % 3) + 1} className="testi-card">
              <div className="testi-verified">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>{' '}
                {t('testimonials.verified')}
              </div>
              <div className="testi-stars">{testi.stars}</div>
              <div className="testi-amount">{testi.amount}</div>
              <p className="testi-text">&quot;{testi.text}&quot;</p>
              <div className="testi-foot">
                <Image className="testi-avatar" src={testi.avatar} alt={testi.name} width={44} height={44} loading="lazy" />
                <div>
                  <div className="testi-name">{testi.name}</div>
                  <div className="testi-meta">{testi.meta}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
