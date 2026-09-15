'use client';

import Reveal from '@/components/Reveal';
import Image from 'next/image';
import { useAppState } from '@/components/AppState';

export default function AboutPage() {
  const { t } = useAppState();

  return (
    <div>
      <section className="section" style={{ paddingTop: 90, paddingBottom: 40 }}>
        <div className="container">
          <div className="hero-inner" style={{ alignItems: 'center', minHeight: 'auto', paddingTop: 0, paddingBottom: 0 }}>
            <Reveal>
              <div className="sec-label">{t('nav.about')}</div>
              <h1 className="hero-title">{t('hero.title').split(',')[0]} - {t('nav.about')}</h1>
              <p className="hero-desc">
                {t('hero.desc')}
              </p>
              <div className="hero-stats" style={{ marginTop: 32 }}>
                <div className="stat-item">
                  <span className="stat-value">{t('about.stat_year_val')}</span>
                  <span className="stat-label">{t('about.stat_year')}</span>
                </div>
                <div className="stat-div"></div>
                <div className="stat-item">
                  <span className="stat-value">{t('about.stat_capital_val')}</span>
                  <span className="stat-label">{t('about.stat_capital')}</span>
                </div>
                <div className="stat-div"></div>
                <div className="stat-item">
                  <span className="stat-value">{t('about.stat_presence_val')}</span>
                  <span className="stat-label">{t('about.stat_presence')}</span>
                </div>
              </div>
            </Reveal>
            <Reveal direction="right" delay={2}>
               <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop"
                    alt="Virxyd Office"
                    width={800}
                    height={600}
                  />
               </div>
            </Reveal>
          </div>

          <div style={{ marginTop: 40 }}>
            <Reveal>
              <h2 className="sec-title">{t('about.mission')}</h2>
              <div className="sec-desc" style={{ maxWidth: 800 }}>
                <p>
                  {t('about.mission_text1')}
                </p>
                <p style={{ marginTop: 16 }}>
                  {t('about.mission_text2')}
                </p>
                <p style={{ marginTop: 24, padding: '20px', background: 'var(--bg)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                  {t('about.legal_box')}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
