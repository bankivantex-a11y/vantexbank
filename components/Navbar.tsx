'use client';

import { useEffect, useRef, useState } from 'react';
import { useAppState } from './AppState';

export default function Navbar() {
  const { openModal } = useAppState();
  const [scrolled, setScrolled] = useState(false);
  const [hiddenCta, setHiddenCta] = useState(false);
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
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <div className="nav-logo-icon">V</div>
            <span className="nav-logo-text">
              Vantex <span>Bank</span>
            </span>
          </a>
          <ul className="nav-links">
            <li>
              <a href="#steps">Fonctionnement</a>
            </li>
            <li>
              <a href="#simulator">Simulateur</a>
            </li>
            <li>
              <a href="#conditions">Conditions</a>
            </li>
            <li>
              <a href="#testimonials">Témoignages</a>
            </li>
          </ul>
          <div className="nav-actions">
            <button className="btn-ghost" onClick={() => openModal('auth')}>
              Se connecter
            </button>
            <button id="navCta" className={hiddenCta ? 'hidden-cta' : ''} onClick={() => openModal('auth')}>
              Demander un prêt
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
