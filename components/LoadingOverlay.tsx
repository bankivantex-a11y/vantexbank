'use client';

import { useAppState } from './AppState';

export default function LoadingOverlay() {
  const { isLoading, t } = useAppState();

  if (!isLoading) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(11, 29, 58, 0.2)', // Navy with very low opacity
      backdropFilter: 'blur(4px)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <style>{`
        @keyframes stack-up {
          0% { transform: translateY(20px); opacity: 0; }
          30% { transform: translateY(0); opacity: 1; }
          70% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-10px); opacity: 0; }
        }
        .coin-container {
          position: relative;
          width: 60px;
          height: 60px;
          display: flex;
          flex-direction: column-reverse;
          align-items: center;
        }
        .coin {
          width: 44px;
          height: 10px;
          background: #facc15; /* yellow-400 */
          border: 1.5px solid #ca8a04; /* yellow-600 */
          border-radius: 50%;
          box-shadow: 0 3px 0 #a16207;
          margin-bottom: -4px;
          opacity: 0;
          animation: stack-up 2s infinite;
        }
        .c1 { animation-delay: 0.1s; }
        .c2 { animation-delay: 0.3s; }
        .c3 { animation-delay: 0.5s; }
        .c4 { animation-delay: 0.7s; }
        .c5 { animation-delay: 0.9s; }
      `}</style>

      <div style={{
        background: '#fff',
        padding: '40px 60px',
        borderRadius: '24px',
        boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px'
      }}>
        <div className="coin-container">
          <div className="coin c1"></div>
          <div className="coin c2"></div>
          <div className="coin c3"></div>
          <div className="coin c4"></div>
          <div className="coin c5"></div>
        </div>

        <div style={{
          fontFamily: 'var(--font-dm-serif)',
          fontSize: '18px',
          color: 'var(--navy)',
          textAlign: 'center',
          fontWeight: 500
        }}>
          {t('common.secure_loading')}
        </div>
      </div>
    </div>
  );
}
