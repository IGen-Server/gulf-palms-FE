import Image from "next/image";

const BlogPostHeading = ({
  post,
  slug = "Decoration",
}: {
  post: { title: string; image: string; description: string };
  slug?: string;
}) => {
  return (
    <div className="w-full font-sans">
      <div className="relative flex flex-col items-center gap-2 py-6 text-center">
        <p className="self-center bg-primary px-3 py-1 font-semibold text-xs text-white uppercase z-20">
          {slug.includes("-") ? slug.split("-").join(" ") : slug}
        </p>
        <h2 className="font-serif font-medium text-xl lg:text-[2rem] text-[#333]">
          {post.title}
        </h2>
        <div className="flex items-center gap-3">
          <p className="hidden lg:block text-sm text-[#bbb]">Posted By</p>
          <Image
            src="/images/users/avatar.jpg"
            alt="Avatar"
            width={24}
            height={24}
            className="rounded-full"
          />
          <p className="text-sm text-[#bbb]">Admin</p>
        </div>
        <div className="relative w-full h-[281px] lg:h-[623px] mt-3">
          <Image
            src={post.image}
            alt="Blog image"
            width={0}
            height={0}
            sizes="100vw"
            className={`w-full h-full object-cover rounded-lg duration-700`}
          />
          <p className="absolute left-3 top-3 w-max h-max bg-white px-3 py-1 text-2xl leading-6 text-[#333]">
            27 <br /> <span className="text-xs uppercase leading-3">Aug</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default BlogPostHeading;
