"use client";

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
      <section className="max-w-[1222px] mx-auto space-y-[80px] pt-[98px] w-full overflow-hidden mb-16">
        <div className="flex flex-col items-center lg:gap-7 lg:pt-[50px]">
          <h1 className="text-4xl lg:text-[68px] lg:leading[5rem] font-bold text-black">
            {t("refunds.title")}
          </h1>
          <CustomBreadCrumb links={breadcrumbLinks} />
        </div>
        <div className="grid grid-cols-4 pt-16">
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
                    <div className="flex flex-col gap-5">
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
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-base text-[#333] uppercase">
                Categories
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  "Decoration",
                  "Design trends",
                  "Furniture",
                  "Inspiration",
                ].map((category) => (
                  <Link
                    href={`/en/cvvategory/${category}`}
                    key={category}
                    className="font-normal text-sm text-lightGray hover:text-[#333]"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-full h-[1px] bg-lightGray/30" />
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-base text-[#333] tracking-wide uppercase">
                Recent Posts
              </h3>
              <div className="flex flex-col gap-3">
                {recentPosts.map((post, index) => (
                  <div key={index} className="flex gap-2">
                    <Image
                      src={post.image}
                      alt="Post image"
                      width={75}
                      height={65}
                    />
                    <div className="flex flex-col justify-between">
                      <p className="font-medium text-sm text-[#333] opacity-65">
                        {post.title}
                      </p>
                      <div className="flex gap-2">
                        <p className="text-[#bbb] text-[.8125rem]">
                          {post.date}
                        </p>
                        <p className="text-[#bbb] text-[.8125rem]">
                          No Comments
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-[1px] bg-lightGray/30" />

            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-base text-[#333] tracking-wide uppercase">
                Our Instagram
              </h3>
              <div className="grid grid-cols-3 gap-1">
                {images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt="Post image"
                    width={87}
                    height={87}
                  />
                ))}
              </div>
            </div>
            <div className="w-full h-[1px] bg-lightGray/30" />

            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-base text-[#333] tracking-wide uppercase">
                Recent Comments
              </h3>
              <div className="flex flex-col gap-4">
                <p className="text-sm">
                  <i className="fa-regular fa-message text-xs text-[#333]"></i>{" "}
                  <span className="text-lightGray px-1">Mr. Mackay on</span>
                  <span className="font-semibold text-[#333]">
                    {" "}
                    Sweet seat: functional seat for IT folks
                  </span>
                </p>
                <p className="text-sm">
                  <i className="fa-regular fa-message text-xs text-[#333]"></i>{" "}
                  <span className="text-lightGray px-1">Mr. Mackay on</span>
                  <span className="font-semibold text-[#333]">
                    {" "}
                    The big design: Wall likes pictures
                  </span>
                </p>
                <p className="text-sm">
                  <i className="fa-regular fa-message text-xs text-[#333]"></i>{" "}
                  <span className="text-lightGray px-1">Mr. Mackay on</span>
                  <span className="font-semibold text-[#333]">
                    {" "}
                    Minimalist Japanese-inspired furniture
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <GetInTouch language={language} />
    </>
  );
};
export default RefundsPolicy;
