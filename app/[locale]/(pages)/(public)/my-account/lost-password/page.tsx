'use client'

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { AuthService } from "@/services/api/auth.service";
import { useTranslation } from "react-i18next";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";

export default function LostPassword() {
  const { i18n: { language } } = useTranslation();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const axiosInstanceWithLoader = CreateAxiosInstanceWithLoader();

  // Handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    AuthService.RecoverPassword(email, language, axiosInstanceWithLoader)
      .then(response => {
        
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="w-full grid place-content-center mt-[50px]">
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
    </div>
  );
}
