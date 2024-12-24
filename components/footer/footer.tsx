"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import "@fortawesome/fontawesome-free/css/all.min.css";

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

  return (
    <footer className="footer bg-primary text-secondary">
      <div className="relative h-full max-w-[1370px] mx-auto">
        <div className="container mx-auto pt-8 pb-[100px]">
          <div className="h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="flex flex-col items-start justify-between gap-2">
              <Image
                src="https://gulfpalms.com/wp-content/uploads/2023/06/GP_Logo-02.png"
                alt={t("footer.logoAlt")}
                className="mb-4"
                height={71}
                width={179}
              />
              <p className="text-sm text-secondary">
                {t("footer.description")}
              </p>
              <div className="flex space-x-4 py-4 ">
                <Link
                  href="https://twitter.com/gulfpalms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-secondary cursor-pointer h-[30px] w-[30px] p-2 border rounded-full grid place-content-center"
                >
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link
                  href="https://www.instagram.com/gulfpalms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-secondary cursor-pointer h-[30px] w-[30px] p-2 border rounded-full grid place-content-center"
                >
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/gulfpalms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-secondary cursor-pointer h-[30px] w-[30px] p-2 border rounded-full grid place-content-center"
                >
                  <i className="fab fa-linkedin"></i>
                </Link>
              </div>
              <div>
                <p>
                  <i className="fas fa-map-marker-alt"></i>{" "}
                  {t("footer.address")}
                </p>
                <p>
                  <i className="fas fa-phone"></i> {t("footer.phone")}
                </p>
                <p>
                  <i className="fas fa-envelope"></i> {t("footer.email")}{" "}
                  <a href="mailto:contact@gulfpalms.com">
                    contact@gulfpalms.com
                  </a>
                </p>
              </div>
            </div>

            {/* Our Showrooms */}
            <div>
              <h5 className="text-lg font-bold text-secondary mb-4">
                {t("footer.showrooms.title")}
              </h5>
              <ul className="space-y-2 text-secondary">
                {showrooms.map((showroom: any, index: number) => (
                  <li key={index}>
                    <Link
                      href={showroom.link}
                      className="text-secondary hover:text-secondary !cursor-pointer"
                    >
                      {showroom.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h5 className="font-bold text-secondary mb-4">
                {t("footer.usefulLinks.title")}
              </h5>
              <ul className="space-y-2">
                {usefulLinks.map((link: any, index: number) => (
                  <li key={index}>
                    <Link
                      href={link.link}
                      className="text-secondary hover:text-secondary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Categories */}
            <div>
              <h5 className="font-bold text-secondary mb-4">
                {t("footer.productCategories.title")}
              </h5>
              <ul className="space-y-2">
                {productCategories.map((category: any, index: number) => (
                  <li key={index}>
                    <Link
                      href={category.link}
                      className="text-secondary hover:text-secondary"
                    >
                      {category.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t absolute bottom-0 w-full px-7">
        <div className="container flex justify-between items-center py-6 max-w-[1370px] mx-auto">
          <small className="text-secondary">
            {t("footer.footerNote", { year: new Date().getFullYear() })}
          </small>
          <Image
            src="https://gulfpalms.com/wp-content/uploads/2023/09/payyments-methood.png"
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
