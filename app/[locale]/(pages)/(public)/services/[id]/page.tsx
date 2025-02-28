import SingleServiceCard from "./SingleServiceCard";

export default async function ServiceDetails({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="max-w-screen">
      <SingleServiceCard slug={params.id} />
    </div>
  );
}
