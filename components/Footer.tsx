'use client';

import SmartLink from './SmartLink';
import { useAppState } from './AppState';

export default function Footer() {
  const { t } = useAppState();

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
              Vantex Bank, {t('hero.desc').substring(0, 100)}...
            </p>
          </div>
          <div>
            <div className="footer-head">{t('services.label')}</div>
            <ul className="footer-links">
              <li>
                <SmartLink href="/pret-personnel">{t('services.personal.title')}</SmartLink>
              </li>
              <li>
                <SmartLink href="/pret-immobilier">{t('services.mortgage')}</SmartLink>
              </li>
              <li>
                <SmartLink href="/pret-professionnel">{t('services.business')}</SmartLink>
              </li>
              <li>
                <SmartLink href="/rachat-credit">{t('services.debt')}</SmartLink>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-head">Assistance</div>
            <ul className="footer-links">
              <li>
                <SmartLink href="/aide">{t('nav.how')}</SmartLink>
              </li>
              <li>
                <SmartLink href="/contact">{t('nav.contact')}</SmartLink>
              </li>
              <li>
                <SmartLink href="/aide">FAQ</SmartLink>
              </li>
              <li>
                <SmartLink href="/simulateur">{t('nav.sim')}</SmartLink>
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
            © 2026 Vantex Bank. Tous droits réservés. SAS Cap Au Nord — ORIAS 14807766.
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
