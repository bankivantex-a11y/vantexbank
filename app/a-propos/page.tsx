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
              <h1 className="hero-title">Redéfinir la banque pour l'ère numérique.</h1>
              <p className="hero-desc">
                Fondée en 2024, Vantex Bank est née d'une vision simple : rendre le crédit accessible, transparent et rapide pour tous. Nous combinons technologie de pointe et service client humain.
              </p>
              <div className="hero-stats" style={{ marginTop: 32 }}>
                <div className="stat-item">
                  <span className="stat-value">2024</span>
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
              <p className="sec-desc" style={{ maxWidth: 800 }}>
                Chez Vantex Bank, nous croyons que chaque projet mérite une chance d'être financé. Que ce soit pour l'achat d'une maison, le lancement d'une entreprise ou un projet personnel, nous nous engageons à fournir des solutions de prêt équitables et adaptées à chaque profil.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
