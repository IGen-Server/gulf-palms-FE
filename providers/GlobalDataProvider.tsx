/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { UserProfileModel } from "@/models/user/user-profile.model";
import { UserAsCustomer } from "@/models/user/user-as-customer";

interface GlobalDataProviderProps {
  // user: UserProfileModel | null | undefined;
  // setUser: Dispatch<SetStateAction<UserProfileModel | null | undefined>>;
  // userSettings: UserAsCustomer | null;
  // setUserSettings: Dispatch<SetStateAction<UserAsCustomer | null>>;
  isTokenExpired: boolean;
  setIsTokenExpired: Dispatch<SetStateAction<boolean>>;
  translations: Record<string, Record<string, string>>;
  setTranslation: (lang: string, key: string, value: string) => void;
  getTranslation: (lang: string, key: string) => string;
}

const GlobalDataProviderContext = createContext<GlobalDataProviderProps | undefined>(undefined);

export function GlobalDataProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfileModel | null | undefined>(undefined);
  const [userSettings, setUserSettings] = useState<UserAsCustomer | null>(null);
  const [isTokenExpired, setIsTokenExpired] = useState<boolean>(true);
  const [translations, setTranslations] = useState<Record<string, Record<string, string>>>({
    en: { },
    ar: { }
  });
  
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
