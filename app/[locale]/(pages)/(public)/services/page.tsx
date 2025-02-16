import GetInTouch from "@/components/common/GetInTouch";
import ImageTextCard from "@/components/common/ImageTextCard";
import { serviceData } from "@/data/serviceData";

export default function AllServices() {
  return (
    <div className="pt-[98px]">
      {serviceData.map((service, index) => (
        <div key={service.id}>
          <ImageTextCard
            leftContent={
              index % 2 === 0
                ? {
                    type: "text",
                    subheading: "GULF PALMS",
                    headingColor: "text-black",
                    headingSize: "text-[30px]",
                    heading: service.title,
                    subheadingColor: "text-black",
                    subheadingSize: "text-[30px]",
                    subheadingWeight: "font-light",
                    bullets: [service.description],
                    textAlign: "center",
                    textSize: "text-[15px]",
                    textColor: "text-black/90",
                    fontWeight: "font-[400]",
                    bgColor: "bg-white",
                    buttons: {
                      items: [
                        {
                          text: "GET IN TOUCH",
                          bgColor: "bg-primary",
                          borderRadius: "rounded-none",
                          href: "/contact",
                        },
                        {
                          text: "READ MORE",
                          bgColor: "bg-white",
                          textColor: "text-black",
                          href: `/services/${service.id}/`,
                          border: "1px solid lightgray",
                          borderRadius: "none",
                        },
                      ],
                      align: "center",
                    },
                  }
                : { type: "image", src: service.coverImage, bgColor: "bg-white" }
            }
            rightContent={
              index % 2 === 0
                ? { type: "image", src: service.coverImage, bgColor: "bg-white" }
                : {
                    type: "text",
                    subheading: "GULF PALMS",
                    headingColor: "text-black",
                    headingSize: "text-[30px]",
                    heading: service.title,
                    subheadingColor: "text-black",
                    subheadingSize: "text-[30px]",
                    subheadingWeight: "font-light",
                    bullets: [service.description],
                    textAlign: "center",
                    textSize: "text-[15px]",
                    textColor: "text-black/90",
                    fontWeight: "font-[400]",
                    bgColor: "bg-white",
                    buttons: {
                      items: [
                        {
                          text: "GET IN TOUCH",
                          bgColor: "bg-primary",
                          borderRadius: "rounded-none",
                          href: "/contact",
                        },
                        {
                          text: "READ MORE",
                          bgColor: "bg-white",
                          textColor: "text-black",
                          href: `/services/${service.id}/`,
                          border: "1px solid lightgray",
                          borderRadius: "none",
                        },
                      ],
                      align: "center",
                    },
                  }
            }
          />
        </div>
      ))}
      <GetInTouch />
    </div>
  );
}
