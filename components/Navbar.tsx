'use client';

import { useEffect, useRef, useState } from 'react';
import { useAppState } from './AppState';
import SmartLink from './SmartLink';

export default function Navbar() {
  const { openModal } = useAppState();
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
              <SmartLink href="/fonctionnement" onClick={() => setMobileMenuOpen(false)}>Fonctionnement</SmartLink>
            </li>
            <li>
              <SmartLink href="/simulateur" onClick={() => setMobileMenuOpen(false)}>Simulateur</SmartLink>
            </li>
            <li>
              <SmartLink href="/conditions" onClick={() => setMobileMenuOpen(false)}>Conditions</SmartLink>
            </li>
            <li>
              <SmartLink href="/temoignages" onClick={() => setMobileMenuOpen(false)}>Témoignages</SmartLink>
            </li>
            <li>
              <SmartLink href="/a-propos" onClick={() => setMobileMenuOpen(false)}>À Propos</SmartLink>
            </li>
            <li>
              <SmartLink href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</SmartLink>
            </li>
            <li className="mobile-only" style={{ padding: '20px 0' }}>
              <select
                className="form-select"
                style={{ width: '100%', padding: '10px' }}
                defaultValue="FR"
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
              <button className="btn-ghost" style={{ width: '100%', textAlign: 'left', padding: '20px 0' }} onClick={() => { openModal('auth'); setMobileMenuOpen(false); }}>
                Se connecter
              </button>
            </li>
            <li className="mobile-only" style={{ borderBottom: 'none', paddingTop: '20px' }}>
              <button className="btn-full" onClick={() => { openModal('auth'); setMobileMenuOpen(false); }}>
                Demander un prêt
              </button>
            </li>
          </ul>
          <div className="nav-actions">
            <select
              className="form-select"
              style={{ width: 'auto', padding: '5px 30px 5px 10px', fontSize: '12px', border: '1px solid var(--border)', backgroundPosition: 'right 8px center' }}
              defaultValue="FR"
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
            <button id="navCta" className={hiddenCta ? 'hidden-cta' : ''} onClick={() => openModal('auth')}>
              Demander un prêt
            </button>
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
