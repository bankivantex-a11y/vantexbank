'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'right';
  delay?: 1 | 2 | 3 | 4;
}

export default function Reveal({ children, className = '', direction = 'up', delay }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const base = direction === 'right' ? 'reveal-r' : 'reveal';
  const delayClass = delay ? `delay-${delay}` : '';

  return (
    <div ref={ref} className={`${base} ${visible ? 'visible' : ''} ${delayClass} ${className}`}>
      {children}
    </div>
  );
}
