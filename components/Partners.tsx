'use client';

import Reveal from './Reveal';
import { useAppState } from './AppState';

const partners = [
  { name: 'Cofidis', logo: '/images/Cofidis.png', height: '75px' },
  { name: 'Cetelem', logo: '/images/cetelem.png', height: '65px' },
  { name: 'Sofinco', logo: '/images/sofinco.png', height: '75px' },
  { name: 'Oney', logo: '/images/Oney-logo.jpg', height: '70px' },
  { name: 'AXA', logo: '/images/AXA-Logo.png', height: '80px' },
  { name: 'Noris', logo: '/images/noris.webp', height: '70px' },
  { name: 'Revolut', logo: '/images/revolut.png', height: '75px' },
  { name: 'Franfinance', logo: '/images/franfinance-logo.jpg', height: '65px' },
  { name: 'FLOA Bank', logo: '/images/floa-bank.jpg', height: '70px' },
  { name: 'Younited Credit', logo: '/images/younited.jpeg', height: '75px' },
];

export default function Partners() {
  const { t } = useAppState();

  return (
    <section className="section" style={{ background: '#fff', padding: '60px 0', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="sec-header center" style={{ marginBottom: '50px' }}>
          <Reveal>
            <h2 className="sec-title" style={{ fontSize: '24px', color: 'var(--navy)', fontFamily: 'var(--font-dm-serif)', opacity: 0.9 }}>
              {t('home.partners_title')}
            </h2>
          </Reveal>
        </div>
        <div className="partners-list" style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '50px 80px'
        }}>
          {partners.map((partner, i) => (
            <Reveal key={partner.name} delay={i * 0.05}>
              <div className="partner-item" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '150px'
              }}>
                <img
                  src={partner.logo}
                  alt={partner.name}
                  style={{
                    height: partner.height,
                    width: 'auto',
                    maxWidth: '220px',
                    objectFit: 'contain',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
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
