'use client'

import React from "react";
import { useTranslation } from "react-i18next";
import ImageTextCardCopy from "../common/ImageTextCardCopy";

export default function WhoWeAre() {
  const { t } = useTranslation();

  return (
    <div className="text-secondary">
      <ImageTextCardCopy
        leftContent={{
          type: "image",
          src: "https://gulfpalms.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-30-at-4.00.09-PM.jpeg",
          bgColor: "bg-white",
          imgHeight: "h-[430px] lg:h-[678.6px]",
        }}
        rightContent={{
          type: "text",
          heading: t("whoWeAre.heading"),
          headingColor: "text-[#242424]",
          headingSize: "text-xl lg:text-[36px] font-bold font-arabic",
          subheading: t("whoWeAre.subheading"),
          subheadingColor: "text-[#777777]",
          subheadingSize: "lg:text-[30px]",
          subheadingWeight: "",
          bullets: [
            t("whoWeAre.description"),
          ],
          textSize: "text-sm lg:text-[16px] lg:pr-0",
          textColor: "text-[#777777]",
          fontWeight: "font-[400]",
          bgColor: "bg-white",
          buttons: {
            items: [
              {
                text: t("whoWeAre.buttons.shopNow"),
                bgColor: "bg-[#242424]",
                bgHoverColor: "hover:bg-[#242424]",
                borderRadius: "rounded-none",
                href: "/shop",
              },
              {
                text: t("whoWeAre.buttons.readMore"),
                bgColor: "bg-white border border-lightGray/30",
                bgHoverColor: "hover:bg-lightGray/10",
                textColor: "text-[#333] leading-[1.375rem]",
                textHoverColor: "text-[#333]",
                borderRadius: "none",
                border: "1px solid #F3F3F3",
                href: '/about-us-arabic'
              },
            ],
          },
        }}
      />
    </div>
  );
}
