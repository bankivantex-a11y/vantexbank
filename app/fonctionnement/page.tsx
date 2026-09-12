import Steps from '@/components/Steps';
import Reveal from '@/components/Reveal';

export default function FonctionnementPage() {
  return (
    <div>
      <section className="section" style={{ paddingTop: 90 }}>
        <div className="container">
          <div className="sec-header center">
            <Reveal>
              <div className="sec-label">Notre Processus</div>
              <h1 className="sec-title">Comment fonctionne Vantex Bank ?</h1>
              <p className="sec-desc">
                Nous avons simplifié le crédit pour que vous puissiez vous concentrer sur vos projets.
                Une expérience 100% digitale, transparente et sécurisée.
              </p>
            </Reveal>
          </div>

          <Steps />

          <div className="reveal visible" style={{ marginTop: 40, padding: 40, background: 'var(--bg)', borderRadius: 24 }}>
            <h2 className="step-title" style={{ fontSize: 28 }}>Une solution en cas de dépenses imprévues</h2>
            <p className="step-desc" style={{ fontSize: 16, maxWidth: 800 }}>
              L'un des cas les plus fréquents est la survenue d'une dépense imprévue. Une panne de voiture, une réparation urgente dans le logement, le remplacement d'un appareil électroménager indispensable ou encore une facture inattendue peuvent rapidement déséquilibrer un budget.
              <br /><br />
              Lorsque ces dépenses ne peuvent pas attendre la prochaine rentrée d'argent, un mini crédit permet de disposer rapidement des fonds nécessaires pour faire face à la situation.
              <br /><br />
              Le mini crédit peut également servir à financer de nombreux autres achats de faibles montants :
            </p>
            <ul style={{ color: 'var(--muted)', marginTop: 16, paddingLeft: 20, lineHeight: 1.8 }}>
              <li>Un ordinateur ou smartphone</li>
              <li>Un vélo ou du mobilier</li>
              <li>Un appareil électroménager</li>
              <li>Une formation ou un voyage</li>
            </ul>
            <p className="step-desc" style={{ fontSize: 16, maxWidth: 800, marginTop: 24 }}>
              Dans ce type de situation, le mini crédit permet d’étaler une dépense dans le temps sans avoir à mobiliser immédiatement son épargne. Il constitue ainsi une solution pratique pour concrétiser un projet tout en préservant votre budget.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
