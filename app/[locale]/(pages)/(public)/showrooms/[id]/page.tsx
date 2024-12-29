/* eslint-disable @next/next/no-img-element */
import GetInTouch from "@/components/common/GetInTouch";
import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";

export default async function ShowroomDetails({
  params,
}: {
  params: Promise<{
    id: any;
    slug: string;
  }>;
}) {
  const slug = (await params).id;
  const breadcrumbLinks = [
    { name: "Home", href: "/" },
    { name: "Showrooms", href: "/showrooms" },
    {
      name: slug,
      href: "/",
    },
  ];
  return (
    <div className="pt-[98px] w-screen mx-auto flex flex-col items-center">
      <div className="flex flex-col items-center pt-[50px]">
        <h1 className="text-[68px] font-bold text-black">{slug}</h1>
        <CustomBreadCrumb links={breadcrumbLinks} />
      </div>
      <div className="max-w-content max-auto py-[40px] ">
        <div
          style={{
            width: "507px",
            height: "570px",
            backgroundImage: `url(https://gulfpalms.com/wp-content/uploads/2023/06/3-slide-img.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="relative "
        >
          <div className="text-white">
            <p>ABDALI</p>
            <p>ABDALI FARM SHOWROOM</p>
            <p>Address: Abdali - Jacob Jassim Al-Wazzan Street</p>
            <div></div>
          </div>
        </div>
      </div>
      <GetInTouch />
    </div>
  );
}
