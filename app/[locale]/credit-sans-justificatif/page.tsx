'use client';

import Reveal from '@/components/Reveal';
import { useAppState } from '@/components/AppState';

export default function NoProofLoanPage() {
  const { openModal, t } = useAppState();

  return (
    <main className="art-container">
      <Reveal>
        <h1 className="art-title">{t('articles.no_proof.title')}</h1>
        <p className="art-intro">
          {t('articles.no_proof.intro')}
        </p>
      </Reveal>

      <section className="art-section">
        <Reveal delay={1}>
          <h2>{t('articles.no_proof.what_title')}</h2>
          <div className="art-text">
            {t('articles.no_proof.what_text1')}
          </div>
          <div className="art-text">
            {t('articles.no_proof.what_text2_prefix')} <strong>Vantex Bank</strong>, {t('articles.no_proof.what_text2_suffix')}
          </div>
        </Reveal>
      </section>

      <div className="art-summary">
        <Reveal>
          <div className="art-summary-title">{t('articles.summary')}</div>
          <div className="art-summary-links">
            {(t('articles.no_proof.summary_links') as string[]).map((label, index) => (
              <a key={label} href={['#fonctionnement', '#avantages', '#documents', '#demande'][index]}>{label}</a>
            ))}
          </div>
        </Reveal>
      </div>

      <section id="avantages" className="art-section">
        <Reveal>
          <h2>{t('articles.no_proof.advantages_title')}</h2>
          <ul className="art-list">
            {(t('articles.no_proof.advantages') as string[][]).map(([title, text]) => (
              <li key={title}><strong>{title}</strong> {text}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section id="documents" className="art-section">
        <Reveal>
          <h2>{t('articles.no_proof.docs_title')}</h2>
          <div className="art-text">
            {t('articles.no_proof.docs_text')}
          </div>
          <ul className="art-list">
            {(t('articles.no_proof.docs') as string[]).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <div className="art-cta-box">
        <Reveal>
          <h2 className="art-cta-title">{t('articles.no_proof.cta_title')}</h2>
          <p className="art-cta-text">{t('articles.no_proof.cta_text')}</p>
          <button className="btn-primary" style={{ boxShadow: 'none', background: '#fff', color: 'var(--navy)' }} onClick={() => openModal('app')}>
            {t('articles.no_proof.cta_btn')}
          </button>
        </Reveal>
      </div>
    </main>
  );
}
