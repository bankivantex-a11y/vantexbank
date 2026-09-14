'use client';

import Reveal from './Reveal';
import { useAppState } from './AppState';

const partners = [
  { name: 'Cofidis', logo: 'https://logo.clearbit.com/cofidis.fr' },
  { name: 'Cetelem', logo: 'https://logo.clearbit.com/cetelem.fr' },
  { name: 'Sofinco', logo: 'https://logo.clearbit.com/sofinco.fr' },
  { name: 'Oney', logo: 'https://logo.clearbit.com/oney.fr' },
  { name: 'Revolut', logo: 'https://logo.clearbit.com/revolut.com' },
  { name: 'Franfinance', logo: 'https://logo.clearbit.com/franfinance.fr' },
  { name: 'FLOA Bank', logo: 'https://logo.clearbit.com/floabank.fr' },
  { name: 'Younited Credit', logo: 'https://logo.clearbit.com/younited-credit.com' },
];

export default function Partners() {
  const { t } = useAppState();

  return (
    <section className="section" style={{ background: '#fff', padding: '60px 0', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="sec-header center">
          <Reveal>
            <h2 className="sec-title" style={{ fontSize: '24px', color: 'var(--navy)', marginBottom: '40px', fontFamily: 'var(--font-dm-serif)' }}>
              {t('home.partners_title')}
            </h2>
          </Reveal>
        </div>
        <div className="partners-grid" style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '30px 50px'
        }}>
          {partners.map((partner, i) => (
            <Reveal key={partner.name} delay={i * 0.1}>
              <div className="partner-item" style={{
                height: '40px',
                width: '100px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img
                  src={partner.logo}
                  alt={partner.name}
                  style={{
                    maxHeight: '100%',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    filter: 'grayscale(100%) brightness(0.8)',
                    opacity: 0.6,
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.filter = 'none';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.filter = 'grayscale(100%) brightness(0.8)';
                    e.currentTarget.style.opacity = '0.6';
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
