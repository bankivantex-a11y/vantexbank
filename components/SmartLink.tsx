'use client';

import { useRouter } from 'next/navigation';
import { useAppState } from './AppState';
import { ReactNode } from 'react';

interface SmartLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function SmartLink({ href, children, className, onClick }: SmartLinkProps) {
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
    <a href={localizedHref} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
