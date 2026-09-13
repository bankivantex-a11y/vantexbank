'use client';

import { useState, useEffect } from 'react';
import SmartLink from './SmartLink';
import { useAppState } from './AppState';

export default function CookieBanner() {
  const { t } = useAppState();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <div className="container">
        <div className="cookie-inner">
          <p className="cookie-text">
            {t('footer.cookie_text')}
          </p>
          <div className="cookie-actions">
            <SmartLink href="/cookies" className="btn-cookie-more">
              {t('footer.cookie_more')}
            </SmartLink>
            <button className="btn-cookie-accept" onClick={acceptCookies}>
              {t('footer.cookie_accept')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
