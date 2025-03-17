"use client";

import BlogRightContent from "@/components/common/BlogRightContent";
import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";
import GetInTouch from "@/components/common/GetInTouch";
import { images, recentPosts } from "@/data/blogsData";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const RefundsPolicy = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation("common");
  const breadcrumbLinks = [
    { name: "Home", arabicName: "الرئيسية", href: "/" },
    {
      name: "Refund and Returns Policy",
      arabicName: "سياسة الاسترداد والإرجاع",
      href: "/refund_returns",
    },
  ];

  return (
    <>
      <section className="max-w-[1222px] mx-auto space-y-[80px] pt-[98px] w-full overflow-hidden mb-16 font-serif">
        <div className="flex flex-col items-center lg:gap-7 lg:pt-[50px]">
          <h1 className="text-4xl lg:text-[68px] lg:leading[5rem] font-bold text-black text-center">
            {t("refunds.title")}
          </h1>
          <CustomBreadCrumb links={breadcrumbLinks} />
        </div>
        <div className="grid grid-cols-4 lg:pt-16">
          <div className="col-span-4 lg:col-span-3 px-3">
            <div className="flex flex-col gap-6">
              {(
                t("refunds.details", { returnObjects: true }) as Array<{
                  title: string;
                  points: {
                    title?: string;
                    description: String;
                    bullets?: string[];
                  }[];
                }>
              ).map((item, index) => {
                return (
                  <div key={index} className="flex flex-col gap-5">
                    <h2 className="font-semibold text-2xl text-[#242424]">
                      {item.title}
                    </h2>
                    <div className="flex flex-col gap-5 font-sans">
                      {item.points.map((point, index) => {
                        return (
                          <div key={index} className="flex flex-col gap-5">
                            {point.title && (
                              <div className="flex flex-col gap-1">
                                <p className="font-semibold text-sm text-lightGray">
                                  {point.title}
                                </p>
                                <p className="text-sm text-lightGray leading-[1.375rem]">
                                  {point.description}
                                </p>
                              </div>
                            )}
                            <p
                              key={index}
                              className="text-sm text-lightGray leading-[22px]"
                            >
                              {point.description}
                            </p>
                            {point.bullets && (
                              <div className="flex flex-col gap-3">
                                {point.bullets.map((bullet, idx) => (
                                  <li
                                    key={idx}
                                    className="text-sm text-lightGray leading-[1.375rem]"
                                  >
                                    {bullet}
                                  </li>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="lg:col-span-1 hidden lg:flex flex-col gap-5 px-3">
            <BlogRightContent />
          </div>
        </div>
      </section>
      <GetInTouch language={language} />
    </>
  );
};
export default RefundsPolicy;
