import { Config } from "next-i18n-router/dist/types";

export const locales: string[] = ['en', 'bn', 'ar'];
export const localesWithFlags = {
  en: {
    name: 'English',
    flagClass: 'fi fi-gb', // UK flag for English
  },
  bn: {
    name: 'Bengali',
    flagClass: 'fi fi-bd', // Bangladesh flag for Bengali
  },
  ar: {
    name: 'Arabic',
    flagClass: 'fi fi-sa', // Saudi Arabia flag for Arabic
  },
};

export function refineLocalePrefixForRoute(locale: string) {
  if (locale === 'en') {
    return '';
  }

  return '/' + locale;
}

export function refineRoutePath(path: string, locale: string) {
  if (path === '/') {
    if (locale === 'en') {
      return '/';
    }
    return '';
  }

  return path;
}


const i18nConfig: Config = {
  locales: locales,
  defaultLocale: 'en',
};

export default i18nConfig;
