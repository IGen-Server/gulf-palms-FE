"use client";

import { useTranslation } from "react-i18next";
import GetInTouch from "@/components/common/GetInTouch";
import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type ServiceProps = {
  name: string;
  arabicName: string;
  id: string;
  img: string;
  en: {
    content: {
      subheading: string;
      title: string;
      details: string;
      url: string;
    };
  };
  ar: {
    content: {
      subheading: string;
      title: string;
      details: string;
      url: string;
    };
  };
}[];

const services: ServiceProps = [
  {
    name: "rai-nursery",
    arabicName: "معرض الري",
    id: "fe9a770",
    img: "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-palm-men.jpg",
    en: {
      content: {
        subheading: "RAI",
        title: "MAIN BRANCH",
        details: "48 & 49 nurseries, Fourth Ring Road, Al-Rai",
        url: "https://maps.google.com/maps/dir//Gulf+Palms+Center+Shuwaikh+Industrial+Kuwait/@29.3146052,47.9475056,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3fcf9aee8dd72f25:0x13c1872301ebdf24",
      },
    },
    ar: {
      content: {
        subheading: "راي",
        title: "الفرع الرئيسي",
        details:
          "، العنوان: 48 & 49 المشاتل، طريق الدائري الرابع مشتل رقم، الري",
        url: "https://maps.google.com/maps/dir//Gulf+Palms+Center+Shuwaikh+Industrial+Kuwait/@29.3146052,47.9475056,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3fcf9aee8dd72f25:0x13c1872301ebdf24",
      },
    },
  },
  {
    name: "wafrah-corporate",
    arabicName: "معرض الشركات – الوفرة",
    id: "fe9a770",
    img: "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-palm-men.jpg",
    en: {
      content: {
        subheading: "WAFRAH",
        title: "WAFRAH FARM SHOWROOM",
        details: "Al-Wafra, Road 200, block 10, Al-Mazraa Showroom",
        url: "https://maps.google.com/maps/dir//%D8%A7%D9%84%D9%86%D8%AE%D9%8A%D9%84+%D8%A7%D9%84%D9%86%D8%B3%D9%8A%D8%AC%D9%8A+%D8%A7%D9%84%D9%81%D8%B1%D8%B9+%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF+H3RJ%2B3R9+Unnamed+Road,+%D8%A7%D9%84%D9%88%D9%81%D8%B1%D8%A9%D8%8C+Al+Wafrah,+Kuwait%E2%80%AD/@28.590168,48.0821,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3fce8b4f2ed231f3:0x7e0d90065c197360",
      },
    },
    ar: {
      content: {
        subheading: "الوفرة",
        title: "معرض شركات الوفرة",
        details:
          "العنوان: الوفرة منطقة الشركات قطعة ١٠ خلف شركة القطامي للحديد",
        url: "https://maps.google.com/maps/dir//%D8%A7%D9%84%D9%86%D8%AE%D9%8A%D9%84+%D8%A7%D9%84%D9%86%D8%B3%D9%8A%D8%AC%D9%8A+%D8%A7%D9%84%D9%81%D8%B1%D8%B9+%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF+H3RJ%2B3R9+Unnamed+Road,+%D8%A7%D9%84%D9%88%D9%81%D8%B1%D8%A9%D8%8C+Al+Wafrah,+Kuwait%E2%80%AD/@28.590168,48.0821,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3fce8b4f2ed231f3:0x7e0d90065c197360",
      },
    },
  },
  {
    name: "abdali-farm",
    arabicName: "معرض المزرعة – العبدلي",
    id: "fe9a770",
    img: "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-palm-men.jpg",
    en: {
      content: {
        subheading: "ABDALI",
        title: "ABDALI FARM SHOWROOM",
        details: "Al-Wafra, Road 200, block 10, Al-Mazraa Showroom",
        url: "https://maps.google.com/maps/dir//Gulf+Palms+Center+Shuwaikh+Industrial+Kuwait/@29.3146052,47.9475056,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3fcf9aee8dd72f25:0x13c1872301ebdf24",
      },
    },
    ar: {
      content: {
        subheading: "العبدلي",
        title: "معرض مزرعة العبدلي",
        details: "العنوان: العبدلي - شارع يعقوب جاسم الوزان",
        url: "https://maps.google.com/maps/dir//Gulf+Palms+Center+Shuwaikh+Industrial+Kuwait/@29.3146052,47.9475056,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3fcf9aee8dd72f25:0x13c1872301ebdf24",
      },
    },
  },
];

const Showroom = ({ slug }: { slug: string }) => {
  const { i18n: { language } } = useTranslation();
  const nursery = services.find((service) => service.name === slug);
  const nurseryDetails = nursery && nursery[language as "en" | "ar"];

  const breadcrumbLinks = [
    { name: "Home", arabicName: "الرئيسية", href: "/" },
    { name: "Showrooms", arabicName: "» معارضنا", href: "/showrooms" },
    {
      name: slug,
      arabicName: nursery?.arabicName,
      href: "/",
    },
  ];

  return (
    <div className="">
      <div className="pt-[98px] w-full mx-auto flex flex-col items-center overflow-x-hidden">
        <div className="flex flex-col gap-2 items-center pt-[50px] pb-[40px]">
          <h1 className="text-4xl sm:text-5xl lg:text-[68px] font-bold text-black capitalize">
            {language === "en" ? slug : nursery?.arabicName}
          </h1>
          <CustomBreadCrumb links={breadcrumbLinks} />
        </div>
        <div className="w-full max-w-[1200px] mx-auto flex flex-col-reverse lg:flex-row lg:items-stretch lg:justify-center gap-0 overflow-hidden">
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://gulfpalms.com/wp-content/uploads/2023/06/3-slide-img.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="relative w-full lg:max-w-[507px] h-[570px] flex flex-col items-center justify-center text-center px-8"
          >
            <div className="text-white space-y-4">
              <h2 className="text-5xl font-bold mb-4 max-lg:hidden">
                {nurseryDetails?.content.subheading}
              </h2>
              <h3 className="text-3xl font-semibold mb-8">
                {nurseryDetails?.content.title}
              </h3>
              <p className="text-lg mb-12">{nurseryDetails?.content.details}</p>
              <div className="w-[170px] lg:w-auto flex flex-col lg:flex-row gap-4 justify-center mx-auto">
                <Button
                  variant="outline"
                  className="bg-gray-200/20 hover:bg-gray-200/30 text-white border-white"
                >
                  {language === "en"
                    ? "CONTACT US"
                    : language === "ar"
                    ? "اتصل بنا"
                    : ""}
                </Button>
                <Button
                  variant="outline"
                  className="bg-gray-200/20 hover:bg-gray-200/30 text-white border-white"
                >
                  {language === "en"
                    ? "OUR LOCATION"
                    : language === "ar"
                    ? "موقعنا"
                    : ""}
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
          <div className="w-full lg:max-w-[555.73px] h-[570px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.129963726799!2d47.9475056!3d29.3146052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9aee8dd72f25%3A0x13c1872301ebdf24!2sGulf%20Palms%20Center!5e0!3m2!1sen!2sus!4v1699302981981"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <GetInTouch language={language} />
      </div>
    </div>
  );
};
export default Showroom;
