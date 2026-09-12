'use client';

import Reveal from '@/components/Reveal';
import Simulator from '@/components/Simulator';
import { useAppState } from '@/components/AppState';

export default function PretImmobilierPage() {
  const { t } = useAppState();

  return (
    <div>
      <section className="section" style={{ paddingTop: 90 }}>
        <div className="container">
          <Reveal>
            <div className="sec-label">{t('services.personal.mod_dur')} Immo</div>
            <h1 className="sec-title">{t('services.mortgage')}</h1>
            <p className="sec-desc">
              Devenez propriétaire sereinement. Que ce soit pour une résidence principale, secondaire ou un investissement locatif, nous finançons votre avenir.
            </p>
          </Reveal>

          <div className="hero-inner" style={{ minHeight: 'auto', gap: 40, padding: '40px 0' }}>
            <Reveal>
              <div style={{ padding: 24, background: 'var(--bg)', borderRadius: 20 }}>
                <h3 style={{ marginBottom: 16 }}>Nos conditions Immo</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: 15 }}>
                  <li>• Taux à partir de <strong>1,95% TAEG fixe</strong></li>
                  <li>• Financement jusqu'à <strong>1 500 000 €</strong></li>
                  <li>• Durée modulable jusqu'à <strong>25 ans</strong></li>
                  <li>• Sans frais de dossier cachés</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div style={{ padding: 24, background: 'var(--bg2)', borderRadius: 20 }}>
                <h3 style={{ marginBottom: 16 }}>Accompagnement</h3>
                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>
                  Nos experts vous guident sur les dispositifs d'aide à l'accession et optimisent votre plan de financement sous 48h.
                </p>
                <div style={{ marginTop: 16, fontSize: 13, fontWeight: 'bold' }}>ORIAS : 14807766</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <Simulator />
        </div>
      </section>
    </div>
  );
}
