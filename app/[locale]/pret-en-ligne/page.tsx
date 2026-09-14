'use client';

import Reveal from '@/components/Reveal';
import { useAppState } from '@/components/AppState';

export default function OnlineLoanPage() {
  const { openModal } = useAppState();

  return (
    <main className="art-container">
      <Reveal>
        <h1 className="art-title">Notre crédit en ligne, en résumé</h1>
        <p className="art-intro">
          Vous souhaitez financer un projet ou faire face à une dépense imprévue ? Notre service de crédit en ligne vous permet d’effectuer votre demande rapidement, sans avoir à vous déplacer.
        </p>
      </Reveal>

      <section className="art-section">
        <Reveal delay={1}>
          <div className="art-text">
            En quelques minutes, vous complétez votre formulaire de financement en ligne et obtenez une première réponse de principe. Si votre dossier est retenu, vous poursuivez vos démarches directement à distance grâce à la signature électronique et au téléchargement sécurisé de vos justificatifs.
          </div>
          <div className="art-text">
            La mission de <strong>Vantex Bank</strong> est de simplifier chaque étape de votre demande de prêt en ligne, afin de vous faire gagner du temps et de vous offrir un accompagnement tout au long de votre parcours.
          </div>
        </Reveal>
      </section>

      <section className="art-section">
        <Reveal delay={2}>
          <h3>Les principales caractéristiques</h3>
          <ul className="art-list">
            <li>TAEG fixe ou révisable</li>
            <li>Montant empruntable de 500 € à 75 000 €</li>
            <li>Durée de remboursement de 12 à 72 mois</li>
          </ul>
        </Reveal>
      </section>

      <div className="art-summary">
        <Reveal>
          <div className="art-summary-title">Sommaire</div>
          <div className="art-summary-links">
            <a href="#demande">Faire une demande de crédit en ligne avec Vantex Bank</a>
            <a href="#pourquoi">Pourquoi choisir un crédit en ligne ?</a>
            <a href="#cout">Combien coûte un prêt en ligne ?</a>
            <a href="#delai">Délai pour obtenir l’argent</a>
            <a href="#justificatifs">Les justificatifs à fournir</a>
            <a href="#qui">Qui peut obtenir un crédit en ligne ?</a>
          </div>
        </Reveal>
      </div>

      <section id="demande" className="art-section">
        <Reveal>
          <h2>Faire une demande de crédit en ligne avec Vantex Bank</h2>
          <div className="art-text">
            Réaliser une demande de crédit en ligne avec Vantex Bank est simple, rapide et entièrement dématérialisé. Depuis votre ordinateur, votre tablette ou votre smartphone, vous pouvez constituer votre dossier en quelques minutes, gratuitement et sans engagement.
          </div>

          <h3>Les étapes de votre demande</h3>
          <ul className="art-list">
            <li><strong>1. Remplissez votre demande :</strong> Indiquez le montant souhaité, la durée de remboursement et vos informations.</li>
            <li><strong>2. Recevez une réponse de principe :</strong> Une fois transmise, vous obtenez une réponse immédiate.</li>
            <li><strong>3. Finalisez votre dossier :</strong> Signez électroniquement et transmettez vos pièces via l'espace sécurisé.</li>
            <li><strong>4. Recevez les fonds :</strong> Après validation, les fonds sont versés sur votre compte.</li>
          </ul>
        </Reveal>
      </section>

      <section id="cout" className="art-section">
        <Reveal>
          <h2>Combien coûte un prêt en ligne ?</h2>
          <div className="art-text">
            Le coût d’un prêt en ligne varie selon plusieurs paramètres, notamment le TAEG, le montant emprunté et la durée de remboursement.
          </div>
          <div className="art-table-wrap">
            <table className="art-table">
              <thead>
                <tr>
                  <th>Durée</th>
                  <th>Meilleur taux TAEG fixe</th>
                  <th>Mensualités</th>
                  <th>Coût total du crédit</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Sur 12 mois</td><td className="highlight">0,90%</td><td>837,38€</td><td>48,56€</td></tr>
                <tr><td>Sur 36 mois</td><td className="highlight">7,39%</td><td>309,46€</td><td>1 140,56€</td></tr>
                <tr><td>Sur 60 mois</td><td className="highlight">4,90%</td><td>187,77€</td><td>1 266,20€</td></tr>
                <tr><td>Sur 72 mois</td><td className="highlight">6,99%</td><td>169,41€</td><td>2 197,52€</td></tr>
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      <section id="justificatifs" className="art-section">
        <Reveal>
          <h2>Les justificatifs à fournir</h2>
          <div className="art-text">
            Il n’existe pas de crédit sans aucun justificatif. Les pièces couramment demandées sont :
          </div>
          <ul className="art-list">
            <li>Une pièce d’identité en cours de validité</li>
            <li>Un justificatif de domicile récent</li>
            <li>Vos derniers justificatifs de revenus (bulletins de salaire, avis d’imposition)</li>
            <li>Un relevé d’identité bancaire (RIB)</li>
          </ul>
        </Reveal>
      </section>

      <div className="art-cta-box">
        <Reveal>
          <h2 className="art-cta-title">Prêt à réaliser votre projet ?</h2>
          <p className="art-cta-text">Obtenez une réponse de principe immédiate en remplissant notre formulaire sécurisé.</p>
          <button className="btn-primary" style={{ boxShadow: 'none', background: '#fff', color: 'var(--navy)' }} onClick={() => openModal('app')}>
            Accéder au formulaire de crédit
          </button>
        </Reveal>
      </div>
    </main>
  );
}
