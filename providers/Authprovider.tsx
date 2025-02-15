"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CookieStorageService } from "@/services/utility/storage.service";
import { UserService } from "@/services/api/user.service";
import { UserProfileModel } from "@/models/user/user-profile.model";
import { UserAsCustomer } from "@/models/user/user-as-customer";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";

interface AuthContextType {
  user: UserProfileModel | null;
  userSettings: UserAsCustomer | null;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const axiosInstance = CreateAxiosInstanceWithLoader();
  const [user, setUser] = useState<UserProfileModel | null>(null);
  const [userSettings, setUserSettings] = useState<UserAsCustomer | null>(null);
  
  const router = useRouter();

  useEffect(() => {
    const getProfile = async () => {
      UserService.GetProfile(axiosInstance)
        .then(response => {
          console.log(response);
          setUser(response);
        })
        .catch(error => {
          console.error(error);
        });
    };

    const getSettings = async () => {
      UserService.GetSettings(axiosInstance)
        .then(response=> {
          console.log(response);
          setUserSettings(response);
        })
        .catch(error => {
          console.error(error);
        });
    };

    getProfile();
    getSettings();
  }, []);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    router.push("/login"); 
  };

  return (
    <AuthContext.Provider value={{ user, userSettings, logout, isAuthenticated: !!user }}>
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
