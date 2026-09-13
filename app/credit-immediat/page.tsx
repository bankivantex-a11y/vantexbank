'use client';

import Reveal from '@/components/Reveal';
import { useAppState } from '@/components/AppState';

export default function ImmediateLoanPage() {
  const { openModal } = useAppState();

  return (
    <main className="art-container">
      <Reveal>
        <h1 className="art-title">Crédit Immédiat : Financer l'urgence</h1>
        <p className="art-intro">
          Une panne de voiture ? Un besoin de trésorerie sous 48h ? Le crédit immédiat est conçu pour répondre aux imprévus de la vie avec une rapidité record.
        </p>
      </Reveal>

      <section className="art-section">
        <Reveal delay={1}>
          <h2>La rapidité au service de vos projets</h2>
          <div className="art-text">
            Le crédit immédiat se distingue par un parcours de souscription ultra-simplifié. Chez <strong>Vantex Bank</strong>, nous avons optimisé chaque étape pour que le délai entre votre besoin et la disponibilité des fonds soit le plus court possible.
          </div>
        </Reveal>
      </section>

      <div className="art-summary">
        <Reveal>
          <div className="art-summary-title">Sommaire</div>
          <div className="art-summary-links">
            <a href="#delais">Les délais réels de versement</a>
            <a href="#fonctionnement">Comment obtenir les fonds vite ?</a>
            <a href="#conditions">Conditions légales obligatoires</a>
            <a href="#demande">Démarrer en 2 minutes</a>
          </div>
        </Reveal>
      </div>

      <section id="delais" className="art-section">
        <Reveal>
          <h2>Délais d'obtention : Ce qu'il faut savoir</h2>
          <div className="art-text">
            Bien que la réponse soit immédiate, le versement des fonds suit des règles légales strictes pour protéger l'emprunteur.
          </div>
          <ul className="art-list">
            <li><strong>Réponse de principe :</strong> Instantanée après validation du formulaire.</li>
            <li><strong>Validation finale :</strong> Sous 24h ouvrées après réception des pièces.</li>
            <li><strong>Mise à disposition :</strong> À partir du 8ème jour (délai légal de rétractation).</li>
          </ul>
        </Reveal>
      </section>

      <section id="astuces" className="art-section">
        <Reveal>
          <h2>3 astuces pour accélérer votre virement</h2>
          <ul className="art-list">
            <li><strong>Utilisez la signature électronique :</strong> Évite les délais postaux (gain de 3 à 5 jours).</li>
            <li><strong>Préparez vos justificatifs :</strong> Ayez votre CNI et RIB prêts en format numérique.</li>
            <li><strong>Vérifiez la lisibilité :</strong> Des photos claires évitent les demandes de renvoi de documents.</li>
          </ul>
        </Reveal>
      </section>

      <div className="art-cta-box">
        <Reveal>
          <h2 className="art-cta-title">Une urgence à financer ?</h2>
          <p className="art-cta-text">Remplissez votre dossier maintenant et recevez votre accord de principe en moins de 2 minutes.</p>
          <button className="btn-primary" style={{ boxShadow: 'none', background: '#fff', color: 'var(--navy)' }} onClick={() => openModal('app')}>
            Accéder au formulaire express
          </button>
        </Reveal>
      </div>
    </main>
  );
}
