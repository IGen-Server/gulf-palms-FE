"use client";

import GetInTouch from "@/components/common/GetInTouch";
import ImageTextCard from "@/components/common/ImageTextCard";
import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";
import showrooms from "./showroomsData.json";
import { ServiceProps } from "./[id]/ShowroomDetails";
import { useTranslation } from "react-i18next";

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
      {showrooms.map((service: ServiceProps, index: number) => (
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
                `Address : ${
                  language === "en"
                    ? service.en.content.details
                    : service.ar.content.details
                }`,
              ],
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
      <GetInTouch />
    </div>
  );
}
