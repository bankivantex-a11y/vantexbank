'use client';

import { useEffect, useRef, useState } from 'react';
import { useAppState } from './AppState';

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
          <a href="#" className="nav-logo">
            <div className="nav-logo-icon">V</div>
            <span className="nav-logo-text">
              Vantex <span>Bank</span>
            </span>
          </a>
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li>
              <a href="#steps" onClick={() => setMobileMenuOpen(false)}>Fonctionnement</a>
            </li>
            <li>
              <a href="#simulator" onClick={() => setMobileMenuOpen(false)}>Simulateur</a>
            </li>
            <li>
              <a href="#conditions" onClick={() => setMobileMenuOpen(false)}>Conditions</a>
            </li>
            <li>
              <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Témoignages</a>
            </li>
            <li className="mobile-only">
              <button className="btn-ghost" onClick={() => { openModal('auth'); setMobileMenuOpen(false); }}>
                Se connecter
              </button>
            </li>
          </ul>
          <div className="nav-actions">
            <button className="btn-ghost desktop-only" onClick={() => openModal('auth')}>
              Se connecter
            </button>
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
