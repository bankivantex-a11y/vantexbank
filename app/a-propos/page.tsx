import Reveal from '@/components/Reveal';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div>
      <section className="section" style={{ paddingTop: 90, paddingBottom: 40 }}>
        <div className="container">
          <div className="hero-inner" style={{ alignItems: 'center', minHeight: 'auto', paddingTop: 0, paddingBottom: 0 }}>
            <Reveal>
              <div className="sec-label">À Propos de Nous</div>
              <h1 className="hero-title">Une équipe de professionnels pour un soutien complet.</h1>
              <p className="hero-desc">
                Depuis 2004, notre équipe s'est forgée une solide réputation grâce à son expertise et à la qualité de ses services. Au fil des années, nous avons œuvré avec diligence pour offrir à nos clients une expérience exceptionnelle.
              </p>
              <div className="hero-stats" style={{ marginTop: 32 }}>
                <div className="stat-item">
                  <span className="stat-value">2004</span>
                  <span className="stat-label">Année de création</span>
                </div>
                <div className="stat-div"></div>
                <div className="stat-item">
                  <span className="stat-value">50M€</span>
                  <span className="stat-label">Capital social</span>
                </div>
                <div className="stat-div"></div>
                <div className="stat-item">
                  <span className="stat-value">UE & Asie</span>
                  <span className="stat-label">Présence internationale</span>
                </div>
              </div>
            </Reveal>
            <Reveal direction="right" delay={2}>
               <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop"
                    alt="Bureaux Vantex Bank"
                    width={800}
                    height={600}
                  />
               </div>
            </Reveal>
          </div>

          <div style={{ marginTop: 40 }}>
            <Reveal>
              <h2 className="sec-title">Notre Mission</h2>
              <div className="sec-desc" style={{ maxWidth: 800 }}>
                <p>
                  Fondée avec l'ambition d'être un spécialiste du crédit rapide et du financement des particuliers, notre mission est d’accompagner chaque emprunteur vers la solution la plus adaptée à son projet et à sa situation.
                </p>
                <p style={{ marginTop: 16 }}>
                  Chez Vantex Bank, vous réalisez votre demande de prêt personnel en ligne et obtenez une réponse de principe immédiate. Notre objectif est simple : vous accompagner à chaque étape pour faciliter et accélérer l'obtention de votre financement.
                </p>
                <p style={{ marginTop: 24, padding: '20px', background: 'var(--bg)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                  <strong>Vantex Bank (SAS Cap Au Nord)</strong> est un intermédiaire enregistré à l'<strong>ORIAS sous le numéro 14807766</strong> en qualité de mandataire non exclusif en opérations de banque et en services de paiement (MOBSP).
                </p>
                <p style={{ marginTop: 16 }}>
                  <small style={{ color: 'var(--muted)' }}>
                    Rappel légal : Aucun versement de quelque nature que ce soit ne peut être exigé d'un particulier avant l'obtention d'un ou plusieurs prêts d'argent.
                  </small>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
