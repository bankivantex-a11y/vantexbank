'use client';

import { useMemo } from 'react';
import Reveal from './Reveal';
import { useAppState } from './AppState';
import { DURATION_OPTIONS, fmt } from '@/lib/loan';

export default function Simulator() {
  const { amount, setAmount, months, setMonths, loan, openModal } = useAppState();

  const rangePct = ((amount - 1000) / 799000) * 100;

  const firstPaymentLabel = useMemo(() => {
    const fp = new Date();
    fp.setMonth(fp.getMonth() + 1);
    return fp.toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' });
  }, []);

  return (
    <section id="simulator" className="section">
      <div className="container">
        <div className="sim-inner">
          {/* Controls */}
          <Reveal>
            <div className="sec-label">Simulateur de prêt</div>
            <h2 className="sec-title" style={{ marginBottom: 8 }}>
              Calculez vos mensualités
            </h2>
            <p className="sec-desc" style={{ marginBottom: 36 }}>
              Ajustez le montant et la durée pour voir instantanément le coût réel de votre financement.
            </p>
            <div className="sim-card">
              <div className="sim-card-title">Mon financement</div>
              <div className="sim-card-sub">Taux annuel fixe : 2,75% · TAEG indicatif</div>
              {/* Range */}
              <div className="range-group">
                <div className="range-top">
                  <span className="range-lbl">Montant souhaité</span>
                  <span className="range-val">{fmt(amount)}</span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={800000}
                  step={500}
                  value={amount}
                  onChange={(e) => setAmount(+e.target.value)}
                  style={{
                    background: `linear-gradient(90deg, var(--blue) ${rangePct}%, var(--border) ${rangePct}%)`,
                  }}
                />
                <div className="range-minmax">
                  <span>1 000 €</span>
                  <span>800 000 €</span>
                </div>
              </div>
              {/* Duration */}
              <div className="dur-lbl">Durée de remboursement</div>
              <div className="dur-pills">
                {DURATION_OPTIONS.map((opt) => (
                  <button
                    key={opt.months}
                    className={`dur-pill ${months === opt.months ? 'active' : ''}`}
                    onClick={() => setMonths(opt.months)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              <button className="btn-sim" onClick={() => openModal('auth')}>
                Faire ma demande de prêt →
              </button>
            </div>
          </Reveal>

          {/* Results */}
          <Reveal delay={2} className="sim-results">
            <div className="result-main">
              <div className="res-lbl">Mensualité estimée</div>
              <div className="res-val">{fmt(loan.monthly)}</div>
              <div className="res-sub">
                par mois pendant <span>{months} mois</span>
              </div>
              <div className="res-grid">
                <div className="res-item">
                  <div className="res-item-lbl">Montant total à rembourser</div>
                  <div className="res-item-val">{fmt(loan.total)}</div>
                </div>
                <div className="res-item">
                  <div className="res-item-lbl">Coût total des intérêts</div>
                  <div className="res-item-val g">{fmt(loan.interest)}</div>
                </div>
              </div>
              <div className="res-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Taux fixe 2,75% — Calculé sur votre durée
              </div>
            </div>
            <div className="result-mini-grid">
              <div className="result-mini">
                <div className="mini-lbl">Capital emprunté</div>
                <div className="mini-val b">{fmt(amount)}</div>
              </div>
              <div className="result-mini">
                <div className="mini-lbl">Taux mensuel</div>
                <div className="mini-val">0,229%</div>
              </div>
              <div className="result-mini">
                <div className="mini-lbl">Durée choisie</div>
                <div className="mini-val">{months} mois</div>
              </div>
              <div className="result-mini">
                <div className="mini-lbl">1ère échéance</div>
                <div className="mini-val">{firstPaymentLabel}</div>
              </div>
            </div>
            <p style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.6 }}>
              * Simulation indicative. TAEG définitif précisé dans l&apos;offre de contrat. Sous réserve
              d&apos;acceptation par Vantex Bank.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
