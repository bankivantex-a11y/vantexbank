'use client';

import { createContext, useContext, useMemo, useState, ReactNode } from 'react';
import { calcLoan } from '@/lib/loan';

type ModalId = 'auth' | 'app' | null;

interface AppStateValue {
  amount: number;
  setAmount: (n: number) => void;
  months: number;
  setMonths: (n: number) => void;
  loan: ReturnType<typeof calcLoan>;
  activeModal: ModalId;
  openModal: (id: Exclude<ModalId, null>) => void;
  closeModal: () => void;
}

const AppStateContext = createContext<AppStateValue | null>(null);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [amount, setAmount] = useState(15000);
  const [months, setMonths] = useState(36);
  const [activeModal, setActiveModal] = useState<ModalId>(null);

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
  };

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error('useAppState must be used within AppStateProvider');
  return ctx;
}
