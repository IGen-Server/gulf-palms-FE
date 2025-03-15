"use client";

import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";
import GetInTouch from "@/components/common/GetInTouch";
import { useTranslation } from "react-i18next";

const Terms = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation("common");
  const breadcrumbLinks = [
    { name: "Home", arabicName: "الرئيسية", href: "/" },
    {
      name: "Terms & Conditions",
      arabicName: "البنود و الظروف",
      href: "/terms-conditions/",
    },
  ];

  return (
    <section className="space-y-[80px] pt-[98px] w-full overflow-hidden font-serif">
      <div className="flex flex-col items-center lg:gap-7 lg:pt-[50px] mb-24">
        <h1 className="text-4xl lg:text-[68px] lg:leading[5rem] font-bold text-black">
          {t("terms.title")}
        </h1>
        <CustomBreadCrumb links={breadcrumbLinks} />
      </div>
      <GetInTouch language={language} />
    </section>
  );
};
export default Terms;
