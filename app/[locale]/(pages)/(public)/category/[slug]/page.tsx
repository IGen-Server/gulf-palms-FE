import Category from "./Category";

const page = async ({
  params,
}: {
  params: Promise<{
    id: any;
    slug: string;
  }>;
}) => {
  const slug = (await params).slug;

  return (
    <div className="">
      <Category slug={slug} />
    </div>
  );
};
export default page;
