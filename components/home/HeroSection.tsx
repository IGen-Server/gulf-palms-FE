"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const content = (
    <>
      <p
        className={`text-[24px] ${
          isArabic ? "text-right !font-arabic " : "text-left"
        } sm:text-[30px] lg:text-[42px] font-[300] font-sans`}
      >
        {t("home.heroSection.Slogan1")}
      </p>
      <p
        className={`sm:text-[22px] lg:text-[28px] ${
          isArabic ? "text-right font-arabic " : "text-left"
        } sm:text-[32px] lg:text-[46px]  font-semibold font-arabic pt-1 `}
      >
        {t("home.heroSection.Slogan2")}
      </p>
      <p
        className={`text-[14px] lg:text-[16px] pt-3  max-w-[700px] ${
          isArabic ? "text-right font-arabic " : "text-left font-sans"
        }`}
      >
        {t("home.heroSection.Slogan3")}
      </p>
      <div className="flex w-full flex-col md:flex-row items-center gap-4 pt-8  justify-center md:justify-start md:max-w-[1000px]">
        <Link
          href="/about-us-arabic"
          className="rounded-none bg-primary opacity-90 hover:bg-primary hover:opacity-100 w-full md:w-[137.8px] h-[48px] grid place-content-center font-semibold"
        >
          {t("home.heroSection.Button2")}
        </Link>
        <Link
          href="/shop"
          className="rounded-none bg-transparent hover:bg-transparent hover:text-current w-full md:w-[137.8px] h-[48px] grid place-content-center border-white lg:border-gray-400 hover:border-secondary font-semibold border-2"
        >
          {t("home.heroSection.Button1")}
        </Link>
      </div>
    </>
  );

  return (
    <div className={`!max-w-[99vw] max-md:w-full  lg:max-w-[1000px]  lg:text-left absolute top-[125px] lg:top-[353px] 2xl:top-[360px] lg:ml-[30px] 2xl:-ml-[30px] !overflow-x-hidden ${isArabic ? 'max-lg:px-[22px]' : ' px-[22px] pr-[30px] sm:pr-[60px]'}`}>
      <div className="relative z-10 text-white lg:text-secondary">
        {content}
      </div>
    </div>
  );
}
