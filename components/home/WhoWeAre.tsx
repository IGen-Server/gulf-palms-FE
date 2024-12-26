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
        }}
        rightContent={{
          type: "text",
          heading: "GULF PALMS",
          headingColor: "text-black",
          headingSize: "text-[30px]",
          subheading: "WHO WE ARE",
          subheadingColor: "text-black",
          subheadingSize: "text-[30px]",
          subheadingWeight: "font-light",
          bullets: [
            `Gulf Palms General Trading & Contacting Company (Tissue Culture Palms Centre) has been established in 1991 immediately after the invasion. The nursery had been purchased at Ar Rai and palm offshoots had been imported from Saudi Arabia. They faced some difficulties in importing offshoots of the good varieties so they decided to get sources of American tissue culture laboratories, for supplying Tissue Culture Palms. Offshoots of the excellent and most popular palm varieties of Gulf region were collected and sent to States for micro propagation. Later the agreement had been terminated and all the cultures shifted to Jacques Marionnet, France who appointed Gulf Palms its agent in Kuwait & Saudi Arabi
            `,
          ],
          textSize: "text-[15px]",
          textColor: "text-black/90",
          fontWeight: "font-[400]",
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
                textColor: "text-black",
                borderRadius: "",
              },
            ],
          },
        }}
      />
    </div>
  );
}
