import Image from 'next/image';
import Reveal from './Reveal';

const items = [
  { strong: 'Être majeur(e)', text: '— Avoir au minimum 18 ans révolus à la date de la demande' },
  { strong: 'Résidence éligible', text: "— Être résident(e) en Europe, Asie (Koweït...), ou Australie" },
  {
    strong: 'Revenus fixes mensuels',
    text: '— Justifier d\'une rémunération régulière (CDI, fonctionnaire, indépendant, retraité…)',
  },
  { strong: 'Taux annuel fixe de 2,75%', text: '— Garanti pour toute la durée de remboursement' },
  { strong: 'Durée flexible', text: '— Entre 12 et 360 mois selon votre capacité de remboursement' },
];

export default function Conditions() {
  return (
    <section id="conditions" className="section">
      <div className="container">
        <div className="cond-inner">
          <Reveal>
            <div className="sec-label" style={{ color: 'rgba(255,255,255,.55)' }}>
              Éligibilité
            </div>
            <h2 className="cond-title">Conditions d&apos;accès au prêt</h2>
            <p className="cond-desc">
              Vantex Bank est accessible aux résidents d&apos;Europe et d&apos;Asie répondant aux critères
              ci-dessous.
            </p>
            <ul className="cond-list">
              {items.map((item) => (
                <li className="cond-item" key={item.strong}>
                  <div className="cond-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="cond-text">
                    <strong>{item.strong}</strong> {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="right" delay={2} className="cond-image">
            <div className="cond-img-wrap">
              <Image
                src="https://images.unsplash.com/photo-1758518727592-706e80ebc354?w=600&h=500&fit=crop&crop=top&auto=format"
                alt="Conseillère Vantex Bank"
                width={600}
                height={500}
                loading="lazy"
              />
            </div>
            <div className="cond-stat-pop">
              <div className="cond-stat-ttl">Dossiers traités</div>
              <div className="cond-stat-val">50 000+</div>
              <div className="cond-stat-sub">↑ 94% de satisfaction client</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
