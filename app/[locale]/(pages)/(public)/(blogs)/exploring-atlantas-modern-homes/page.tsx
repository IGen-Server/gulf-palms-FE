import BlogPostHeading from "./BlogPostHeading";
import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";
import Image from "next/image";
import BlogCommentForm from "./BlogCommentForm";

const recentPosts = [
  {
    title: "Exploring Atlanta’s modern homes",
    image:
      "https://gulfpalms.com/wp-content/uploads/2021/08/wd-blog-9-75x65.jpg",
    date: "August 27, 2021",
  },
  {
    title: "Green interior design inspiration",
    image:
      "https://gulfpalms.com/wp-content/uploads/2021/08/wd-blog-8-75x65.jpg",
    date: "August 27, 2021",
  },
  {
    title: "Collar brings back coffee brewing ritual",
    image:
      "https://gulfpalms.com/wp-content/uploads/2021/08/wd-blog-7-75x65.jpg",
    date: "August 27, 2021",
  },
];

const images = [
  "https://gulfpalms.com/wp-content/uploads/2021/08/portfolio-9.jpg",
  "https://gulfpalms.com/wp-content/uploads/2021/08/portfolio-1.jpg",
  "https://gulfpalms.com/wp-content/uploads/2021/08/portfolio-8.jpg",
  "https://gulfpalms.com/wp-content/uploads/2021/08/portfolio-5.jpg",
  "https://gulfpalms.com/wp-content/uploads/2021/08/portfolio-6-700x700.jpg",
  "https://gulfpalms.com/wp-content/uploads/2021/08/portfolio-1-700x700.jpg",
  "https://gulfpalms.com/wp-content/uploads/2021/08/portfolio-8-700x700.jpg",
  "https://gulfpalms.com/wp-content/uploads/2021/08/wd-blog-1-700x492.jpg",
  "https://gulfpalms.com/wp-content/uploads/2021/08/portfolio-9-700x700.jpg",
];

const page = () => {
  const breadcrumbLinks = [
    { name: "Home", arabicName: "Home", href: "/" },
    {
      name: "Decoration",
      arabicName: "Decoration",
      href: "",
    },
  ];

  return (
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
        <div className="col-span-3 px-3">
          <BlogPostHeading />
          <BlogCommentForm />
        </div>
        <div className="col-span-1 flex flex-col gap-5 px-3">
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-base text-[#333] uppercase">
              Categories
            </h3>
            <div className="flex flex-col gap-3">
              {["Decoration", "Design trends", "Furniture", "Inspiration"].map(
                (category) => (
                  <p key={category} className="font-normal text-sm text-[#777]">
                    {category}
                  </p>
                )
              )}
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#777]/30" />
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
          <div className="w-full h-[1px] bg-[#777]/30" />

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
          <div className="w-full h-[1px] bg-[#777]/30" />

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-base text-[#333] tracking-wide uppercase">
              Recent Comments
            </h3>
            <div className="flex flex-col gap-4">
              <p className="text-sm">
                <i className="fa-regular fa-message text-xs text-[#333]"></i>{" "}
                <span className="text-[#777] px-1">Mr. Mackay on</span>
                <span className="font-semibold text-[#333]">
                  {" "}
                  Sweet seat: functional seat for IT folks
                </span>
              </p>
              <p className="text-sm">
                <i className="fa-regular fa-message text-xs text-[#333]"></i>{" "}
                <span className="text-[#777] px-1">Mr. Mackay on</span>
                <span className="font-semibold text-[#333]">
                  {" "}
                  The big design: Wall likes pictures
                </span>
              </p>
              <p className="text-sm">
                <i className="fa-regular fa-message text-xs text-[#333]"></i>{" "}
                <span className="text-[#777] px-1">Mr. Mackay on</span>
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
export default page;
