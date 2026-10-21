// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://3dprintingcostcalc.com',
  output: 'static',
  devToolbar: {
    enabled: false,
  },
  build: {
    inlineStylesheets: 'always',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'ja', 'ko', 'fr', 'es', 'ru', 'de', 'pt', 'it'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/404') &&
        !page.includes('/500') &&
        !page.match(/\/(zh|ja|ko|fr|es|ru|de|pt|it)\/(privacy|terms|contact)/),
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          zh: 'zh',
          ja: 'ja',
          ko: 'ko',
          fr: 'fr',
          es: 'es',
          ru: 'ru',
          de: 'de',
          pt: 'pt',
          it: 'it',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});