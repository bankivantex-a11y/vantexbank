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

            <h3>2. Utilisation du service</h3>
            <p>
              L&apos;utilisateur s&apos;engage à fournir des informations exactes lors de l&apos;utilisation du simulateur de
              prêt. Toute fausse déclaration pourra entraîner le refus du dossier.
            </p>

            <h3>3. Crédit</h3>
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
