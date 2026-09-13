'use client';

import { useEffect, useRef, useState } from 'react';
import SmartLink from './SmartLink';
import { useAppState } from './AppState';
import { fmt } from '@/lib/loan';

type Step = 1 | 2 | 3 | 4;

export default function AppModal() {
  const { activeModal, closeModal, amount, months, loan, locale, t, setAmount, setMonths } = useAppState();
  const isOpen = activeModal === 'app';

  const [step, setStep] = useState<Step>(1);
  const [transitioning, setTransitioning] = useState(false);
  const [uploaded, setUploaded] = useState<Record<string, boolean>>({});
  const [uploading, setUploading] = useState<Record<string, boolean>>({});
  const [files, setFiles] = useState<Record<string, File | null>>({});
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthDate: '',
    nationality: 'Française',
    address: '',
    job: '',
    income: '',
    purpose: 'Travaux & rénovation'
  });

  const [checks, setChecks] = useState({ chk1: false, chk2: false, chk3: false });
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const refCode = useRef('VTX-2026-0000');
  const boxRef = useRef<HTMLDivElement>(null);

  const DOCS = [
    { key: 'id', label: t('app.upload_cni'), sub: t('app.upload_cni_sub') },
    { key: 'payslips', label: t('app.upload_pay'), sub: t('app.upload_pay_sub') },
    { key: 'statements', label: t('app.upload_bank'), sub: t('app.upload_bank_sub') },
  ] as const;

  // Reset flow whenever the modal is (re)opened
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setUploaded({});
      setFiles({});
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

  function triggerUpload(key: string) {
    fileInputRefs.current[key]?.click();
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleFileChange(key: string, e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading((prev) => ({ ...prev, [key]: true }));
    setUploaded((prev) => ({ ...prev, [key]: false }));

    // Simulate network delay for UI feel
    setTimeout(() => {
      setUploading((prev) => ({ ...prev, [key]: false }));
      setUploaded((prev) => ({ ...prev, [key]: true }));
      setFiles(prev => ({ ...prev, [key]: file }));
    }, 1500);
  }

  async function submitApplication() {
    if (!checks.chk1 || !checks.chk2 || !checks.chk3) {
      alert(t('app.alert_checks'));
      return;
    }

    setSubmitting(true);
    setStep(4);

    try {
      const accessKey = '9ef32ee0-9157-4aec-ae66-8fc34785465c';
      const submissionData = new FormData();

      submissionData.append('access_key', accessKey);
      submissionData.append('subject', `Nouvelle demande de prêt : ${formData.firstName} ${formData.lastName}`);
      submissionData.append('from_name', 'Vantex Bank - Dossier Client');

      // Informations Client
      submissionData.append('Nom', formData.lastName);
      submissionData.append('Prénom', formData.firstName);
      submissionData.append('email', formData.email); // Le champ s'appelle 'email' pour que Web3Forms puisse répondre
      submissionData.append('Téléphone', formData.phone);
      submissionData.append('Date de naissance', formData.birthDate);
      submissionData.append('Nationalité', formData.nationality);
      submissionData.append('Adresse', formData.address);

      // Informations Prêt
      submissionData.append('Montant demandé', `${amount} €`);
      submissionData.append('Durée', `${months} mois`);
      submissionData.append('Mensualité', `${fmt(loan.monthly, locale)} €/mois`);
      submissionData.append('Profession', formData.job);
      submissionData.append('Revenu mensuel', `${formData.income} €`);
      submissionData.append('Objet du prêt', formData.purpose);

      // Fichiers
      if (files.id) submissionData.append('Pièce Identité', files.id);
      if (files.payslips) submissionData.append('Bulletins Salaire', files.payslips);
      if (files.statements) submissionData.append('Relevés Bancaires', files.statements);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submissionData
      });

      const result = await response.json();

      if (result.success) {
        refCode.current = 'VTX-2026-' + Math.floor(Math.random() * 9000 + 1000);
        setShowSuccess(true);
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      console.error(error);
      alert('Une erreur est survenue lors de l\'envoi de votre dossier. Veuillez réessayer.');
      setStep(3);
    } finally {
      setSubmitting(false);
    }
  }

  const stepLabels: { id: Step; label: string }[] = [
    { id: 1, label: t('app.step1') },
    { id: 2, label: t('app.step2') },
    { id: 3, label: t('app.step3') },
    { id: 4, label: t('app.step4') },
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
            <span className="modal-logo-name">{t('app.title')}</span>
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
              <div className="loading-txt">{t('app.loading')}</div>
            </div>
          )}

          {!transitioning && step === 1 && (
            <div className="step-panel active">
              <div className="sum-box" style={{ padding: '32px', marginBottom: '32px' }}>
                <div className="sum-row" style={{ border: 'none', padding: '4px 0' }}>
                  <span className="sum-lbl" style={{ fontSize: '15px' }}>{t('sim.amount_label')}</span>
                  <span className="sum-val" style={{ fontSize: '15px' }}>{fmt(amount, locale)}</span>
                </div>
                <div className="sum-row" style={{ border: 'none', padding: '4px 0' }}>
                  <span className="sum-lbl" style={{ fontSize: '15px' }}>{t('sim.duration_label')}</span>
                  <span className="sum-val" style={{ fontSize: '15px' }}>{months} {t('common.months')}</span>
                </div>
                <div className="sum-row" style={{ border: 'none', paddingTop: '16px', marginTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <span className="sum-lbl" style={{ fontSize: '15px' }}>{t('sim.res_monthly')}</span>
                  <span className="sum-val g" style={{ fontSize: '22px' }}>{fmt(loan.monthly, locale)}{t('common.euro_month')}</span>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">{t('app.job')}</label>
                <select className="form-select" name="job" value={formData.job} onChange={handleInputChange}>
                  <option value="">{t('auth.select')}</option>
                  <option>{t('jobs.cdi')}</option>
                  <option>{t('jobs.cdd')}</option>
                  <option>{t('jobs.gov')}</option>
                  <option>{t('jobs.freelance')}</option>
                  <option>{t('jobs.boss')}</option>
                  <option>{t('jobs.pro')}</option>
                  <option>{t('jobs.retired')}</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">{t('app.income')}</label>
                <input type="number" name="income" className="form-input" placeholder="2 500" value={formData.income} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label className="form-label">{t('app.purpose')}</label>
                <select className="form-select" name="purpose" value={formData.purpose} onChange={handleInputChange}>
                  <option>{t('purposes.work')}</option>
                  <option>{t('purposes.car')}</option>
                  <option>{t('purposes.home')}</option>
                  <option>{t('purposes.business')}</option>
                  <option>{t('purposes.travel')}</option>
                  <option>{t('purposes.debt')}</option>
                  <option>{t('purposes.other')}</option>
                </select>
              </div>
              <button className="btn-full" style={{ padding: '18px', fontSize: '16px', marginTop: '16px' }} onClick={() => goToStep(2)}>
                {t('common.continue')} →
              </button>
            </div>
          )}

          {!transitioning && step === 2 && (
            <div className="step-panel active">
              <div className="form-group">
                <label className="form-label">{t('auth.firstname')}</label>
                <input type="text" name="firstName" className="form-input" placeholder="Thomas" value={formData.firstName} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label className="form-label">{t('auth.lastname')}</label>
                <input type="text" name="lastName" className="form-input" placeholder="Müller" value={formData.lastName} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label className="form-label">Adresse e-mail</label>
                <input type="email" name="email" className="form-input" placeholder="thomas@example.com" value={formData.email} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label className="form-label">{t('app.phone')}</label>
                <input type="tel" name="phone" className="form-input" placeholder="+33 7 00 00 00 00" value={formData.phone} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label className="form-label">{t('auth.birthdate')}</label>
                <input type="text" name="birthDate" className="form-input" placeholder="24/10/1988" value={formData.birthDate} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label className="form-label">{t('auth.residence')}</label>
                <input type="text" name="nationality" className="form-input" placeholder="France" value={formData.nationality} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label className="form-label">Adresse complète</label>
                <input type="text" name="address" className="form-input" placeholder="123 rue de Paris, 75000 Paris" value={formData.address} onChange={handleInputChange} />
              </div>

              <div className="btn-row">
                <button className="btn-full btn-back" onClick={() => goToStep(1)}>
                  ← {t('common.back')}
                </button>
                <button className="btn-full" onClick={() => goToStep(3)}>
                  {t('common.continue')} →
                </button>
              </div>
            </div>
          )}

          {!transitioning && step === 3 && (
            <div className="step-panel active">
              <h2 className="sp-title">{t('app.docs_title')}</h2>
              <p className="sp-sub">
                {t('app.docs_desc')}
              </p>

              {DOCS.map((doc) => (
                <div
                  className={`upload-zone ${uploading[doc.key] ? 'uploading' : ''}`}
                  key={doc.key}
                  onClick={() => !uploading[doc.key] && triggerUpload(doc.key)}
                >
                  <input
                    type="file"
                    style={{ display: 'none' }}
                    ref={(el) => { fileInputRefs.current[doc.key] = el; }}
                    onChange={(e) => handleFileChange(doc.key, e)}
                    accept=".pdf,.jpg,.jpeg,.png"
                  />

                  {uploading[doc.key] ? (
                    <div className="loading-wrap" style={{ padding: '0', gap: '10px' }}>
                      <div className="spinner" style={{ width: '30px', height: '30px', borderWidth: '3px' }}></div>
                      <div className="upload-lbl">{t('app.loading')}</div>
                    </div>
                  ) : uploaded[doc.key] ? (
                    <>
                      <div className="upload-ico" style={{ background: 'rgba(16,185,129,.1)' }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth={2.5} width={24} height={24}>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div className="upload-lbl" style={{ color: 'var(--success)' }}>
                        {doc.label} — {t('app.upload_done')}
                      </div>
                      <div className="upload-sublbl">{t('app.upload_replace')}</div>
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
                  ← {t('common.back')}
                </button>
                <button className="btn-full" onClick={() => goToStep(3)}>
                  {t('common.continue')} →
                </button>
              </div>
            </div>
          )}

          {!transitioning && step === 3 && (
            <div className="step-panel active">
              <h2 className="sp-title">{t('app.recap_title')}</h2>
              <p className="sp-sub">
                {t('app.recap_desc')}
              </p>

              <div className="sum-box">
                <div className="sum-box-title">{t('app.summary_title')}</div>
                <div className="sum-row">
                  <span className="sum-lbl">{t('sim.amount_label')}</span>
                  <span className="sum-val">{fmt(amount, locale)}</span>
                </div>
                <div className="sum-row">
                  <span className="sum-lbl">{t('sim.duration_label')}</span>
                  <span className="sum-val">{months} {t('common.months')}</span>
                </div>
                <div className="sum-row">
                  <span className="sum-lbl">{t('hero.stat_rate')}</span>
                  <span className="sum-val">2,75%</span>
                </div>
                <div className="sum-row">
                  <span className="sum-lbl">{t('sim.res_monthly')}</span>
                  <span className="sum-val g">{fmt(loan.monthly, locale)}{t('common.euro_month')}</span>
                </div>
                <div className="sum-row">
                  <span className="sum-lbl">{t('sim.res_interest')}</span>
                  <span className="sum-val">{fmt(loan.interest, locale)}</span>
                </div>
              </div>

              <div className="contract-box">
                <strong>{t('app.contract_title')}</strong>
                <br />
                <br />
                {t('app.contract_text')}
              </div>

              <div className="check-group">
                <input
                  type="checkbox"
                  id="chk1"
                  checked={checks.chk1}
                  onChange={(e) => setChecks((c) => ({ ...c, chk1: e.target.checked }))}
                />
                <label className="check-lbl" htmlFor="chk1">
                  {t('app.chk1')}
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
                  {t('app.chk2')}
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
                  {t('app.chk3')}
                </label>
              </div>

              <div className="btn-row">
                <button className="btn-full btn-back" onClick={() => goToStep(2)}>
                  ← {t('common.back')}
                </button>
                <button className="btn-full" onClick={submitApplication}>
                  {t('common.submit')} ✓
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
                    {t('app.submitting_title')}
                    <br />
                    <small style={{ fontSize: 12 }}>{t('app.submitting_sub')}</small>
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
                  <h2 className="success-title">{t('app.success_title')}</h2>
                  <p className="success-txt">
                    {t('app.success_desc')}
                  </p>
                  <div className="success-ref">
                    <div>
                      <div className="ref-lbl">{t('app.ref_label')}</div>
                      <div className="ref-code">{refCode.current}</div>
                    </div>
                  </div>
                  <div className="success-next">
                    <div className="sn-item">
                      <div className="sn-num">1</div>
                      <div className="sn-txt">
                        {t('app.next1')}
                      </div>
                    </div>
                    <div className="sn-item">
                      <div className="sn-num">2</div>
                      <div className="sn-txt">
                        {t('app.next2')}
                      </div>
                    </div>
                    <div className="sn-item">
                      <div className="sn-num">3</div>
                      <div className="sn-txt">
                        {t('app.next3')}
                      </div>
                    </div>
                  </div>
                  <button className="btn-full" onClick={closeModal}>
                    {t('app.home_btn')}
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
