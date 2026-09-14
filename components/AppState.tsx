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

export type ModalId = 'auth' | 'app' | null;
export type Locale = 'FR' | 'EN' | 'KW' | 'SL' | 'ES' | 'LT' | 'DE' | 'IT';

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
  dict: any;
}

const AppStateContext = createContext<AppStateValue | null>(null);

export function AppStateProvider({
  children,
  initialLocale,
  initialDictionary
}: {
  children: ReactNode;
  initialLocale?: string;
  initialDictionary?: any;
}) {
  const [amount, setAmount] = useState(15000);
  const [months, setMonths] = useState(36);
  const [activeModal, setActiveModal] = useState<ModalId>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [locale, setLocaleState] = useState<Locale>((initialLocale as Locale) || 'FR');
  const [currentDict, setCurrentDict] = useState(initialDictionary || dictionaries['FR']);

  // Mettre à jour le dictionnaire quand la langue change (via l'URL ou le sélecteur)
  useEffect(() => {
    if (initialLocale && initialLocale !== locale) {
      setLocaleState(initialLocale as Locale);
    }
  }, [initialLocale]);

  useEffect(() => {
    if (initialDictionary) {
      setCurrentDict(initialDictionary);
    }
  }, [initialDictionary]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem('vantex-locale', l);
  };

  const triggerLoading = (callback?: () => void) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (callback) callback();
    }, 800);
  };

  const t = useMemo(() => {
    return (key: string) => {
      const dict = currentDict?.default || currentDict || dictionaries['FR'];
      const fallbackDict = dictionaries['FR'].default || dictionaries['FR'];

      const getValue = (d: any, k: string) => {
        const keys = k.split('.');
        let val = d;
        for (const part of keys) {
          val = val?.[part];
        }
        return val;
      };

      return getValue(dict, key) || key;
    };
  }, [locale, currentDict]);

  const loan = useMemo(() => calcLoan(amount, months), [amount, months]);

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
    dict: currentDict
  };

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error('useAppState must be used within AppStateProvider');
  return ctx;
}
