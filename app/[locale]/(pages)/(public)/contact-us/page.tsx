"use client";
import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";
import GetInTouch from "@/components/common/GetInTouch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useTranslation } from "react-i18next";

interface ContactData {
  sectionName: string;
  title: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  formSetionName: string;
  formTitle: string;
  name: string;
  emailText: string;
  phoneText: string;
  companyText: string;
  messageText: string;
  sendText: string;
}

interface ContactsData {
  en: ContactData;
  ar: ContactData;
}

const contactsData: ContactsData = {
  en: {
    sectionName: "Gulf Palms",
    title:
      "Providing distinguished agricultural products, services and solutions",
    description:
      "Gulf Palms serves a wide range of clients ranging from government, commercial, industrial and residential clients. Our experienced team provides customized solutions from design to implementation based on our clients’ needs while taking into consideration the agricultural environment to ensure sustainable green spaces.",
    address: "Nurseries 48 & 49, 4th Ring Road, Ar Rai, Kuwai",
    phone: "Phone: +965 6066 0378",
    email: "Email: contact@gulfpalms.com",
    formSetionName: "Any Questions",
    formTitle: "Contact us if you have any questions.",
    name: "Your Name",
    emailText: "Your Email",
    phoneText: "Phone Number",
    companyText: "Company",
    messageText: "Your Message",
    sendText: "Ask a question",
  },
  ar: {
    sectionName: "نخيل الخليج",
    title: "توفير المنتجات والخدمات والحلول الزراعية المتميزة",
    description:
      "تقدم شركة نخيل الخليج خدماتها لمجموعة واسعة من العملاء بدءًا من العملاء في الجهات الحكومية، التجارية، الصناعية والسكنية. يقدم فريقنا ذو الخبرة حلولاً مخصصة بدءًا من التصميم وحتى التنفيذ بناءً على احتياجات عملائنا مع مراعاة البيئة الزراعية لضمان مساحات خضراء مستدامة.",
    address: "مشتل ٤٨ و ٤٩، الدائري الرابع، الري، الكويت",
    phone: "هاتف: ٦٠٦٦٠٣٧٨",
    email: "بريد إلكتروني: contact@gulfpalms.com",
    formSetionName: "لديك أسئلة",
    formTitle: "اتصل بنا إذا كانت لديك أي أسئلة",
    name: "الاسم",
    emailText: "بريدك الالكتروني",
    phoneText: "رقم التليفون",
    companyText: "شركة",
    messageText: "الرسالة",
    sendText: "إرسال",
  },
};

const breadcrumbLinks = [
  { name: "Home", arabicName: "الرئيسية", href: "/" },
  { name: "Contact us", arabicName: "اتصل بنا", href: "/contact-us" },
];

