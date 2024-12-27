"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import i18nConfig from "@/i18nConfig";

const localeNames = {
  en: "English",
  ar: "العربية",
};

export function LocaleToggler() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChangeLocale = () => {
    const newLocale = currentLocale === "en" ? "ar" : "en";

    // Set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

    // Redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <button
      onClick={handleChangeLocale}
      className="text-[13px] font-bold text-secondary cursor-pointer"
    >
      {localeNames[currentLocale === "en" ? "ar" : "en"]}
    </button>
  );
}
