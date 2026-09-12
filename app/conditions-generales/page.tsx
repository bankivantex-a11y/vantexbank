import Reveal from '@/components/Reveal';

export default function ConditionsGeneralesPage() {
  return (
    <section className="section" style={{ paddingTop: 100 }}>
      <div className="container">
        <Reveal>
          <div className="sec-label">Juridique</div>
          <h1 className="sec-title">Conditions Générales</h1>
          <div className="legal-content" style={{ marginTop: 40, maxWidth: 800 }}>
            <p>
              Les présentes conditions générales régissent l&apos;utilisation du site Vantex Bank et les services
              associés.
            </p>

            <h3>1. Objet</h3>
            <p>
              Ce site a pour objet de présenter les solutions de financement et les services bancaires proposés
              par Vantex Bank.
            </p>

            <h3>2. Modalités du prêt personnel</h3>
            <p>
              Le prêt personnel Vantex Bank permet d'emprunter le montant souhaité pour financer vos projets et de le rembourser à votre rythme selon les conditions suivantes :
            </p>
            <ul>
              <li><strong>Taux :</strong> TAEG fixe compétitif.</li>
              <li><strong>Montant :</strong> De 500 € à 75 000 €.</li>
              <li><strong>Durée :</strong> De 12 à 72 mois.</li>
            </ul>

            <h3>3. Avantages</h3>
            <p>
              En choisissant Vantex Bank, vous bénéficiez de :
            </p>
            <ul>
              <li>Formulaire de demande en ligne rapide (environ 4 minutes).</li>
              <li>Réponse de principe immédiate après étude simplifiée.</li>
              <li>Justificatifs dématérialisés et signature électronique sécurisée.</li>
              <li>Assistance personnalisée si besoin.</li>
            </ul>

            <h3>4. Crédit</h3>
            <p>
              <strong>Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.</strong>
            </p>

            <h3>4. Propriété intellectuelle</h3>
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, images, logos) est la propriété exclusive de Vantex Bank.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
