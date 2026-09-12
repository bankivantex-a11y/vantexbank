'use client';

import Reveal from '@/components/Reveal';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="section" style={{ paddingTop: 90 }}>
        <div className="container">
          <div className="sim-inner">
            <Reveal>
              <div className="sec-label">Contactez-nous</div>
              <h1 className="sec-title">Une question ?<br />Notre équipe est là.</h1>
              <p className="sec-desc">
                Vous avez besoin d'aide pour votre simulation ou vous souhaitez suivre votre dossier en cours ? Remplissez le formulaire ou utilisez nos coordonnées directes.
              </p>

              <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <div className="step-ico-wrap" style={{ width: 50, height: 50, margin: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--navy)' }}>Téléphone</div>
                    <div style={{ color: 'var(--muted)' }}>0 800 123 456 (Numéro Gratuit)</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <div className="step-ico-wrap" style={{ width: 50, height: 50, margin: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--navy)' }}>Email</div>
                    <div style={{ color: 'var(--muted)' }}>contact@vantexbank.com</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <div className="step-ico-wrap" style={{ width: 50, height: 50, margin: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--navy)' }}>Siège social</div>
                    <div style={{ color: 'var(--muted)' }}>12 Avenue de la Banque, 75008 Paris</div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={2}>
              <div className="sim-card">
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>
                     <div className="success-ico" style={{ width: 60, height: 60, marginBottom: 20 }}>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                     </div>
                     <h3 className="sim-card-title">Message envoyé !</h3>
                     <p className="sim-card-sub">Nous vous répondrons sous 24h ouvrées.</p>
                     <button className="btn-sim" onClick={() => setSubmitted(false)}>Renvoyer un message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="sim-card-title">Envoyez-nous un message</h3>
                    <p className="sim-card-sub">Tous les champs sont obligatoires.</p>
                    <div className="form-group">
                      <label className="form-label">Nom complet</label>
                      <input type="text" className="form-input" placeholder="Jean Dupont" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-input" placeholder="jean@exemple.com" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Sujet</label>
                      <select className="form-select">
                        <option>Question sur mon prêt</option>
                        <option>Problème technique</option>
                        <option>Réclamation</option>
                        <option>Autre</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Votre message</label>
                      <textarea className="form-input" style={{ minHeight: 120, resize: 'vertical' }} placeholder="Comment pouvons-nous vous aider ?" required></textarea>
                    </div>
                    <button type="submit" className="btn-sim">Envoyer le message →</button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
