import type { FAQItem } from '../translations/types';

export interface ToolPageTranslation {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  badge: string;
  heroTitle: string;
  heroGradient: string;
  heroSubtitle: string;
  faqs: FAQItem[];
  labels: Record<string, string>;
}

export interface LegalPageTranslation {
  privacyTitle: string;
  privacyDesc: string;
  privacyBadge: string;
  privacyGuarTitle: string;
  privacyGuarDesc: string;
  sec1Title: string;
  sec1Desc: string;
  sec2Title: string;
  sec2Desc: string;
  sec3Title: string;
  sec3Desc: string;

  termsTitle: string;
  termsDesc: string;
  termsBadge: string;
  termsSummaryTitle: string;
  termsSummaryDesc: string;
  termsSec1Title: string;
  termsSec1Desc: string;
  termsSec2Title: string;
  termsSec2Desc: string;
  termsSec3Title: string;
  termsSec3Desc: string;

  contactTitle: string;
  contactSubtitle: string;
  contactCardTitle: string;
  contactCardDesc: string;
  contactEmailLabel: string;
  contactTurnaround: string;
  contactSuggestTitle: string;
  contactSuggestDesc: string;
}

export interface PrinterProfileTranslation {
  title: (brand: string, model: string) => string;
  description: (brand: string, model: string, watts: number) => string;
  badge: string;
  heroH1: (brand: string, model: string) => string;
  subtitle: (brand: string, model: string, buildVol: string, msrp: number) => string;
  smallPart: string;
  medPart: string;
  largePart: string;
  specsTitle: string;
  hardwareMsrp: string;
  avgPower: string;
  lifespan: string;
  buildVolume: string;
  benchmarksTitle: string;
  colJob: string;
  colFilament: string;
  colTime: string;
  colMatCost: string;
  colElecCost: string;
  colMachCost: string;
  colTotalCost: string;
  faqs: (printer: any) => FAQItem[];
}

export interface MaterialProfileTranslation {
  title: (name: string) => string;
  description: (name: string, density: number) => string;
  badge: string;
  heroH1: (name: string) => string;
  subtitle: (name: string, density: number) => string;
  specsTitle: string;
  density: string;
  nozzleTemp: string;
  bedTemp: string;
  chamberReq: string;
  costPerKg: string;
  metersPerKg: string;
  shrinkage: string;
  faqs: (mat: any) => FAQItem[];
}

export interface PagesTranslationBundle {
  printerTco: ToolPageTranslation;
  filamentCalc: ToolPageTranslation;
  spoolCalc: ToolPageTranslation;
  amsCalc: ToolPageTranslation;
  resinCalc: ToolPageTranslation;
  legal: LegalPageTranslation;
  printerProfile: PrinterProfileTranslation;
  materialProfile: MaterialProfileTranslation;
}
