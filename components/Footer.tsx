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
              <img src="/images/virxyd-logo.png" alt="Virxyd Logo" style={{ height: '40px', width: 'auto' }} />
            </SmartLink>
            <p className="footer-desc">
              Virxyd, {t('hero.desc').substring(0, 100)}...
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
            <div className="footer-head">{t('footer.assist')}</div>
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
            <div className="footer-head">{t('footer.legal')}</div>
            <ul className="footer-links">
              <li>
                <SmartLink href="/mentions-legales">{t('footer.mentions')}</SmartLink>
              </li>
              <li>
                <SmartLink href="/cookies">{t('footer.cookies')}</SmartLink>
              </li>
              <li>
                <SmartLink href="/conditions-generales">{t('footer.terms')}</SmartLink>
              </li>
              <li>
                <SmartLink href="/confidentialite">{t('footer.privacy')}</SmartLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">
            © 2026 Virxyd. {t('footer.rights')}
          </span>
          <div className="footer-legal">
            <SmartLink href="/mentions-legales">{t('footer.accessibility')}</SmartLink>
            <SmartLink href="/cookies">{t('footer.cookies')}</SmartLink>
            <SmartLink href="/">{t('footer.sitemap')}</SmartLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
