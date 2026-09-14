'use client';

import Reveal from './Reveal';
import { useAppState } from './AppState';
import { useEffect, useState } from 'react';

const partners = [
  { name: 'Cofidis', logo: '/images/Cofidis.png', h: 75, hMob: 45 },
  { name: 'Cetelem', logo: '/images/cetelem.png', h: 65, hMob: 40 },
  { name: 'Sofinco', logo: '/images/sofinco.png', h: 75, hMob: 45 },
  { name: 'Oney', logo: '/images/Oney-logo.jpg', h: 70, hMob: 42 },
  { name: 'AXA', logo: '/images/AXA-Logo.png', h: 80, hMob: 50 },
  { name: 'Noris', logo: '/images/noris.webp', h: 70, hMob: 42 },
  { name: 'Revolut', logo: '/images/revolut.png', h: 75, hMob: 45 },
  { name: 'Franfinance', logo: '/images/franfinance-logo.jpg', h: 65, hMob: 38 },
  { name: 'FLOA Bank', logo: '/images/floa-bank.jpg', h: 70, hMob: 42 },
  { name: 'Younited Credit', logo: '/images/younited.jpeg', h: 75, hMob: 45 },
];

export default function Partners() {
  const { t } = useAppState();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="section" style={{ background: '#fff', padding: isMobile ? '40px 0' : '60px 0', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="sec-header center" style={{ marginBottom: isMobile ? '30px' : '50px' }}>
          <Reveal>
            <h2 className="sec-title" style={{ fontSize: isMobile ? '20px' : '24px', color: 'var(--navy)', fontFamily: 'var(--font-dm-serif)', opacity: 0.9 }}>
              {t('home.partners_title')}
            </h2>
          </Reveal>
        </div>
        <div className="partners-list" style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(150px, 1fr))',
          alignItems: 'center',
          justifyContent: 'center',
          gap: isMobile ? '30px 20px' : '50px 80px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {partners.map((partner, i) => (
            <Reveal key={partner.name} delay={i * 0.05}>
              <div className="partner-item" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 10px'
              }}>
                <img
                  src={partner.logo}
                  alt={partner.name}
                  style={{
                    height: isMobile ? `${partner.hMob}px` : `${partner.h}px`,
                    width: 'auto',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    if (!isMobile) e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseOut={(e) => {
                    if (!isMobile) e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
