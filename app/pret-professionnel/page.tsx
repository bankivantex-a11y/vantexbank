'use client';

import Reveal from '@/components/Reveal';
import Simulator from '@/components/Simulator';
import { useAppState } from '@/components/AppState';

export default function PretProfessionnelPage() {
  const { t } = useAppState();

  return (
    <div>
      <section className="section" style={{ paddingTop: 90 }}>
        <div className="container">
          <Reveal>
            <div className="sec-label">Solutions Business</div>
            <h1 className="sec-title">{t('services.business')}</h1>
            <p className="sec-desc">
              Besoin de trésorerie, de nouveau matériel ou de locaux ? Vantex Bank accompagne les entrepreneurs et les PME.
            </p>
          </Reveal>

          <div className="hero-inner" style={{ minHeight: 'auto', gap: 40, padding: '40px 0' }}>
            <Reveal>
              <div style={{ padding: 24, background: 'var(--bg)', borderRadius: 20 }}>
                <h3 style={{ marginBottom: 16 }}>Financement Pro</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: 15 }}>
                  <li>• Prêt matériel & équipement</li>
                  <li>• Financement de stock & BFR</li>
                  <li>• Acquisition de murs commerciaux</li>
                  <li>• <strong>Réponse de principe sous 72h</strong></li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div style={{ padding: 24, border: '2px solid var(--border)', borderRadius: 20 }}>
                <h3 style={{ marginBottom: 16 }}>Expertise Pro</h3>
                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>
                  Un conseiller dédié analyse votre projet pour vous proposer une structure de prêt adaptée à votre cycle d'exploitation.
                </p>
                <div style={{ marginTop: 16, fontSize: 13, fontWeight: 'bold' }}>SAS Cap Au Nord - ORIAS 14807766</div>
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
