'use client';

import { useState } from 'react';
import { useAppState } from './AppState';

export default function AuthModal() {
  const { activeModal, closeModal, openModal } = useAppState();
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [loginEmail, setLoginEmail] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPwd, setRegPwd] = useState('');

  const isOpen = activeModal === 'auth';

  function handleLogin() {
    if (!loginEmail.trim()) {
      alert('Veuillez saisir votre e-mail.');
      return;
    }
    closeModal();
    setTimeout(() => openModal('app'), 350);
  }

  function handleRegister() {
    if (!regEmail.trim() || !regPwd) {
      alert('Veuillez remplir tous les champs.');
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
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="modal-logo">
          <div className="modal-logo-icon">V</div>
          <span className="modal-logo-name">Vantex Bank</span>
        </div>
        <div className="auth-tabs">
          <button className={`auth-tab ${tab === 'login' ? 'active' : ''}`} onClick={() => setTab('login')}>
            Se connecter
          </button>
          <button className={`auth-tab ${tab === 'register' ? 'active' : ''}`} onClick={() => setTab('register')}>
            Créer un compte
          </button>
        </div>

        {tab === 'login' ? (
          <div>
            <div className="form-group">
              <label className="form-label">Adresse e-mail</label>
              <input
                type="email"
                className="form-input"
                placeholder="vous@email.com"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Mot de passe</label>
              <input type="password" className="form-input" placeholder="••••••••" />
            </div>
            <button className="btn-full" onClick={handleLogin}>
              Se connecter
            </button>
            <div className="auth-or">
              <div className="auth-or-line"></div>
              <span className="auth-or-txt">ou</span>
              <div className="auth-or-line"></div>
            </div>
            <p className="auth-switch">
              Pas de compte ?{' '}
              <a onClick={() => setTab('register')}>Créer mon compte</a>
            </p>
          </div>
        ) : (
          <div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Prénom</label>
                <input type="text" className="form-input" placeholder="Jean" />
              </div>
              <div className="form-group">
                <label className="form-label">Nom</label>
                <input type="text" className="form-input" placeholder="Dupont" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">E-mail</label>
              <input
                type="email"
                className="form-input"
                placeholder="vous@email.com"
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Mot de passe</label>
              <input
                type="password"
                className="form-input"
                placeholder="Min. 8 caractères"
                value={regPwd}
                onChange={(e) => setRegPwd(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Date de naissance</label>
              <input type="date" className="form-input" />
            </div>
            <div className="form-group">
              <label className="form-label">Pays de résidence</label>
              <select className="form-select" defaultValue="">
                <option value="">Sélectionner</option>
                <option>France</option>
                <option>Belgique</option>
                <option>Suisse</option>
                <option>Allemagne</option>
                <option>Espagne</option>
                <option>Italie</option>
                <option>Portugal</option>
                <option>Pays-Bas</option>
                <option>Luxembourg</option>
                <option>Japon</option>
                <option>Corée du Sud</option>
                <option>Singapour</option>
                <option>Autre pays Europe / Asie</option>
              </select>
            </div>
            <button className="btn-full" onClick={handleRegister}>
              Créer mon compte
            </button>
            <p className="auth-switch">
              Déjà un compte ? <a onClick={() => setTab('login')}>Me connecter</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
