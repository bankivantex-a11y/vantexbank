import Reveal from '@/components/Reveal';

export default function MentionsLegalesPage() {
  return (
    <section className="section" style={{ paddingTop: 100 }}>
      <div className="container">
        <Reveal>
          <div className="sec-label">Juridique</div>
          <h1 className="sec-title">Mentions Légales</h1>
          <div className="legal-content" style={{ marginTop: 40, maxWidth: 800 }}>
            <h3>1. Présentation du site</h3>
            <p>
              Le site <strong>Vantex Bank</strong> est la plateforme officielle de services bancaires en ligne de Vantex Bank S.A.,
              dédiée à l'accompagnement financier de ses clients particuliers et professionnels à travers le monde.
            </p>

            <h3>2. Éditeur</h3>
            <p>
              Vantex Bank (SAS Cap Au Nord)<br />
              Capital social : 50 000 000 €<br />
              Siège social : 12 Avenue de la Banque, 75008 Paris, France<br />
              Enregistré à l'ORIAS sous le numéro <strong>14807766</strong>.<br />
              Immatriculée au RCS sous le numéro 123 456 789.
            </p>

            <h3>3. Hébergement</h3>
            <p>
              Ce site est hébergé par Vercel Inc.<br />
              440 N Barranca Ave #4133, Covina, CA 91723.
            </p>

            <h3>4. Activité réglementée</h3>
            <p>
              Vantex Bank est un établissement de crédit et de services d&apos;investissement agréé par l&apos;Autorité de Contrôle
              Prudentiel et de Résolution (ACPR).
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
