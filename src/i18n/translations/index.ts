import { en } from './en';
import { zh } from './zh';
import { ja } from './ja';
import { ko } from './ko';
import { fr } from './fr';
import { es } from './es';
import { ru } from './ru';
import { de } from './de';
import { pt } from './pt';
import { it } from './it';
import type { TranslationDictionary } from './types';
import { DEFAULT_LOCALE } from '../locales';

export const TRANSLATIONS: Record<string, TranslationDictionary> = {
  en,
  zh,
  ja,
  ko,
  fr,
  es,
  ru,
  de,
  pt,
  it,
};

export function getTranslations(locale?: string): TranslationDictionary {
  if (locale && locale in TRANSLATIONS) {
    return TRANSLATIONS[locale];
  }
  return TRANSLATIONS[DEFAULT_LOCALE];
}

export * from './types';
