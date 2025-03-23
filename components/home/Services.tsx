"use client";

import { Button } from "@/components/ui/button";
import CustomCarousel from "../common/CustomCarousel";
import { useTranslation } from "react-i18next";
import Link from "next/link";

interface Service {
  id: string;
  subtitle: string;
  title: string;
  content: string;
  imageUrl: string;
  link: string;
}

export default function Services({ removedService }: { removedService?: string }) {
  const { t, i18n: { language } } = useTranslation();

  const servicesCarouselData = t("servicesCarouselData", { returnObjects: true }) as Service[] || [];
  const createSlide = (service: Service) => (
    <div
      key={service.id}
      style={{
        minWidth: "310px",
        minHeight: "440px",
        backgroundImage: `url(${service.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative group/number w-full lg:w-[430px] overflow-hidden"
    >
      <div className={`absolute top-0 left-0 h-full w-full p-5 text-white ${language === "en" ? "text-left" : "text-right"} space-y-[10px]`}>
        <p className="text-xl">{service.subtitle}</p>
        <p className="text-2xl font-bold font-arabic">{service.title}</p>
        <p className="">{service.content}</p>
        <div className={`w-full h-[48px] overflow-hidden !mt-4 flex ${language === "en" ? "justify-start" : "justify-end"}`}>
          <Link href={service.link}>
            <Button
              className="lg:translate-y-[48px] group-hover/number:translate-y-[0px] rounded-none bg-primary transition-transform duration-500 opacity-90 hover:bg-primary hover:opacity-100 w-[113px] h-[42px] grid place-content-center"
              variant={"default"}
            >
              {t("whoWeAre.buttons.readMore")}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );

  const slidesData = servicesCarouselData?.map((service) => {
    if (service.id === removedService) return;
    return ({
      component: createSlide(service),
    })
  }).filter((slide): slide is { component: JSX.Element } => slide !== undefined);

  return (
    <div className="container mx-auto px-4 max-w-[1458px]">
      <div className="pb-[30px] space-y-2 md:space-y-6 max-w-[800px]">
        <p className="text-[#777777] text-xl md:text-[30px] font-light">
          {t("services.ourServices")}
        </p>
        <p className="text-[#242424] font-bold text-2xl md:text-[36px] font-arabic">
          {t("services.servicesProvided")}
        </p>
        <p className="text-[#777777] text-sm md:text-[16px]">
          {t("services.description")}
        </p>
      </div>
      <div className="pb-[50px]">
        <CustomCarousel
          slidesToScroll={3}
          slidesToShow={3}
          data={slidesData}
          autoPlay={true}
          MobileSlidesNumber={1}
          serviceComponent={true}
        />
      </div>
    </div>
  );
}