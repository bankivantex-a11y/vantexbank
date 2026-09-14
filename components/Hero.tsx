'use client';

import Image from 'next/image';
import { useAppState } from './AppState';
import AnimatedCounter from './AnimatedCounter';

export default function Hero() {
  const { openModal, t } = useAppState();

  return (
    <section id="hero">
      <div className="container">
        <div className="hero-inner">
          {/* Left content */}
          <div>
            <h1 className="hero-title">
              {t('hero.title').split(',')[0]},
              <br />
              <span className="hl">{t('hero.title').split(',')[1]}</span>
            </h1>
            <p className="hero-desc">
              {t('hero.desc')}
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => openModal('app')}>
                {t('hero.cta_apply')}
              </button>
              <button
                className="btn-outline"
                onClick={() => document.getElementById('simulator')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 8 12 12 14 14" />
                </svg>
                {t('hero.cta_sim')}
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-value">
                  <AnimatedCounter target={76923} />
                </span>
                <span className="stat-label">{t('hero.stat_clients')}</span>
              </div>
              <div className="stat-div"></div>
              <div className="stat-item">
                <span className="stat-value">
                  {(2.75).toLocaleString(locale === 'EN' ? 'en-US' : 'fr-FR', { minimumFractionDigits: 2 })}<small style={{ fontSize: 18 }}>%</small>
                </span>
                <span className="stat-label">{t('hero.stat_rate')}</span>
              </div>
              <div className="stat-div"></div>
              <div className="stat-item">
                <span className="stat-value">{t('hero.stat_guarantee_val')}</span>
                <span className="stat-label">{t('hero.stat_guarantee')}</span>
              </div>
            </div>
          </div>

          {/* Right – Phone + floating elements */}
          <div className="hero-visual">
            <div className="hero-glow"></div>

            <div className="phone-wrapper">
              <div className="phone-frame">
                <div className="phone-screen">
                  <div className="phone-notch"></div>
                  <div className="phone-content">
                    <div>
                      <div className="phone-greeting">{t('phone_ui.hello')}</div>
                      <div className="phone-name">{t('contact_page.firstname_placeholder')} {t('contact_page.lastname_placeholder')}</div>
                    </div>
                    <div>
                      <div className="phone-bal-lbl">{t('phone_ui.balance_label')}</div>
                      <div className="phone-balance">
                        <span className="gold">{fmt(28500, locale).replace('€', '').trim()}</span> €
                      </div>
                    </div>
                    <div className="phone-approved">
                      <div className="phone-approved-dot"></div>
                      <span className="phone-approved-txt">{t('phone_ui.approved')} — {fmt(15000, locale)}</span>
                    </div>
                    <div className="phone-txns">
                      <div className="phone-txn">
                        <div className="phone-txn-row">
                          <div className="phone-txn-ico" style={{ background: 'rgba(16,185,129,.15)' }}>
                            💰
                          </div>
                          <div>
                            <div className="phone-txn-nm">{t('phone_ui.received')}</div>
                            <div className="phone-txn-dt">{t('phone_ui.today')}</div>
                          </div>
                        </div>
                        <div className="phone-txn-amt c-green">+{fmt(15000, locale)}</div>
                      </div>
                      <div className="phone-txn">
                        <div className="phone-txn-row">
                          <div className="phone-txn-ico" style={{ background: 'rgba(251,200,75,.15)' }}>
                            🏠
                          </div>
                          <div>
                            <div className="phone-txn-nm">{t('phone_ui.rent')}</div>
                            <div className="phone-txn-dt">12 Sep</div>
                          </div>
                        </div>
                        <div className="phone-txn-amt c-orange">-{fmt(850, locale)}</div>
                      </div>
                      <div className="phone-txn">
                        <div className="phone-txn-row">
                          <div className="phone-txn-ico" style={{ background: 'rgba(148,163,184,.15)' }}>
                            🛒
                          </div>
                          <div>
                            <div className="phone-txn-nm">{t('phone_ui.repayment')}</div>
                            <div className="phone-txn-dt">11 Sep</div>
                          </div>
                        </div>
                        <div className="phone-txn-amt c-grey">-{fmt(234, locale)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="float-card fc1">
                <div className="fc-title">{t('sim.res_monthly')}</div>
                <div className="fc-value">{fmt(428, locale)}</div>
                <div className="fc-badge">
                  <div className="fc-badge-dot"></div>
                  <span className="fc-badge-txt">36 {t('common.months')}</span>
                </div>
              </div>
              <div className="float-card fc2">
                <div className="fc-title">{t('hero.stat_rate')}</div>
                <div className="fc-value g">{(2.75).toLocaleString(locale === 'EN' ? 'en-US' : 'fr-FR', { minimumFractionDigits: 2 })}%</div>
                <div className="fc-badge">
                  <div className="fc-badge-dot"></div>
                  <span className="fc-badge-txt">{t('phone_ui.fixed_rate_guaranteed')}</span>
                </div>
              </div>
            </div>

            {/* Happy person photo */}
            <div className="hero-person">
              <Image
                src="https://images.unsplash.com/photo-1758518729371-5ee28c4ddf60?w=400&h=500&fit=crop&crop=top&auto=format"
                alt="Clients satisfaits Vantex Bank"
                width={400}
                height={500}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
