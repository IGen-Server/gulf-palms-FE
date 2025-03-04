"use client";

import Link from "next/link";
import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";
import GetInTouch from "@/components/common/GetInTouch";
import farms from "../farmsData.json";
import { useTranslation } from "react-i18next";
import { FarmType } from "../FarmDetails";
import Image from "next/image";
import Video from "@/components/common/Video";

const SingleFarm = ({ slug }: { slug: string }) => {
  const {
    i18n: { language },
  } = useTranslation();

  const farm = farms.find((farm: FarmType) => farm.slug.includes(slug));

  const farmByLanguage = farm && farm[language as "en" | "ar"];

  const breadcrumbLinks = [
    { name: "Home", arabicName: "الرئيسية", href: "/" },
    { name: "OurFarms", arabicName: " » مزارعنا", href: "/our-farms" },
    {
      name: farm?.en.title ?? "",
      arabicName: farm?.ar.title ?? "",
      href: "/",
    },
  ];

  return (
    <section className="space-y-[30px] pt-[98px] w-full overflow-hidden">
      <div className="flex flex-col items-center gap-7 lg:pt-[50px]">
        <h1 className="text-4xl lg:text-[68px] lg:leading[5rem] font-bold text-black">
          {farmByLanguage?.title}
        </h1>
        <CustomBreadCrumb links={breadcrumbLinks} />
      </div>
      <div
        className={`flex flex-col md:flex-row items-center justify-center max-w-[100vw] md:h-[520px] md:w-[1192px] mx-auto rounded-lg `}
      >
        <div className="w-full h-full ">
          <div className="p-6 h-full w-full items-center text-center grid place-content-center">
            <div className="flex flex-col items-center gap-2">
              <div className="space-y-2">
                <h2 className="max-lg:hidden text-[30px] font-light text-[#777] uppercase">
                  Farm
                </h2>
                <h2 className="text-xl lg:text-[30px] font-bold text-[#242424] uppercase">
                  {farmByLanguage?.title}
                </h2>
                <p className="text-[1.0625rem] text-[#7A7A7A]">
                  <span className="font-bold">Address : </span>
                  {farmByLanguage?.address}
                </p>
              </div>
              <div className="flex gap-5 pt-4">
                <Link
                  href="/contact-us"
                  className="text-white bg-primary hover:bg-[#e59b62] duration-300 px-5 py-3 uppercase"
                >
                  {language === "en" ? "Contact Us" : "اتصل بنا"}
                </Link>
                <Link
                  href={farm?.link ?? ""}
                  target="_blank"
                  className="text-white bg-primary hover:bg-[#e59b62] duration-300 px-5 py-3 uppercase"
                >
                  {language === "en" ? "OUR LOCATION" : "موقعنا"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Video src={farm?.video ?? ""} />
      </div>
      <GetInTouch language={language} />
    </section>
  );
};
export default SingleFarm;
