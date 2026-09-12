import Steps from '@/components/Steps';
import Reveal from '@/components/Reveal';

export default function FonctionnementPage() {
  return (
    <div>
      <section className="section" style={{ paddingTop: 90 }}>
        <div className="container">
          <div className="sec-header center">
            <Reveal>
              <div className="sec-label">Notre Processus</div>
              <h1 className="sec-title">Comment fonctionne Vantex Bank ?</h1>
              <p className="sec-desc">
                Nous avons simplifié le crédit pour que vous puissiez vous concentrer sur vos projets.
                Une expérience 100% digitale, transparente et sécurisée.
              </p>
            </Reveal>
          </div>

          <Steps />

          <div className="reveal visible" style={{ marginTop: 40, padding: 40, background: 'var(--bg)', borderRadius: 24 }}>
            <h2 className="step-title" style={{ fontSize: 28 }}>Un accompagnement sur mesure</h2>
            <p className="step-desc" style={{ fontSize: 16, maxWidth: 800 }}>
              Contrairement aux banques traditionnelles, Vantex Bank utilise des algorithmes d'analyse en temps réel
              couplés à une expertise humaine. Cela nous permet de vous donner une réponse de principe immédiate
              et une validation définitive sous 48 heures ouvrées.
              <br /><br />
              Dès la signature de votre contrat électronique, les fonds sont débloqués et transférés sur votre compte
              bancaire en 72 heures maximum. Aucun frais de dossier caché, aucune mauvaise surprise.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
