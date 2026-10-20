import type { PagesTranslationBundle } from './types';
import { enPages } from './en';
import { zhPages } from './zh';
import { jaPages } from './ja';
import { koPages } from './ko';
import { frPages } from './fr';
import { esPages } from './es';
import { ruPages } from './ru';
import { dePages } from './de';
import { ptPages } from './pt';
import { itPages } from './it';

export const ALL_PAGE_TRANSLATIONS: Record<string, PagesTranslationBundle> = {
  en: enPages,
  zh: zhPages,
  ja: jaPages,
  ko: koPages,
  fr: frPages,
  es: esPages,
  ru: ruPages,
  de: dePages,
  pt: ptPages,
  it: itPages,
};

export function getPageTranslations(locale: string): PagesTranslationBundle {
  if (ALL_PAGE_TRANSLATIONS[locale]) {
    return ALL_PAGE_TRANSLATIONS[locale];
  }
  return ALL_PAGE_TRANSLATIONS.en;
}

export * from './types';
