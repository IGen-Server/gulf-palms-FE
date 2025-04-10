"use client";

import GetInTouch from "@/components/common/GetInTouch";
import ImageTextCard from "@/components/common/ImageTextCard";
import ImageTextCardCopy from "@/components/common/ImageTextCardCopy";
import { serviceData } from "@/data/serviceData";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

const ServiceCards = () => {
  const {
    i18n: { language },
  } = useTranslation();

  const pathname = usePathname();

  console.log(pathname);


  return (
    <div className="">
      {serviceData.map((service, index: number) => (
        <div key={service.id}>
          <ImageTextCardCopy
            colReversed={index % 2 !== 0}
            leftContent={{
              type: "text",
              subheading: language === "en" ? "GULF PALMS" : "نخيل الخليج",
              headingColor: "text-[#242424]",
              headingSize: "text-4xl uppercase",
              heading: language === "en" ? service.en.title : service.ar.title,
              subheadingColor: "text-[#777]",
              subheadingSize: "text-3xl",
              subheadingWeight: "font-light",
              bullets:
                language === "en"
                  ? [service.en.description]
                  : [service.ar.description],
              textAlign: "center",
              textSize: "text-[15px]",
              textColor: "text-[#777]",
              fontWeight: "font-[400]",
              bgColor: "bg-white",
              buttons: {
                items: [
                  {
                    text: language === "en" ? "GET IN TOUCH" : "ابقى على تواصل",
                    textColor: "font-semibold text-sm text-white",
                    bgColor: "bg-primary",
                    bgHoverColor: "hover:bg-[#e59b62]",
                    borderRadius: "rounded-none",
                    href: "tel:+96560660387",
                  },
                  {
                    text: language === "en" ? "READ MORE" : "اقرأ أكثر",
                    bgColor: "bg-white",
                    textColor: "font-semibold text-sm text-lightBlack",
                    href: `${language === "en"
                      ? `/services/${service.slug[0]}`
                      : `/services/${service.slug[1]}`
                      }`,
                    borderColor: "border border-[#777]/10 hover:border-[#777]/10",
                    bgHoverColor: "hover:bg-lightGray/10",
                    textHoverColor: "text-lightBlack",
                    borderRadius: "none",
                  },
                ],
                align: "center",
              },
            }}
            rightContent={{
              type: "image",
              src: service.coverImage,
              bgColor: "bg-white",
              imgHeight: "h-[300px] lg:h-[600px]",
            }}
          />
        </div>
      ))}
      <GetInTouch language={language} />
    </div>
  );
};
export default ServiceCards;
