"use client";

import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";
import GetInTouch from "@/components/common/GetInTouch";
import { useTranslation } from "react-i18next";
import projects from "../projectsData.json";
import Image from "next/image";

type ProjectDetails = {
  name: string; // Project name
  stakeholder: string;
  projectType: string;
  location: string;
  design_by: string;
  implementation_by: string;
  area: string;
  duration: string;
};

export type ProjectData = {
  slug: string[];
  image: string;
  link: string;
  sideImage: string;
  sideVideo: string;
  subImages: string[];
  en: ProjectDetails;
  ar: ProjectDetails;
};

const config = [
  { name: "Stakeholder", arabicName: "المالك", key: "stakeholder" },
  { name: "Project Type", arabicName: "نوع المشروع", key: "projectType" },
  { name: "Location", arabicName: "الموقع", key: "location" },
  { name: "Design By", arabicName: "التصميم بواسطة", key: "design_by" },
  {
    name: "Implementation By",
    arabicName: "التنفيذ بواسطة",
    key: "implementation_by",
  },
  { name: "Size", arabicName: "المساحة", key: "area" },
  { name: "Duration", arabicName: "المدة", key: "duration" },
];

const SingleProject = ({ slug }: { slug: string }) => {
  const {
    i18n: { language },
  } = useTranslation();
  const project = projects.find((project) => project.slug.includes(slug));

  if (!project) return null;

  const projectDetails = project[language as "en" | "ar"];

  const breadcrumbLinks = [
    { name: "Home", arabicName: "الرئيسية", href: "/" },
    { name: "Projects", arabicName: "مشاريعنا", href: "/projects" },
    {
      name: projectDetails.name ?? "",
      arabicName: projectDetails.name,
      href: `/projects/${slug}`,
    },
  ];

  return (
    <div className="flex flex-col gap-24 pt-[98px]">
      <div className="flex flex-col items-center gap-2 pt-[50px]">
        <h1 className="text-4xl lg:text-[4.25rem] lg:leading-[5.125rem] font-bold text-[#242424]">
          {projectDetails.name}
        </h1>
        <CustomBreadCrumb links={breadcrumbLinks} />
      </div>
      <div className="w-full h-auto lg:h-[850px] flex flex-col md:flex-row items-center bg-gray-100">
        <div className="w-full md:w-[60%] p-5 lg:py-0 lg:px-28">
          <div className="w-full">
            <p className="pb-16 text-sm text-[#777] uppercase">
              {projectDetails.name}
            </p>
            {config.map((item, index) => {
              return (
                <p
                  key={item.key}
                  className="text-[1.1875rem] md:text-2xl pl-3 py-6 border-t-[1px] border-[#242424] text-[#242424]"
                >
                  <span className="font-semibold pr-7">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <span>
                    <span className="font-semibold mr-2">
                      {language === "en" ? item.name : item.arabicName}:
                    </span>

                    {projectDetails
                      ? projectDetails[item.key as keyof ProjectDetails]
                      : ""}
                  </span>
                </p>
              );
            })}
          </div>
        </div>
        <div className="w-full md:w-[40%] h-[350px] md:h-full">
          <Image
            src={project?.sideImage ?? ""}
            alt={project.en.name}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full max-w-[1192px] mx-auto columns-2 md:columns-3 lg:columns-4 gap-2 px-5">
        {project.subImages?.map((image, index) => {
          return (
            <Image
              key={index}
              src={image}
              alt="image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto mb-2"
            />
          );
        })}
      </div>
      <GetInTouch language={language} />
    </div>
  );
};
export default SingleProject;
