import SingleFarm from "./SingleFarm";

export default async function FarmDetails({
  params,
}: {
  params: Promise<{
    id: any;
    slug: string;
  }>;
}) {
  const slug = (await params).id;

  return (
    <div className="">
      <SingleFarm slug={slug} />
    </div>
  );
}
