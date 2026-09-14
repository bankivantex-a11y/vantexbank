'use client';

import Reveal from '@/components/Reveal';
import { useAppState } from '@/components/AppState';

export default function NoRefusalPage() {
  const { openModal, t } = useAppState();

  return (
    <main className="art-container">
      <Reveal>
        <h1 className="art-title">{t('articles.no_refusal.title')}</h1>
        <p className="art-intro">
          {t('articles.no_refusal.intro')}
        </p>
      </Reveal>

      <section className="art-section">
        <Reveal delay={1}>
          <h2>{t('articles.no_refusal.max_title')}</h2>
          <div className="art-text">
            {t('articles.no_refusal.max_text1')}
          </div>
          <div className="art-text">
            <strong>Vantex Bank</strong> {t('articles.no_refusal.max_text2')}
          </div>
        </Reveal>
      </section>

      <div className="art-summary">
        <Reveal>
          <div className="art-summary-title">{t('articles.summary')}</div>
          <div className="art-summary-links">
            {(t('articles.no_refusal.summary_links') as string[]).map((label, index) => (
              <a key={label} href={['#criteres', '#astuces', '#chances', '#demande'][index]}>{label}</a>
            ))}
          </div>
        </Reveal>
      </div>

      <section id="criteres" className="art-section">
        <Reveal>
          <h2>{t('articles.no_refusal.criteria_title')}</h2>
          <ul className="art-list">
            {(t('articles.no_refusal.criteria') as string[][]).map(([title, text]) => (
              <li key={title}><strong>{title}</strong> {text}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section id="chances" className="art-section">
        <Reveal>
          <h2>{t('articles.no_refusal.stats_title')}</h2>
          <div className="art-text">
            {t('articles.no_refusal.stats_text')}
          </div>
          <ul className="art-list">
            {(t('articles.no_refusal.stats') as string[]).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <div className="art-cta-box">
        <Reveal>
          <h2 className="art-cta-title">{t('articles.no_refusal.cta_title')}</h2>
          <p className="art-cta-text">{t('articles.no_refusal.cta_text')}</p>
          <button className="btn-primary" style={{ boxShadow: 'none', background: '#fff', color: 'var(--navy)' }} onClick={() => openModal('app')}>
            {t('articles.no_refusal.cta_btn')}
          </button>
        </Reveal>
      </div>
    </main>
  );
}
