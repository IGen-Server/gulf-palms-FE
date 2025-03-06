/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { createContext, Dispatch, SetStateAction, useContext, useEffect, useRef, useState } from "react";
import { UserProfileModel } from "@/models/user/user-profile.model";
import { UserAsCustomer } from "@/models/user/user-as-customer";
import { ProductCategoryModel } from "@/models/product/product";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { ProductCategoryService } from "@/services/api/product-category.service";
import { useTranslation } from "react-i18next";

export enum SlugType {
  Product,
  Category
}

interface GlobalDataProviderProps {
  // user: UserProfileModel | null | undefined;
  // setUser: Dispatch<SetStateAction<UserProfileModel | null | undefined>>;
  // userSettings: UserAsCustomer | null;
  // setUserSettings: Dispatch<SetStateAction<UserAsCustomer | null>>;
  isTokenExpired: boolean;
  setIsTokenExpired: Dispatch<SetStateAction<boolean>>;

  categories: ProductCategoryModel[] | null;
  setCategories: Dispatch<SetStateAction<ProductCategoryModel[] | null>>;
  
  slugToTranslate: Record<string, Record<string, { id: number, slugType: SlugType, otherLangSlug: string }>>;
  addSlugToTranslate: (lang: string, slug: string, id: number, slugType: SlugType, otherLangSlug: string) => void;
  getSlugToTranslateId: (lang: string, slug: string) => { id: number; slugType: SlugType } | null;
  
  translations: Record<string, Record<string, string>>;
  setTranslation: (lang: string, key: string, value: string) => void;
  getTranslation: (lang: string, key: string) => string;
}

const GlobalDataProviderContext = createContext<GlobalDataProviderProps | undefined>(undefined);

export function GlobalDataProvider({ children }: { children: React.ReactNode }) {

  const axiosInstanceWithLoader = CreateAxiosInstanceWithLoader(false, false);
  const { i18n } = useTranslation();
  
  const [user, setUser] = useState<UserProfileModel | null | undefined>(undefined);
  const [userSettings, setUserSettings] = useState<UserAsCustomer | null>(null);
  const [isTokenExpired, setIsTokenExpired] = useState<boolean>(true);
  const [categories, setCategories] = useState<ProductCategoryModel[] | null>(null);
  const [translations, setTranslations] = useState<Record<string, Record<string, string>>>({
    en: { },
    ar: { }
  });
  const [slugToTranslate, setSlugToTranslate] = useState<Record<string, Record<string, { id: number, slugType: SlugType, otherLangSlug: string }>>>({
    en: { },
    ar: { }
  });

  const hasMounted = useRef(false);
  
  // Category
  useEffect(() => {
    if (hasMounted.current) return;
    hasMounted.current = true;
    
    const getProductCategories = async () => {
      try {
        let response = await ProductCategoryService.GetAllCacheCategories(
          {
            lang: i18n.language,
            page: 1,
            per_page: 100
          },
          axiosInstanceWithLoader
        );

        if (i18n.language === 'ar') {
          response = response?.map(item => ({
            ...item,
            slug: decodeURIComponent(item.slug)
          }));
        }

        setCategories(response || []);

      } catch (error) {
        console.error(error);
      }
    };

    getProductCategories();
  }, []);
  
  const setTranslation = (lang: string, key: string, value: string) => {
    setTranslations(prev => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        [key]: value
      }
    }));
  };

  const getTranslation = (lang: string, key: string): string => {
    return translations[lang]?.[key] || `Translation not found for ${key}`;
  };

  const addSlugToTranslate = (lang: string, slug: string, id: number, slugType: SlugType, otherLangSlug: string) => {
    setSlugToTranslate(prev => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        [slug]: { id, slugType, otherLangSlug }
      }
    }));
  };

  const getSlugToTranslateId = (lang: string, slug: string): { id: number; slugType: SlugType } | null => {
    return slugToTranslate[lang]?.[slug] ?? null;
  };

  return (
    <GlobalDataProviderContext.Provider value={{
      // user,
      // setUser,
      // userSettings,
      // setUserSettings,
      isTokenExpired,
      setIsTokenExpired,

      categories,
      setCategories,

      slugToTranslate,
      addSlugToTranslate,
      getSlugToTranslateId,

      translations,
      setTranslation,
      getTranslation,
    }}>
      {children}
    </GlobalDataProviderContext.Provider>
  );
}

export function useGlobalDataProvider() {
  const context = useContext(GlobalDataProviderContext);
  if (!context) {
    throw new Error("useGlobalDataProvider must be used within an GlobalDataProvider");
  }
  return context;
}
