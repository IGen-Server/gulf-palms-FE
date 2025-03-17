"use client";

import Image from "next/image";
import { CustomBreadCrumb } from "./CustomBreadCrumb";
import { ReactNode } from "react";
import { decorationPosts, images, recentPosts } from "@/data/blogsData";
import Link from "next/link";
import BlogCommentForm from "@/app/[locale]/(pages)/(public)/(blogs)/exploring-atlantas-modern-homes/BlogCommentForm";
import BlogPostCard from "@/app/[locale]/(pages)/(public)/category/BlogPostCard";
import CustomCarouselCopy from "./CustomCarouselCopy";
import { ChevronLeft, ChevronRight, LayoutGrid } from "lucide-react";
import BlogRightContent from "./BlogRightContent";
import GetInTouch from "./GetInTouch";
import { useTranslation } from "react-i18next";

const BlogStructure = ({
  children,
  breadcrumbLinks,
  tags = ["Guide", "News", "Sofa"],
  comment = false,
  postTitle,
  newerBlog,
  olderBlog,
}: {
  children: ReactNode;
  breadcrumbLinks: { name: string; arabicName: string; href: string }[];
  tags?: string[];
  comment?: boolean;
  postTitle?: string;
  newerBlog?: {
    slug: string;
    title: string;
    image: string;
    description: string;
  };
  olderBlog?: {
    slug: string;
    title: string;
    image: string;
    description: string;
  };
}) => {
  const {
    i18n: { language },
  } = useTranslation();
  const slidesData = decorationPosts.map((post) => ({
    component: <BlogPostCard post={post} slug="" />,
  }));
  return (
    <>
      <div className="max-w-[1222px] mx-auto pt-[98px]">
        <div className="flex flex-col items-center">
          <h1
            className={`mb-3 text-4xl lg:text-[4.25rem] lg:leading-[5.125rem] font-bold text-black`}
          >
            Blog
          </h1>
          <CustomBreadCrumb links={breadcrumbLinks} />
        </div>
        <div className="grid grid-cols-4 pt-16">
          <div className="col-span-4 lg:col-span-3 px-3">
            {children}

            <div className="w-full h-[1px] bg-lightGray/30 mt-16 my-7" />

            <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-7 lg:gap-0 mb-7">
              <div className="flex gap-3">
                {tags.map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center gap-2 border border-lightGray/30 hover:border-primary duration-300 px-4 py-1 group cursor-pointer"
                  >
                    <div className="w-2 h-2 rounded-full bg-lightGray/30 group-hover:bg-primary duration-300" />
                    <p className="font-semibold text-sm text-[#242424]">
                      {tag}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href="https://www.facebook.com/sharer/sharer.php?u=https://gulfpalms.com/en/reinterprets-the-classic-bookshelf/"
                  className="w-10 h-10 flex justify-center items-center rounded-full bg-[#365493] hover:bg-[#2F487F] duration-300 cursor-pointer"
                >
                  <i className="fa-brands fa-facebook-f text-white"></i>
                </Link>
                <Link
                  href="mailto:"
                  className="w-10 h-10 flex justify-center items-center rounded-full bg-[#f89a1e] hover:bg-[#D6851A] duration-300 cursor-pointer"
                >
                  <i className="fa-solid fa-envelope text-white"></i>
                </Link>
                <Link
                  href="https://www.linkedin.com/shareArticle?mini=true&url=https://gulfpalms.com/en/reinterprets-the-classic-bookshelf/"
                  className="w-10 h-10 flex justify-center items-center rounded-full bg-[#0274b3] hover:bg-[#02649A] duration-300 cursor-pointer"
                >
                  <i className="fa-brands fa-linkedin-in text-white"></i>
                </Link>
                <Link
                  href="https://api.whatsapp.com/send?text=https%3A%2F%2Fgulfpalms.com%2Fen%2Freinterprets-the-classic-bookshelf%2F"
                  className="w-10 h-10 flex justify-center items-center rounded-full bg-[#1ebea5] hover:bg-[#1AA48E] duration-300 cursor-pointer"
                >
                  <i className="fa-brands fa-whatsapp text-white"></i>
                </Link>
              </div>
            </div>

            <div className="w-full h-[1px] bg-lightGray/30 my-7" />

            <div className="w-full flex justify-between items-center my-7">
              <div className="flex-1">
                {newerBlog ? (
                  <Link
                    href={newerBlog.slug}
                    className="flex items-center gap-3 group"
                  >
                    <ChevronLeft className="w-10 h-10 border border-[#bbb] rounded-full p-2 cursor-pointer" />
                    <div className="flex flex-col gap-2">
                      <p className="font-light text-xs text-[#bbb] tracking-wider">
                        Newer
                      </p>
                      <p className="hidden lg:block font-semibold text-xs text-[#777] group-hover:text-primary duration-300 tracking-wider">
                        {newerBlog.title}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div className="w-10" />
                )}
              </div>

              <LayoutGrid className="text-[#bbb] hover:text-[#777] duration-300 cursor-pointer" />

              <div className="flex-1 flex justify-end">
                {olderBlog ? (
                  <Link
                    href={olderBlog.slug}
                    className="flex items-center gap-3 group"
                  >
                    <div className="flex flex-col items-end gap-2">
                      <p className="font-light text-xs text-[#bbb] tracking-wide">
                        Older
                      </p>
                      <p className="hidden lg:block font-semibold text-xs text-[#777] group-hover:text-primary duration-300 tracking-wide">
                        {olderBlog.title}
                      </p>
                    </div>
                    <ChevronRight className="w-10 h-10 border border-[#bbb] rounded-full p-2 cursor-pointer" />
                  </Link>
                ) : (
                  <div className="w-10" />
                )}
              </div>
            </div>
            <div className="w-full h-[1px] bg-lightGray/30 my-7" />
            <div className="w-full h-[625px]">
              <CustomCarouselCopy
                title="Related Posts"
                slidesToScroll={2}
                slidesToShow={2}
                data={slidesData}
                autoPlay={true}
                MobileSlidesNumber={1}
              />
            </div>
            {comment && (
              <div className="w-full flex flex-col gap-12 my-12">
                <h2 className="font-semibold text-[1.375rem] text-[#242424] leading-[1.9375rem] uppercase">{`One thought on "${postTitle}"`}</h2>
                <div className="flex items-start gap-7">
                  <Image
                    src="/images/users/avatar.jpg"
                    alt="Avatar"
                    width={74}
                    height={74}
                    className="rounded-full"
                  />
                  <div className="flex flex-col gap-4">
                    <div className="w-full flex justify-between items-center">
                      <p className="font-semibold text-[#333]">
                        Mr. Mackay
                        <span className="pl-3 font-normal text-[#777]">
                          says:{" "}
                        </span>
                      </p>
                      <p className="text-sm text-[#bbb]">
                        August 27, 2021 at 1:47 pm
                      </p>
                    </div>
                    <p className="text-sm text-lightGray leading-[1.375rem]">
                      Nullam a vulputate adipiscing ornare eget a a pulvinar a
                      fames parturient libero taciti a nibh rhoncus.
                    </p>
                    <button className="w-max font-semibold text-[.9375rem] text-primary hover:opacity-70 duration-300 uppercase">
                      Reply
                    </button>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-lightGray/30 mb-7" />
              </div>
            )}
            <BlogCommentForm />
          </div>
          <div className="lg:col-span-1 hidden lg:flex flex-col gap-5 px-3">
            <BlogRightContent />
          </div>
        </div>
      </div>
      <GetInTouch language={language} />
    </>
  );
};
export default BlogStructure;
