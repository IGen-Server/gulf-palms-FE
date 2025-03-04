"use client";

import GetInTouch from "@/components/common/GetInTouch";
import ImageTextCard from "@/components/common/ImageTextCard";
import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";
import showrooms from "./showroomsData.json";
import { ServiceProps } from "./[id]/ShowroomDetails";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const breadcrumbLinks = [
  { name: "Home", arabicName: "الرئيسية", href: "/" },
  { name: "Showrooms", arabicName: "» معارضنا", href: "/showrooms" },
];

export default function ShowRoomsList() {
  const {
    i18n: { language },
  } = useTranslation();

  return (
    <div className="pt-[98px] ">
      <div className="flex flex-col items-center py-[50px]">
        <h1 className="text-[68px] font-bold text-black">Showrooms</h1>
        <CustomBreadCrumb links={breadcrumbLinks} />
      </div>
      {showrooms.slice(0, 3).map((service: ServiceProps, index: number) => (
        <div key={index} className="flex flex-col gap-12">
          <ImageTextCard
            colReversed={index % 2 !== 0}
            leftContent={{
              type: "text",
              subheading:
                language === "en"
                  ? service.en.content.subheading
                  : service.ar.content.subheading,
              headingColor: "text-primary",
              headingSize: "text-[30px]",
              heading:
                language === "en"
                  ? service.en.content.title
                  : service.ar.content.title,
              subheadingColor: "text-primary",
              subheadingSize: "text-[30px]",
              subheadingWeight: "font-light",
              bullets: [
                `${
                  language === "en"
                    ? service.en.content.details
                    : service.ar.content.details
                }`,
              ],
              bulletsSpan: language === "en" ? "Address: " : "العنوان: ",
              textAlign: "center",
              textSize: "text-[15px]",
              textColor: "text-primary",
              fontWeight: "font-[400]",
              bgColor: "bg-white",
              buttons: {
                items: [
                  {
                    text: language === "en" ? "CONTACT US" : "اتصل بنا",
                    textColor: "text-primary",
                    bgColor: "bg-white",
                    borderRadius: "rounded-none",
                    border: "2px solid",
                    borderColor: "primary",
                    href: "/tel:%20+965%206066%200387",
                  },
                  {
                    text: language === "en" ? "OUR LOCATION" : "موقعنا",

                    textColor: "text-primary",
                    bgColor: "bg-white",
                    borderRadius: "rounded-none",
                    border: "2px solid",
                    borderColor: "primary",
                    href: service.mapUrl,
                  },
                ],
                align: "center",
              },
            }}
            rightContent={{
              type: "video",
              src: service.video,
              bgColor: "bg-white",
            }}
          />
        </div>
      ))}
      <div className="w-full max-w-[1140px] flex flex-col lg:flex-row items-center gap-12 lg:gap-0 mx-auto my-12">
        {showrooms.slice(3).map((showroom: ServiceProps, index: number) => (
          <div
            key={index}
            className="flex flex-col flex-1 justify-center items-center gap-5 px-[10%] text-center"
          >
            <h2 className="font-light text-3xl text-primary">
              {language === "en"
                ? showroom.en.content.subheading
                : showroom.ar.content.subheading}
            </h2>
            <h2 className="font-semibold text-4xl text-primary uppercase">
              {language === "en"
                ? showroom.en.content.title
                : showroom.ar.content.title}
            </h2>
            <p className="font-normal text-[1.0625rem] text-primary">
              <span className="font-semibold">
                {language === "en" ? "Address: " : "العنوان: "}
              </span>
              {language === "en"
                ? showroom.en.content.details
                : showroom.ar.content.details}
            </p>
            <div className="flex gap-7">
              <Link
                href={language === "en" ? "/en/contact-us" : "/ar/contact-us"}
                className="bg-white border-[2px] border-primary px-5 py-2 hover:bg-primary font-semibold text-[.8125rem] text-primary duration-300 cursor-pointer"
              >
                {language === "en" ? "CONTACT US" : "اتصل بنا"}
              </Link>
              <Link
                href={showroom.mapUrl}
                className="bg-white border-[2px] border-primary px-5 py-2 hover:bg-primary font-semibold text-[13px] text-primary duration-300 cursor-pointer"
              >
                {language === "en" ? "OUR LOCATION" : "موقعنا"}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <GetInTouch language={language} />
    </div>
  );
}
