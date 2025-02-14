import React from "react";
import ImageTextCard from "../common/ImageTextCard";

export default function WhoWeAre() {
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
          heading: "GULF PALMS",
          headingColor: "text-[#242424]",
          headingSize: "text-xl lg:text-[36px] font-bold font-arabic",
          subheading: "WHO WE ARE",
          subheadingColor: "text-[#777777]",
          subheadingSize: "lg:text-[30px]",
          subheadingWeight: "font-sans",
          bullets: [
            `Gulf Palms General Trading & Contacting Company (Tissue Culture Palms Centre) has been established in 1991 immediately after the invasion. The nursery had been purchased at Ar Rai and palm offshoots had been imported from Saudi Arabia. They faced some difficulties in importing offshoots of the good varieties so they decided to get sources of American tissue culture laboratories, for supplying Tissue Culture Palms. Offshoots of the excellent and most popular palm varieties of Gulf region were collected and sent to States for micro propagation. Later the agreement had been terminated and all the cultures shifted to Jacques Marionnet, France who appointed Gulf Palms its agent in Kuwait & Saudi Arabi
            `,
          ],
          textSize: "text-sm lg:text-[16px] text-left pr-[60%] sm:pr-[45%] lg:pr-0",
          textColor: "text-[#777777]",
          fontWeight: "font-[400] font-sans",
          bgColor: "bg-white",
          buttons: {
            items: [
              {
                text: "SHOP NOW",
                bgColor: "bg-black",
                borderRadius: "rounded-none",
                href: "/shop",
              },
              {
                text: "READ MORE",
                bgColor: "bg-white",
                textColor: "text-[#242424] hover:bg-[#F3F3F3] ",
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
