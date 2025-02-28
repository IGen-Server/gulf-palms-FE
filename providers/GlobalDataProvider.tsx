/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { UserProfileModel } from "@/models/user/user-profile.model";
import { UserAsCustomer } from "@/models/user/user-as-customer";
import { ProductCategoryModel } from "@/models/product/product";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { ProductCategoryService } from "@/services/api/product-category.service";
import { useTranslation } from "react-i18next";

interface GlobalDataProviderProps {
  // user: UserProfileModel | null | undefined;
  // setUser: Dispatch<SetStateAction<UserProfileModel | null | undefined>>;
  // userSettings: UserAsCustomer | null;
  // setUserSettings: Dispatch<SetStateAction<UserAsCustomer | null>>;
  isTokenExpired: boolean;
  setIsTokenExpired: Dispatch<SetStateAction<boolean>>;
  categories: ProductCategoryModel[] | null;
  setCategories: Dispatch<SetStateAction<ProductCategoryModel[] | null>>;
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

  // Category
  useEffect(() => {
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
