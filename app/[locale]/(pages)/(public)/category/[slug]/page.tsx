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
      name: 'Archive by Category "Decoration"',
      arabicName: 'Archive by Category "Decoration"',
      href: "",
    },
  ];

  return (
    <div className="max-w-[1222px] mx-auto mt-[98px]">
      <div className="flex flex-col items-center">
        <h1
          className={`mb-3 text-4xl lg:text-[4.25rem] lg:leading-[5.125rem] font-bold text-black`}
        >
          Decoration
        </h1>
        <CustomBreadCrumb links={breadcrumbLinks} />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[1, 2, 3].map((post) => (
          <BlogPostCard key={post} slug={slug} />
        ))}
      </div>
    </div>
  );
};
export default page;
