'use client';

import Steps from '@/components/Steps';
import Reveal from '@/components/Reveal';
import { useAppState } from '@/components/AppState';

export default function FonctionnementPage() {
  const { t } = useAppState();

  return (
    <div>
      <section className="section" style={{ paddingTop: 90 }}>
        <div className="container">
          <div className="sec-header center">
            <Reveal>
              <div className="sec-label">{t('steps.label')}</div>
              <h1 className="sec-title">{t('fonctionnement.title')}</h1>
              <p className="sec-desc">
                {t('fonctionnement.desc')}
              </p>
            </Reveal>
          </div>

          <Steps />

          <div className="reveal visible" style={{ marginTop: 40, padding: 40, background: 'var(--bg)', borderRadius: 24 }}>
            <h2 className="step-title" style={{ fontSize: 28 }}>{t('fonctionnement.unexpected.title')}</h2>
            <div className="step-desc" style={{ fontSize: 16, maxWidth: 800 }}>
              <p>{t('fonctionnement.unexpected.desc1')}</p>
              <p style={{ marginTop: 16 }}>{t('fonctionnement.unexpected.desc2')}</p>
              <p style={{ marginTop: 16 }}>{t('fonctionnement.unexpected.desc3')}</p>
            </div>
            <ul style={{ color: 'var(--muted)', marginTop: 16, paddingLeft: 20, lineHeight: 1.8 }}>
              <li>{t('fonctionnement.unexpected.list1')}</li>
              <li>{t('fonctionnement.unexpected.list2')}</li>
              <li>{t('fonctionnement.unexpected.list3')}</li>
              <li>{t('fonctionnement.unexpected.list4')}</li>
            </ul>
            <p className="step-desc" style={{ fontSize: 16, maxWidth: 800, marginTop: 24 }}>
              {t('fonctionnement.unexpected.footer')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
