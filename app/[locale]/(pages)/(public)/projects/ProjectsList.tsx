"use client";

import Image from "next/image";
import Link from "next/link";
import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";
import GetInTouch from "@/components/common/GetInTouch";
import projects from "./projectsData.json";

const ProjectsList = () => {
  const breadcrumbLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <section className=" bg-gray-100 space-y-[80px] pt-[98px]">
      <div className="flex flex-col items-center pb-[200px] pt-[50px]">
        <h1 className="text-[36px] font-bold text-black">Projects</h1>
        <CustomBreadCrumb links={breadcrumbLinks} />
      </div>
      <div className="max-w-[1192px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="overflow-hidden">
            <div className="relative w-full h-64">
              <Image
                src={project.image ?? ""}
                alt="image"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="py-4 space-y-3">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                {project.name}
              </h2>
              <Link
                href={project.link}
                className="bg-primary px-3 py-2 text-white uppercase"
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
      <GetInTouch />
    </section>
  );
};
export default ProjectsList;
