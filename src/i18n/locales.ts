export interface LocaleInfo {
  code: string;
  name: string;
  nativeName: string;
  display: string;
  shortDisplay: string;
  htmlLang: string;
  ogLocale: string;
  currency: string;
  currencyCode: string;
  flag?: string;
}

export const LOCALES: Record<string, LocaleInfo> = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    display: 'ENGLISH',
    shortDisplay: 'EN',
    htmlLang: 'en',
    ogLocale: 'en_US',
    currency: '$',
    currencyCode: 'USD',
  },
  zh: {
    code: 'zh',
    name: 'Chinese',
    nativeName: '中文',
    display: '中文',
    shortDisplay: '中文',
    htmlLang: 'zh-CN',
    ogLocale: 'zh_CN',
    currency: '¥',
    currencyCode: 'CNY',
  },
  ja: {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    display: '日本語',
    shortDisplay: '日本語',
    htmlLang: 'ja',
    ogLocale: 'ja_JP',
    currency: '¥',
    currencyCode: 'JPY',
  },
  ko: {
    code: 'ko',
    name: 'Korean',
    nativeName: '한국어',
    display: '한국어',
    shortDisplay: '한국어',
    htmlLang: 'ko',
    ogLocale: 'ko_KR',
    currency: '₩',
    currencyCode: 'KRW',
  },
  fr: {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    display: 'FRANÇAIS',
    shortDisplay: 'FR',
    htmlLang: 'fr',
    ogLocale: 'fr_FR',
    currency: '€',
    currencyCode: 'EUR',
  },
  es: {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    display: 'ESPAÑOL',
    shortDisplay: 'ES',
    htmlLang: 'es',
    ogLocale: 'es_ES',
    currency: '€',
    currencyCode: 'EUR',
  },
  ru: {
    code: 'ru',
    name: 'Russian',
    nativeName: 'Русский',
    display: 'РУССКИЙ',
    shortDisplay: 'RU',
    htmlLang: 'ru',
    ogLocale: 'ru_RU',
    currency: '₽',
    currencyCode: 'RUB',
  },
  de: {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    display: 'DEUTSCH',
    shortDisplay: 'DE',
    htmlLang: 'de',
    ogLocale: 'de_DE',
    currency: '€',
    currencyCode: 'EUR',
  },
  pt: {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    display: 'PORTUGUÊS',
    shortDisplay: 'PT',
    htmlLang: 'pt',
    ogLocale: 'pt_BR',
    currency: 'R$',
    currencyCode: 'BRL',
  },
  it: {
    code: 'it',
    name: 'Italian',
    nativeName: 'Italiano',
    display: 'ITALIANO',
    shortDisplay: 'IT',
    htmlLang: 'it',
    ogLocale: 'it_IT',
    currency: '€',
    currencyCode: 'EUR',
  },
};

export type LocaleCode = keyof typeof LOCALES;
export const DEFAULT_LOCALE: LocaleCode = 'en';

// The exact order shown in the user's screenshot list
export const DROPDOWN_LOCALES: LocaleCode[] = [
  'zh',
  'ja',
  'ko',
  'fr',
  'es',
  'ru',
  'de',
  'pt',
  'it',
  'en',
];

export const NON_DEFAULT_LOCALES: LocaleCode[] = [
  'zh',
  'ja',
  'ko',
  'fr',
  'es',
  'ru',
  'de',
  'pt',
  'it',
];

export const ALL_LOCALES: LocaleCode[] = [
  'en',
  'zh',
  'ja',
  'ko',
  'fr',
  'es',
  'ru',
  'de',
  'pt',
  'it',
];

/**
 * Strips any locale prefix from a pathname, returning the canonical English path.
 * e.g. "/fr/3d-printer-cost-calculator/" -> "/3d-printer-cost-calculator/"
 * e.g. "/zh/" -> "/"
 * e.g. "/" -> "/"
 */
export function getCleanPath(pathname: string): string {
  let clean = pathname.replace(/\/+$/, '') || '/';
  
  for (const loc of NON_DEFAULT_LOCALES) {
    if (clean === `/${loc}`) {
      return '/';
    }
    if (clean.startsWith(`/${loc}/`)) {
      clean = clean.substring(loc.length + 1);
      break;
    }
  }

  if (!clean.startsWith('/')) {
    clean = `/${clean}`;
  }
  // Ensure trailing slash for directory style paths unless it's just "/"
  if (clean !== '/' && !clean.endsWith('/') && !clean.includes('.')) {
    clean = `${clean}/`;
  }
  return clean;
}

/**
 * Returns the localized URL for a given target locale from any pathname.
 * e.g. getLocalizedPath("/3d-printer-cost-calculator/", "fr") -> "/fr/3d-printer-cost-calculator/"
 * e.g. getLocalizedPath("/fr/3d-printer-cost-calculator/", "en") -> "/3d-printer-cost-calculator/"
 * e.g. getLocalizedPath("/", "zh") -> "/zh/"
 */
export function getLocalizedPath(pathname: string, targetLocale: string): string {
  const cleanPath = getCleanPath(pathname);
  if (targetLocale === DEFAULT_LOCALE) {
    return cleanPath;
  }
  if (cleanPath === '/') {
    return `/${targetLocale}/`;
  }
  return `/${targetLocale}${cleanPath}`;
}

/**
 * Detects the current locale from a pathname.
 */
export function getLocaleFromPath(pathname: string): LocaleCode {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length > 0 && NON_DEFAULT_LOCALES.includes(parts[0] as LocaleCode)) {
    return parts[0] as LocaleCode;
  }
  return DEFAULT_LOCALE;
}
