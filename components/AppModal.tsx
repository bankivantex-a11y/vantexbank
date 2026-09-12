'use client';

import { useEffect, useRef, useState } from 'react';
import { useAppState } from './AppState';
import { fmt } from '@/lib/loan';

type Step = 1 | 2 | 3 | 4;

const DOCS = [
  { key: 'id', label: "Pièce d'identité (CNI ou passeport)", sub: 'PDF, JPG, PNG · Max 5 Mo' },
  { key: 'payslips', label: '3 derniers bulletins de salaire', sub: 'PDF · Max 10 Mo' },
  { key: 'statements', label: 'Relevés bancaires (3 derniers mois)', sub: 'PDF · Max 10 Mo' },
] as const;

export default function AppModal() {
  const { activeModal, closeModal, amount, months, loan } = useAppState();
  const isOpen = activeModal === 'app';

  const [step, setStep] = useState<Step>(1);
  const [transitioning, setTransitioning] = useState(false);
  const [uploaded, setUploaded] = useState<Record<string, boolean>>({});
  const [checks, setChecks] = useState({ chk1: false, chk2: false, chk3: false });
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const refCode = useRef('VTX-2026-0000');
  const boxRef = useRef<HTMLDivElement>(null);

  // Reset flow whenever the modal is (re)opened
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setUploaded({});
      setChecks({ chk1: false, chk2: false, chk3: false });
      setSubmitting(false);
      setShowSuccess(false);
    }
  }, [isOpen]);

  function goToStep(target: Step) {
    if (target <= step) {
      setStep(target);
      boxRef.current?.scrollTo({ top: 0 });
      return;
    }
    setTransitioning(true);
    setTimeout(() => {
      setTransitioning(false);
      setStep(target);
      boxRef.current?.scrollTo({ top: 0 });
    }, 800);
  }

  function simulateUpload(key: string) {
    setUploaded((prev) => ({ ...prev, [key]: true }));
  }

  function submitApplication() {
    if (!checks.chk1 || !checks.chk2 || !checks.chk3) {
      alert('Veuillez cocher toutes les cases pour continuer.');
      return;
    }
    refCode.current = 'VTX-2026-' + Math.floor(Math.random() * 9000 + 1000);
    setStep(4);
    setSubmitting(true);
    setShowSuccess(false);
    boxRef.current?.scrollTo({ top: 0 });
    setTimeout(() => {
      setSubmitting(false);
      setShowSuccess(true);
    }, 3200);
  }

  const stepLabels: { id: Step; label: string }[] = [
    { id: 1, label: 'Profil' },
    { id: 2, label: 'Documents' },
    { id: 3, label: 'Confirmation' },
    { id: 4, label: 'Envoyé' },
  ];

  return (
    <div
      className={`modal-overlay ${isOpen ? 'open' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div className="modal-box app-modal-box" ref={boxRef}>
        <button className="modal-close" onClick={closeModal}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#0B1D3A" strokeWidth={2.5}>
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="modal-inner">
          <div className="modal-logo">
            <div className="modal-logo-icon">V</div>
            <span className="modal-logo-name">Demande de prêt</span>
          </div>

          {/* Progress */}
          <div className="app-progress">
            {stepLabels.map((s) => (
              <div
                key={s.id}
                className={`prog-step ${step === s.id ? 'active' : ''} ${step > s.id ? 'done' : ''}`}
              >
                <div className="prog-dot">{s.id}</div>
                <div className="prog-lbl">{s.label}</div>
              </div>
            ))}
          </div>

          {transitioning && (
            <div className="loading-wrap">
              <div className="spinner"></div>
              <div className="loading-txt">Chargement…</div>
            </div>
          )}

          {!transitioning && step === 1 && (
            <div className="step-panel active">
              <div className="sum-box" style={{ padding: '32px', marginBottom: '32px' }}>
                <div className="sum-row" style={{ border: 'none', padding: '4px 0' }}>
                  <span className="sum-lbl" style={{ fontSize: '15px' }}>Montant</span>
                  <span className="sum-val" style={{ fontSize: '15px' }}>{fmt(amount)}</span>
                </div>
                <div className="sum-row" style={{ border: 'none', padding: '4px 0' }}>
                  <span className="sum-lbl" style={{ fontSize: '15px' }}>Durée</span>
                  <span className="sum-val" style={{ fontSize: '15px' }}>{months} mois</span>
                </div>
                <div className="sum-row" style={{ border: 'none', paddingTop: '16px', marginTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <span className="sum-lbl" style={{ fontSize: '15px' }}>Mensualité estimée</span>
                  <span className="sum-val g" style={{ fontSize: '22px' }}>{fmt(loan.monthly)}/mois</span>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Prénom</label>
                <input type="text" className="form-input" placeholder="Thomas" />
              </div>
              <div className="form-group">
                <label className="form-label">Nom</label>
                <input type="text" className="form-input" placeholder="Müller" />
              </div>
              <div className="form-group">
                <label className="form-label">Téléphone</label>
                <input type="tel" className="form-input" placeholder="+33 7 00 00 00 00" />
              </div>
              <div className="form-group">
                <label className="form-label">Date de naissance</label>
                <input type="text" className="form-input" placeholder="24/10/1988" />
              </div>
              <div className="form-group">
                <label className="form-label">Nationalité</label>
                <select className="form-select" defaultValue="Française">
                  <option>Française</option>
                  <option>Koweïtienne</option>
                  <option>Slovène</option>
                  <option>Espagnole</option>
                  <option>Lituanienne</option>
                  <option>Allemande</option>
                  <option>Italienne</option>
                  <option>Croate</option>
                  <option>Australienne</option>
                  <option>Belge</option>
                  <option>Suisse</option>
                  <option>Autre</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Situation professionnelle</label>
                <select className="form-select" defaultValue="">
                  <option value="">Sélectionner</option>
                  <option>Salarié(e) CDI</option>
                  <option>Salarié(e) CDD</option>
                  <option>Fonctionnaire</option>
                  <option>Indépendant / Freelance</option>
                  <option>Chef d&apos;entreprise</option>
                  <option>Profession libérale</option>
                  <option>Retraité(e)</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Revenu mensuel net (€)</label>
                <input type="number" className="form-input" placeholder="2 500" />
              </div>
              <div className="form-group">
                <label className="form-label">Charges mensuelles (€)</label>
                <input type="number" className="form-input" placeholder="800" />
              </div>
              <div className="form-group">
                <label className="form-label">Objet du prêt</label>
                <select className="form-select" defaultValue="Travaux & rénovation">
                  <option>Travaux &amp; rénovation</option>
                  <option>Achat véhicule</option>
                  <option>Projet immobilier</option>
                  <option>Création d&apos;entreprise</option>
                  <option>Voyage / Loisirs</option>
                  <option>Regroupement de crédits</option>
                  <option>Autre</option>
                </select>
              </div>
              <button className="btn-full" style={{ padding: '18px', fontSize: '16px', marginTop: '16px' }} onClick={() => goToStep(2)}>
                Continuer →
              </button>
            </div>
          )}

          {!transitioning && step === 2 && (
            <div className="step-panel active">
              <h2 className="sp-title">Pièces justificatives</h2>
              <p className="sp-sub">
                Téléchargez vos documents. Ils sont protégés par un chiffrement de bout en bout.
              </p>

              {DOCS.map((doc) => (
                <div className="upload-zone" key={doc.key} onClick={() => simulateUpload(doc.key)}>
                  {uploaded[doc.key] ? (
                    <>
                      <div className="upload-ico" style={{ background: 'rgba(16,185,129,.1)' }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth={2.5} width={24} height={24}>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div className="upload-lbl" style={{ color: 'var(--success)' }}>
                        {doc.label} — Chargé ✓
                      </div>
                      <div className="upload-sublbl">Cliquer pour remplacer</div>
                    </>
                  ) : (
                    <>
                      <div className="upload-ico">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                          <polyline points="17 8 12 3 7 8" />
                          <line x1="12" y1="3" x2="12" y2="15" />
                        </svg>
                      </div>
                      <div className="upload-lbl">{doc.label}</div>
                      <div className="upload-sublbl">{doc.sub}</div>
                    </>
                  )}
                </div>
              ))}

              <div className="btn-row">
                <button className="btn-full btn-back" onClick={() => goToStep(1)}>
                  ← Retour
                </button>
                <button className="btn-full" onClick={() => goToStep(3)}>
                  Continuer →
                </button>
              </div>
            </div>
          )}

          {!transitioning && step === 3 && (
            <div className="step-panel active">
              <h2 className="sp-title">Récapitulatif &amp; signature</h2>
              <p className="sp-sub">
                Vérifiez les informations de votre dossier avant de soumettre votre demande.
              </p>

              <div className="sum-box">
                <div className="sum-box-title">Synthèse de votre demande</div>
                <div className="sum-row">
                  <span className="sum-lbl">Montant</span>
                  <span className="sum-val">{fmt(amount)}</span>
                </div>
                <div className="sum-row">
                  <span className="sum-lbl">Durée</span>
                  <span className="sum-val">{months} mois</span>
                </div>
                <div className="sum-row">
                  <span className="sum-lbl">Taux annuel fixe</span>
                  <span className="sum-val">2,75%</span>
                </div>
                <div className="sum-row">
                  <span className="sum-lbl">Mensualité estimée</span>
                  <span className="sum-val g">{fmt(loan.monthly)}/mois</span>
                </div>
                <div className="sum-row">
                  <span className="sum-lbl">Coût total des intérêts</span>
                  <span className="sum-val">{fmt(loan.interest)}</span>
                </div>
              </div>

              <div className="contract-box">
                <strong>CONTRAT DE DEMANDE DE PRÊT — VANTEX BANK</strong>
                <br />
                <br />
                En soumettant ce formulaire, l&apos;Emprunteur reconnaît avoir pris connaissance des Conditions
                Générales de Vantex Bank et déclare sur l&apos;honneur que les informations fournies sont exactes et
                complètes. L&apos;Emprunteur autorise Vantex Bank à consulter les fichiers d&apos;incidents bancaires
                et à effectuer toute vérification nécessaire à l&apos;analyse de sa demande. La présente demande ne
                constitue pas un engagement contractuel de la part de Vantex Bank. L&apos;offre définitive sera émise
                après analyse du dossier complet. Le TAEG définitif sera précisé dans l&apos;offre de crédit.
                L&apos;Emprunteur dispose d&apos;un délai de rétractation légal de 14 jours calendaires à compter de la
                signature de l&apos;offre définitive. Vantex Bank — Établissement de crédit agréé. Capital social : 50
                000 000 €. Siège social : 12 Avenue de la Banque, 75008 Paris, France.
              </div>

              <div className="check-group">
                <input
                  type="checkbox"
                  id="chk1"
                  checked={checks.chk1}
                  onChange={(e) => setChecks((c) => ({ ...c, chk1: e.target.checked }))}
                />
                <label className="check-lbl" htmlFor="chk1">
                  J&apos;ai lu et j&apos;accepte les <a href="#">Conditions Générales</a> et la{' '}
                  <a href="#">Politique de confidentialité</a> de Vantex Bank.
                </label>
              </div>
              <div className="check-group">
                <input
                  type="checkbox"
                  id="chk2"
                  checked={checks.chk2}
                  onChange={(e) => setChecks((c) => ({ ...c, chk2: e.target.checked }))}
                />
                <label className="check-lbl" htmlFor="chk2">
                  En cliquant sur Soumettre, j&apos;autorise Vantex Bank à partager mes données avec ses partenaires
                  d&apos;analyse de crédit dans le cadre du traitement de ma demande.
                </label>
              </div>
              <div className="check-group">
                <input
                  type="checkbox"
                  id="chk3"
                  checked={checks.chk3}
                  onChange={(e) => setChecks((c) => ({ ...c, chk3: e.target.checked }))}
                />
                <label className="check-lbl" htmlFor="chk3">
                  Je certifie être majeur(e) (18+ ans), résider dans un pays éligible (Europe ou Asie) et disposer de
                  revenus fixes mensuels.
                </label>
              </div>

              <div className="btn-row">
                <button className="btn-full btn-back" onClick={() => goToStep(2)}>
                  ← Retour
                </button>
                <button className="btn-full" onClick={submitApplication}>
                  Soumettre ma demande ✓
                </button>
              </div>
            </div>
          )}

          {!transitioning && step === 4 && (
            <div className="step-panel active">
              {submitting && (
                <div className="loading-wrap">
                  <div className="spinner"></div>
                  <div className="loading-txt">
                    Analyse de votre dossier en cours…
                    <br />
                    <small style={{ fontSize: 12 }}>Quelques secondes suffiront</small>
                  </div>
                  <div className="loading-bar-wrap">
                    <div className="loading-bar"></div>
                  </div>
                </div>
              )}

              {showSuccess && (
                <div className="success-panel">
                  <div className="success-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h2 className="success-title">Dossier soumis avec succès !</h2>
                  <p className="success-txt">
                    Votre demande a bien été reçue par nos équipes. Vous recevrez une{' '}
                    <strong>notification dans un bref délai</strong> (sous 48h ouvrées) avec la décision de Vantex
                    Bank.
                  </p>
                  <div className="success-ref">
                    <div>
                      <div className="ref-lbl">Numéro de dossier</div>
                      <div className="ref-code">{refCode.current}</div>
                    </div>
                  </div>
                  <div className="success-next">
                    <div className="sn-item">
                      <div className="sn-num">1</div>
                      <div className="sn-txt">
                        Un e-mail de confirmation avec votre numéro de dossier vous sera envoyé dans les prochaines
                        minutes.
                      </div>
                    </div>
                    <div className="sn-item">
                      <div className="sn-num">2</div>
                      <div className="sn-txt">
                        Notre équipe analyse votre dossier sous 48h ouvrées et vous contacte si des documents
                        complémentaires sont nécessaires.
                      </div>
                    </div>
                    <div className="sn-item">
                      <div className="sn-num">3</div>
                      <div className="sn-txt">
                        En cas de décision favorable, vous signez l&apos;offre électroniquement — les fonds sont alors
                        virés sous 72 heures.
                      </div>
                    </div>
                  </div>
                  <button className="btn-full" onClick={closeModal}>
                    Retour à l&apos;accueil
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
