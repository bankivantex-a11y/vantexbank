'use client';

import Reveal from '@/components/Reveal';
import Simulator from '@/components/Simulator';
import { useAppState } from '@/components/AppState';

export default function RachatCreditPage() {
  const { t } = useAppState();

  return (
    <div>
      <section className="section" style={{ paddingTop: 90 }}>
        <div className="container">
          <Reveal>
            <div className="sec-label">Gestion de Budget</div>
            <h1 className="sec-title">{t('services.debt')}</h1>
            <p className="sec-desc">
              Simplifiez vos finances en regroupant vos crédits en une seule mensualité réduite. Retrouvez du pouvoir d'achat immédiatement.
            </p>
          </Reveal>

          <div className="hero-inner" style={{ minHeight: 'auto', gap: 40, padding: '40px 0' }}>
            <Reveal>
              <div style={{ padding: 24, background: 'var(--navy)', color: '#fff', borderRadius: 20 }}>
                <h3 style={{ marginBottom: 16, color: '#fff' }}>Pourquoi regrouper ?</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: 15 }}>
                  <li>• Mensualité unique plus basse</li>
                  <li>• Taux d'endettement réduit</li>
                  <li>• Gestion bancaire simplifiée</li>
                  <li>• <strong>Économie jusqu'à 60%</strong></li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div style={{ padding: 24, background: 'var(--bg)', borderRadius: 20, border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: 16 }}>Analyse Gratuite</h3>
                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>
                  Nos analystes étudient vos crédits en cours pour optimiser votre nouveau contrat. Confidentialité garantie.
                </p>
                <div style={{ marginTop: 16, fontSize: 13, fontWeight: 'bold' }}>ORIAS 14807766</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <Simulator />
        </div>
      </section>
    </div>
  );
}
