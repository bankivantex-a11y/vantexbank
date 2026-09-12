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
  const { triggerLoading } = useAppState();

  const handleClick = (e: React.MouseEvent) => {
    // Si c'est une ancre interne (#), on laisse le comportement par défaut
    if (href.startsWith('#')) return;

    e.preventDefault();
    if (onClick) onClick();

    triggerLoading(() => {
      // Forcer un rechargement complet de la page vers la nouvelle URL
      window.location.href = href;
    });
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
