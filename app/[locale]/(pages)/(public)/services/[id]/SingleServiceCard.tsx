"use client";

import { serviceData } from "@/data/serviceData";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useTranslation } from "react-i18next";

const SingleServiceCard = ({ slug }: { slug: string }) => {
  const {
    i18n: { language },
  } = useTranslation();
  const service = serviceData.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  const isEnglish = language === "en";

  return (
    <div className="pt-[98px] w-full overflow-x-hidden flex flex-col items-center !font-sans">
      <div className="lg:max-w-content mx-auto">
        {/* Hero Section */}
        <div className="flex items-stretch gap-3 pt-[40px]">
          <Image
            src={service.details.heroSection.images[0] || "/placeholder.svg"}
            alt=""
            width={575}
            height={588}
            className="hidden lg:block max-w-[700px] h-[588px] object-cover"
          />
          <div
            className="w-full h-max sm:h-auto bg-[#18191F] text-gray-300 grid place-content-center lg:space-y-2 px-[30px] py-8 lg:py-0"
            style={{
              backgroundImage: "url('/images/texture-overlay.svg')",
              backgroundSize: "cover",
              backgroundPosition: "right center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p
              className="text-[.9375rem] text-[rgba(255, 255, 255, 0.8)
] tracking-wide leading-6"
            >
              {isEnglish ? "OUR PROFESSIONAL SERVICES" : "خدماتنا المهنية"}
            </p>
            <p className="text-2xl lg:text-[2.375rem] leading-[3.3125rem] font-semibold text-white">
              {isEnglish
                ? service.title.split(" ").slice(0, -1).join(" ")
                : service.titleAr.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-primary">
                {isEnglish
                  ? service.title.split(" ").slice(-1)
                  : service.titleAr.split(" ").slice(-1)}
              </span>
            </p>
            <p
              className="text-[.9375rem] text-[rgba(255, 255, 255, 0.8)
] tracking-wide leading-6 py-3"
            >
              {isEnglish
                ? service.details.heroSection.summary
                : service.details.heroSection.summaryAr}
            </p>
            <Link
              href={
                isEnglish
                  ? service.details.heroSection.contactLink
                  : service.details.heroSection.contactLinkAr
              }
              className="underline font-semibold text-[.8125rem] text-white"
            >
              {isEnglish ? "GET IN TOUCH" : "اتصل بنا"}
            </Link>
          </div>
          <div className="hidden min-w-[322px] sm:flex flex-col gap-3">
            {service.details.heroSection.images.slice(1).map((image, index) => (
              <Image
                key={index}
                src={image || "/placeholder.svg"}
                alt={`Palm service ${index + 2}`}
                width={322}
                height={280}
                className="w-full h-full object-cover"
              />
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full">
          <div className="px-3 lg:px-0 py-16">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-wider text-gray-600 mb-2">
                {isEnglish ? "OUR PROFESSIONAL SERVICES" : "خدماتنا المهنية"}
              </p>
              <h1 className="text-4xl font-bold text-gray-900">
                {isEnglish ? service.title : service.titleAr}
              </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Content Column */}
              <div className="space-y-8">
                <div className="prose max-w-none">
                  <p className="text-[#777] leading-relaxed text-justify">
                    {isEnglish
                      ? service.details.content.overview
                      : service.details.content.overviewAr}
                  </p>
                </div>

                <div className="space-y-6">
                  <h2 className="text-[1.3125rem] font-semibold text-[#242424]">
                    {isEnglish
                      ? service.details.content.serviceHighlightsTitle
                      : service.details.content.serviceHighlightsTitleAr}
                  </h2>
                  <ul className="space-y-4">
                    {(isEnglish
                      ? service.details.content.serviceHighlights
                      : service.details.content.serviceHighlightsAr
                    ).map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primary text-xl">
                          <ChevronRight />
                        </span>
                        <span className="text-[#777]">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Image Column */}
              <div className="relative h-[600px] rounded-lg overflow-hidden">
                <Image
                  src={
                    service.details.heroSection.images[0] ||
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9F2WinKvnGRw6HTYDoKOEAUgST4giB.png"
                  }
                  alt="Palm maintenance service"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="px-3 lg:px-0 py-[80px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {service.details.galleryImages.map((image, index) => {
              // Determine if image should span multiple rows
              const spanClass = index % 3 === 0 ? "row-span-1" : "row-span-2";

              return (
                <div
                  key={index}
                  className={`relative overflow-hidden ${spanClass}`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleServiceCard;
