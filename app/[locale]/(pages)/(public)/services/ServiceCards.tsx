"use client";

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
              headingColor: "text-black",
              headingSize: "text-[30px]",
              heading: language === "en" ? service.en.title : service.ar.title,
              subheadingColor: "text-black",
              subheadingSize: "text-[30px]",
              subheadingWeight: "font-light",
              bullets:
                language === "en"
                  ? [service.en.description]
                  : [service.ar.description],
              textAlign: "center",
              textSize: "text-[15px]",
              textColor: "text-black/90",
              fontWeight: "font-[400]",
              bgColor: "bg-white",
              buttons: {
                items: [
                  {
                    text: language === "en" ? "GET IN TOUCH" : "ابقى على تواصل",
                    bgColor: "bg-primary",
                    borderRadius: "rounded-none",
                    href: "/contact",
                  },
                  {
                    text: language === "en" ? "READ MORE" : "اقرأ أكثر",
                    bgColor: "bg-white",
                    textColor: "text-black",
                    href: `${
                      language === "en"
                        ? `/services/${service.slug[0]}`
                        : `/services/${service.slug[1]}`
                    }`,
                    border: "1px solid lightgray",
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
              imgHeight: "h-[600px]",
            }}
          />
        </div>
      ))}
    </div>
  );
};
export default ServiceCards;
