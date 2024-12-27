import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";
import GetInTouch from "@/components/common/GetInTouch";

export default async function PropertyDetails({
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
    { name: "Projects", href: "/projects" },
    { name: `${slug}`, href: `/projects/${slug}` },
  ];
  return (
    <div className="pt-[98px]">
      <div className="flex flex-col items-center pb-[200px] pt-[50px]">
        <h1 className="text-[36px] font-bold text-black">Projects</h1>
        <CustomBreadCrumb links={breadcrumbLinks} />
      </div>
      <div className="lg:h-[850px] w-screen bg-gray-100 pb-[80px]">
        <div className="w-full border h-full mx-auto flex items-center lg:flex-row flex-col">
          <div className="h-full w-full p-[100px]">
            <p className="pb-12">{slug}</p>
            <p className="text-[24px] pl-[100px] py-5 border-t-2 border-black text-black">
              <span className="font-semibold pr-12">01</span>
              <span>
                <span className="font-semibold">Stakeholder</span>: Dana Al Haid
              </span>
            </p>
            <p className="text-[24px] pl-[100px] py-5 border-t-2 border-black text-black">
              <span className="font-semibold pr-12">03</span>
              <span>
                <span className="font-semibold">Location</span>: Khaled Complex,
                Salmiya Area
              </span>
            </p>
            <p className="text-[24px] pl-[100px] py-5 border-t-2 border-black text-black">
              <span className="font-semibold pr-12">02</span>
              <span>
                <span className="font-semibold">Project Type</span>: ndoor
                Plants and Pots
              </span>
            </p>
            <p className="text-[24px] pl-[100px] py-5 border-t-2 border-black text-black">
              <span className="font-semibold pr-12">04</span>
              <span>
                <span className="font-semibold">Design By</span>: Gulf Palms
              </span>
            </p>
            <p className="text-[24px] pl-[100px] py-5 border-t-2 border-black text-black">
              <span className="font-semibold pr-12">05</span>
              <span>
                <span className="font-semibold">Implementation By</span>: Gulf
                Palms
              </span>
            </p>
            <p className="text-[24px] pl-[100px] py-5 border-t-2 border-black text-black">
              <span className="font-semibold pr-12">07</span>
              <span>
                <span className="font-semibold">Size</span>: 100 m²
              </span>
            </p>
            <p className="text-[24px] pl-[100px] py-5 border-t-2 border-black text-black">
              <span className="font-semibold pr-12">08</span>
              <span>
                <span className="font-semibold">Duration</span>: 2 Days
              </span>
            </p>
          </div>
          <div
            className="h-full w-full"
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(https://gulfpalms.com/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-18-at-4.34.09-PM-2.jpeg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
      <GetInTouch />
    </div>
  );
}
