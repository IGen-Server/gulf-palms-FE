import { Resource, createInstance, i18n } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import resourcesToBackend from "i18next-resources-to-backend";
import i18nConfig from "@/i18nConfig";
import { cookies } from "next/headers";

function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined; // Ensure it's running in the browser
  const match = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
  return match ? decodeURIComponent(match[2]) : undefined;
}

function setCookie(name: string, value: string, days = 365) {
  if (typeof document === "undefined") return; // Ensure it's running in the browser
  const expires = new Date();
  expires.setDate(expires.getDate() + days);
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
}

export default async function initializeTranslations(
  locale: string,
  namespaces: string[],
  i18nInstance?: i18n,
  resources?: Resource
) {
  const currentLocale = getCookie("NEXT_LOCALE") || i18nConfig.defaultLocale;

  // Set the cookie if it doesn't exist
  if (!getCookie("NEXT_LOCALE")) {
    setCookie("NEXT_LOCALE", currentLocale);
  }

  i18nInstance = i18nInstance || createInstance();
  i18nInstance.use(initReactI18next);

  if (!resources) {
    i18nInstance.use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`@/locales/${language}/${namespace}.json`)
      )
    );
  }

  await i18nInstance.init({
    lng: locale,
    resources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: namespaces[0],
    fallbackNS: namespaces[0],
    ns: namespaces,
    preload: resources ? [] : i18nConfig.locales,
  });

  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
    t: i18nInstance.t,
  };
}
