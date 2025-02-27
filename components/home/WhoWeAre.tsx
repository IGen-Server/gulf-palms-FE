'use client'

import React from "react";
import { useTranslation } from "react-i18next";
import ImageTextCard from "../common/ImageTextCard";

export default function WhoWeAre() {
  const { t } = useTranslation();

  return (
    <div className="text-secondary">
      <ImageTextCard
        leftContent={{
          type: "image",
          src: "https://gulfpalms.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-30-at-4.00.09-PM.jpeg",
          bgColor: "bg-white",
          imgHeight: "h-[678.6px]",
        }}
        rightContent={{
          type: "text",
          heading: t("whoWeAre.heading"),
          headingColor: "text-[#242424]",
          headingSize: "text-xl lg:text-[36px] font-bold font-arabic",
          subheading: t("whoWeAre.subheading"),
          subheadingColor: "text-[#777777]",
          subheadingSize: "lg:text-[30px]",
          subheadingWeight: "font-sans",
          bullets: [
            t("whoWeAre.description"),
          ],
          textSize: "text-sm lg:text-[16px] text-left pr-[60%] sm:pr-[45%] lg:pr-0",
          textColor: "text-[#777777]",
          fontWeight: "font-[400] font-sans",
          bgColor: "bg-white",
          buttons: {
            items: [
              {
                text: t("whoWeAre.buttons.shopNow"),
                bgColor: "bg-black",
                borderRadius: "rounded-none",
                href: "/shop",
              },
              {
                text: t("whoWeAre.buttons.readMore"),
                bgColor: "bg-white",
                textColor: "text-[#242424] hover:bg-[#F3F3F3]",
                borderRadius: "none",
                border: "1px solid #F3F3F3",
              },
            ],
          },
        }}
      />
    </div>
  );
}
