"use client";

import Image from "next/image";
import Link from "next/link";
import GetInTouch from "@/components/common/GetInTouch";
import { useTranslation } from "react-i18next";
import aboutData from "./aboutData.json";
import CustomCarouselCopy from "@/components/common/CustomCarouselCopy";
import ImageTextCardCopy from "@/components/common/ImageTextCardCopy";

const AboutUs = () => {
  const {
    i18n: { language },
  } = useTranslation();

  const about = aboutData[language as "en" | "ar"];

  return (
    <div className="flex flex-col gap-16 pt-24">
      <section className="bg-gray-100 py-12">
        <div className="flex flex-col md:flex-row md:items-center max-w-[1239px] mx-auto px-7 md:px-0 py-[50px] gap-7 md:gap-28">
          <div className="space-y-[20px]">
            <p className="font-semibold text-[.9375rem] text-primary">
              {about.top.main.title}
            </p>
            <p className="text-[#242424] text-[1.75rem] leading-9 font-semibold">
              {about.top.main.subtitle}
            </p>
          </div>
          {about.top.sub.map((item, index) => (
            <div key={index} className="space-y-[20px]">
              <p className="text-[#242424] text-[1.4375rem] font-semibold">
                {item.title}
              </p>
              <p className="text-[#777] text-[1.0625rem] pb-4">
                {item.description}
              </p>
              <Link
                href={"/shop"}
                className="font-semibold uppercase text-[.8125rem] text-[#333] hover:text-[#777] duration-300 border-b-2 border-primary"
              >
                {item.button}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <ImageTextCardCopy
        leftContent={{
          type: "image",
          src: aboutData.aboutImage,
          bgColor: "bg-white",
          imgHeight: "h-[650px]",
        }}
        rightContent={{
          type: "text",
          heading: about.about.heading,
          headingColor: "text-[#242424]",
          headingSize: `text-[2.375rem] ${language === "ar" ? "text-right" : ""
            }`,
          headingWeight: "font-semibold",
          subheading: about.about.title,
          subheadingSize: `text-[1.0625rem] ${language === "ar" ? "text-right" : ""
            }`,
          subheadingWeight: "font-semibold",
          bullets: [about.about.summary],
          textSize: "text-[.9375rem]",
          textColor: "text-[#777]",
          fontWeight: "font-normal",
          bgColor: "bg-white",
        }}
        className="max-lg:flex flex-col-reverse"
      />

      <div className="w-full max-w-[1140px] mx-auto flex flex-col md:flex-row">
        <div className="flex flex-col gap-7 flex-1 bg-primary p-7">
          <h2 className="font-semibold text-3xl text-white">
            {about.service.title}
          </h2>
          <div className="flex flex-col gap-3">
            {about.service.details.map((item, index) => {
              if (Array.isArray(item.summary)) {
                return (
                  <div key={index} className="flex flex-col gap-2 text-white">
                    <p className="font-semibold">{item.title}</p>
                    <ul className={`${language === "en" ? "ml-5" : "mr-5"}`}>
                      {item.summary.map((point, index) => (
                        <li key={index} className="list-disc">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }
              return (
                <div key={index} className="text-white text-base">
                  <p className="">
                    <span className={`font-semibold ${language === "en" ? "mr-2" : "ml-2"} `}>{item.title}:</span>
                    {item.summary}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-1 max-md:h-[270px]">
          <Image
            src={aboutData.serviceImage}
            alt="Service image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <ImageTextCardCopy
        leftContent={{
          type: "text",
          heading: about.vision.title,
          bullets: about.vision.details,
          bgColor: "bg-white",
          textColor: "text-[#777]",
          textSize: `text-[.9375rem] ${language === "ar" ? "text-right" : ""}`,
          fontWeight: "font-[400]",
        }}
        rightContent={{
          type: "text",
          heading: about.mission.title,
          bullets: about.mission.details,
          bgColor: "bg-white",
          textColor: "text-[#777]",
          textSize: `text-[.9375rem] ${language === "ar" ? "text-right" : ""}`,
          fontWeight: "font-[400]",
        }}
        className="items-start"
      />

      <ImageTextCardCopy
        leftContent={{
          type: "text",
          heading: about.who.title,
          headingColor: `text-white ${language === "ar" ? "text-right" : ""}`,
          bullets: [about.who.summary],
          textSize: "text-[15px]",
          textColor: `text-white ${language === "ar" ? "text-right" : ""}`,
          fontWeight: "font-[400]",
          bgColor: "bg-primary",
        }}
        rightContent={{
          type: "image",
          src: aboutData.whoImage,
          bgColor: "bg-white",
        }}
      />

      <div className="w-full max-w-[1140px]  mx-auto space-y-4">
        <div className="space-y-4 text-center">
          <p className="font-semibold text-primary text-[.9375rem]">
            {about.clients.title}
          </p>
          <p className="text-[#242424] font-bold text-4xl">
            {about.clients.heading}
          </p>
          <p className="text-[#777] text-[.9375rem]">{about.clients.summary}</p>
        </div>
        <CustomCarouselCopy
          dots={false}
          autoPlay={true}
          withNavigation={true}
          data={aboutData.logos}
          MobileSlidesNumber={1}
        />
      </div>
      <GetInTouch language={language} />
    </div>
  );
};
export default AboutUs;
