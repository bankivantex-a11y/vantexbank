import Reveal from '@/components/Reveal';

const faqs = [
  {
    q: "Comment obtenir un mini crédit rapidement ?",
    a: "La demande de mini crédit s'effectue directement en ligne sur Vantex Bank. Il vous suffit de compléter votre dossier et de transmettre les informations demandées. Pour accélérer le versement des fonds, il est recommandé de signer votre contrat électroniquement le plus vite possible."
  },
  {
    q: "Quels sont les taux d'un mini crédit ?",
    a: "Le taux d'un mini crédit dépend notamment du montant emprunté et de la durée de remboursement. Avant toute souscription, il est important de vérifier le TAEG, le montant des échéances ainsi que le coût total du crédit qui figurent sur votre contrat personnalisé."
  },
  {
    q: "Quel salaire faut-il pour obtenir un mini crédit ?",
    a: "Il n'existe pas de salaire minimum strict pour obtenir un mini crédit chez nous. L'étude du dossier prend en compte l'ensemble de votre situation financière, notamment vos revenus, vos charges et votre capacité de remboursement globale."
  },
  {
    q: "Une solution en cas de dépenses imprévues ?",
    a: "Le mini crédit est idéal pour faire face à une dépense imprévue (panne de voiture, réparation urgente, facture inattendue) ou pour financer un petit achat (ordinateur, smartphone, voyage) sans mobiliser immédiatement votre épargne."
  }
];

export default function HelpCenterPage() {
  return (
    <div>
      <section className="section" style={{ paddingTop: 90 }}>
        <div className="container">
          <Reveal>
            <div className="sec-label">Centre d'aide</div>
            <h1 className="sec-title">Questions Fréquentes (FAQ)</h1>
            <p className="sec-desc">
              Retrouvez ici les réponses aux questions les plus courantes sur nos services de financement.
            </p>
          </Reveal>

          <div style={{ marginTop: 60, display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 800 }}>
            {faqs.map((faq, index) => (
              <Reveal key={index} delay={((index % 4) + 1) as 1 | 2 | 3 | 4}>
                <div style={{
                  padding: 24,
                  background: 'var(--bg)',
                  borderRadius: 16,
                  border: '1px solid var(--border)'
                }}>
                  <h3 style={{
                    fontFamily: 'var(--font-dm-serif)',
                    fontSize: 20,
                    color: 'var(--navy)',
                    marginBottom: 12
                  }}>
                    {faq.q}
                  </h3>
                  <p style={{
                    color: 'var(--muted)',
                    lineHeight: 1.6,
                    fontSize: 15
                  }}>
                    {faq.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div style={{ marginTop: 80, textAlign: 'left' }}>
            <Reveal>
              <h2 className="sec-title" style={{ fontSize: 28 }}>Vous n'avez pas trouvé votre réponse ?</h2>
              <p className="sec-desc">
                Nos conseillers sont à votre disposition pour vous accompagner dans vos démarches.
              </p>
              <a href="/contact" className="btn-primary" style={{ display: 'inline-block', marginTop: 24 }}>
                Contacter un expert →
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
