"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { AuthService } from "@/services/api/auth.service";
import { CookieStorageService } from "@/services/utility/storage.service";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { useGlobalDataProvider } from "@/providers/GlobalDataProvider";
import { useTranslation } from "react-i18next";

export default function AuthComponent() {
  const { t,
    i18n: { language },
  } = useTranslation("common");

  const { setIsTokenExpired } = useGlobalDataProvider();

  const axiosInstanceWithLoader = CreateAxiosInstanceWithLoader();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignIn, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState<null | string>(null);

  const toggleAuth = () => setIsLogin(!isSignIn);

  const handleAuth = async (e: any) => {
    e.preventDefault();
    setError(null);

    if (isSignIn) {
      AuthService.SignIn(email, password, axiosInstanceWithLoader)
        .then((response) => {
          console.log(response);
          CookieStorageService.setAccessToken(response.data.jwt);
          setIsTokenExpired(false);
          window.location.reload();
        })
        .catch((error) => {
          console.error(error);
          setError("Authentication failed. Please try again.");
        });
    } else {
      AuthService.SignUp(username, email, password, axiosInstanceWithLoader)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
          setError("Authentication failed. Please try again.");
        });
    }
  };

  return (
    <div className="container mx-auto flex items-center justify-center px-4">
      <div className="w-full max-w-5xl grid gap-12 md:grid-cols-2">
        {/* Left Side - Dynamic Form */}
        <div className="space-y-6 text-[#2B2B2B]">
          <h1 className="text-[22px] font-semibold">
            {isSignIn ? t("auth.login") : t("auth.register")}
          </h1>
          {error && <p className="text-red-500">{error}</p>}
          <form className="space-y-6" onSubmit={handleAuth}>
            {!isSignIn && (
              <div className="space-y-2">
                <Label htmlFor="username" className="text-base font-normal">
                  {t("auth.username")} <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="username"
                  type="text"
                  required
                  className="h-12 border-gray-200"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-base font-normal">
                {isSignIn ? t("auth.usernameOrEmail") : t("auth.email")}{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                required
                className="h-12 border-gray-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative space-y-2">
              <Label htmlFor="password" className="text-base font-normal">
                {t("auth.password")} <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="h-12 border-gray-200"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className={`absolute ${language === "en" ? "right-2" : "left-2"} top-1/2 -translate-y-1/2`}
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
            <Button
              type="submit"
              className="w-full h-12 bg-primary hover:bg-[#E59B62] font-normal border-b-2 border-[#e68b46]"
            >
              {isSignIn ? t("auth.loginButton") : t("auth.registerButton")}
            </Button>
            {isSignIn && (
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" className={`${language === "ar" ? "ml-3" : ""}`} />
                  <label
                    htmlFor="remember"
                    className="text-sm text-gray-600 font-normal"
                  >
                    {t("auth.remember")}
                  </label>
                </div>
                <Link
                  href="/my-account/lost-password"
                  className="text-sm text-primary hover:text-[#FFA755]"
                >
                  {t("auth.reset")}
                </Link>
              </div>
            )}
            {!isSignIn && (
              <p className="text-sm text-gray-600">
                {t("auth.privacyText")}{" "}
                <a href="#" className="text-primary hover:text-[#FFA755]">
                  {t("auth.privacy")}{" "}
                </a>
                .
              </p>
            )}
          </form>
        </div>

        {/* Right Side - Info */}
        <div className="space-y-6 text-center">
          <h2 className="text-[22px] font-semibold">
            {!isSignIn ? t("auth.login") : t("auth.register")}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {t("auth.registerText")}
          </p>
          <Button
            variant="ghost"
            onClick={toggleAuth}
            className="text-gray-800 bg-lightGray/10 hover:text-gray-600 px-3 py-2 h-auto font-semibold "
          >
            {!isSignIn ? t("auth.loginButton") : t("auth.registerButton")}
          </Button>
        </div>
      </div>
    </div>
  );
}
