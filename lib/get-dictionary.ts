import type { Locale } from '@/components/AppState';

const dictionaries = {
  fr: () => import('./dictionaries/fr.json').then((module) => module.default),
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  kw: () => import('./dictionaries/kw.json').then((module) => module.default),
  es: () => import('./dictionaries/es.json').then((module) => module.default),
  de: () => import('./dictionaries/de.json').then((module) => module.default),
  it: () => import('./dictionaries/it.json').then((module) => module.default),
  sl: () => import('./dictionaries/sl.json').then((module) => module.default),
  lt: () => import('./dictionaries/lt.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  const lang = locale.toLowerCase();
  if (lang in dictionaries) {
    return (dictionaries as any)[lang]();
  }
  return dictionaries.fr();
};
