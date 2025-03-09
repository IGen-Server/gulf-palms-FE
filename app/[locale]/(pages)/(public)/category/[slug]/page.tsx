import BlogPostCard from "@/components/common/BlogPostCard";

const page = async ({
  params,
}: {
  params: Promise<{
    id: any;
    slug: string;
  }>;
}) => {
  const slug = (await params).id;

  return (
    <div className="">
      <BlogPostCard />
    </div>
  );
};
export default page;
