'use client';

import Reveal from '@/components/Reveal';
import Simulator from '@/components/Simulator';
import { useAppState } from '@/components/AppState';

export default function RachatCreditPage() {
  const { t } = useAppState();

  return (
    <div>
      <section className="section" style={{ paddingTop: 90 }}>
        <div className="container">
          <Reveal>
            <div className="sec-label">{t('rachat_credit.label')}</div>
            <h1 className="sec-title">{t('services.debt')}</h1>
            <p className="sec-desc">
              {t('rachat_credit.desc')}
            </p>
          </Reveal>

          <div className="hero-inner" style={{ minHeight: 'auto', gap: 40, padding: '40px 0' }}>
            <Reveal>
              <div style={{ padding: 24, background: 'var(--navy)', color: '#fff', borderRadius: 20 }}>
                <h3 style={{ marginBottom: 16, color: '#fff' }}>{t('rachat_credit.why_title')}</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: 15 }}>
                  <li>• {t('rachat_credit.why1')}</li>
                  <li>• {t('rachat_credit.why2')}</li>
                  <li>• {t('rachat_credit.why3')}</li>
                  <li>• <strong>{t('rachat_credit.why4')}</strong></li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div style={{ padding: 24, background: 'var(--bg)', borderRadius: 20, border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: 16 }}>{t('rachat_credit.analysis_title')}</h3>
                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>
                  {t('rachat_credit.analysis_desc')}
                </p>
                <div style={{ marginTop: 16, fontSize: 13, fontWeight: 'bold' }}>ORIAS 14807766</div>
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
