"use client"

import Image from "next/image"
import Link from "next/link"
import type { FC } from "react"
import { useTranslation } from "react-i18next"
import "@fortawesome/fontawesome-free/css/all.min.css"

const Footer: FC = () => {
  const { t } = useTranslation()

  const showrooms = (t("footer.showrooms.items", { returnObjects: true }) as { label: string; link: string }[]) || []
  const usefulLinks =
    (t("footer.usefulLinks.items", { returnObjects: true }) as { label: string; link: string }[]) || []
  const productCategories =
    (t("footer.productCategories.items", { returnObjects: true }) as { label: string; link: string }[]) || []

  return (
    <footer className="footer bg-primary text-secondary max-lg:h-[1300px] max-lg:overflow-y-auto max-lg:pt-[100px]">
      <div className="relative h-full max-w-[1222px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto pt-8 pb-24 sm:pb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="flex flex-col items-start justify-between gap-4">
              <Image
                src="https://gulfpalms.com/wp-content/uploads/2023/06/GP_Logo-02.png"
                alt={t("footer.logoAlt")}
                className="mb-4"
                height={71}
                width={179}
              />
              <div className="flex space-x-4 py-4">
                {["twitter", "instagram", "linkedin"].map((social) => (
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
              <p className="text-sm text-secondary">{t("footer.description")}</p>

              <div className="mt-3 space-y-2">
                {[
                  { icon: "cursor", text: t("footer.address") },
                  { icon: "phone", text: t("footer.phone") },
                  { icon: "envelope", text: t("footer.email") },
                ].map((item, index) => (
                  <p key={index} className="flex items-center gap-4">
                    <Image
                      src={`https://gulfpalms.com/wp-content/uploads/2021/09/wd-${item.icon}-light.svg`}
                      alt={`${item.icon} icon`}
                      width={14}
                      height={14}
                    />
                    {item.text}
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
            {[
              { title: "footer.showrooms.title", items: showrooms },
              { title: "footer.usefulLinks.title", items: usefulLinks },
              { title: "footer.productCategories.title", items: productCategories },
            ].map((section, index) => (
              <div key={index} className="mt-8 sm:mt-0">
                <h5 className="text-lg font-bold text-white mb-4">{t(section.title)}</h5>
                <ul className="space-y-2 text-secondary">
                  {section.items.map((item: any, itemIndex: number) => (
                    <li key={itemIndex}>
                      <Link
                        href={item.link}
                        className="text-secondary/90 hover:text-white transition-colors duration-200 cursor-pointer"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-opacity-30 border-white w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center py-6 max-w-[1222px] mx-auto min-h-[72px]">
          <small className="text-secondary text-center sm:text-left mb-4 sm:mb-0">
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
  )
}

export default Footer

