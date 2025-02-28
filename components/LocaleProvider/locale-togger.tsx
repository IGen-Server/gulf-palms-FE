"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import i18nConfig from "@/i18nConfig";
import { SlugType, useGlobalDataProvider } from "@/providers/GlobalDataProvider";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { ProductService } from "@/services/api/product.service";
import { ProductCategoryService } from "@/services/api/product-category.service";

const localeNames = {
  en: "English",
  ar: "العربية",
};

export function LocaleToggler() {
  const { i18n } = useTranslation();
  const { slugToTranslate } = useGlobalDataProvider();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const axiosInstanceWithLoader = CreateAxiosInstanceWithLoader();

  const handleChangeLocale = async () => {
    const newLocale = currentLocale === "en" ? "ar" : "en";

    // Set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

    const slugsToTranslate = slugToTranslate[currentLocale];

    if (slugsToTranslate) {
      // Create an object to store ids by slugType
      const idsBySlugType: Record<string, number[]> = {};

      Object.keys(slugsToTranslate).forEach(slug => {
        const { id, slugType } = slugsToTranslate[slug];
      
        // Ensure the array exists for the current slugType
        if (!idsBySlugType[slugType]) {
          idsBySlugType[slugType] = [];
        }
      
        // Push the id to the appropriate slugType
        idsBySlugType[slugType].push(+id);
      });

      for (const slugTypeKey of Object.keys(idsBySlugType)) {
        const slugType = Number(slugTypeKey) as SlugType;
  
        if (slugType === SlugType.Product) {
          try {
            const results = await ProductService.Get(
              {
                lang: newLocale,
                include: `[0,${idsBySlugType[slugTypeKey].join(',')}]`
              },
              axiosInstanceWithLoader);
  
            // Update slugsToTranslate with the translated slug
            Object.keys(slugsToTranslate).forEach(slug => {
              const item = results.find(x => x.id == slugsToTranslate[slug].id);

              if (item) {
                slugsToTranslate[slug].otherLangSlug = decodeURIComponent(item.slug);
              }
            });
          } catch (error) {
            console.error('Error fetching Product data:', error);
          }
        } else if (slugType === SlugType.Category) {
          try {
            const results = await ProductCategoryService.Get(
              {
                lang: newLocale,
                include: `[0,${idsBySlugType[slugTypeKey].join(',')}]`
              },
              axiosInstanceWithLoader);
  
            // Update slugsToTranslate with the translated slug
            Object.keys(slugsToTranslate).forEach(slug => {
              const item = results.find(x => x.id == slugsToTranslate[slug].id);

              if (item) {
                slugsToTranslate[slug].otherLangSlug = decodeURIComponent(item.slug);
              }
            });
          } catch (error) {
            console.error('Error fetching Category data:', error);
          }
        }
      }
    }

    const segments = currentPathname.split("/").filter(Boolean);
    const translatedSegments = segments.map(segment => slugToTranslate[currentLocale][decodeURIComponent(segment)]?.otherLangSlug || segment);
    const translatedPath = "/" + translatedSegments.join("/");

    // Redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + translatedPath);
    } else {
      router.push(
        translatedPath.replace(`/${currentLocale}`, `/${newLocale}`)
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
