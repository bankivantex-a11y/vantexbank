'use client';

import Reveal from '@/components/Reveal';
import Simulator from '@/components/Simulator';
import { useAppState } from '@/components/AppState';

export default function PretProfessionnelPage() {
  const { t } = useAppState();

  return (
    <div>
      <section className="section" style={{ paddingTop: 90 }}>
        <div className="container">
          <Reveal>
            <div className="sec-label">{t('pret_professionnel.label')}</div>
            <h1 className="sec-title">{t('services.business')}</h1>
            <p className="sec-desc">
              {t('pret_professionnel.desc')}
            </p>
          </Reveal>

          <div className="hero-inner" style={{ minHeight: 'auto', gap: 40, padding: '40px 0' }}>
            <Reveal>
              <div style={{ padding: 24, background: 'var(--bg)', borderRadius: 20 }}>
                <h3 style={{ marginBottom: 16 }}>{t('pret_professionnel.cond_title')}</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: 15 }}>
                  <li>• {t('pret_professionnel.cond1')}</li>
                  <li>• {t('pret_professionnel.cond2')}</li>
                  <li>• {t('pret_professionnel.cond3')}</li>
                  <li>• <strong>{t('pret_professionnel.cond4')}</strong></li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div style={{ padding: 24, border: '2px solid var(--border)', borderRadius: 20 }}>
                <h3 style={{ marginBottom: 16 }}>{t('pret_professionnel.support_title')}</h3>
                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>
                  {t('pret_professionnel.support_desc')}
                </p>
                <div style={{ marginTop: 16, fontSize: 13, fontWeight: 'bold' }}>SAS Cap Au Nord - {t('common.orias_label')} {t('common.orias_val')}</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <Simulator />
        </div>
      </section>
    </div>
  );
}
