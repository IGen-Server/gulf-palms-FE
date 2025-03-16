import { images, recentPosts } from "@/data/blogsData";
import Image from "next/image";
import Link from "next/link";

const BlogRightContent = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-base text-[#333] uppercase font-serif">
          Categories
        </h3>
        <div className="flex flex-col gap-3 font-sans">
          {["Decoration", "Design trends", "Furniture", "Inspiration"].map(
            (category) => (
              <Link
                href={
                  category.includes(" ")
                    ? `/en/category/${category
                        .toLowerCase()
                        .split(" ")
                        .join("-")}`
                    : `/en/category/${category.toLowerCase()}`
                }
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
            <Link href={post.slug} key={index} className="flex gap-2">
              <Image src={post.image} alt="Post image" width={75} height={65} />
              <div className="flex flex-col justify-between">
                <p className="font-medium text-sm text-[#333] opacity-65">
                  {post.title}
                </p>
                <div className="flex gap-2 font-sans">
                  <p className="text-[#bbb] text-[.8125rem]">{post.date}</p>
                  <p className="text-[#bbb] text-[.8125rem]">No Comments</p>
                </div>
              </div>
            </Link>
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
            <Link
              key={index}
              href="https://www.instagram.com/ozdesignfurniture/"
              className="relative w-[87px] h-[87px] group"
            >
              <Image
                src={image}
                alt="Post image"
                width={87}
                height={87}
                className=""
              />
              <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-50 bg-[#333] duration-300" />
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full h-[1px] bg-lightGray/30" />

      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-base text-[#333] tracking-wide uppercase">
          Recent Comments
        </h3>
        <div className="flex flex-col gap-4 font-sans">
          <p className="text-sm opacity-100 hover:opacity-70">
            <i className="fa-regular fa-message text-xs text-[#333]"></i>{" "}
            <span className="text-lightGray px-1">Mr. Mackay on</span>
            <span className="font-semibold text-[#333]">
              {" "}
              Sweet seat: functional seat for IT folks
            </span>
          </p>
          <p className="text-sm  opacity-100 hover:opacity-70">
            <i className="fa-regular fa-message text-xs text-[#333]"></i>{" "}
            <span className="text-lightGray px-1">Mr. Mackay on</span>
            <span className="font-semibold text-[#333]">
              {" "}
              The big design: Wall likes pictures
            </span>
          </p>
          <p className="text-sm  opacity-100 hover:opacity-70">
            <i className="fa-regular fa-message text-xs text-[#333]"></i>{" "}
            <span className="text-lightGray px-1">Mr. Mackay on</span>
            <span className="font-semibold text-[#333]">
              {" "}
              Minimalist Japanese-inspired furniture
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
export default BlogRightContent;
