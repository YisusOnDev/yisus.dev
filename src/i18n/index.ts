import es from '../i18n/es.json';
import en from '../i18n/en.json';

export const translations = {
  es,
  en
};

export function getTranslation(locale: string) {
  return translations[locale as keyof typeof translations] || translations.es;
}