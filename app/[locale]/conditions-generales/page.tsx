'use client';

import Reveal from '@/components/Reveal';
import { useAppState } from '@/components/AppState';

export default function ConditionsGeneralesPage() {
  const { t } = useAppState();

  return (
    <section className="section" style={{ paddingTop: 100 }}>
      <div className="container">
        <Reveal>
          <div className="sec-label">{t('legal.label')}</div>
          <h1 className="sec-title">{t('legal.terms_title')}</h1>
          <div className="legal-content" style={{ marginTop: 40, maxWidth: 800 }}>
            <p>
              {t('legal.terms_desc')}
            </p>

            <h3>{t('legal.terms_s1_title')}</h3>
            <p>
              {t('legal.terms_s1_text')}
            </p>

            <h3>{t('legal.terms_s2_title')}</h3>
            <p>
              {t('legal.terms_s2_text')}
            </p>
            <ul>
              <li><strong>{t('legal.terms_s2_rate')}</strong> {t('legal.terms_s2_rate_val')}</li>
              <li><strong>{t('legal.terms_s2_amount')}</strong> {t('legal.terms_s2_amount_val')}</li>
              <li><strong>{t('legal.terms_s2_duration')}</strong> {t('legal.terms_s2_duration_val')}</li>
            </ul>

            <h3>{t('legal.terms_s3_title')}</h3>
            <p>
              {t('legal.terms_s3_text')}
            </p>
            <ul>
              <li>{t('legal.terms_s3_l1')}</li>
              <li>{t('legal.terms_s3_l2')}</li>
              <li>{t('legal.terms_s3_l3')}</li>
              <li>{t('legal.terms_s3_l4')}</li>
            </ul>

            <h3>{t('legal.terms_s4_title')}</h3>
            <p>
              <strong>{t('legal.terms_s4_text')}</strong>
            </p>

            <h3>{t('legal.terms_s5_title')}</h3>
            <p>
              {t('legal.terms_s5_text')}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
