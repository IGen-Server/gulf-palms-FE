"use client"

import SkeletonType1 from "@/components/skeleton/skeleton-type1";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useUserDataProvider } from "@/providers/UserDataProvider";
import { UserService } from "@/services/api/user.service";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface UserProfileToEdit {
  first_name: string;
  last_name: string;
  name: string;
}

interface UserPasswordToEdit {
  new_password: string;
  confirm_new_password: string;
}

export default function AccountDetails() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const axiosInstanceWithLoader = CreateAxiosInstanceWithLoader(true);
  const { user, setUser } = useUserDataProvider();
  const [showPassword, setShowPassword] = useState(false);
  const [userProfileToEdit, setUserProfileToEdit] = useState<UserProfileToEdit>({
    first_name: "",
    last_name: "",
    name: "",
  });
  const { t, i18n: { language } } = useTranslation("common")


  const [userPasswordToEdit, setUserPasswordToEdit] = useState<UserPasswordToEdit>({
    new_password: "",
    confirm_new_password: ""
  });

  const handleChangeUserProfileToEdit = (e: React.ChangeEvent<HTMLInputElement>, propsName: string) => {
    setUserProfileToEdit((prevState) => ({
      ...prevState,
      [propsName]: e.target.value,
    }));
  };

  const handleChangePasswordToEdit = (e: React.ChangeEvent<HTMLInputElement>, propsName: string) => {
    setUserPasswordToEdit((prevState) => ({
      ...prevState,
      [propsName]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent,) => {
    e.preventDefault();
    console.log("Updated Shipping Address:", userProfileToEdit);

    var editedUserProfileToEdit = {};

    if (userPasswordToEdit.new_password.length >= 6 && userPasswordToEdit.new_password === userPasswordToEdit.confirm_new_password) {
      editedUserProfileToEdit = {
        first_name: userProfileToEdit.first_name,
        last_name: userProfileToEdit.last_name,
        name: userProfileToEdit.name,
        password: userPasswordToEdit.new_password,
      };
    } else {
      editedUserProfileToEdit = {
        first_name: userProfileToEdit.first_name,
        last_name: userProfileToEdit.last_name,
        name: userProfileToEdit.name
      };
    }

    UserService.SetProfile(editedUserProfileToEdit, axiosInstanceWithLoader)
      .then(response => {
        if (editedUserProfileToEdit && 'password' in editedUserProfileToEdit) {
          setUserPasswordToEdit({
            new_password: "",
            confirm_new_password: "",
          });
        }

        console.log(response);
        setUser(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (user) {
      setUserProfileToEdit(user as UserProfileToEdit);
    }
  }, [user]);

  return (
    <div className="max-w-2xl mx-auto p-6">
      {
        !user
          ? <SkeletonType1 />
          : <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="first_name">
                  {t("accountDetails.firstname")}
                  <span className="text-red-500 ml-0.5">*</span>
                </Label>
                <Input id="first_name" value={userProfileToEdit.first_name} onChange={(e) => handleChangeUserProfileToEdit(e, 'first_name')} className="bg-gray-50" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last_name">
                  {t("accountDetails.lastname")}
                  <span className="text-red-500 ml-0.5">*</span>
                </Label>
                <Input id="last_name" value={userProfileToEdit.last_name} onChange={(e) => handleChangeUserProfileToEdit(e, 'last_name')} className="bg-gray-50" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">
                {t("accountDetails.displayName")}
                <span className="text-red-500 ml-0.5">*</span>
              </Label>
              <Input id="name" value={userProfileToEdit.name} onChange={(e) => handleChangeUserProfileToEdit(e, 'name')} className="bg-gray-50" required />
              <p className="text-sm text-lightGray italic">{t("accountDetails.displayNameDes")}</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                {t("accountDetails.emailAddress")}
                <span className="text-red-500 ml-0.5">*</span>
              </Label>
              <Input id="email" value={user?.email} className="bg-gray-50" readOnly />
            </div>

            <div className="relative">
              <span className="absolute top-[-1rem] left-5 font-bold text-2xl px-3 bg-white">{t("accountDetails.passwordChange")}</span>
              <div className="border p-7 !mt-[3rem]">

                <div className="grid grid-cols-1 gap-6">

                  <div className="space-y-2 relative">
                    <Label htmlFor="password">
                      {t("accountDetails.passChangeText")}
                      {/* <span className="text-red-500 ml-0.5">*</span> */}
                    </Label>
                    <div className="relative">
                      <Input id="password" type={showCurrentPassword ? "text" : "password"} value={user?.email} className="bg-gray-50" readOnly />

                      <button
                        type="button"
                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                        className={`absolute ${language === "en" ? "right-3" : "left-3"} top-1/2 -translate-y-1/2 text-gray-500`}
                      >
                        {showCurrentPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                    {/* <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-[0.6rem]"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button> */}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="new_password">
                      {t("accountDetails.newPassword")}
                      {/* <span className="text-red-500 ml-0.5">*</span> */}
                    </Label>
                    <div className="relative">
                      <Input id="new_password" type={showNewPassword ? "text" : "password"} minLength={6} value={userPasswordToEdit.new_password} onChange={(e) => handleChangePasswordToEdit(e, 'new_password')} className="bg-gray-50" />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className={`absolute ${language === "en" ? "right-3" : "left-3"} top-1/2 -translate-y-1/2 text-gray-500`}
                      >
                        {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>

                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm_new_password">
                      {t("accountDetails.confirmPassword")}
                      {/* <span className="text-red-500 ml-0.5">*</span> */}
                    </Label>
                    <div className="relative">
                      <Input id="confirm_new_password" type={showConfirmPassword ? "text" : "password"} minLength={6} value={userPasswordToEdit.confirm_new_password} onChange={(e) => handleChangePasswordToEdit(e, 'confirm_new_password')} className="bg-gray-50" />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className={`absolute ${language === "en" ? "right-3" : "left-3"} top-1/2 -translate-y-1/2 text-gray-500`}
                      >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>

                  </div>

                </div>

              </div>
            </div>

            <Button type="submit" className="bg-[#ff9666] hover:bg-[#ff8652] text-white">
              {t("accountDetails.saveChanges")}
            </Button>
          </form>
      }
    </div>
  )
}

