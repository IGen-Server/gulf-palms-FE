"use client";

import Link from "next/link";
import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";
import GetInTouch from "@/components/common/GetInTouch";
import farms from "./farmsData.json";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Video from "@/components/common/Video";

type FarmContent = {
  name: string;
  title: string;
  address: string;
};

export type FarmType = {
  slug: string[];
  video: string;
  link: string;
  en: FarmContent;
  ar: FarmContent;
};

const FarmDetails = () => {
  const {
    i18n: { language },
  } = useTranslation();

  const breadcrumbLinks = [
    { name: "Home", arabicName: "الرئيسية", href: "/" },
    { name: "OurFarms", arabicName: " » مزارعنا", href: "/our-farms" },
  ];

  return (
    <section className="space-y-[80px] pt-[98px] w-full overflow-hidden">
      <div className="flex flex-col items-center lg:gap-7 lg:pt-[50px]">
        <h1 className="text-4xl lg:text-[68px] lg:leading[5rem] font-bold text-black">
          {language === "en" ? "Our Farms" : "مزارعنا"}
        </h1>
        <CustomBreadCrumb links={breadcrumbLinks} />
      </div>
      <div className="w-[100vw] flex flex-col mx-auto gap-5 lg:gap-0 overflow-hidden">
        {farms.map((farm: FarmType, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-center gap-5 lg:gap-0 w-full h-full ${
              index % 2 === 0
                ? "md:w-full"
                : "md:w-[1192px] lg:!flex-row-reverse"
            } mx-auto rounded-lg `}
          >
            <div className="flex flex-1">
              <div className="p-6 h-full w-full items-center text-center text-[#6F803D] grid place-content-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex flex-col gap-2">
                    <h2 className="font-light text-[30px] text-[#777]">
                      {farm[language as "en" | "ar"].name}
                    </h2>
                    <h2 className="font-semibold text-xl lg:text-[2.375rem] lg:leading-[3.3125rem] text-[#6f803d] uppercase">
                      {farm[language as "en" | "ar"].title}
                    </h2>
                    <p className="text-[1.0625rem] lg:text-[1.1875rem] text-[#6f803d] lg:leading-[1.875rem]">
                      <span className="font-bold">
                        {language === "en" ? "Address: " : "العنوان: "}
                      </span>
                      {farm[language as "en" | "ar"].address}
                    </p>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <Link
                      href="/contact-us"
                      className="font-semibold text-[.8125rem] text-white bg-[#6F803D] px-5 py-3 uppercase"
                    >
                      {language === "en" ? "Contact Us" : "اتصل بنا"}
                    </Link>
                    <Link
                      href={farm.link}
                      target="_blank"
                      className="font-semibold text-[.8125rem] text-white bg-[#6F803D] px-5 py-3 uppercase"
                    >
                      {language === "en" ? "OUR LOCATION" : "موقعنا"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-1 w-full h-[300px] lg:h-[520px]">
              <Video src={farm.video} />
            </div>
          </div>
        ))}
      </div>
      <GetInTouch language={language} />
    </section>
  );
};
export default FarmDetails;
