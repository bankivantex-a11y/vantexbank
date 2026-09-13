'use client';

import Reveal from '@/components/Reveal';
import { useAppState } from '@/components/AppState';

export default function ConfidentialityPage() {
  const { t } = useAppState();

  return (
    <section className="section" style={{ paddingTop: 100 }}>
      <div className="container">
        <Reveal>
          <div className="sec-label">{t('legal.privacy_label')}</div>
          <h1 className="sec-title">{t('legal.privacy_title')}</h1>
          <div className="legal-content" style={{ marginTop: 40, maxWidth: 800 }}>
            <p>
              {t('legal.privacy_intro')}
            </p>

            <h3>{t('legal.privacy_s1_title')}</h3>
            <p>
              {t('legal.privacy_s1_text')}
            </p>

            <h3>{t('legal.privacy_s2_title')}</h3>
            <div style={{ marginBottom: 16 }}>
              {t('legal.privacy_s2_intro')}
            </div>
            <ul>
              <li>{t('legal.privacy_s2_l1')}</li>
              <li>{t('legal.privacy_s2_l2')}</li>
              <li>{t('legal.privacy_s2_l3')}</li>
              <li>{t('legal.privacy_s2_l4')}</li>
            </ul>

            <h3 style={{ marginTop: 32 }}>{t('legal.privacy_s3_title')}</h3>
            <p>
              {t('legal.privacy_s3_text')}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
