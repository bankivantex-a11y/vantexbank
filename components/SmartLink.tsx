'use client';

import { useRouter } from 'next/navigation';
import { useAppState } from './AppState';
import { ReactNode, CSSProperties } from 'react';

interface SmartLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

export default function SmartLink({ href, children, className, style, onClick }: SmartLinkProps) {
  const router = useRouter();
  const { triggerLoading, locale } = useAppState();

  const getLocalizedHref = (path: string) => {
    if (path.startsWith('#') || path.startsWith('http')) return path;
    const l = locale.toLowerCase();
    // Éviter de doubler le préfixe
    if (path.startsWith(`/${l}/`) || path === `/${l}`) return path;
    return `/${l}${path.startsWith('/') ? '' : '/'}${path}`;
  };

  const localizedHref = getLocalizedHref(href);

  const handleClick = (e: React.MouseEvent) => {
    if (href.startsWith('#')) return;

    e.preventDefault();
    if (onClick) onClick();

    triggerLoading(() => {
      window.location.href = localizedHref;
    });
  };

  return (
    <a href={localizedHref} className={className} style={style} onClick={handleClick}>
      {children}
    </a>
  );
}
