import Reveal from '@/components/Reveal';
import Simulator from '@/components/Simulator';

export default function PretPersonnelPage() {
  return (
    <div>
      <section className="section" style={{ paddingTop: 90 }}>
        <div className="container">
          <Reveal>
            <div className="sec-label">Nos Services</div>
            <h1 className="sec-title">Prêt Personnel</h1>
            <p className="sec-desc">
              Vous avez un besoin d’argent pour financer un ou plusieurs projets ? Le prêt personnel permet d’emprunter le montant souhaité et de le rembourser à votre rythme.
            </p>
          </Reveal>

          <div style={{ marginTop: 60, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}>
            <Reveal>
              <div style={{ padding: 32, background: 'var(--bg)', borderRadius: 24, border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: 20, fontSize: 24 }}>Modalités</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: 8 }}>
                    <span style={{ color: 'var(--muted)' }}>Taux</span>
                    <strong>TAEG fixe</strong>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: 8 }}>
                    <span style={{ color: 'var(--muted)' }}>Montant</span>
                    <strong>500 à 75 000€</strong>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 8 }}>
                    <span style={{ color: 'var(--muted)' }}>Durée</span>
                    <strong>12 à 72 mois</strong>
                  </li>
                </ul>
              </div>

              <div style={{ marginTop: 32 }}>
                <h3 style={{ marginBottom: 20, fontSize: 24 }}>Nos avantages</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {[
                    "Formulaire en ligne (4 min)",
                    "Réponse de principe immédiate",
                    "Justificatifs dématérialisés",
                    "Signature électronique",
                    "Assistance téléphonique"
                  ].map((adv, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14 }}>
                      <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'var(--success)', color: '#fff', display: 'flex', alignItems: 'center', justifyCenter: 'center', fontSize: 10 }}>✓</div>
                      {adv}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div style={{ padding: 32, background: 'var(--navy)', color: '#fff', borderRadius: 24 }}>
                <h3 style={{ marginBottom: 16, color: '#fff' }}>Une solution simple</h3>
                <p style={{ opacity: 0.8, fontSize: 15, lineHeight: 1.7 }}>
                  Chez Vantex Bank, vous réalisez votre demande de prêt personnel en ligne et obtenez une réponse de principe immédiate. En cas d’acceptation, il ne vous reste plus qu’à signer électroniquement votre contrat et à télécharger vos pièces justificatives.
                </p>
                <div style={{ marginTop: 24, padding: 16, background: 'rgba(255,255,255,0.05)', borderRadius: 12 }}>
                  <small style={{ opacity: 0.6 }}>Numéro ORIAS</small>
                  <div style={{ fontSize: 20, fontWeight: 'bold' }}>14807766</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div className="sec-header center">
            <h2 className="sec-title">Simulez votre prêt personnel</h2>
            <p className="sec-desc">Obtenez une estimation précise en quelques secondes.</p>
          </div>
          <Simulator />
        </div>
      </section>
    </div>
  );
}
