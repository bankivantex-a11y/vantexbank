'use client';

import Reveal from '@/components/Reveal';
import { useAppState } from '@/components/AppState';

export default function ImmediateLoanPage() {
  const { openModal, t } = useAppState();

  return (
    <main className="art-container">
      <Reveal>
        <h1 className="art-title">{t('articles.immediate.title')}</h1>
        <p className="art-intro">
          {t('articles.immediate.intro')}
        </p>
      </Reveal>

      <section className="art-section">
        <Reveal delay={1}>
          <h2>{t('articles.immediate.speed_title')}</h2>
          <div className="art-text">
            {t('articles.immediate.speed_text_prefix')} <strong>Virxyd</strong>, {t('articles.immediate.speed_text_suffix')}
          </div>
        </Reveal>
      </section>

      <div className="art-summary">
        <Reveal>
          <div className="art-summary-title">{t('articles.summary')}</div>
          <div className="art-summary-links">
            {(t('articles.immediate.summary_links') as string[]).map((label, index) => (
              <a key={label} href={['#delais', '#fonctionnement', '#conditions', '#demande'][index]}>{label}</a>
            ))}
          </div>
        </Reveal>
      </div>

      <section id="delais" className="art-section">
        <Reveal>
          <h2>{t('articles.immediate.delays_title')}</h2>
          <div className="art-text">
            {t('articles.immediate.delays_text')}
          </div>
          <ul className="art-list">
            {(t('articles.immediate.delays') as string[][]).map(([title, text]) => (
              <li key={title}><strong>{title}</strong> {text}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section id="astuces" className="art-section">
        <Reveal>
          <h2>{t('articles.immediate.tips_title')}</h2>
          <ul className="art-list">
            {(t('articles.immediate.tips') as string[][]).map(([title, text]) => (
              <li key={title}><strong>{title}</strong> {text}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <div className="art-cta-box">
        <Reveal>
          <h2 className="art-cta-title">{t('articles.immediate.cta_title')}</h2>
          <p className="art-cta-text">{t('articles.immediate.cta_text')}</p>
          <button className="btn-primary" style={{ boxShadow: 'none', background: '#fff', color: 'var(--navy)' }} onClick={() => openModal('app')}>
            {t('articles.immediate.cta_btn')}
          </button>
        </Reveal>
      </div>
    </main>
  );
}
