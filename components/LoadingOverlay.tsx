'use client';

import { useAppState } from './AppState';

export default function LoadingOverlay() {
  const { isLoading, t } = useAppState();

  if (!isLoading) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(8px)',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px'
    }}>
      <div className="spinner"></div>
      <div style={{
        fontFamily: 'var(--font-dm-serif)',
        fontSize: '20px',
        color: 'var(--navy)',
        textAlign: 'center'
      }}>
        {t('common.secure_loading')}
      </div>
    </div>
  );
}
