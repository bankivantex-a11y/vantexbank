'use client';

import Reveal from '@/components/Reveal';
import Simulator from '@/components/Simulator';
import { useAppState } from '@/components/AppState';

export default function PretPersonnelPage() {
  const { t } = useAppState();

  return (
    <div>
      <section className="section" style={{ paddingTop: 90 }}>
        <div className="container">
          <Reveal>
            <div className="sec-label">{t('services.label')}</div>
            <h1 className="sec-title">{t('services.personal.title')}</h1>
            <p className="sec-desc">
              {t('services.personal.desc')}
            </p>
          </Reveal>

          <div className="hero-inner" style={{ minHeight: 'auto', gap: 40, padding: '40px 0' }}>
            <Reveal>
              <div style={{ padding: 32, background: 'var(--bg)', borderRadius: 24, border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: 20, fontSize: 24 }}>{t('services.personal.mod_title')}</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: 8 }}>
                    <span style={{ color: 'var(--muted)' }}>{t('services.personal.mod_rate')}</span>
                    <strong>{t('common.taeg_fixed')}</strong>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: 8 }}>
                    <span style={{ color: 'var(--muted)' }}>{t('services.personal.mod_amount')}</span>
                    <strong>500 {t('common.to')} 75 000€</strong>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 8 }}>
                    <span style={{ color: 'var(--muted)' }}>{t('services.personal.mod_dur')}</span>
                    <strong>12 {t('common.to')} 72 {t('common.months')}</strong>
                  </li>
                </ul>
              </div>

              <div style={{ marginTop: 32 }}>
                <h3 style={{ marginBottom: 20, fontSize: 24 }}>{t('services.personal.adv_title')}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {[
                    t('pret_personnel.adv1'),
                    t('pret_personnel.adv2'),
                    t('pret_personnel.adv3'),
                    t('pret_personnel.adv4'),
                    t('pret_personnel.adv5')
                  ].map((adv, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14 }}>
                      <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'var(--success)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10 }}>✓</div>
                      {adv}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div style={{ padding: 32, background: 'var(--navy)', color: '#fff', borderRadius: 24 }}>
                <h3 style={{ marginBottom: 16, color: '#fff' }}>{t('services.personal.sol_title')}</h3>
                <p style={{ opacity: 0.8, fontSize: 15, lineHeight: 1.7 }}>
                  {t('services.personal.sol_desc')}
                </p>
                <div style={{ marginTop: 24, padding: 16, background: 'rgba(255,255,255,0.05)', borderRadius: 12 }}>
                  <small style={{ opacity: 0.6 }}>{t('common.orias_label')}</small>
                  <div style={{ fontSize: 20, fontWeight: 'bold' }}>{t('common.orias_val')}</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div className="sec-header center">
            <h2 className="sec-title">{t('services.personal.sim_title')}</h2>
            <p className="sec-desc">{t('services.personal.sim_desc')}</p>
          </div>
          <Simulator />
        </div>
      </section>
    </div>
  );
}
