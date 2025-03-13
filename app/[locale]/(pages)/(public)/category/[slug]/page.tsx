import {
  decorationPosts,
  designPosts,
  furniturePosts,
  inspirationData,
} from "@/data/blogsData";
import BlogPostCard from "../BlogPostCard";
import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";

const page = async ({
  params,
}: {
  params: Promise<{
    id: any;
    slug: string;
  }>;
}) => {
  const slug = (await params).slug;

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
    <div className="max-w-[1222px] mx-auto mt-[98px]">
      <div className="flex flex-col items-center">
        <h1
          className={`mb-3 text-4xl lg:text-[4.25rem] lg:leading-[5.125rem] font-bold text-black capitalize`}
        >
          {slug.includes("-") ? slug.split("-").join(" ") : slug}
        </h1>
        <CustomBreadCrumb links={breadcrumbLinks} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {posts.map((post, index) => (
          <BlogPostCard key={index} post={post} slug={slug} />
        ))}
      </div>
    </div>
  );
};
export default page;
