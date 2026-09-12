'use client';

import Image from 'next/image';
import { useAppState } from './AppState';
import AnimatedCounter from './AnimatedCounter';

export default function Hero() {
  const { openModal } = useAppState();

  return (
    <section id="hero">
      <div className="container">
        <div className="hero-inner">
          {/* Left content */}
          <div>
            <h1 className="hero-title">
              Votre prêt en ligne,
              <br />
              <span className="hl">simple &amp; rapide</span>
            </h1>
            <p className="hero-desc">
              Vantex Bank vous accompagne dans tous vos projets de vie. Obtenez votre financement en quelques
              étapes, sans file d&apos;attente, 100% en ligne.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => openModal('auth')}>
                Demander mon prêt
              </button>
              <button
                className="btn-outline"
                onClick={() => document.getElementById('simulator')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 8 12 12 14 14" />
                </svg>
                Simuler mon prêt
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-value">
                  <AnimatedCounter target={76923} />
                </span>
                <span className="stat-label">Clients satisfaits</span>
              </div>
              <div className="stat-div"></div>
              <div className="stat-item">
                <span className="stat-value">
                  2,75<small style={{ fontSize: 18 }}>%</small>
                </span>
                <span className="stat-label">Taux annuel fixe</span>
              </div>
              <div className="stat-div"></div>
              <div className="stat-item">
                <span className="stat-value">48h</span>
                <span className="stat-label">Réponse garantie</span>
              </div>
            </div>
          </div>

          {/* Right – Phone + floating elements */}
          <div className="hero-visual">
            <div className="hero-glow"></div>

            <div className="phone-wrapper">
              <div className="phone-frame">
                <div className="phone-screen">
                  <div className="phone-notch"></div>
                  <div className="phone-content">
                    <div>
                      <div className="phone-greeting">Bonjour 👋</div>
                      <div className="phone-name">Alexandre Martin</div>
                    </div>
                    <div>
                      <div className="phone-bal-lbl">Solde disponible</div>
                      <div className="phone-balance">
                        <span className="gold">28 500</span> €
                      </div>
                    </div>
                    <div className="phone-approved">
                      <div className="phone-approved-dot"></div>
                      <span className="phone-approved-txt">Prêt approuvé — 15 000 €</span>
                    </div>
                    <div className="phone-txns">
                      <div className="phone-txn">
                        <div className="phone-txn-row">
                          <div className="phone-txn-ico" style={{ background: 'rgba(16,185,129,.15)' }}>
                            💰
                          </div>
                          <div>
                            <div className="phone-txn-nm">Virement reçu</div>
                            <div className="phone-txn-dt">Aujourd&apos;hui</div>
                          </div>
                        </div>
                        <div className="phone-txn-amt c-green">+15 000 €</div>
                      </div>
                      <div className="phone-txn">
                        <div className="phone-txn-row">
                          <div className="phone-txn-ico" style={{ background: 'rgba(251,200,75,.15)' }}>
                            🏠
                          </div>
                          <div>
                            <div className="phone-txn-nm">Loyer</div>
                            <div className="phone-txn-dt">12 Sep</div>
                          </div>
                        </div>
                        <div className="phone-txn-amt c-orange">-850 €</div>
                      </div>
                      <div className="phone-txn">
                        <div className="phone-txn-row">
                          <div className="phone-txn-ico" style={{ background: 'rgba(148,163,184,.15)' }}>
                            🛒
                          </div>
                          <div>
                            <div className="phone-txn-nm">Remboursement</div>
                            <div className="phone-txn-dt">11 Sep</div>
                          </div>
                        </div>
                        <div className="phone-txn-amt c-grey">-234 €</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="float-card fc1">
                <div className="fc-title">Mensualité</div>
                <div className="fc-value">428 €</div>
                <div className="fc-badge">
                  <div className="fc-badge-dot"></div>
                  <span className="fc-badge-txt">36 mois</span>
                </div>
              </div>
              <div className="float-card fc2">
                <div className="fc-title">Taux annuel</div>
                <div className="fc-value g">2,75%</div>
                <div className="fc-badge">
                  <div className="fc-badge-dot"></div>
                  <span className="fc-badge-txt">Taux fixe garanti</span>
                </div>
              </div>
            </div>

            {/* Happy person photo */}
            <div className="hero-person">
              <Image
                src="https://images.unsplash.com/photo-1758518729371-5ee28c4ddf60?w=400&h=500&fit=crop&crop=top&auto=format"
                alt="Clients satisfaits Vantex Bank"
                width={400}
                height={500}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
