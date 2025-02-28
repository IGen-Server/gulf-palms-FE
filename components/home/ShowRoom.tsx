"use client";

import React from "react";
import { useTranslation } from "react-i18next";


export default function ShowRoom() {
  const { t } = useTranslation();
  return (
    <div className="w-screen mx-auto min-h-[306px]">
      <div className="flex flex-col lg:flex-row h-fit ">
        <div className="text-white space-y-3 bg-[#6F803D] p-[50px] text-center w-full flex flex-col items-center justify-center min-h-[306px]">
          <p className="text-[30px] font-sans font-light">{t("names.abdali")}</p>
          <p className="text-[29px] font-bold font-arabic h-[150px] md:h-[180px] 2xl:h-[150px]">
            {t("showrooms.abdali")}
          </p>
          <button className="w-[132px] h-[42px] grid place-content-center uppercase rounded-none bg-[#f3f3f3] text-gray-700 text-[13px] font-sans hover:bg-gray-200 font-semibold">
            {t("showrooms.getLocation")}
          </button>
        </div>
        <div className="text-white space-y-3 bg-primary p-[50px] text-center w-full h-fit flex flex-col items-center justify-center">
          <p className="text-[30px] font-sans font-light">{t("names.rai")}</p>
          <p className="text-[29px] font-bold font-arabic h-[100px] md:h-[200px] 2xl:h-[150px]">
            {t("showrooms.rai")}
          </p>
          <button className="w-[132px] h-[42px] grid place-content-center uppercase rounded-none bg-[#f3f3f3] text-gray-700 text-[13px] font-sans hover:bg-gray-200 font-semibold">
            {t("showrooms.getLocation")}
          </button>
        </div>
        <div className="text-white space-y-3 bg-[#6F803D] p-[50px] text-center w-full h-fit flex flex-col items-center justify-center">
          <p className="text-[30px] font-sans font-light">{t("names.wafrah")}</p>
          <p className="text-[29px] font-bold font-arabic h-[150px] md:h-[200px] 2xl:h-[150px]">
            {t("showrooms.wafrah")}
          </p>
          <button className="w-[132px] h-[42px] grid place-content-center uppercase rounded-none bg-[#f3f3f3] text-gray-700 text-[13px] font-sans hover:bg-gray-200 font-semibold">
            {t("showrooms.getLocation")}
          </button>
        </div>
      </div>
    </div>
  );
}
