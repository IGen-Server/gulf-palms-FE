import Showroom from "./ShowroomDetails";

export default async function ShowroomDetails({
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
      <Showroom slug={slug} />
    </div>
  );
}
