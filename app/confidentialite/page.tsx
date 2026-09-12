import Reveal from '@/components/Reveal';

export default function ConfidentialityPage() {
  return (
    <section className="section" style={{ paddingTop: 100 }}>
      <div className="container">
        <Reveal>
          <div className="sec-label">Confidentialité</div>
          <h1 className="sec-title">Politique de confidentialité</h1>
          <div className="legal-content" style={{ marginTop: 40, maxWidth: 800 }}>
            <p>
              Votre vie privée est essentielle pour nous. Cette politique détaille comment nous collectons,
              utilisons et protégeons vos informations personnelles.
            </p>

            <h3>1. Collecte des informations</h3>
            <p>
              Nous collectons des informations lorsque vous utilisez notre simulateur de prêt, remplissez un
              formulaire de contact ou créez un compte client.
            </p>

            <h3>2. Utilisation des informations</h3>
            <p>
              Toutes les informations que nous recueillons peuvent être utilisées pour :
              <ul>
                <li>Personnaliser votre expérience et répondre à vos besoins individuels.</li>
                <li>Fournir un contenu publicitaire personnalisé.</li>
                <li>Améliorer notre site Web.</li>
                <li>Améliorer le service client.</li>
              </ul>
            </p>

            <h3>3. Protection des données</h3>
            <p>
              Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations
              personnelles (chiffrement SSL, accès restreint aux données).
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
