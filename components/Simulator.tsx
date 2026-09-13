'use client';

import { useMemo } from 'react';
import Reveal from './Reveal';
import { useAppState } from './AppState';
import { DURATION_OPTIONS, fmt } from '@/lib/loan';

export default function Simulator() {
  const { amount, setAmount, months, setMonths, loan, openModal, t, locale } = useAppState();

  const rangePct = ((amount - 1000) / 799000) * 100;

  const firstPaymentLabel = useMemo(() => {
    const fp = new Date();
    fp.setMonth(fp.getMonth() + 1);
    return fp.toLocaleDateString(locale === 'EN' ? 'en-US' : 'fr-FR', { month: 'short', year: 'numeric' });
  }, [locale]);

  return (
    <section id="simulator" className="section">
      <div className="container">
        <div className="sim-inner">
          {/* Controls */}
          <Reveal>
            <div className="sec-label">{t('nav.sim')}</div>
            <h2 className="sec-title" style={{ marginBottom: 8 }}>
              {t('sim.title')}
            </h2>
            <p className="sec-desc" style={{ marginBottom: 36 }}>
              {t('sim.desc')}
            </p>
            <div className="sim-card">
              <div className="sim-card-title">{t('sim.card_title')}</div>
              <div className="sim-card-sub">{t('sim.card_sub')}</div>
              {/* Range */}
              <div className="range-group">
                <div className="range-top">
                  <span className="range-lbl">{t('sim.amount_label')}</span>
                  <span className="range-val">{fmt(amount, locale)}</span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={800000}
                  step={500}
                  value={amount}
                  onChange={(e) => setAmount(+e.target.value)}
                  style={{
                    background: `linear-gradient(90deg, var(--blue) ${rangePct}%, var(--border) ${rangePct}%)`,
                  }}
                />
                <div className="range-minmax">
                  <span>{fmt(1000, locale)}</span>
                  <span>{fmt(800000, locale)}</span>
                </div>
              </div>
              {/* Duration */}
              <div className="dur-lbl">{t('sim.duration_label')}</div>
              <div className="dur-pills">
                {DURATION_OPTIONS.map((opt) => (
                  <button
                    key={opt.months}
                    className={`dur-pill ${months === opt.months ? 'active' : ''}`}
                    onClick={() => setMonths(opt.months)}
                  >
                    {opt.months % 12 === 0 && opt.months >= 60 ? `${opt.months / 12} ${t('common.years')}` : `${opt.months} ${t('common.months')}`}
                  </button>
                ))}
              </div>
              <button className="btn-sim" onClick={() => openModal('auth')}>
                {t('sim.cta')}
              </button>
            </div>
          </Reveal>

          {/* Results */}
          <Reveal delay={2} className="sim-results">
            <div className="result-main">
              <div className="res-lbl">{t('sim.res_monthly')}</div>
              <div className="res-val">{fmt(loan.monthly, locale)}</div>
              <div className="res-sub">
                {t('sim.mini_duration')}: <span>{months} {t('common.months')}</span>
              </div>
              <div className="res-grid">
                <div className="res-item">
                  <div className="res-item-lbl">{t('sim.res_total')}</div>
                  <div className="res-item-val">{fmt(loan.total, locale)}</div>
                </div>
                <div className="res-item">
                  <div className="res-item-lbl">{t('sim.res_interest')}</div>
                  <div className="res-item-val g">{fmt(loan.interest, locale)}</div>
                </div>
              </div>
              <div className="res-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {t('sim.res_badge')}
              </div>
            </div>
            <div className="result-mini-grid">
              <div className="result-mini">
                <div className="mini-lbl">{t('sim.mini_capital')}</div>
                <div className="mini-val b">{fmt(amount, locale)}</div>
              </div>
              <div className="result-mini">
                <div className="mini-lbl">{t('sim.mini_rate')}</div>
                <div className="mini-val">0,229%</div>
              </div>
              <div className="result-mini">
                <div className="mini-lbl">{t('sim.mini_duration')}</div>
                <div className="mini-val">{months} {t('common.months')}</div>
              </div>
              <div className="result-mini">
                <div className="mini-lbl">{t('sim.mini_first')}</div>
                <div className="mini-val">{firstPaymentLabel}</div>
              </div>
            </div>

          </Reveal>
        </div>
      </div>
    </section>
  );
}
