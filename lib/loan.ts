export const ANNUAL_RATE = 0.0275;
export const MONTHLY_RATE = ANNUAL_RATE / 12;

export interface LoanResult {
  monthly: number;
  total: number;
  interest: number;
}

export function calcLoan(amount: number, months: number): LoanResult {
  const r = MONTHLY_RATE;
  const n = months;
  const monthly = (amount * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
  return { monthly, total: monthly * n, interest: monthly * n - amount };
}

export function fmt(n: number, locale: string = 'FR'): string {
  const l = locale === 'EN' ? 'en-US' : locale === 'DE' ? 'de-DE' : locale === 'ES' ? 'es-ES' : 'fr-FR';
  const currency = locale === 'KW' ? 'KWD' : 'EUR';
  return new Intl.NumberFormat(l, {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 0
  }).format(Math.round(n));
}

export const DURATION_OPTIONS = [
  { months: 12, label: '12 mois' },
  { months: 24, label: '24 mois' },
  { months: 36, label: '36 mois' },
  { months: 48, label: '48 mois' },
  { months: 60, label: '5 ans' },
  { months: 72, label: '6 ans' },
  { months: 84, label: '7 ans' },
  { months: 120, label: '10 ans' },
  { months: 180, label: '15 ans' },
  { months: 240, label: '20 ans' },
  { months: 360, label: '30 ans' },
];
