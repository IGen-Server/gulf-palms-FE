/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CookieStorageService } from "@/services/utility/storage.service";
import { UserService } from "@/services/api/user.service";
import { UserProfileModel } from "@/models/user/user-profile.model";
import { UserAsCustomer } from "@/models/user/user-as-customer";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";

interface AuthContextType {
  user: UserProfileModel | null | undefined;
  setUser: Dispatch<SetStateAction<UserProfileModel | null | undefined>>;
  userSettings: UserAsCustomer | null;
  setUserSettings: Dispatch<SetStateAction<UserAsCustomer | null>>;
  isAuthenticated: boolean;
  translations: Record<string, Record<string, string>>;
  setTranslation: (lang: string, key: string, value: string) => void;
  getTranslation: (lang: string, key: string) => string;
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const axiosInstanceWithLoader = CreateAxiosInstanceWithLoader(true);
  const [user, setUser] = useState<UserProfileModel | null | undefined>(undefined);
  const [userSettings, setUserSettings] = useState<UserAsCustomer | null>(null);
  const [translations, setTranslations] = useState<Record<string, Record<string, string>>>({
    en: { },
    ar: { }
  });
  
  const router = useRouter();

  useEffect(() => {
    const getProfile = async () => {
      UserService.GetFullProfile(axiosInstanceWithLoader)
        .then(response => {
          console.log(response);
          setUser(response);
        })
        .catch(error => {
          setUser(null);
          console.error(error);
        });
    };

    getProfile();
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
    <AuthContext.Provider value={{
      user,
      setUser,
      userSettings,
      setUserSettings,
      isAuthenticated: !!user,
      translations,
      setTranslation,
      getTranslation,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
