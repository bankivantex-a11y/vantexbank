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
              Chez Vantex Bank, nous accordons une importance capitale à la protection de vos données personnelles
              et à la transparence de nos pratiques en matière de traceurs (cookies).
            </p>

            <h3>1. Qu&apos;est-ce qu&apos;un cookie ?</h3>
            <p>
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette ou mobile) lors
              de la consultation d&apos;un site internet. Il permet à son émetteur d&apos;identifier le terminal dans lequel
              il est enregistré, pendant la durée de validité du cookie.
            </p>

            <h3>2. Utilisation des données (RGPD)</h3>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), les informations recueillies
              sur ce site (via les formulaires de simulation ou de contact) sont traitées pour répondre à vos demandes.
            </p>

            <h3>3. Vos droits</h3>
            <p>
              Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;opposition et de suppression des données vous
              concernant. Pour exercer ces droits, vous pouvez nous contacter via notre formulaire de contact.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
