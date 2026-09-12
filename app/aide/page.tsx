import Reveal from '@/components/Reveal';

const faqs = [
  {
    q: "Quels sont les documents nécessaires pour ma demande ?",
    a: "Pour traiter votre dossier, nous avons besoin d'une pièce d'identité valide, de vos trois derniers bulletins de salaire et de vos trois derniers relevés de compte bancaire. Ces documents peuvent être téléchargés directement dans votre espace sécurisé."
  },
  {
    q: "Quel est le délai de réponse pour un prêt ?",
    a: "Vantex Bank s'engage à vous fournir une réponse de principe immédiate après votre simulation en ligne. La validation définitive de votre dossier intervient sous 48 heures ouvrées après réception des pièces justificatives complètes."
  },
  {
    q: "Puis-je rembourser mon prêt par anticipation ?",
    a: "Oui, vous pouvez rembourser tout ou partie de votre crédit par anticipation à tout moment. Conformément à notre politique de transparence, aucun frais de remboursement anticipé n'est appliqué pour les montants inférieurs à 10 000 €."
  },
  {
    q: "Comment sont calculés les taux d'intérêt ?",
    a: "Nos taux sont fixes et garantis pendant toute la durée du contrat. Ils dépendent du montant emprunté, de la durée de remboursement et de votre situation financière globale. Le taux actuel de référence est de 2,75%."
  },
  {
    q: "Mes données personnelles sont-elles en sécurité ?",
    a: "La sécurité est notre priorité absolue. Vos données sont chiffrées selon les standards bancaires les plus stricts (SSL 256-bit) et nous respectons scrupuleusement le RGPD. Aucune donnée n'est vendue à des tiers."
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
              <Reveal key={index} delay={index * 1}>
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
