'use client';

import Testimonials from '@/components/Testimonials';
import Reveal from '@/components/Reveal';
import { useAppState } from '@/components/AppState';

export default function TemoignagesPage() {
  const { t } = useAppState();

  return (
    <div>
      <section className="section" style={{ paddingTop: 90 }}>
        <div className="container">
          <div className="sec-header center">
            <Reveal>
              <div className="sec-label">{t('testimonials.label')}</div>
              <h1 className="sec-title">{t('testimonials.title')}</h1>
              <p className="sec-desc">
                {t('testimonials.desc')}
              </p>
            </Reveal>
          </div>
          <Testimonials />
        </div>
      </section>
    </div>
  );
}
