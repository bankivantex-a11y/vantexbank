import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="nav-logo">
              <div className="nav-logo-icon">V</div>
              <span className="nav-logo-text">
                Vantex <span>Bank</span>
              </span>
            </Link>
            <p className="footer-desc">
              Vantex Bank, votre partenaire financier en ligne. Prêts personnels, professionnels et immobiliers au
              meilleur taux, pour les résidents d&apos;Europe et d&apos;Asie.
            </p>
          </div>
          <div>
            <div className="footer-head">Services</div>
            <ul className="footer-links">
              <li>
                <Link href="/simulateur">Prêt personnel</Link>
              </li>
              <li>
                <Link href="/simulateur">Prêt immobilier</Link>
              </li>
              <li>
                <Link href="/simulateur">Prêt professionnel</Link>
              </li>
              <li>
                <Link href="/simulateur">Rachat de crédit</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-head">Assistance</div>
            <ul className="footer-links">
              <li>
                <Link href="/aide">Centre d&apos;aide</Link>
              </li>
              <li>
                <Link href="/contact">Contactez-nous</Link>
              </li>
              <li>
                <Link href="/a-propos">À propos</Link>
              </li>
              <li>
                <Link href="/simulateur">Simulateur</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-head">Légal</div>
            <ul className="footer-links">
              <li>
                <Link href="/conditions">Mentions légales</Link>
              </li>
              <li>
                <Link href="/conditions">RGPD &amp; Cookies</Link>
              </li>
              <li>
                <Link href="/conditions">Conditions générales</Link>
              </li>
              <li>
                <Link href="/conditions">Politique de confidentialité</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">
            © 2026 Vantex Bank. Tous droits réservés. Établissement de crédit agréé — Capital social : 50 000 000 €.
          </span>
          <div className="footer-legal">
            <Link href="/aide">Accessibilité</Link>
            <Link href="/aide">Cookies</Link>
            <Link href="/aide">Plan du site</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
