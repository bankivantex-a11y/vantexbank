import Image from 'next/image';
import Reveal from './Reveal';

const testimonials = [
  {
    stars: '★★★★★',
    amount: 'Prêt obtenu : 25 000 €',
    text: "C'est grâce à Vantex Bank que j'ai pu financer les travaux de ma maison. Procédure ultra simple, réponse en 36h, et une équipe au top. Je n'aurais pas cru que c'était possible en ligne !",
    avatar: 'https://i.pravatar.cc/80?img=47',
    name: 'Sophie L.',
    meta: 'Lyon · Octobre 2025',
  },
  {
    stars: '★★★★★',
    amount: 'Prêt obtenu : 12 000 €',
    text: "Après plusieurs refus dans des banques classiques, Vantex m'a accordé mon prêt auto. Le taux est imbattable et le formulaire se remplit en 10 minutes chrono. Très sérieux !",
    avatar: 'https://i.pravatar.cc/80?img=12',
    name: 'Karim M.',
    meta: 'Bruxelles · Août 2025',
  },
  {
    stars: '★★★★★',
    amount: 'Prêt obtenu : 50 000 €',
    text: "J'ai pu lancer mon entreprise grâce à ce prêt professionnel. Dossier traité rapidement, conseillers disponibles, et virement reçu en 3 jours après signature. Parfait !",
    avatar: 'https://i.pravatar.cc/80?img=33',
    name: 'David T.',
    meta: 'Genève · Juillet 2025',
  },
  {
    stars: '★★★★★',
    amount: 'Prêt obtenu : 8 000 €',
    text: 'Pour regrouper mes crédits, Vantex Bank était la solution parfaite. Formulaire clair, taux transparent, et le sourire au lèvres quand j\'ai vu le virement. Vraiment merci !',
    avatar: 'https://i.pravatar.cc/80?img=5',
    name: 'Aïcha B.',
    meta: 'Marseille · Juin 2025',
  },
  {
    stars: '★★★★★',
    amount: 'Prêt obtenu : 30 000 €',
    text: "C'est grâce à celui-ci que j'ai pu avoir le prêt immobilier dont je rêvais. La plateforme est intuitive, les conseillers disponibles et professionnels. Je recommande sans hésiter.",
    avatar: 'https://i.pravatar.cc/80?img=25',
    name: 'Mei L.',
    meta: 'Paris · Mai 2025',
  },
  {
    stars: '★★★★☆',
    amount: 'Prêt obtenu : 18 000 €',
    text: "Un service professionnel et rassurant pour ceux qui hésitent à faire ça en ligne. Mon conseiller m'a rappelé pour expliquer chaque étape. Résultat : virement reçu sous 72h !",
    avatar: 'https://i.pravatar.cc/80?img=68',
    name: 'Robert P.',
    meta: 'Amsterdam · Avril 2025',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="sec-header center">
          <Reveal className="sec-label">Ce qu&apos;ils disent</Reveal>
          <Reveal delay={1}>
            <h2 className="sec-title">Ils ont obtenu leur prêt avec Vantex Bank</h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="sec-desc">
              Des milliers de clients font confiance à Vantex Bank pour financer leurs projets de vie.
            </p>
          </Reveal>
        </div>
        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) + 1} className="testi-card">
              <div className="testi-verified">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>{' '}
                Vérifié
              </div>
              <div className="testi-stars">{t.stars}</div>
              <div className="testi-amount">{t.amount}</div>
              <p className="testi-text">&quot;{t.text}&quot;</p>
              <div className="testi-foot">
                <Image className="testi-avatar" src={t.avatar} alt={t.name} width={44} height={44} loading="lazy" />
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-meta">{t.meta}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
