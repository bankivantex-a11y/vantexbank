'use client';

import SmartLink from './SmartLink';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <SmartLink href="/" className="nav-logo">
              <div className="nav-logo-icon">V</div>
              <span className="nav-logo-text">
                Vantex <span>Bank</span>
              </span>
            </SmartLink>
            <p className="footer-desc">
              Vantex Bank, votre partenaire financier en ligne. Prêts personnels, professionnels et immobiliers au
              meilleur taux, pour les résidents d&apos;Europe et d&apos;Asie.
            </p>
          </div>
          <div>
            <div className="footer-head">Services</div>
            <ul className="footer-links">
              <li>
                <SmartLink href="/simulateur">Prêt personnel</SmartLink>
              </li>
              <li>
                <SmartLink href="/simulateur">Prêt immobilier</SmartLink>
              </li>
              <li>
                <SmartLink href="/simulateur">Prêt professionnel</SmartLink>
              </li>
              <li>
                <SmartLink href="/simulateur">Rachat de crédit</SmartLink>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-head">Assistance</div>
            <ul className="footer-links">
              <li>
                <SmartLink href="/aide">Centre d&apos;aide</SmartLink>
              </li>
              <li>
                <SmartLink href="/contact">Contactez-nous</SmartLink>
              </li>
              <li>
                <SmartLink href="/aide">FAQ</SmartLink>
              </li>
              <li>
                <SmartLink href="/simulateur">Simulateur</SmartLink>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-head">Légal</div>
            <ul className="footer-links">
              <li>
                <SmartLink href="/mentions-legales">Mentions légales</SmartLink>
              </li>
              <li>
                <SmartLink href="/cookies">RGPD &amp; Cookies</SmartLink>
              </li>
              <li>
                <SmartLink href="/conditions-generales">Conditions générales</SmartLink>
              </li>
              <li>
                <SmartLink href="/confidentialite">Politique de confidentialité</SmartLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">
            © 2026 Vantex Bank. Tous droits réservés. Établissement de crédit agréé — Capital social : 50 000 000 €.
          </span>
          <div className="footer-legal">
            <SmartLink href="/mentions-legales">Accessibilité</SmartLink>
            <SmartLink href="/cookies">Cookies</SmartLink>
            <SmartLink href="/">Plan du site</SmartLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
