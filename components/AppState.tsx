'use client';

import { createContext, useContext, useMemo, useState, ReactNode, useEffect } from 'react';
import { calcLoan } from '@/lib/loan';
import fr from '@/lib/dictionaries/fr.json';
import en from '@/lib/dictionaries/en.json';
import kw from '@/lib/dictionaries/kw.json';
import es from '@/lib/dictionaries/es.json';
import de from '@/lib/dictionaries/de.json';
import it from '@/lib/dictionaries/it.json';
import sl from '@/lib/dictionaries/sl.json';
import lt from '@/lib/dictionaries/lt.json';

type ModalId = 'auth' | 'app' | null;
type Locale = 'FR' | 'EN' | 'KW' | 'SL' | 'ES' | 'LT' | 'DE' | 'IT';

const dictionaries: Record<string, any> = {
  FR: fr,
  EN: en,
  KW: kw,
  ES: es,
  DE: de,
  IT: it,
  SL: sl,
  LT: lt
};

interface AppStateValue {
  amount: number;
  setAmount: (n: number) => void;
  months: number;
  setMonths: (n: number) => void;
  loan: ReturnType<typeof calcLoan>;
  activeModal: ModalId;
  openModal: (id: Exclude<ModalId, null>) => void;
  closeModal: () => void;
  isLoading: boolean;
  triggerLoading: (callback?: () => void) => void;
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => any;
}

const AppStateContext = createContext<AppStateValue | null>(null);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [amount, setAmount] = useState(15000);
  const [months, setMonths] = useState(36);
  const [activeModal, setActiveModal] = useState<ModalId>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [locale, setLocaleState] = useState<Locale>('FR');

  // Charger la langue au montage
  useEffect(() => {
    const saved = localStorage.getItem('vantex-locale') as Locale;
    const browserLang = navigator.language.split('-')[0].toUpperCase();
    const supported: Locale[] = ['FR', 'EN', 'KW', 'SL', 'ES', 'LT', 'DE', 'IT'];

    if (saved && supported.includes(saved)) {
      setLocaleState(saved);
    } else if (supported.includes(browserLang as Locale)) {
      setLocaleState(browserLang as Locale);
    } else if (browserLang === 'AR') {
      setLocaleState('KW');
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem('vantex-locale', l);
  };

  const t = useMemo(() => {
    return (key: string) => {
      const getDict = (l: string) => {
        const d = dictionaries[l] || dictionaries['FR'];
        return d.default || d;
      };

      const dict = getDict(locale);
      const fallbackDict = getDict('FR');

      const getValue = (d: any, k: string) => {
        const keys = k.split('.');
        let val = d;
        for (const part of keys) {
          val = val?.[part];
        }
        return val;
      };

      return getValue(dict, key) || getValue(fallbackDict, key) || key;
    };
  }, [locale]);

  const loan = useMemo(() => calcLoan(amount, months), [amount, months]);

  useEffect(() => {
    // Synchronize simulator with form state if needed
  }, [amount, months]);

  const triggerLoading = (callback?: () => void) => {
    setIsLoading(true);
    const delay = 2000 + Math.random() * 1000;
    setTimeout(() => {
      setIsLoading(false);
      if (callback) callback();
    }, delay);
  };

  const value: AppStateValue = {
    amount,
    setAmount,
    months,
    setMonths,
    loan,
    activeModal,
    openModal: (id) => setActiveModal(id),
    closeModal: () => setActiveModal(null),
    isLoading,
    triggerLoading,
    locale,
    setLocale,
    t,
  };

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error('useAppState must be used within AppStateProvider');
  return ctx;
}
