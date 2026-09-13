'use client';

import Reveal from '@/components/Reveal';
import { useAppState } from '@/components/AppState';

export default function NoProofLoanPage() {
  const { openModal } = useAppState();

  return (
    <main className="art-container">
      <Reveal>
        <h1 className="art-title">Le crédit sans justificatif : Tout comprendre</h1>
        <p className="art-intro">
          Le terme "crédit sans justificatif" est souvent mal compris. Il ne signifie pas qu'aucun document n'est requis, mais plutôt que vous n'avez pas à justifier l'utilisation des fonds.
        </p>
      </Reveal>

      <section className="art-section">
        <Reveal delay={1}>
          <h2>Qu'est-ce qu'un crédit sans justificatif ?</h2>
          <div className="art-text">
            Contrairement à un crédit affecté (auto ou travaux) où vous devez fournir une facture, le prêt personnel sans justificatif d'utilisation vous laisse libre. Vous utilisez la somme empruntée comme bon vous semble : voyage, loisirs, trésorerie, ou projets personnels multiples.
          </div>
          <div className="art-text">
            Chez <strong>Vantex Bank</strong>, nous respectons votre vie privée. Une fois le prêt accordé, les fonds sont à votre entière disposition sans contrôle sur vos factures d'achat.
          </div>
        </Reveal>
      </section>

      <div className="art-summary">
        <Reveal>
          <div className="art-summary-title">Sommaire</div>
          <div className="art-summary-links">
            <a href="#fonctionnement">Comment ça fonctionne ?</a>
            <a href="#avantages">Les avantages du prêt non affecté</a>
            <a href="#documents">Quels documents reste-t-il à fournir ?</a>
            <a href="#demande">Faire sa demande en ligne</a>
          </div>
        </Reveal>
      </div>

      <section id="avantages" className="art-section">
        <Reveal>
          <h2>Les avantages du prêt non affecté</h2>
          <ul className="art-list">
            <li><strong>Liberté totale :</strong> Aucune facture à transmettre pour débloquer les fonds.</li>
            <li><strong>Rapidité :</strong> Etude du dossier simplifiée car pas de devis à vérifier.</li>
            <li><strong>Flexibilité :</strong> Possibilité de financer plusieurs petits projets avec un seul prêt.</li>
          </ul>
        </Reveal>
      </section>

      <section id="documents" className="art-section">
        <Reveal>
          <h2>Les documents indispensables</h2>
          <div className="art-text">
            Même si l'usage des fonds est libre, la banque doit vérifier votre solvabilité. Vous devrez fournir :
          </div>
          <ul className="art-list">
            <li>Identité (CNI ou Passeport)</li>
            <li>Justificatif de revenus (pour garantir le remboursement)</li>
            <li>RIB pour le versement des fonds</li>
          </ul>
        </Reveal>
      </section>

      <div className="art-cta-box">
        <Reveal>
          <h2 className="art-cta-title">Besoin de liberté financière ?</h2>
          <p className="art-cta-text">Demandez votre crédit sans justificatif d'utilisation et recevez une réponse immédiate.</p>
          <button className="btn-primary" style={{ boxShadow: 'none', background: '#fff', color: 'var(--navy)' }} onClick={() => openModal('app')}>
            Simuler mon crédit maintenant
          </button>
        </Reveal>
      </div>
    </main>
  );
}
