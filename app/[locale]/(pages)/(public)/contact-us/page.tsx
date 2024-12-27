"use client";
import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";
import GetInTouch from "@/components/common/GetInTouch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useTranslation } from "react-i18next";

const breadcrumbLinks = [
  { name: "Home", href: "/" },
  { name: "Contact us", href: "/contact-us" },
];

export default function ContactUs() {
  const { t } = useTranslation();
  return (
    <div className="pt-[98px] ">
      <div className="max-w-[1192px] mx-auto ">
        <div className="flex flex-col items-center pb-[200px] pt-[50px]">
          <h1 className="text-[36px] font-bold text-black">Contact us</h1>
          <CustomBreadCrumb links={breadcrumbLinks} />
        </div>
        <div className="pb-[80px] w-full">
          <div className="mx-auto flex">
            <section className="w-full space-y-5 p-8 border-r">
              <div className="space-y-2  text-right">
                <h1 className="text-[16px] font-semibold text-right text-gray-400">
                  Gulf Palms
                </h1>
                <p className="text-[24px] font-bold text-gray-800">
                  توفير المنتجات والخدمات والحلول الزراعية المتميزة
                </p>
                <p className="text-[16px] text-gray-400">
                  تقدم شركة نخيل الخليج خدماتها لمجموعة واسعة من العملاء بدءًا
                  من العملاء في الجهات الحكومية، التجارية، الصناعية والسكنية.
                  يقدم فريقنا ذو الخبرة حلولاً مخصصة بدءًا من التصميم وحتى
                  التنفيذ بناءً على احتياجات عملائنا مع مراعاة البيئة الزراعية
                  لضمان مساحات خضراء مستدامة
                </p>
              </div>
              <div className="space-y-2">
                <p>
                  <i className="fas fa-map-marker-alt text-primary w-[20px]"></i>{" "}
                  {t("footer.address")}
                </p>
                <p>
                  <i className="fas fa-phone text-primary w-[20px]"></i>{" "}
                  {t("footer.phone")}
                </p>
                <p>
                  <i className="fas fa-envelope text-primary w-[20px]"></i>{" "}
                  {t("footer.email")}{" "}
                  <a href="mailto:contact@gulfpalms.com">
                    contact@gulfpalms.com
                  </a>
                </p>
              </div>
              <div className="flex space-x-4 py-4 w-full justify-end">
                <Link
                  href="https://twitter.com/gulfpalms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary cursor-pointer h-[30px] w-[30px] p-2 border border-primary rounded-full grid place-content-center"
                >
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link
                  href="https://www.instagram.com/gulfpalms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary cursor-pointer h-[30px] w-[30px] p-2 border border-primary rounded-full grid place-content-center"
                >
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/gulfpalms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary cursor-pointer h-[30px] w-[30px] p-2 border border-primary rounded-full grid place-content-center"
                >
                  <i className="fab fa-linkedin"></i>
                </Link>
              </div>
            </section>

            <section className="w-full p-10">
              <h2 className="text-2xl font-semibold text-center mb-6">
                اتصل بنا إذا كانت لديك أي أسئلة
              </h2>
              <form action="/api/contact" method="POST" className="w-[446px]">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-gray-700">
                      الاسم
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 w-full"
                      placeholder="أدخل اسمك هنا"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700">
                      البريد الإلكتروني
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1"
                      placeholder="أدخل بريدك الإلكتروني هنا"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700">
                      الهاتف
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="mt-1"
                      placeholder="أدخل رقم هاتفك هنا"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-gray-700">
                      الشركة
                    </label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      className="mt-1"
                      placeholder="اسم شركتك (اختياري)"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="message" className="block text-gray-700">
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="mt-1 bg-transparent border w-full"
                    placeholder="اكتب رسالتك هنا"
                    rows={6}
                  />
                </div>

                <div className="mt-6 ">
                  <Button
                    type="submit"
                    className="w-full md:w-auto text-white bg-gray-400 hover:text-gray-700"
                  >
                    إرسال
                  </Button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1222073449103!2d106.77590781537452!3d-6.2476228629146675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f11b12c11ab7%3A0xcd48f5c775249316!2sHumanity%20First%20Indonesia!5e0!3m2!1sid!2sid!4v1605684563677!5m2!1sid!2sid"
        width={100}
        height={553}
        style={{ border: 0 }}
        aria-hidden="false"
        title="Humanity First Indonesia"
      />
      <GetInTouch />
    </div>
  );
}
