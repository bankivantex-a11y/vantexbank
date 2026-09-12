'use client';

import Reveal from './Reveal';
import { useAppState } from './AppState';

const starPath = 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z';

export default function Trust() {
  const { t } = useAppState();

  return (
    <section id="trust">
      <div className="container">
        <div className="trust-inner">
          <Reveal className="trust-left">
            <div className="tp-logo">★ Trustpilot</div>
            <div className="tp-stars">
              {[0, 1, 2, 3, 4].map((i) => (
                <div className="tp-star" key={i}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d={starPath} />
                  </svg>
                </div>
              ))}
            </div>
            <div>
              <div className="tp-score">4,8 / 5</div>
              <div className="tp-sub">{t('trust.tp_sub')}</div>
            </div>
          </Reveal>
          <Reveal delay={2} className="trust-badges">
            <div className="trust-badge">
              <div className="tb-icon tb-blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <div className="tb-title">{t('trust.data_title')}</div>
                <div className="tb-sub">{t('trust.data_sub')}</div>
              </div>
            </div>
            <div className="trust-badge">
              <div className="tb-icon tb-green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <polyline points="9 11 12 14 22 4" />
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                </svg>
              </div>
              <div>
                <div className="tb-title">{t('trust.agree_title')}</div>
                <div className="tb-sub">{t('trust.agree_sub')}</div>
              </div>
            </div>
            <div className="trust-badge">
              <div className="tb-icon tb-gold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <div>
                <div className="tb-title">{t('trust.fees_title')}</div>
                <div className="tb-sub">{t('trust.fees_sub')}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
