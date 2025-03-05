"use client";

import Image from "next/image";
import Link from "next/link";
import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";
import GetInTouch from "@/components/common/GetInTouch";
import projects from "./projectsData.json";
import { useTranslation } from "react-i18next";

const ProjectsList = () => {
  const {
    i18n: { language },
  } = useTranslation();

  const breadcrumbLinks = [
    { name: "Home", arabicName: "الرئيسية", href: "/" },
    { name: "Projects", arabicName: "مشاريعنا", href: "/projects" },
  ];

  return (
    <section className=" bg-white space-y-[80px] pt-16 lg:pt-[98px]">
      <div className="flex flex-col items-center gap-2 lg:pb-[125px] pt-[50px]">
        <h1 className="text-4xl lg:text-[4.25rem] lg:leading-[5.125rem] font-bold text-[#242424]">
          {language === "en" ? "Projects" : "مشاريعنا"}
        </h1>
        <CustomBreadCrumb links={breadcrumbLinks} />
      </div>
      <div className="w-full max-w-[1192px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
        {projects.map((project, index) => (
          <div key={index} className="overflow-hidden">
            <div className="relative w-full h-64">
              <Image
                src={project.image ?? ""}
                alt="image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="py-4 space-y-5">
              <h2 className="text-2xl font-semibold text-[#242424] mb-5">
                {language === "en" ? project.en.name : project.ar.name}
              </h2>
              <Link
                href={project.link}
                className="bg-primary hover:bg-[#e59b62] px-5 py-3 font-semibold text-[.8125rem] text-white uppercase"
              >
                {language === "en" ? "Read more" : "اقرأ أكثر"}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <GetInTouch language={language} />
    </section>
  );
};
export default ProjectsList;
