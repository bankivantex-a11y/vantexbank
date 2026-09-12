'use client';

import Link from 'next/link';
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
    // If it's a simple anchor or same page, don't trigger loading unless requested
    if (href.startsWith('#')) return;

    e.preventDefault();
    if (onClick) onClick();

    triggerLoading(() => {
      router.push(href);
    });
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
