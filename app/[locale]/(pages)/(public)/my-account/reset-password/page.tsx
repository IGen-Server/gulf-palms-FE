'use client'

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React, { Suspense, useEffect, useState } from "react";
import { AuthService } from "@/services/api/auth.service";
import { useTranslation } from "react-i18next";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { CheckIcon } from "@heroicons/react/24/solid";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { useSearchParams } from "next/navigation";
import { ClientRoutes } from "@/services/utility/router.service";
import { Eye, EyeOff } from "lucide-react";
import { CookieStorageService } from "@/services/utility/storage.service";
import { useGlobalDataProvider } from "@/providers/GlobalDataProvider";

function ResetPasswordContent() {
  const { t, i18n: { language } } = useTranslation("common");
  const { setIsTokenExpired } = useGlobalDataProvider();
  const searchParams = useSearchParams();
  const resetToken = searchParams.get("token");

  const [loading, setLoading] = useState(false);
  const axiosInstanceWithLoader = CreateAxiosInstanceWithLoader();

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  useEffect(() => {
    if (resetToken) {
      console.log(resetToken);

      AuthService.VerifyRecoveryToken(resetToken, language, axiosInstanceWithLoader)
        .then(response => {

        })
        .catch(error => {
          console.error(error);
          window.location.href = `${ClientRoutes.User.MyAccountLostPassword}?invalid-key=true`;
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetToken]);

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (confirmPassword !== password) {
      setPasswordMismatch(true);
    } else {
      setPasswordMismatch(false);
    }

    setLoading(true);

    AuthService.ResetPassword(password, confirmPassword, resetToken || "", language, axiosInstanceWithLoader)
      .then(response => {
        console.log(response);

        CookieStorageService.setAccessToken(response.data.jwt);
        setIsTokenExpired(false);
        window.location.href = `${ClientRoutes.User.MyAccountDashboard}?password-reset=${crypto.randomUUID()}`;
        setLoading(false);
      })
      .catch(error => {
        window.location.href = `${ClientRoutes.User.MyAccountLostPassword}?invalid-key=true`;
        setLoading(false);
      });
  };

  return (
    <>
      {
        <div className="w-full max-w-[1192px] mt-12 text-[14px]">
          {
            passwordMismatch &&
            <div className="bg-[#E0B252] text-white w-full px-8 py-5 flex flex-row gap-6 mb-6">
              <ExclamationCircleIcon className="h-6 w-6" />
              <span>{t('myAccount.recoverAccount.passwordMismatch')}</span>
            </div>
          }
          <div className="w-full flex place-content-center mt-[50px] text-[15.4px]">
            {
              <div className="w-full max-w-[470px] space-y-[40px]">
                <p className="text-[#777777] border-b border-gray-300 pb-6">
                  {t('myAccount.recoverAccount.formTitle')}
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-8 text-[#242424]">

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="password">
                      {t('myAccount.recoverAccount.newPasswordLabel')} <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative w-full">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        required
                        className="h-10 border-gray-200 w-full"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="password">
                      {t('myAccount.recoverAccount.confirmPasswordLabel')} <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative w-full">
                      <Input
                        id="password"
                        type={showConfirmPassword ? "text" : "password"}
                        required
                        className="h-10 border-gray-200 w-full"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full px-[20px] bg-primary hover:bg-[#E59B62] text-white border-b-2 border-[#e68b46]"
                    disabled={loading}
                  >
                    {t('myAccount.recoverAccount.saveButtonText')}
                  </Button>
                </form>
              </div>
            }
          </div>
        </div>
      }
    </>
  );
}

export default function LostPassword() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordContent />
    </Suspense>
  );
}
