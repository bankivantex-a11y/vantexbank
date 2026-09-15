'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAppState } from './AppState';
import SmartLink from './SmartLink';

export default function Navbar() {
  const { openModal, locale, setLocale, t } = useAppState();
  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleChange = (newLocale: string) => {
    setLocale(newLocale as any);

    // Remplacer le segment de langue dans l'URL actuelle
    const segments = pathname.split('/');
    segments[1] = newLocale.toLowerCase();
    const newPath = segments.join('/');

    router.push(newPath);
  };
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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <nav id="navbar" className={`${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-open' : ''}`}>
      {/* Couche d'arrière-plan avec courbes lumineuses bleues / cyan */}
      <div className="nav-bg-glow-layer" aria-hidden="true">
        <svg className="nav-swoosh-svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="neonCyanGlow" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0" />
              <stop offset="25%" stopColor="#0369a1" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.95" />
            </linearGradient>
            <filter id="glowFilter" x="-20%" y="-40%" width="140%" height="180%">
              <feGaussianBlur stdDeviation="7" result="blur1" />
              <feGaussianBlur stdDeviation="3" result="blur2" />
              <feMerge>
                <feMergeNode in="blur1" />
                <feMergeNode in="blur2" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Halo diffus en haut à droite */}
          <ellipse cx="1200" cy="15" rx="320" ry="85" fill="rgba(30, 64, 175, 0.45)" filter="url(#glowFilter)" />
          {/* Courbe électrique lumineuse inférieure */}
          <path d="M 220 100 Q 680 96 1040 55 T 1440 24" fill="none" stroke="url(#neonCyanGlow)" strokeWidth="2.5" filter="url(#glowFilter)" />
          {/* Courbe supérieure subtile */}
          <path d="M 800 0 Q 1100 25 1440 70" fill="none" stroke="rgba(56, 189, 248, 0.28)" strokeWidth="1.5" filter="url(#glowFilter)" />
        </svg>
      </div>

      <div className="container">
        <div className="nav-inner">
          <SmartLink href="/" className="nav-logo" onClick={() => setMobileMenuOpen(false)}>
            <img
              src="/images/virxyd-brand-header.png"
              alt="Virxyd Logo"
              className="nav-brand-img"
            />
          </SmartLink>
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li>
              <SmartLink href="/fonctionnement" onClick={() => setMobileMenuOpen(false)}>{t('nav.how')}</SmartLink>
            </li>
            <li>
              <div className="nav-dropdown">
                <span className="nav-link-with-icon">{t('nav.services')} <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg></span>
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
                className="form-select mobile-lang-select"
                style={{ width: '100%', padding: '10px' }}
                value={locale}
                onChange={(e) => handleLocaleChange(e.target.value)}
              >
                <option value="FR">🇫🇷 {t('languages.fr')}</option>
                <option value="EN">🇬🇧 {t('languages.en')}</option>
                <option value="KW">🇰🇼 {t('languages.kw')}</option>
                <option value="SL">🇸🇮 {t('languages.sl')}</option>
                <option value="ES">🇪🇸 {t('languages.es')}</option>
                <option value="LT">🇱🇹 {t('languages.lt')}</option>
                <option value="DE">🇩🇪 {t('languages.de')}</option>
                <option value="IT">🇮🇹 {t('languages.it')}</option>
                <option value="HR">🇭🇷 {t('languages.hr')}</option>
                <option value="LV">🇱🇻 {t('languages.lv')}</option>
              </select>
            </li>
            <li className="mobile-only">
              <button className="btn-ghost" style={{ width: '100%', textAlign: 'left', padding: '16px 0' }} onClick={() => { openModal('app'); setMobileMenuOpen(false); }}>
                {t('nav.apply')}
              </button>
            </li>
            <li className="mobile-only" style={{ borderBottom: 'none', paddingTop: '16px' }}>
              <button className="btn-full" onClick={() => { openModal('app'); setMobileMenuOpen(false); }}>
                {t('nav.apply')}
              </button>
            </li>
          </ul>
          <div className="nav-actions">
            <button id="navCta" className={`desktop-only-cta ${hiddenCta ? 'hidden-cta' : ''}`} onClick={() => openModal('app')}>
              {t('nav.apply')}
            </button>
            <select
              className="form-select desktop-lang"
              style={{ width: 'auto', padding: '6px 32px 6px 12px', fontSize: '12px', backgroundPosition: 'right 8px center' }}
              value={locale}
              onChange={(e) => handleLocaleChange(e.target.value)}
            >
              <option value="FR">🇫🇷 FR</option>
              <option value="EN">🇬🇧 EN</option>
              <option value="KW">🇰🇼 KW</option>
              <option value="SL">🇸🇮 SL</option>
              <option value="ES">🇪🇸 ES</option>
              <option value="LT">🇱🇹 LT</option>
              <option value="DE">🇩🇪 DE</option>
              <option value="IT">🇮🇹 IT</option>
              <option value="HR">🇭🇷 HR</option>
              <option value="LV">🇱🇻 LV</option>
            </select>
            <button className="nav-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <div className="ham-lines">
                  <span className="ham-bar"></span>
                  <span className="ham-bar"></span>
                  <span className="ham-bar"></span>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
