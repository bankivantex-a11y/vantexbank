'use client';

import Image from 'next/image';
import Reveal from './Reveal';
import { useAppState } from './AppState';
import { fmt } from '@/lib/loan';

export default function Conditions() {
  const { t, locale } = useAppState();

  const items = [
    { strong: t('cond.item1_strong'), text: t('cond.item1_text') },
    { strong: t('cond.item2_strong'), text: t('cond.item2_text') },
    { strong: t('cond.item3_strong'), text: t('cond.item3_text') },
    { strong: t('cond.item4_strong'), text: t('cond.item4_text') },
    { strong: t('cond.item5_strong'), text: t('cond.item5_text') },
  ];

  return (
    <section id="conditions" className="section">
      <div className="container">
        <div className="cond-inner">
          <Reveal>
            <div className="sec-label" style={{ color: 'rgba(255,255,255,.55)' }}>
              {t('cond.label')}
            </div>
            <h2 className="cond-title">{t('cond.title')}</h2>
            <p className="cond-desc">
              {t('cond.desc')}
            </p>
            <ul className="cond-list">
              {items.map((item, index) => (
                <li className="cond-item" key={index}>
                  <div className="cond-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="cond-text">
                    <strong>{item.strong}</strong> {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="right" delay={2} className="cond-image">
            <div className="cond-img-wrap">
              <Image
                src="https://images.unsplash.com/photo-1758518727592-706e80ebc354?w=600&h=500&fit=crop&crop=top&auto=format"
                alt="Vantex Bank Advisor"
                width={600}
                height={500}
                loading="lazy"
              />
            </div>
            <div className="cond-stat-pop">
              <div className="cond-stat-ttl">{t('cond.stat_docs')}</div>
              <div className="cond-stat-val">{fmt(50000, locale).replace('€', '').trim()}+</div>
              <div className="cond-stat-sub">{t('cond.stat_satisfaction')}</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
