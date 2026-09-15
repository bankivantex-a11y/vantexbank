'use client';

import { useState } from 'react';
import { useAppState } from './AppState';

export default function AuthModal() {
  const { activeModal, closeModal, openModal, t } = useAppState();
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPwd, setLoginPwd] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPwd, setRegPwd] = useState('');

  const isOpen = activeModal === 'auth';

  function handleLogin() {
    if (!loginEmail.trim() || !loginPwd) {
      alert(t('auth.alert_login'));
      return;
    }
    closeModal();
    setTimeout(() => openModal('app'), 350);
  }

  function handleRegister() {
    if (!regEmail.trim() || !regPwd) {
      alert(t('auth.alert_register'));
      return;
    }
    closeModal();
    setTimeout(() => openModal('app'), 350);
  }

  return (
    <div
      className={`modal-overlay ${isOpen ? 'open' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div className="modal-box">
        <button className="modal-close" onClick={closeModal}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#0B1D3A" strokeWidth={2.5}>
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="modal-inner">
          <div className="modal-logo">
            <img src="/images/virxyd-logo.png" alt="Virxyd Logo" style={{ height: '35px', width: 'auto' }} />
          </div>

          <div className="auth-tabs">
            <button className={`auth-tab ${tab === 'login' ? 'active' : ''}`} onClick={() => setTab('login')}>
              {t('auth.login_tab')}
            </button>
            <button className={`auth-tab ${tab === 'register' ? 'active' : ''}`} onClick={() => setTab('register')}>
              {t('auth.register_tab')}
            </button>
          </div>

          {tab === 'login' ? (
            <div key="login-form">
              <div className="form-group">
                <label className="form-label">{t('auth.email_label')}</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder={t('auth.email_placeholder')}
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">{t('auth.pwd_label')}</label>
                <input
                  type="password"
                  className="form-input"
                  placeholder={t('auth.pwd_placeholder')}
                  value={loginPwd}
                  onChange={(e) => setLoginPwd(e.target.value)}
                />
              </div>
              <button className="btn-full" onClick={handleLogin}>
                {t('auth.login_btn')}
              </button>
              <div className="auth-or">
                <div className="auth-or-line"></div>
                <span className="auth-or-txt">{t('auth.or')}</span>
                <div className="auth-or-line"></div>
              </div>
              <p className="auth-switch">
                {t('auth.no_account')}{' '}
                <a onClick={() => setTab('register')}>{t('auth.create_account')}</a>
              </p>
            </div>
          ) : (
            <div key="register-form">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">{t('auth.firstname')}</label>
                  <input type="text" className="form-input" placeholder={t('contact_page.firstname_placeholder')} />
                </div>
                <div className="form-group">
                  <label className="form-label">{t('auth.lastname')}</label>
                  <input type="text" className="form-input" placeholder={t('contact_page.lastname_placeholder')} />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">{t('auth.email_label')}</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder={t('auth.email_placeholder')}
                  value={regEmail}
                  onChange={(e) => setRegEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">{t('auth.pwd_label')}</label>
                <input
                  type="password"
                  className="form-input"
                  placeholder={t('auth.pwd_hint')}
                  value={regPwd}
                  onChange={(e) => setRegPwd(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">{t('auth.birthdate')}</label>
                <input type="date" className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">{t('auth.residence')}</label>
                <select className="form-select" defaultValue="">
                  <option value="">{t('auth.select')}</option>
                  {(t('countries') as string[]).map((country) => (
                    <option key={country}>{country}</option>
                  ))}
                </select>
              </div>
              <button className="btn-full" onClick={handleRegister}>
                {t('auth.create_account')}
              </button>
              <p className="auth-switch">
                {t('auth.have_account')} <a onClick={() => setTab('login')}>{t('auth.login_link')}</a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
