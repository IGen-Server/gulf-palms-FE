"use client";

import CustomCarousel from "@/components/common/CustomCarousel";
import { Button } from "@/components/ui/button";
import { ServiceData, serviceData } from "@/data/serviceData";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useTranslation } from "react-i18next";
import { ServiceProps } from "../../showrooms/[id]/ShowroomDetails";
import Services from "@/components/home/Services";

const SingleServiceCard = ({ slug }: { slug: string }) => {
  const {
    i18n: { language },
  } = useTranslation();
  const service = serviceData.find((service) => service.slug.includes(slug));

  if (!service) {
    notFound();
  }

  const serviceDetails = service[language as "en" | "ar"];

  const isEnglish = language === "en";

  return (
    <div className="pt-[98px] w-full flex flex-col items-center !font-sans">
      <div className="lg:max-w-content mx-auto">
        {/* Hero Section */}
        <div className="flex items-stretch gap-3 pt-[40px]">
          <Image
            src={service.heroImages.large || "/placeholder.svg"}
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
              {serviceDetails.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-primary">
                {serviceDetails.details.heroSection.title.split(" ").slice(-1)}
              </span>
            </p>
            <p
              className="text-[.9375rem] text-[rgba(255, 255, 255, 0.8)
] tracking-wide leading-6 py-3"
            >
              {serviceDetails.details.heroSection.summary}
            </p>
            <Link
              href={language === "en" ? "/en/contact-us" : "/ar/contact-us"}
              className="underline font-semibold text-[.8125rem] text-white"
            >
              {isEnglish ? "GET IN TOUCH" : "اتصل بنا"}
            </Link>
          </div>
          <div className="h-[588px] flex flex-col gap-3">
            {service.heroImages.small.map((image, index) => (
              <div
                key={index}
                className="hidden min-w-[322px] h-full sm:flex flex-col gap-3"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Palm service`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
              </div>
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
                {serviceDetails.details.content.sectionTitle}
              </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Content Column */}
              <div className="space-y-8 px-3">
                {serviceDetails.details.content.overview.map((item, index) => (
                  <div key={index} className="">
                    {item.title && (
                      <p className="pb-3 font-semibold text-[1.3125rem] text-[#242424]">
                        {item.title}:
                      </p>
                    )}
                    {Array.isArray(item.description) ? (
                      <ul className="space-y-4">
                        {item.description.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="text-primary text-xl">
                              <ChevronRight />
                            </span>
                            <span className="text-[#777]">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-[#777] leading-relaxed text-justify">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Image Column */}
              <div className="relative h-[600px] rounded-lg overflow-hidden">
                <Image
                  src={
                    service.sectionImage ||
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
          <div className="columns-2 md:columns-3 lg:columns-4 gap-2 px-3">
            {service.galleryImages.map((image, index) => {
              return (
                <div key={index}>
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full object-cover mb-2"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* <CustomCarousel
          slidesToScroll={3}
          slidesToShow={3}
          data={slidesData}
          autoPlay={true}
          MobileSlidesNumber={1}
        /> */}
      <Services />

      <div className="w-full max-w-[1140px] mx-auto flex flex-col lg:flex-row items-center">
        <div className="flex flex-1 h-[678px]">
          <Image
            src="https://gulfpalms.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-30-at-4.00.09-PM.jpeg"
            alt="Image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3 px-14">
          <h2 className="font-light text-3xl text-[#777]">
            {language === "en" ? "WHO WE ARE" : "من نحن"}
          </h2>
          <h2 className="font-semibold text-4xl text-[#242424]">
            {language === "en" ? "GULF PALMS" : "نخيل الخليج"}
          </h2>

          {language === "en" ? (
            <p className="text-base text-[#777] mt-4 px-1">
              <span className="font-semibold">
                Gulf Palms General Trading & Contacting Company (Tissue Culture
                Palms Centre)
              </span>{" "}
              has been established in 1991 immediately after the invasion. The
              nursery had been purchased at Ar Rai and palm offshoots had been
              imported from Saudi Arabia. They faced some difficulties in
              importing offshoots of the good varieties so they decided to get
              sources of American tissue culture laboratories, for supplying
              Tissue Culture Palms. Offshoots of the excellent and most popular
              palm varieties of Gulf region were collected and sent to States
              for micro propagation. Later the agreement had been terminated and
              all the cultures shifted to Jacques Marionnet, France who
              appointed Gulf Palms its agent in Kuwait & Saudi Arabia.
            </p>
          ) : (
            <p className="text-base text-[#777] mt-4 px-1">
              تأسست شركة نخيل الخليج للتجارة العامة والمقاولات (مركز نخيل زراعة
              الأنسجة) في عام ١٩٩١ مباشرة بعد الغزو. تم شراء المشتل في الري وتم
              استيراد اغصان النخيل من المملكة العربية السعودية. مع مواجهة بعض
              الصعوبات في استيراد فسائل من الأصناف الجيدة، قررنا الحصول على
              مصادر من مختبرات زراعة الأنسجة الأمريكية لتوريد نخيل زراعة
              الأنسجة. تم جمع أغصان أصناف النخيل الممتازة والأكثر شعبية في منطقة
              الخليج وإرسالها إلى الدول من أجل مضاعفتها على نطاق صغير. في وقت
              لاحق تم إنهاء الاتفاقية وانتقلت جميع الثقافات إلى جاك ماريونيت،
              فرنسا الذي عين شركة نخيل الخليج وكيلاً لها في الكويت والمملكة
              العربية السعودية.
            </p>
          )}

          <div className="flex gap-5 pt-3">
            <button className="font-semibold bg-[#242424] text-[.8125rem] text-white border border-[#242424] px-5 py-3 uppercase">
              {language === "en" ? "Shop Now" : "تسوق الآن"}
            </button>
            <button className="font-semibold bg-white text-[.8125rem] hover:bg-gray-200 duration-300 text-[#333] border border-[#777]/25 px-5 py-3 uppercase">
              {language === "en" ? "Read More" : "اقرأ أكثر"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleServiceCard;
