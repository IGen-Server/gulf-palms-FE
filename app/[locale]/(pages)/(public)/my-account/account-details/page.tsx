"use client"

import SkeletonType1 from "@/components/skeleton/skeleton-type1";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useUserData } from "@/providers/UserDataProvider";
import { UserService } from "@/services/api/user.service";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";

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

  const axiosInstanceWithLoader = CreateAxiosInstanceWithLoader(true);
  const { user, setUser } = useUserData();
  const [showPassword, setShowPassword] = useState(false);
  const [userProfileToEdit, setUserProfileToEdit] = useState<UserProfileToEdit>({
    first_name: "",
    last_name: "",
    name: "",
  });

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

  const handleSubmit = (e: React.FormEvent, ) => {
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
                  First name
                  <span className="text-red-500 ml-0.5">*</span>
                </Label>
                <Input id="first_name" value={userProfileToEdit.first_name} onChange={(e) => handleChangeUserProfileToEdit(e, 'first_name')} className="bg-gray-50" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last_name">
                  Last name
                  <span className="text-red-500 ml-0.5">*</span>
                </Label>
                <Input id="last_name" value={userProfileToEdit.last_name} onChange={(e) => handleChangeUserProfileToEdit(e, 'last_name')} className="bg-gray-50" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">
                Display Name
                <span className="text-red-500 ml-0.5">*</span>
              </Label>
              <Input id="name" value={userProfileToEdit.name} onChange={(e) => handleChangeUserProfileToEdit(e, 'name')} className="bg-gray-50" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Email address
                <span className="text-red-500 ml-0.5">*</span>
              </Label>
              <Input id="email" value={user?.email} className="bg-gray-50" readOnly />
            </div>

            <div className="relative">
              <span className="absolute top-[-1rem] left-5 font-bold text-2xl px-3 bg-white">Password change</span>
              <div className="border p-7 !mt-[3rem]">
                
                <div className="grid grid-cols-1 gap-6">

                  <div className="space-y-2 relative">
                    <Label htmlFor="password">
                      Current password (leave blank to leave unchanged)
                      {/* <span className="text-red-500 ml-0.5">*</span> */}
                    </Label>
                    <Input id="password" type={showPassword ? "text" : "password"} value={user?.email} className="bg-gray-50" readOnly />
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
                      New password (leave blank to leave unchanged)
                      {/* <span className="text-red-500 ml-0.5">*</span> */}
                    </Label>
                    <Input id="new_password" minLength={6} value={userPasswordToEdit.new_password} onChange={(e) => handleChangePasswordToEdit(e, 'new_password')} className="bg-gray-50" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm_new_password">
                      Confirm new password
                      {/* <span className="text-red-500 ml-0.5">*</span> */}
                    </Label>
                    <Input id="confirm_new_password" minLength={6} value={userPasswordToEdit.confirm_new_password} onChange={(e) => handleChangePasswordToEdit(e, 'confirm_new_password')} className="bg-gray-50" />
                  </div>

                </div>

              </div>
            </div>

            <Button type="submit" className="bg-[#ff9666] hover:bg-[#ff8652] text-white">
              SAVE CHANGES
            </Button>
          </form>
      }
    </div>
  )
}

