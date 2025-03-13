import Image from "next/image";
import { CustomBreadCrumb } from "./CustomBreadCrumb";
import { ReactNode } from "react";
import { decorationPosts, images, recentPosts } from "@/data/blogsData";
import Link from "next/link";
import BlogCommentForm from "@/app/[locale]/(pages)/(public)/(blogs)/exploring-atlantas-modern-homes/BlogCommentForm";
import BlogPostCard from "@/app/[locale]/(pages)/(public)/category/BlogPostCard";
import CustomCarouselCopy from "./CustomCarouselCopy";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BlogStructure = ({
  children,
  breadcrumbLinks,
  tags = ["Guide", "News", "Sofa"],
  comment = false,
  postTitle,
}: {
  children: ReactNode;
  breadcrumbLinks: { name: string; arabicName: string; href: string }[];
  tags?: string[];
  comment?: boolean;
  postTitle?: string;
}) => {
  const slidesData = decorationPosts.map((post) => ({
    component: <BlogPostCard post={post} slug="" />,
  }));
  return (
    <div className="max-w-[1222px] mx-auto pt-[98px] rtl">
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
                  <p className="font-semibold text-sm text-[#242424]">{tag}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[#365493] hover:bg-[#2F487F] duration-300 cursor-pointer">
                <i className="fa-brands fa-facebook-f text-white"></i>
              </div>
              <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[#f89a1e] hover:bg-[#D6851A] duration-300 cursor-pointer">
                <i className="fa-solid fa-envelope text-white"></i>
              </div>
              <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[#0274b3] hover:bg-[#02649A] duration-300 cursor-pointer">
                <i className="fa-brands fa-linkedin-in text-white"></i>
              </div>
              <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[#1ebea5] hover:bg-[#1AA48E] duration-300 cursor-pointer">
                <i className="fa-brands fa-whatsapp text-white"></i>
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-lightGray/30 my-7" />

          <div className="w-full flex justify-between items-center my-7">
            <div className="flex items-center gap-3">
              <ChevronLeft className="w-10 h-10 border border-[#bbb] rounded-full p-2" />
              <div className="flex flex-col gap-2">
                <p className="font-light text-xs text-[#bbb] tracking-wider">
                  Newer
                </p>
                <p className="hidden lg:block font-semibold text-xs text-[#777] tracking-wider">
                  Reinterprets the classic bookshelf
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex flex-col gap-2">
                <p className="font-light text-xs text-[#bbb] tracking-wide">
                  Newer
                </p>
                <p className="hidden lg:block font-semibold text-xs text-[#777] tracking-wide">
                  Reinterprets the classic bookshelf
                </p>
              </div>
              <ChevronRight className="w-10 h-10 border border-[#bbb] rounded-full p-2" />
            </div>
          </div>
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
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-base text-[#333] uppercase">
              Categories
            </h3>
            <div className="flex flex-col gap-3">
              {["Decoration", "Design trends", "Furniture", "Inspiration"].map(
                (category) => (
                  <Link
                    href={`/en/cvvategory/${category}`}
                    key={category}
                    className="font-normal text-sm text-lightGray hover:text-[#333]"
                  >
                    {category}
                  </Link>
                )
              )}
            </div>
          </div>
          <div className="w-full h-[1px] bg-lightGray/30" />
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-base text-[#333] tracking-wide uppercase">
              Recent Posts
            </h3>
            <div className="flex flex-col gap-3">
              {recentPosts.map((post, index) => (
                <div key={index} className="flex gap-2">
                  <Image
                    src={post.image}
                    alt="Post image"
                    width={75}
                    height={65}
                  />
                  <div className="flex flex-col justify-between">
                    <p className="font-medium text-sm text-[#333] opacity-65">
                      {post.title}
                    </p>
                    <div className="flex gap-2">
                      <p className="text-[#bbb] text-[.8125rem]">{post.date}</p>
                      <p className="text-[#bbb] text-[.8125rem]">No Comments</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-[1px] bg-lightGray/30" />

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-base text-[#333] tracking-wide uppercase">
              Our Instagram
            </h3>
            <div className="grid grid-cols-3 gap-1">
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt="Post image"
                  width={87}
                  height={87}
                />
              ))}
            </div>
          </div>
          <div className="w-full h-[1px] bg-lightGray/30" />

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-base text-[#333] tracking-wide uppercase">
              Recent Comments
            </h3>
            <div className="flex flex-col gap-4">
              <p className="text-sm">
                <i className="fa-regular fa-message text-xs text-[#333]"></i>{" "}
                <span className="text-lightGray px-1">Mr. Mackay on</span>
                <span className="font-semibold text-[#333]">
                  {" "}
                  Sweet seat: functional seat for IT folks
                </span>
              </p>
              <p className="text-sm">
                <i className="fa-regular fa-message text-xs text-[#333]"></i>{" "}
                <span className="text-lightGray px-1">Mr. Mackay on</span>
                <span className="font-semibold text-[#333]">
                  {" "}
                  The big design: Wall likes pictures
                </span>
              </p>
              <p className="text-sm">
                <i className="fa-regular fa-message text-xs text-[#333]"></i>{" "}
                <span className="text-lightGray px-1">Mr. Mackay on</span>
                <span className="font-semibold text-[#333]">
                  {" "}
                  Minimalist Japanese-inspired furniture
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogStructure;
