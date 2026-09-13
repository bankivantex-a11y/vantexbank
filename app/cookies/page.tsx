'use client';

import Reveal from '@/components/Reveal';
import { useAppState } from '@/components/AppState';

export default function CookiesPage() {
  const { t } = useAppState();

  return (
    <section className="section" style={{ paddingTop: 100 }}>
      <div className="container">
        <Reveal>
          <div className="sec-label">{t('legal.privacy_label')}</div>
          <h1 className="sec-title">{t('legal.cookies_title')}</h1>
          <div className="legal-content" style={{ marginTop: 40, maxWidth: 800 }}>
            <p>
              {t('legal.cookies_intro')}
            </p>

            <h3>{t('legal.cookies_s1_title')}</h3>
            <p>
              {t('legal.cookies_s1_text')}
            </p>

            <h3>{t('legal.cookies_s2_title')}</h3>
            <p>
              {t('legal.cookies_s2_text')}
            </p>

            <h3>{t('legal.cookies_s3_title')}</h3>
            <p>
              {t('legal.cookies_s3_text')}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
