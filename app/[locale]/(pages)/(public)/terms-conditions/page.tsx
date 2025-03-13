"use client";

import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";
import { useTranslation } from "react-i18next";

const page = () => {
  const { t, i18n } = useTranslation("common");
  const breadcrumbLinks = [
    { name: "Home", arabicName: "الرئيسية", href: "/" },
    {
      name: "Terms & Conditions",
      arabicName: "البنود و الظروف",
      href: "/terms-conditions/",
    },
  ];

  return (
    <section className="space-y-[80px] pt-[98px] w-full overflow-hidden">
      <div className="flex flex-col items-center lg:gap-7 lg:pt-[50px]">
        <h1 className="text-4xl lg:text-[68px] lg:leading[5rem] font-bold text-black">
          {t("terms.title")}
        </h1>
        <CustomBreadCrumb links={breadcrumbLinks} />
      </div>
    </section>
  );
};
export default page;
