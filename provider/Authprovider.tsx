"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CookieStorageService } from "@/services/utility/storage.service";
import { UserService } from "@/services/api/user.service";
import { UserProfileModel } from "@/models/user/user-profile.model";

interface AuthContextType {
  user: UserProfileModel | null;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfileModel | null>(null);
  const router = useRouter();

  useEffect(() => {
    UserService.GetProfile()
      .then(response=> {
        console.log(response);
        setUser(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    router.push("/login"); 
  };

  return (
    <AuthContext.Provider value={{ user, logout, isAuthenticated: !!user }}>
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
