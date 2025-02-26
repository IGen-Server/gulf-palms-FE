import { Config } from "next-i18n-router/dist/types";

export const locales: string[] = ["ar", "en"];

// Normalize locale: Convert "en-us" to "en"
export function normalizeLocale(locale: string) {
  return locale.toLowerCase() === "en-us" ? "en" : locale;
}

export function refineLocalePrefixForRoute(locale: string) {
  locale = normalizeLocale(locale);

  if (locale === "ar") {
    return `/ar`;
  }

  return `/${locale}`;
}

export function refineRoutePath(path: string, locale: string) {
  locale = normalizeLocale(locale);

  if (path === "/") {
    return refineLocalePrefixForRoute(locale) || "/ar";
  }

  return path;
}

const i18nConfig: Config = {
  locales,
  defaultLocale: "ar",
};

export default i18nConfig;
