"use client";

import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const showrooms = [
  {
    id: "abdali",
    nameKey: "names.abdali",
    showroomKey: "showrooms.abdali",
    link: "/showrooms/abdali-farm-showroom/",
    bgColor: "bg-[#6F803D]",
  },
  {
    id: "rai",
    nameKey: "names.rai",
    showroomKey: "showrooms.rai",
    link: "/showrooms/rai-nursery/",
    bgColor: "bg-primary",
  },
  {
    id: "wafrah",
    nameKey: "names.wafrah",
    showroomKey: "showrooms.wafrah",
    link: "/showrooms/wafrah-farm-showroom/",
    bgColor: "bg-[#6F803D]",
  },
];

export default function ShowRoom() {
  const { t } = useTranslation();
  return (
    <div className="mx-auto lg:h-[306px]">
      <div className="flex flex-col lg:flex-row h-fit">
        {showrooms.map(({ id, nameKey, showroomKey, link, bgColor }) => (
          <div key={id} className={`text-white space-y-3 ${bgColor} p-[50px] text-center w-full flex flex-col items-center justify-center min-h-[206px]`}>
            <p className="text-[30px] font-light">{t(nameKey)}</p>
            <p className="text-[29px] font-bold font-arabic min-h-fit h-[100px]">
              {t(showroomKey)}
            </p>
            <Link
              href={link}
              className="w-[132px] h-[42px] grid place-content-center uppercase rounded-none bg-[#f3f3f3] text-gray-700 text-[13px] hover:bg-gray-200 font-semibold"
            >
              {t("showrooms.getLocation")}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