export default function ContactUs() {
  const {
    i18n: { language },
  } = useTranslation();

  const texts = contactsData[language as "en" | "ar"];

  return (
    <div
      className={`w-screen overflow-hidden pt-[98px]`}
    >
      <div className="w-full max-w-[1192px] mx-auto mb-10">
        <div className="flex flex-col items-center pb-16 lg:pb-[6.25rem] pt-[50px]">
          <h1
            className={`mb-3 ${language === "en" ? "font-arabic" : "font-arabic"
              } font-arabic text-4xl lg:text-[4.25rem] lg:leading-[5.125rem] font-bold text-black`}
          >
            {language === "en" ? "Contact us" : "اتصل بنا"}
          </h1>
          <CustomBreadCrumb links={breadcrumbLinks} />
        </div>
        <div className="px-5 lg:px-0 pb-[80px] w-full">
          <div className="mx-auto flex flex-col lg:flex-row gap-7 lg:gap-0">
            <section className="w-full space-y-5 pt-5 pb-3 pl-3 pr-12 max-lg:px-0 lg:border-r">
              <div className="font-arabic space-y-2">
                <h1
                  className="text-[16px] font-semibold text-[#a5a5a5]
"
                >
                  {texts.sectionName}
                </h1>
                <p className="text-[22px] lg:text-[24px] font-semibold text-[#242424]">
                  {texts.title}
                </p>
                <p className="text-[1.0625rem] leading-[1.6875rem] text-[#777]">
                  {texts.description}
                </p>
              </div>
              <div className="space-y-2 font-arabic text-[.9375rem] text-[#242424]">
                <p>
                  <i className="fas fa-map-marker-alt text-primary w-[20px]"></i>{" "}
                  {texts.address}
                </p>
                <p>
                  <i className="fas fa-phone text-primary w-[20px]"></i>{" "}
                  {texts.phone}
                </p>
                <p>
                  <i className="fas fa-envelope text-primary w-[20px]"></i>{" "}
                  <a href="mailto:contact@gulfpalms.com">{texts.email}</a>
                </p>
              </div>
              <div className="flex w-full justify-start gap-4">
                <Link
                  href="https://www.instagram.com/gulfpalms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:bg-primary hover:text-white cursor-pointer h-[30px] w-[30px] p-2 border border-primary rounded-full grid place-content-center"
                >
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link
                  href="https://twitter.com/gulfpalms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:bg-primary hover:text-white cursor-pointer h-[30px] w-[30px] p-2 border border-primary rounded-full grid place-content-center"
                >
                  <i className="fab fa-x-twitter"></i>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/gulfpalms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:bg-primary hover:text-white cursor-pointer h-[30px] w-[30px] p-2 border border-primary rounded-full grid place-content-center"
                >
                  <i className="fab fa-linkedin"></i>
                </Link>
              </div>
            </section>

            <section className="w-full pt-5 lg:pr-3 pb-3 lg:pl-12">
              <h1 className="font-arabic text-[16px] font-semibold text-[#a5a5a5]">
                {texts.formSetionName}
              </h1>
              <h2 className="font-arabic text-2xl text-[#242424] font-semibold mt-2 mb-6">
                {texts.formTitle}
              </h2>
              <form action="/api/contact" method="POST" className="w-full">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <div
                    className={`${language === "ar" ? "flex flex-col items-end" : ""
                      }`}
                  >
                    <label htmlFor="name" className="block text-gray-700">
                      {texts.name}
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 border-black border-opacity-20 w-full"
                    />
                  </div>

                  <div
                    className={`${language === "ar" ? "flex flex-col items-end" : ""
                      }`}
                  >
                    <label htmlFor="email" className="block text-gray-700">
                      {texts.emailText}
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 border-black border-opacity-20"
                    />
                  </div>

                  <div
                    className={`${language === "ar" ? "flex flex-col items-end" : ""
                      }`}
                  >
                    <label htmlFor="phone" className="block text-gray-700">
                      {texts.phoneText}
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="mt-1 border-black border-opacity-20"
                    />
                  </div>

                  <div
                    className={`${language === "ar" ? "flex flex-col items-end" : ""
                      }`}
                  >
                    <label htmlFor="company" className="block text-gray-700">
                      {texts.companyText}
                    </label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      className="mt-1 border-black border-opacity-20"
                    />
                  </div>
                </div>

                <div
                  className={`mt-6 ${language === "ar" ? "flex flex-col items-end" : ""
                    }`}
                >
                  <label htmlFor="message" className="block text-gray-700">
                    {texts.messageText}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="mt-1 border-black border-opacity-20 bg-transparent border w-full"
                    rows={6}
                  />
                </div>

                <div
                  className={`mt-6 ${language === "ar" ? "flex justify-self-end self-start" : ""
                    }`}
                >
                  <Button
                    type="submit"
                    className="w-auto text-[#3e3e3e] hover:bg-[#e0e0e0] bg-[#F3F3F3] font-semibold uppercase"
                  >
                    {texts.sendText}
                  </Button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27837.198977762968!2d48.059713!3d29.292607!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9aee8dd72f25%3A0x13c1872301ebdf24!2sGulf%20Palms%20Center!5e0!3m2!1sen!2sus!4v1740822520674!5m2!1sen!2sus"
        width="100%"
        height="550"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <GetInTouch language={language} />
    </div>
  );
}
