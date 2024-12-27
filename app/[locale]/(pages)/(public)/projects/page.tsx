import Image from "next/image";
import Link from "next/link";
import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";
import GetInTouch from "@/components/common/GetInTouch";
import React from "react";

const breadcrumbLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
];
const ProjectSection = () => {
  const projects = [
    {
      name: "Khiran Garden",
      image:
        "https://gulfpalms.com/wp-content/uploads/2023/12/9F5A9961-scaled.jpg",
      link: "http://localhost:3000/projects/khiran-garden/",
    },
    {
      name: "Pick Kaifan",
      image:
        "https://gulfpalms.com/wp-content/uploads/2023/12/DSC08629-scaled.jpg",
      link: "http://localhost:3000/projects/pick-kaifan/",
    },
    {
      name: "Zahra Garden 2",
      image:
        "https://gulfpalms.com/wp-content/uploads/2023/12/9F5A9891-scaled.jpg",
      link: "http://localhost:3000/projects/zahra-garden-2/",
    },
    {
      name: "Zahra Garden",
      image:
        "https://gulfpalms.com/wp-content/uploads/2023/10/Screenshot_408.png",
      link: "http://localhost:3000/projects/zahra-garden/",
    },
    {
      name: "Al Raziq",
      image:
        "https://gulfpalms.com/wp-content/uploads/2024/01/9F5A0050-1-2048x2048.png",
      link: "http://localhost:3000/projects/al-raziq/",
    },
    {
      name: "Sunrise Hills",
      image:
        "https://gulfpalms.com/wp-content/uploads/2023/12/9F5A9891-2048x1428.jpg",
      link: "http://localhost:3000/projects/sunrise-hills/",
    },
    {
      name: "Jahra Oasis",
      image:
        "https://gulfpalms.com/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-18-at-4.17.11-PM-8.jpeg",
      link: "http://localhost:3000/projects/jahra-oasis/",
    },
    {
      name: "Green Park",
      image:
        "https://gulfpalms.com/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-18-at-4.34.09-PM.jpeg",
      link: "http://localhost:3000/projects/green-park/",
    },
    {
      name: "Crystal Bay",
      image: "https://gulfpalms.com/wp-content/uploads/2023/10/5.jpg",
      link: "http://localhost:3000/projects/crystal-bay/",
    },
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
                src={project.image}
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

export default ProjectSection;
