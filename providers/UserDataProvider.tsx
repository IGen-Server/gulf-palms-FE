/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { UserService } from "@/services/api/user.service";
import { UserProfileModel } from "@/models/user/user-profile.model";
import { UserAsCustomer } from "@/models/user/user-as-customer";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";

interface UserDataProviderProps {
  user: UserProfileModel | null | undefined;
  setUser: Dispatch<SetStateAction<UserProfileModel | null | undefined>>;
  userSettings: UserAsCustomer | null;
  setUserSettings: Dispatch<SetStateAction<UserAsCustomer | null>>;
  isAuthenticated: boolean;
}

const UserDataContext = createContext<UserDataProviderProps | undefined>(undefined);

export function UserDataProvider({ children }: { children: React.ReactNode }) {
  const axiosInstanceWithLoader = CreateAxiosInstanceWithLoader(true);
  const [user, setUser] = useState<UserProfileModel | null | undefined>(undefined);
  const [userSettings, setUserSettings] = useState<UserAsCustomer | null>(null);

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

  return (
    <UserDataContext.Provider value={{
      user,
      setUser,
      userSettings,
      setUserSettings,
      isAuthenticated: !!user
    }}>
      {children}
    </UserDataContext.Provider>
  );
}

export function useUserDataProvider() {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error("useUserDataProvider must be used within an UserDataProvider");
  }
  return context;
}
