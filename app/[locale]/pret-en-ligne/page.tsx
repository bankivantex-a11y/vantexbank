'use client';

import Reveal from '@/components/Reveal';
import { useAppState } from '@/components/AppState';

export default function OnlineLoanPage() {
  const { openModal, t } = useAppState();
  const rows = t('articles.online.rows') as string[][];

  return (
    <main className="art-container">
      <Reveal>
        <h1 className="art-title">{t('articles.online.title')}</h1>
        <p className="art-intro">
          {t('articles.online.intro')}
        </p>
      </Reveal>

      <section className="art-section">
        <Reveal delay={1}>
          <div className="art-text">
            {t('articles.online.text1')}
          </div>
          <div className="art-text">
            {t('articles.online.text2_prefix')} <strong>Vantex Bank</strong> {t('articles.online.text2_suffix')}
          </div>
        </Reveal>
      </section>

      <section className="art-section">
        <Reveal delay={2}>
          <h3>{t('articles.online.features_title')}</h3>
          <ul className="art-list">
            {(t('articles.online.features') as string[]).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <div className="art-summary">
        <Reveal>
          <div className="art-summary-title">{t('articles.summary')}</div>
          <div className="art-summary-links">
            {(t('articles.online.summary_links') as string[]).map((label, index) => (
              <a key={label} href={['#demande', '#pourquoi', '#cout', '#delai', '#justificatifs', '#qui'][index]}>{label}</a>
            ))}
          </div>
        </Reveal>
      </div>

      <section id="demande" className="art-section">
        <Reveal>
          <h2>{t('articles.online.request_title')}</h2>
          <div className="art-text">
            {t('articles.online.request_text')}
          </div>

          <h3>{t('articles.online.steps_title')}</h3>
          <ul className="art-list">
            {(t('articles.online.steps') as string[][]).map(([title, text]) => (
              <li key={title}><strong>{title}</strong> {text}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section id="cout" className="art-section">
        <Reveal>
          <h2>{t('articles.online.cost_title')}</h2>
          <div className="art-text">
            {t('articles.online.cost_text')}
          </div>
          <div className="art-table-wrap">
            <table className="art-table">
              <thead>
                <tr>
                  {(t('articles.online.headers') as string[]).map((header) => (
                    <th key={header}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row[0]}><td>{row[0]}</td><td className="highlight">{row[1]}</td><td>{row[2]}</td><td>{row[3]}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      <section id="justificatifs" className="art-section">
        <Reveal>
          <h2>{t('articles.online.docs_title')}</h2>
          <div className="art-text">
            {t('articles.online.docs_text')}
          </div>
          <ul className="art-list">
            {(t('articles.online.docs') as string[]).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <div className="art-cta-box">
        <Reveal>
          <h2 className="art-cta-title">{t('articles.online.cta_title')}</h2>
          <p className="art-cta-text">{t('articles.online.cta_text')}</p>
          <button className="btn-primary" style={{ boxShadow: 'none', background: '#fff', color: 'var(--navy)' }} onClick={() => openModal('app')}>
            {t('articles.online.cta_btn')}
          </button>
        </Reveal>
      </div>
    </main>
  );
}
