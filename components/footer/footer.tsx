"use client";

import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FooterAccordion from "./FooterAccordion";

const Footer: FC = () => {
  const { t } = useTranslation();

  const showrooms =
    (t("footer.showrooms.items", { returnObjects: true }) as {
      label: string;
      link: string;
    }[]) || [];
  const usefulLinks =
    (t("footer.usefulLinks.items", { returnObjects: true }) as {
      label: string;
      link: string;
    }[]) || [];
  const productCategories =
    (t("footer.productCategories.items", { returnObjects: true }) as {
      label: string;
      link: string;
    }[]) || [];

  const footerAccordions = [
    { title: "footer.showrooms.title", items: showrooms },
    { title: "footer.usefulLinks.title", items: usefulLinks },
    {
      title: "footer.productCategories.title",
      items: productCategories,
    },
  ];

  return (
    <footer className="footer bg-primary text-secondary max-sm:h-fit max-md:h-[900px] max-lg:overflow-y-auto max-sm:pt-[40px] max-lg:pt-[100px] lg:fixed">
      <div className="relative h-full max-w-[1222px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-sm:pt-1 pt-8 pb-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="flex flex-col items-start gap-2 footer-info">
              <Image
                src="https://gulfpalms.com/wp-content/uploads/2023/06/GP_Logo-02-430x171.png"
                alt={t("footer.logoAlt")}
                height={71}
                width={179}
              />
              <div className="flex items-center gap-4 py-4">
                {["x-twitter", "instagram", "linkedin"].map((social) => (
                  <Link
                    key={social}
                    href={`https://www.${social}.com/gulfpalms`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary/90 hover:text-white transition-colors duration-200 cursor-pointer h-[30px] w-[30px] p-2 border rounded-full grid place-content-center"
                  >
                    <i className={`fab fa-${social}`}></i>
                  </Link>
                ))}
              </div>
              <p className="text-sm">
                {t("footer.description")}
              </p>

              <div className="mt-3 space-y-2">
                {[
                  { icon: "cursor", text: t("footer.address") },
                  { icon: "phone", text: t("footer.phone") },
                  { icon: "envelope", text: t("footer.email") },
                ].map((item, index) => (
                  <p
                    key={index}
                    className="flex items-center gap-4 text-sm text-white opacity-80"
                  >
                    <Image
                      src={`https://clone.gulfpalms.com/wp-content/uploads/2021/09/wd-${item.icon}-light.svg`}
                      alt={`${item.icon} icon`}
                      width={14}
                      height={14}
                    />
                    {item.icon === "cursor" && item.text}

                    {item.icon === "phone" && (
                      <a
                        href="tel:+965 6066 0378"
                        className="hover:text-white transition-colors duration-200"
                      >
                        {item.text}
                      </a>
                    )}
                    {item.icon === "envelope" && (
                      <a
                        href="mailto:contact@gulfpalms.com"
                        className="hover:text-white transition-colors duration-200"
                      >
                        contact@gulfpalms.com
                      </a>
                    )}
                  </p>
                ))}
              </div>
            </div>

            {/* Other Sections */}
            {footerAccordions.map((section, index) => (
              <>
                <div key={index} className="hidden lg:block mt-8 sm:mt-0">
                  <h5 className="text-sm font-bold text-white mb-4">
                    {t(section.title)}
                  </h5>
                  <ul className="space-y-2 footer-nav-list">
                    {section.items.map((item: any, itemIndex: number) => (
                      <li key={itemIndex}>
                        <Link
                          href={item.link}
                          className="text-sm hover:text-white transition-colors duration-200 cursor-pointer"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <FooterAccordion section={section} />
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-opacity-30 border-white w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center py-6 max-w-[1222px] mx-auto">
          <small className="text-secondary text-[.6875rem] text-center sm:text-left mb-4 sm:mb-0">
            {/* {`Copyright © ${new Date().getFullYear()}`}{" "}
            <span className="font-semibold">Gulf Palms</span> | All Rights
            Reserved | Designed by`} */}
            <span className="">
              <span>
                {t("footer.footerNote1", { year: new Date().getFullYear() })}{" "}
                <b>{t("siteName")}</b>
              </span>
              {" "}|{" "}
              <span>{t("footer.footerNote2")}</span>
              {" "}|{" "}
              <span>
                {t("footer.footerNote3")}{" "}
                <a href="https://gogoogle.com.au/" className="">
                  <b>Go Google</b>
                </a>
              </span>
            </span>
          </small>
          <Image
            src="https://clone.gulfpalms.com/wp-content/uploads/2023/09/payyments-methood.png"
            alt={t("footer.paymentMethods")}
            width={262}
            height={33}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
