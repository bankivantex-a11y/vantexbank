import Reveal from '@/components/Reveal';
import Simulator from '@/components/Simulator';

export default function PretProfessionnelPage() {
  return (
    <div>
      <section className="section" style={{ paddingTop: 90 }}>
        <div className="container">
          <Reveal>
            <div className="sec-label">Nos Services</div>
            <h1 className="sec-title">Prêt Professionnel</h1>
            <p className="sec-desc">
              Boostez votre activité. Financement de matériel, besoin en fonds de roulement ou acquisition de locaux, Vantex Bank soutient les entrepreneurs.
            </p>
          </Reveal>

          <div className="hero-inner" style={{ minHeight: 'auto', gap: 40, padding: '40px 0' }}>
            <Reveal>
              <div style={{ padding: 32, background: 'var(--bg)', borderRadius: 24, border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: 20, fontSize: 24 }}>Solutions Pro</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: 8 }}>
                    <span style={{ color: 'var(--muted)' }}>Taux</span>
                    <strong>Taux préférentiels</strong>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: 8 }}>
                    <span style={{ color: 'var(--muted)' }}>Montant</span>
                    <strong>Sur mesure</strong>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 8 }}>
                    <span style={{ color: 'var(--muted)' }}>Décision</span>
                    <strong>Rapide & Pro</strong>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div style={{ padding: 32, background: 'var(--navy)', color: '#fff', borderRadius: 24 }}>
                <h3 style={{ marginBottom: 16, color: '#fff' }}>Partenaire Business</h3>
                <p style={{ opacity: 0.8, fontSize: 15, lineHeight: 1.7 }}>
                  Parce que chaque entreprise est unique, nos conseillers pro étudient votre business plan pour vous proposer le financement le plus adapté à votre croissance.
                </p>
                <div style={{ marginTop: 24, padding: 16, background: 'rgba(255,255,255,0.05)', borderRadius: 12 }}>
                  <small style={{ opacity: 0.6 }}>ORIAS</small>
                  <div style={{ fontSize: 20, fontWeight: 'bold' }}>14807766</div>
                </div>
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
