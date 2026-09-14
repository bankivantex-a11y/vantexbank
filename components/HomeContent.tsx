'use client';

import Reveal from './Reveal';
import { useAppState } from './AppState';
import Image from 'next/image';
import { fmt } from '@/lib/loan';

import SmartLink from './SmartLink';

export default function HomeContent() {
  const { t, openModal, locale } = useAppState();

  const amounts = [500, 1000, 2000, 3000];
  const solutions = [
    { title: t('home.solutions.no_proof_title'), desc: t('home.solutions.no_proof_desc'), img: '/images/souris.jpeg', href: '/credit-sans-justificatif' },
    { title: t('home.solutions.online_title'), desc: t('home.solutions.online_desc'), img: '/images/pret personnel.jpeg', href: '/pret-en-ligne' },
    { title: t('home.solutions.no_refusal_title'), desc: t('home.solutions.no_refusal_desc'), img: '/images/joie familiale.jpeg', href: '/credit-sans-refus' },
    { title: t('home.solutions.immediate_title'), desc: t('home.solutions.immediate_desc'), img: '/images/accord.jpeg', href: '/credit-immediat' },
  ];

  return (
    <>
      {/* Montants spécifiques */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div className="sec-header center">
            <Reveal>
              <h2 className="sec-title">{t('home.amounts_title')}</h2>
            </Reveal>
          </div>
          <div className="amounts-grid">
            {amounts.map((amount, i) => (
              <Reveal key={amount} delay={i} className="amount-card">
                <div className="amount-img">
                   <Image src="/images/joie familiale.jpeg" alt={`${amount}€`} fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="amount-body">
                  <div className="amount-val">{fmt(amount, locale)}</div>
                  <p className="amount-dur">{t('home.duration_label')}</p>
                  <SmartLink href="/pret-personnel" className="amount-link">
                    {t('home.learn_more')}
                  </SmartLink>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions spécifiques */}
      <section className="section">
        <div className="container">
          <div className="sec-header center">
            <Reveal>
              <h2 className="sec-title">{t('home.solutions_title')}</h2>
            </Reveal>
          </div>
          <div className="solutions-grid">
            {solutions.map((sol, i) => (
              <Reveal key={i} delay={i} className="solution-card">
                <div className="sol-img">
                  <Image src={sol.img} alt={sol.title} fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="sol-body">
                  <h3 className="sol-card-title">{sol.title}</h3>
                  <p className="sol-card-desc">{sol.desc}</p>
                  <SmartLink href={sol.href} className="sol-link">
                    {t('home.solutions.read_article')}
                  </SmartLink>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça fonctionne - Détails */}
      <section className="section" style={{ background: '#fff', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="how-fast-box">
            <Reveal>
              <h2 className="sec-title" style={{ fontSize: '32px', marginBottom: '24px' }}>{t('home.how_fast.title')}</h2>
            </Reveal>
            <div className="how-fast-content">
              <Reveal delay={1}>
                <p className="how-p">{t('home.how_fast.desc1')}</p>
                <p className="how-p">{t('home.how_fast.desc2')}</p>
                <p className="how-p">{t('home.how_fast.desc3')}</p>
                <p className="how-p">{t('home.how_fast.desc4')}</p>

                <div className="how-adv">
                   <h3 className="how-adv-title">{t('home.advantages_title')}</h3>
                   <ul className="how-list">
                      <li>{t('home.advantages.item1')}</li>
                      <li>{t('home.advantages.item2')}</li>
                      <li>{t('home.advantages.item3')}</li>
                      <li>{t('home.advantages.item4')}</li>
                   </ul>
                </div>

                <button className="btn-primary" style={{ marginTop: '32px' }} onClick={() => openModal('app')}>
                  {t('home.how_fast.cta')}
                </button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
