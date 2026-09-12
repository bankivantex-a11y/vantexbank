import Reveal from '@/components/Reveal';

export default function CookiesPage() {
  return (
    <section className="section" style={{ paddingTop: 100 }}>
      <div className="container">
        <Reveal>
          <div className="sec-label">Confidentialité</div>
          <h1 className="sec-title">RGPD & Cookies</h1>
          <div className="legal-content" style={{ marginTop: 40, maxWidth: 800 }}>
            <p>
              Chez Vantex Bank (SAS Cap Au Nord), nous accordons une importance capitale à la protection de vos données personnelles.
              En tant qu'intermédiaire enregistré sous le numéro <strong>ORIAS 14807766</strong>, nous respectons scrupuleusement les normes européennes.
            </p>

            <h3>1. Utilisation des données (RGPD)</h3>
            <p>
              Les informations recueillies lors de votre demande (montant du prêt, informations personnelles, pièces justificatives) sont traitées uniquement pour analyser votre capacité de remboursement et traiter votre dossier.
            </p>

            <h3>2. Signature électronique</h3>
            <p>
              Nous utilisons des systèmes de signature électronique certifiés pour garantir l'intégrité de vos contrats de crédit.
            </p>

            <h3>3. Vos droits</h3>
            <p>
              Conformément au RGPD, vous disposez d'un droit d'accès et de rectification. Pour toute demande, contactez notre assistance dédiée.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
