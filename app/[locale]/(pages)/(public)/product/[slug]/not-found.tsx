"use client";

import GetInTouch from "@/components/common/GetInTouch";
import { Search } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Shop from "../../shop/page";

const NotFound = () => {
  const { t, i18n: { language } } = useTranslation("common");

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-4">
        <h1 className="absolute top-[290px] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-[900] text-gray-300 opacity-70">404</h1>
        <div className="flex flex-col gap-3  z-10">
          <h2 className="text-[4.375rem] mt-36 font-[900] text-orange-500 uppercase">{t("shop.notFound")}</h2>
          <p className="mt-12 font-semibold text-2xl text-[#242424]">
            {t("shop.notFoundTitle")}
          </p>
          <p className="text-lightGray">{t("shop.notFoundSubtitle")}</p>
          <div className={`flex ${language === "en" ? "" : "flex-row-reverse"} mt-4 relative`}>
            <input
              type="text"
              placeholder={t("shop.searchForPosts")}
              className="border rounded-lg p-2 pl-4 pr-10 w-80 focus:outline-none focus:ring focus:border-blue-300"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              <Search />
            </button>
          </div>
        </div>
      </div>
      <GetInTouch language={language} />
    </>
  );
};

export default NotFound;