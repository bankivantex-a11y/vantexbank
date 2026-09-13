'use client';

import { useEffect, useRef, useState } from 'react';
import { useAppState } from './AppState';
import SmartLink from './SmartLink';

export default function Navbar() {
  const { openModal, locale, setLocale, t } = useAppState();
  const [scrolled, setScrolled] = useState(false);
  const [hiddenCta, setHiddenCta] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
      if (!isScrolling.current) {
        isScrolling.current = true;
        setHiddenCta(true);
      }
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
      scrollTimer.current = setTimeout(() => {
        isScrolling.current = false;
        setHiddenCta(false);
      }, 700);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav id="navbar" className={`${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-open' : ''}`}>
      <div className="container">
        <div className="nav-inner">
          <SmartLink href="/" className="nav-logo" onClick={() => setMobileMenuOpen(false)}>
            <div className="nav-logo-icon">V</div>
            <span className="nav-logo-text">
              Vantex <span>Bank</span>
            </span>
          </SmartLink>
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li>
              <SmartLink href="/fonctionnement" onClick={() => setMobileMenuOpen(false)}>{t('nav.how')}</SmartLink>
            </li>
            <li>
              <div className="nav-dropdown">
                <span className="nav-link-with-icon">Services <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg></span>
                <div className="dropdown-content">
                  <SmartLink href="/pret-personnel" onClick={() => setMobileMenuOpen(false)}>{t('services.personal.title')}</SmartLink>
                  <SmartLink href="/pret-immobilier" onClick={() => setMobileMenuOpen(false)}>{t('services.mortgage')}</SmartLink>
                  <SmartLink href="/pret-professionnel" onClick={() => setMobileMenuOpen(false)}>{t('services.business')}</SmartLink>
                  <SmartLink href="/rachat-credit" onClick={() => setMobileMenuOpen(false)}>{t('services.debt')}</SmartLink>
                </div>
              </div>
            </li>
            <li>
              <SmartLink href="/simulateur" onClick={() => setMobileMenuOpen(false)}>{t('nav.sim')}</SmartLink>
            </li>
            <li>
              <SmartLink href="/conditions" onClick={() => setMobileMenuOpen(false)}>{t('nav.cond')}</SmartLink>
            </li>
            <li>
              <SmartLink href="/temoignages" onClick={() => setMobileMenuOpen(false)}>{t('nav.testi')}</SmartLink>
            </li>
            <li>
              <SmartLink href="/a-propos" onClick={() => setMobileMenuOpen(false)}>{t('nav.about')}</SmartLink>
            </li>
            <li>
              <SmartLink href="/contact" onClick={() => setMobileMenuOpen(false)}>{t('nav.contact')}</SmartLink>
            </li>
            <li className="mobile-only" style={{ padding: '16px 0' }}>
              <select
                className="form-select"
                style={{ width: '100%', padding: '10px' }}
                value={locale}
                onChange={(e) => setLocale(e.target.value as any)}
              >
                <option value="FR">🇫🇷 Français</option>
                <option value="EN">🇬🇧 English</option>
                <option value="KW">🇰🇼 Koweït / Kowace</option>
                <option value="SL">🇸🇮 Slovénie</option>
                <option value="ES">🇪🇸 Espagne</option>
                <option value="LT">🇱🇹 Lituanie</option>
                <option value="DE">🇩🇪 Allemagne</option>
                <option value="IT">🇮🇹 Italie</option>
              </select>
            </li>
            <li className="mobile-only">
              <button className="btn-ghost" style={{ width: '100%', textAlign: 'left', padding: '16px 0' }} onClick={() => { openModal('auth'); setMobileMenuOpen(false); }}>
                {t('nav.login')}
              </button>
            </li>
            <li className="mobile-only" style={{ borderBottom: 'none', paddingTop: '16px' }}>
              <button className="btn-full" onClick={() => { openModal('auth'); setMobileMenuOpen(false); }}>
                {t('nav.apply')}
              </button>
            </li>
          </ul>
          <div className="nav-actions">
            <button id="navCta" className={hiddenCta ? 'hidden-cta' : ''} onClick={() => openModal('auth')}>
              {t('nav.apply')}
            </button>
            <select
              className="form-select"
              style={{ width: 'auto', padding: '5px 30px 5px 10px', fontSize: '12px', border: '1px solid var(--border)', backgroundPosition: 'right 8px center' }}
              value={locale}
              onChange={(e) => setLocale(e.target.value as any)}
            >
              <option value="FR">🇫🇷 FR</option>
              <option value="EN">🇬🇧 EN</option>
              <option value="KW">🇰🇼 KW</option>
              <option value="SL">🇸🇮 SL</option>
              <option value="ES">🇪🇸 ES</option>
              <option value="LT">🇱🇹 LT</option>
              <option value="DE">🇩🇪 DE</option>
              <option value="IT">🇮🇹 IT</option>
            </select>
            <button className="nav-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
