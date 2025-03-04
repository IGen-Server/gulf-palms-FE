"use client";

import ImageTextCard from "@/components/common/ImageTextCard";
import { serviceData } from "@/data/serviceData";
import { useTranslation } from "react-i18next";

export interface HeroSection {
  images: string[];
  title: string;
  titleAr: string;
  subtitle: string;
  subtitleAr: string;
  summary: string;
  summaryAr: string;
  contactLink: string;
  contactLinkAr: string;
}

export interface Content {
  sectionTitle: string;
  sectionTitleAr: string;
  sectionSubtitle: string;
  sectionSubtitleAr: string;
  overview: string;
  overviewAr: string;
  serviceHighlightsTitle: string;
  serviceHighlightsTitleAr: string;
  serviceHighlights: string[];
  serviceHighlightsAr: string[];
}

export interface Details {
  heroSection: HeroSection;
  content: Content;
  galleryImages: string[];
}

export interface Service {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  coverImage: string;
  details: Details;
}

const ServiceCards = () => {
  const {
    i18n: { language },
  } = useTranslation();

  return (
    <div className="">
      {serviceData.map((service: Service, index: number) => (
        <div key={service.id}>
          <ImageTextCard
            colReversed={index % 2 !== 0}
            leftContent={{
              type: "text",
              subheading: language === "en" ? "GULF PALMS" : "نخيل الخليج",
              headingColor: "text-black",
              headingSize: "text-[30px]",
              heading: language === "en" ? service.title : service.titleAr,
              subheadingColor: "text-black",
              subheadingSize: "text-[30px]",
              subheadingWeight: "font-light",
              bullets:
                language === "en"
                  ? [service.description]
                  : [service.descriptionAr],
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
                    href: `/services/${service.id}/`,
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
            }}
          />
        </div>
      ))}
    </div>
  );
};
export default ServiceCards;
