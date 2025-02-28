"use client";

import { useTranslation } from "react-i18next";
import GetInTouch from "@/components/common/GetInTouch";
import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import showrooms from "../showroomsData.json";

export type ServiceProps = {
  slug: string[];
  name: string;
  arabicName: string;
  id: string;
  img: string;
  video: string;
  mapUrl: string;
  en: {
    content: {
      subheading: string;
      title: string;
      details: string;
    };
  };
  ar: {
    content: {
      subheading: string;
      title: string;
      details: string;
    };
  };
};

const Showroom = ({ slug }: { slug: string }) => {
  const {
    i18n: { language },
  } = useTranslation();

  const nursery = showrooms.find((service: ServiceProps) =>
    service.slug.includes(slug)
  );

  const nurseryDetails = nursery && nursery[language as "en" | "ar"];

  const breadcrumbLinks = [
    { name: "Home", arabicName: "الرئيسية", href: "/" },
    { name: "Showrooms", arabicName: "» معارضنا", href: "/showrooms" },
    {
      name: nursery?.name || "",
      arabicName: nursery?.arabicName || "",
      href: "/",
    },
  ];

  return (
    <div className="">
      <div className="pt-[98px] w-full mx-auto flex flex-col items-center overflow-x-hidden">
        <div className="flex flex-col gap-2 items-center pt-[50px] pb-[40px]">
          <h1 className="text-4xl sm:text-5xl lg:text-[68px] font-bold text-black capitalize">
            {language === "en" ? nursery?.name : nursery?.arabicName}
          </h1>
          <CustomBreadCrumb links={breadcrumbLinks} />
        </div>
        <div className="w-full max-w-[1200px] mx-auto flex flex-col-reverse lg:flex-row lg:items-stretch lg:justify-center gap-0 bg-primary overflow-hidden">
          <div className="w-full lg:w-1/2 h-[570px] py-5">
            <div className="relative w-full h-full flex flex-col items-center justify-center text-center px-8">
              <div className="absolute inset-0 w-full h-full">
                <iframe
                  src={`${nursery?.video.replace(
                    "vimeo.com",
                    "player.vimeo.com/video"
                  )}?autoplay=1&background=1&loop=1&byline=0&title=0&portrain=0`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    border: "none",
                  }}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  frameBorder="0"
                ></iframe>
              </div>
              <div className="relative z-10 text-white space-y-4">
                <h2 className="font-light text-3xl leading-[3rem] mb-4 max-lg:hidden">
                  {nurseryDetails?.content.subheading}
                </h2>
                <h3 className="text-xl lg:text-4xl font-semibold mb-8">
                  {nurseryDetails?.content.title}
                </h3>
                <p className="text-base mb-12">
                  <span className="font-semibold">Address: </span>
                  {nurseryDetails?.content.details}
                </p>
                <div className="flex flex-col lg:flex-row items-center gap-4 justify-center mx-auto">
                  <Button
                    variant="outline"
                    className="bg-[#F3F3F3] font-semibold text-[.8125rem] leading-4 text-[#3e3e3e] px-5 py-2 duration-300 hover:bg-[#e9e6e6]"
                  >
                    {language === "en" ? "CONTACT US" : "اتصل بنا"}
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-[#F3F3F3] font-semibold text-[.8125rem] leading-4 text-[#3e3e3e] px-5 py-2 duration-300 hover:bg-[#e9e6e6]"
                  >
                    {language === "en" ? "OUR LOCATION" : "موقعنا"}
                  </Button>
                </div>
              </div>
              <Image
                src="https://gulfpalms.com/wp-content/uploads/2023/06/logo-white.png"
                alt="Gulf Palms Logo"
                width={0}
                height={0}
                sizes="100vw"
                className="absolute bottom-8 w-32"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-[570px]">
            <iframe
              loading="lazy"
              width="100%"
              height="100%"
              src={nursery?.mapUrl}
              title="شركة النخيل النسيجي العبدلي 2Q6Q+RVW, Yaqoub Jassim Alwazzan St, Abdali, Kuwait"
              aria-label="شركة النخيل النسيجي العبدلي 2Q6Q+RVW, Yaqoub Jassim Alwazzan St, Abdali, Kuwait"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <GetInTouch language={language} />
      </div>
    </div>
  );
};
export default Showroom;
