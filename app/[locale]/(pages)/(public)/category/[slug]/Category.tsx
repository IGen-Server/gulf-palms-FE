"use client";

import {
  decorationPosts,
  designPosts,
  furniturePosts,
  inspirationData,
} from "@/data/blogsData";
import BlogPostCard from "../BlogPostCard";
import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";
import GetInTouch from "@/components/common/GetInTouch";
import { useTranslation } from "react-i18next";

const Category = ({ slug }: { slug: string }) => {
  const {
    i18n: { language },
  } = useTranslation();

  const breadcrumbLinks = [
    { name: "Home", arabicName: "Home", href: "/" },
    {
      name: `Archive by Category "${
        slug.includes("-") ? slug.split("-").join(" ") : slug
      }"`,
      arabicName: `Archive by Category "${
        slug.includes("-") ? slug.split("-").join(" ") : slug
      }"`,
      href: "",
    },
  ];

  const posts =
    slug === "design-trends"
      ? designPosts
      : slug === "decoration"
      ? decorationPosts
      : slug === "furniture"
      ? furniturePosts
      : inspirationData;

  return (
    <>
      <div className="max-w-[1222px] mx-auto mt-[145px] font-serif mb-12 px-5 lg:px-0">
        <div className="flex flex-col items-center">
          <h1
            className={`mb-3 text-4xl lg:text-[4.25rem] lg:leading-[5.125rem] font-bold text-black capitalize`}
          >
            {slug.includes("-") ? slug.split("-").join(" ") : slug}
          </h1>
          <CustomBreadCrumb links={breadcrumbLinks} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-5">
          {posts.map((post, index) => (
            <BlogPostCard key={index} post={post} slug={slug} />
          ))}
        </div>
      </div>
      <GetInTouch language={language} />
    </>
  );
};
export default Category;
