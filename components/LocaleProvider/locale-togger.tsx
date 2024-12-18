"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import i18nConfig, { localesWithFlags } from "@/i18nConfig";

type LocaleKey = keyof typeof localesWithFlags;

export function LocaleToggler() {
  
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChangeLocale = (newLocale: string) => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

    // redirect to the new locale path
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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="">
          <span className={`fi ${localesWithFlags[currentLocale as LocaleKey]?.flagClass}`} />
          <span className="sr-only">Locale theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.keys(localesWithFlags).map((localeKey) => (
          <DropdownMenuItem
            key={localeKey}
            disabled={currentLocale === localeKey}
            className="flex flex-row justify-between cursor-pointer"
            onClick={() => handleChangeLocale(localeKey as LocaleKey)}
          >
            <span>{localesWithFlags[localeKey as LocaleKey]?.name}</span>
            <span className={`fi ${localesWithFlags[localeKey as LocaleKey]?.flagClass} ml-2`} />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
