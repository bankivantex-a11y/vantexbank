'use client';

import Reveal from '@/components/Reveal';
import { useAppState } from '@/components/AppState';

export default function MentionsLegalesPage() {
  const { t } = useAppState();

  return (
    <section className="section" style={{ paddingTop: 100 }}>
      <div className="container">
        <Reveal>
          <div className="sec-label">{t('legal.label')}</div>
          <h1 className="sec-title">{t('legal.mentions_title')}</h1>
          <div className="legal-content" style={{ marginTop: 40, maxWidth: 800 }}>
            <h3>{t('legal.mentions_s1_title')}</h3>
            <p>
              {t('legal.mentions_s1_text')}
            </p>

            <h3>{t('legal.mentions_s2_title')}</h3>
            <p>
              {t('legal.mentions_s2_text1')}<br />
              {t('legal.mentions_s2_text2')}<br />
              {t('legal.mentions_s2_text3')}<br />
              {t('legal.mentions_s2_text4')} <strong>14807766</strong>.<br />
              {t('legal.mentions_s2_text5')}
            </p>

            <h3>{t('legal.mentions_s3_title')}</h3>
            <p>
              {t('legal.mentions_s3_text1')}<br />
              440 N Barranca Ave #4133, Covina, CA 91723.
            </p>

            <h3>{t('legal.mentions_s4_title')}</h3>
            <p>
              {t('legal.mentions_s4_text')}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
