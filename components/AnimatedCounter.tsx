'use client';

import { useEffect, useRef, useState } from 'react';
import { useAppState } from './AppState';

export default function AnimatedCounter({ target }: { target: number }) {
  const { locale } = useAppState();
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            let current = 0;
            const step = target / 60;
            const timer = setInterval(() => {
              current += step;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setValue(Math.floor(current));
            }, 18);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{value.toLocaleString(locale === 'EN' ? 'en-US' : 'fr-FR')}</span>;
}
