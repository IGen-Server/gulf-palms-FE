"use client";

import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const content = (
    <>
      <p className={`text-[24px] ${isArabic ? 'text-right' : 'text-left'} sm:text-[28px] lg:text-[42px] font-[300] font-sans`}>
        {t("home.heroSection.Slogan1")}
      </p>
      <p className={`text-[28px] ${isArabic ? 'text-right' : 'text-left'} sm:text-[32px] lg:text-[46px] font-bold font-arabic pt-1`}>
        {t("home.heroSection.Slogan2")}
      </p>
      <p className={`text-[14px] lg:text-[16px] pt-3 font-sans max-w-[600px] mx-auto lg:mx-0 ${isArabic ? 'text-right' : 'text-left'}`}>
        {t("home.heroSection.Slogan3")}
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 pt-8 w-full max-sm:justify-center lg:justify-start">
        <Button
          className="rounded-none bg-primary opacity-90 hover:bg-primary hover:opacity-100 w-full sm:w-[137.8px] h-[48px] grid place-content-center font-semibold"
          variant={"default"}
        >
          {t("home.heroSection.Button2")}
        </Button>
        <Button
          variant={"outline"}
          className="rounded-none bg-transparent hover:bg-transparent hover:text-current w-full sm:w-[137.8px] h-[48px] grid place-content-center border-white lg:border-gray-400 hover:border-secondary font-semibold"
        >
          {t("home.heroSection.Button1")}
        </Button>
      </div>
    </>
  );

  return (
    <div className="w-full lg:max-w-[1000px] px-4 lg:text-left absolute top-[125px] lg:top-[150px] 2xl:top-[333px] lg:ml-[50px] 2xl:-ml-[25px]">
      <div className="relative z-10 text-white lg:text-secondary">
        {content}
      </div>
    </div>
  );
}