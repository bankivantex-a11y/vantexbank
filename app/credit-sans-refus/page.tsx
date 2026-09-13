'use client';

import Reveal from '@/components/Reveal';
import { useAppState } from '@/components/AppState';

export default function NoRefusalPage() {
  const { openModal } = useAppState();

  return (
    <main className="art-container">
      <Reveal>
        <h1 className="art-title">Obtenir un crédit sans refus : La réalité</h1>
        <p className="art-intro">
          Le "crédit sans refus" garanti à 100% n'existe légalement pas. Cependant, il existe des solutions pour maximiser vos chances d'acceptation immédiate.
        </p>
      </Reveal>

      <section className="art-section">
        <Reveal delay={1}>
          <h2>Comment maximiser ses chances d'accord ?</h2>
          <div className="art-text">
            Pour éviter un refus automatique, il est crucial de présenter un dossier sain. La clé réside dans l'équilibre entre vos revenus et vos charges.
          </div>
          <div className="art-text">
            <strong>Vantex Bank</strong> utilise des algorithmes d'analyse bienveillants qui prennent en compte l'ensemble de votre situation, et pas seulement votre contrat de travail.
          </div>
        </Reveal>
      </section>

      <div className="art-summary">
        <Reveal>
          <div className="art-summary-title">Sommaire</div>
          <div className="art-summary-links">
            <a href="#criteres">Les critères d'acceptation</a>
            <a href="#astuces">Astuces pour un dossier parfait</a>
            <a href="#chances">Statistiques d'acceptation</a>
            <a href="#demande">Lancer ma simulation</a>
          </div>
        </Reveal>
      </div>

      <section id="criteres" className="art-section">
        <Reveal>
          <h2>Les critères qui favorisent l'acceptation</h2>
          <ul className="art-list">
            <li><strong>Stabilité :</strong> Une ancienneté dans votre logement ou emploi.</li>
            <li><strong>Capacité de remboursement :</strong> Un taux d'endettement inférieur à 35%.</li>
            <li><strong>Transparence :</strong> Fournir des informations exactes dès le premier formulaire.</li>
          </ul>
        </Reveal>
      </section>

      <section id="chances" className="art-section">
        <Reveal>
          <h2>Statistiques et profils</h2>
          <div className="art-text">
            D'après nos études internes, certains profils augmentent significativement les chances d'obtenir un avis favorable :
          </div>
          <ul className="art-list">
            <li>Emprunter à deux (co-emprunteur) augmente les chances de <strong>55%</strong>.</li>
            <li>Disposer d'un apport ou d'une épargne de précaution.</li>
            <li>Ne pas avoir eu d'incidents bancaires (rejets de prélèvement) les 3 derniers mois.</li>
          </ul>
        </Reveal>
      </section>

      <div className="art-cta-box">
        <Reveal>
          <h2 className="art-cta-title">Vérifiez votre éligibilité gratuitement</h2>
          <p className="art-cta-text">Notre simulateur vous donne une réponse de principe sans engagement et sans impact sur votre score de crédit.</p>
          <button className="btn-primary" style={{ boxShadow: 'none', background: '#fff', color: 'var(--navy)' }} onClick={() => openModal('app')}>
            Tester mon éligibilité
          </button>
        </Reveal>
      </div>
    </main>
  );
}
