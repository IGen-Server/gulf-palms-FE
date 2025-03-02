"use client";

import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";
import GetInTouch from "@/components/common/GetInTouch";
import { useTranslation } from "react-i18next";
import projects from "../projectsData.json";

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
  const projectDetails = project && project[language as "en" | "ar"];

  const breadcrumbLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: `${slug}`, href: `/projects/${slug}` },
  ];

  return (
    <div className="pt-[98px]">
      <div className="flex flex-col items-center pb-[200px] pt-[50px]">
        <h1 className="text-[36px] font-bold text-black">Projects</h1>
        <CustomBreadCrumb links={breadcrumbLinks} />
      </div>
      <div className="lg:h-[850px] w-screen bg-gray-100 pb-[80px]">
        <div className="w-full border h-full mx-auto flex items-center lg:flex-row flex-col">
          <div className="h-full w-full p-[100px]">
            <p className="pb-12">{slug}</p>
            {config.map((item, index) => {
              return (
                <p
                  key={item.key}
                  className="text-[24px] pl-[100px] py-5 border-t-2 border-black text-[#242424]"
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
      </div>
      <GetInTouch language={language} />
    </div>
  );
};
export default SingleProject;
