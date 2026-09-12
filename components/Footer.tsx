export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="nav-logo">
              <div className="nav-logo-icon">V</div>
              <span className="nav-logo-text">
                Vantex <span>Bank</span>
              </span>
            </div>
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
                <a href="#">Centre d&apos;aide</a>
              </li>
              <li>
                <a href="#">Contactez-nous</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#simulator">Simulateur</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-head">Légal</div>
            <ul className="footer-links">
              <li>
                <a href="#">Mentions légales</a>
              </li>
              <li>
                <a href="#">RGPD &amp; Cookies</a>
              </li>
              <li>
                <a href="#">Conditions générales</a>
              </li>
              <li>
                <a href="#">Politique de confidentialité</a>
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
