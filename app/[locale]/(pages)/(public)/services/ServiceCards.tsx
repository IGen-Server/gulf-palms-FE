"use client";

import GetInTouch from "@/components/common/GetInTouch";
import ImageTextCard from "@/components/common/ImageTextCard";
import { serviceData } from "@/data/serviceData";
import { useTranslation } from "react-i18next";

const ServiceCards = () => {
  const {
    i18n: { language },
  } = useTranslation();

  return (
    <div className="">
      {serviceData.map((service, index: number) => (
        <div key={service.id}>
          <ImageTextCard
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
                    bgColor: "bg-primary hover:bg-[#e59b78]",
                    borderRadius: "rounded-none",
                    href: "/contact",
                  },
                  {
                    text: language === "en" ? "READ MORE" : "اقرأ أكثر",
                    bgColor: "bg-white hover:bg-[#777777] hover:bg-opacity-10",
                    textColor: "text-black",
                    textHoverColor: "hover:text-black",
                    href: `${
                      language === "en"
                        ? `/services/${service.slug[0]}`
                        : `/services/${service.slug[1]}`
                    }`,
                    borderColor: "border border-[#777] hover:border-[#777]/10",
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
            imageFirst
          />
        </div>
      ))}
      <GetInTouch language={language} />
    </div>
  );
};
export default ServiceCards;
