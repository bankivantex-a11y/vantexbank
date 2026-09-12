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
                <a href="#">Prêt personnel</a>
              </li>
              <li>
                <a href="#">Prêt immobilier</a>
              </li>
              <li>
                <a href="#">Prêt professionnel</a>
              </li>
              <li>
                <a href="#">Rachat de crédit</a>
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
                <Link href="/aide">FAQ</Link>
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
                <Link href="/mentions-legales">Mentions légales</Link>
              </li>
              <li>
                <Link href="/cookies">RGPD &amp; Cookies</Link>
              </li>
              <li>
                <Link href="/conditions-generales">Conditions générales</Link>
              </li>
              <li>
                <Link href="/confidentialite">Politique de confidentialité</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">
            © 2026 Vantex Bank. Tous droits réservés. Établissement de crédit agréé — Capital social : 50 000 000 €.
          </span>
          <div className="footer-legal">
            <a href="#">Accessibilité</a>
            <a href="#">Cookies</a>
            <a href="#">Plan du site</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
