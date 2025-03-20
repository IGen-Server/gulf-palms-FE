'use client'

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { AuthService } from "@/services/api/auth.service";
import { useTranslation } from "react-i18next";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { CheckIcon } from "@heroicons/react/24/solid";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { useSearchParams } from "next/navigation";

export default function LostPassword() {
  const axiosInstanceWithLoader = CreateAxiosInstanceWithLoader();
  const { t, i18n: { language } } = useTranslation("common");
  const searchParams = useSearchParams();
  const [isInvalidKey, setIsInvalidKey] = useState(searchParams.get("invalid-key") === "true");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isRecoveryMailSendSuccess, setIsRecoveryMailSendSuccess] = useState<boolean | null>(null);

  // Handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    AuthService.GetRecoverPasswordLinkInEmail(email, language, axiosInstanceWithLoader)
      .then(response => {
        console.log(response);
        setIsRecoveryMailSendSuccess(true);
        setIsInvalidKey(false);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        
        // Ensure error.response exists before accessing it
        if (error.response) {
          console.error("Error Response:", error.response);
        } else {
          console.error("Unknown error:", error);
        }

        setIsRecoveryMailSendSuccess(false);
        setIsInvalidKey(false);
        setLoading(false);
      })
  };

  return (
    <>
      {
        !isRecoveryMailSendSuccess &&
        <div className="w-full max-w-[1192px] mt-12 text-[14px]">
          {
            (isRecoveryMailSendSuccess === false || isInvalidKey) &&
            <div className="bg-[#E0B252] text-white w-full px-8 py-5 flex flex-row gap-6 mb-6">
              <ExclamationCircleIcon className="h-6 w-6" />
              {isRecoveryMailSendSuccess === false && <span>{t('myAccount.lostPassword.recoveryMailSendFailureMessage')}</span>}
              {isInvalidKey && <span>{t('myAccount.lostPassword.recoveryInvalidKeyMessage')}</span>}
            </div>
          }
          <div className="w-full grid place-content-center mt-[50px]">
            {
              <div className="w-full max-w-[470px] space-y-[40px]">
                <p className="text-sm text-gray-600">
                  Lost your password? Please enter your username or email address. You
                  will receive a link to create a new password via email.
                </p>
                <form onSubmit={handleSubmit} className="grid gap-8">
                  <div className="grid gap-3">
                    <Label htmlFor="email">
                      Username or email address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="text"
                      value={email}
                      onChange={handleInputChange}
                      required
                      className="h-10 border-gray-200"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full px-[20px] py-[5px] bg-primary hover:bg-[#E59B62] text-white border-b-2 border-[#e68b46]"
                    disabled={loading} // Disable button while loading
                  >
                    {loading ? "Sending..." : "Reset password"}
                  </Button>
                </form>
              </div>
            }
          </div>
        </div>
      }
      {
        isRecoveryMailSendSuccess &&
        <div className="w-full max-w-[1192px] space-y-[40px] text-[14px]">
          <div className="bg-[#459647] text-white w-full px-8 py-5 flex flex-row gap-6 mb-6">
            <CheckIcon className="h-6 w-6" /> 
            <span>{t('myAccount.lostPassword.recoveryMailSendSuccessMessage')}</span>
          </div>
          <span className="text-[#777777]">{t('myAccount.lostPassword.recoveryMailSendSuccessNote')}</span>
        </div>
      }
    </>
  );
}
