import { Config } from "next-i18n-router/dist/types";

export const locales: string[] = ["en", "bn", "ar", "en-us"]; // Include "en-us"
export const localesWithFlags = {
  en: {
    name: "English",
    flagClass: "fi fi-gb", // UK flag for English
  },
  bn: {
    name: "Bengali",
    flagClass: "fi fi-bd", // Bangladesh flag for Bengali
  },
  ar: {
    name: "Arabic",
    flagClass: "fi fi-sa", // Saudi Arabia flag for Arabic
  },
  "en-us": {
    name: "English (US)",
    flagClass: "fi fi-us", // US flag for English (optional)
  },
};

// Normalize locale: Convert "en-us" to "en"
export function normalizeLocale(locale: string) {
  return locale.toLowerCase() === "en-us" ? "en" : locale;
}

export function refineLocalePrefixForRoute(locale: string) {
  locale = normalizeLocale(locale);

  if (locale === "en") {
    return ""; // No prefix for default locale
  }

  return `/${locale}`;
}

export function refineRoutePath(path: string, locale: string) {
  locale = normalizeLocale(locale);

  if (path === "/") {
    return refineLocalePrefixForRoute(locale) || "/";
  }

  return path;
}

const i18nConfig: Config = {
  locales, // Now includes "en-us"
  defaultLocale: "en",
};

export default i18nConfig;
