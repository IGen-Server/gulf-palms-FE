import type { Config } from "next-i18n-router/dist/types";

export const locales: string[] = ["ar", "en"];

export function normalizeLocale(locale: string) {
  const normalizedLocale = locale.toLowerCase().split("-")[0];
  return locales.includes(normalizedLocale) ? normalizedLocale : "ar";
}

export function refineLocalePrefixForRoute(locale: string) {
  locale = normalizeLocale(locale);
  return `/${locale}`;
}

export function refineRoutePath(path: string, locale: string) {
  locale = normalizeLocale(locale);

  if (path === "/") {
    return refineLocalePrefixForRoute(locale);
  }

  return path.startsWith("/")
    ? `${refineLocalePrefixForRoute(locale)}${path}`
    : path;
}

const i18nConfig: Config = {
  locales,
  defaultLocale: "ar",
  prefixDefault: true,
  localeCookie: "NEXT_LOCALE",
};

export default i18nConfig;
