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
      <div className="max-w-content max-auto py-[40px] flex items-center justify-center overflow-hidden">
        <div
          style={{
            width: "507px",
            height: "570px",
            backgroundImage: `url(https://gulfpalms.com/wp-content/uploads/2023/06/3-slide-img.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="relative"
        >
          <div className="text-white ">
            <p>ABDALI</p>
            <p>ABDALI FARM SHOWROOM</p>
            <p>Address: Abdali - Jacob Jassim Al-Wazzan Street</p>
            <div></div>
          </div>
        </div>
        <div className="w-1/2">
          <iframe
            loading="lazy"
            width=""
            height="508"
            src="https://maps.google.com/maps?q=%D8%B4%D8%B1%D9%83%D8%A9%20%D8%A7%D9%84%D9%86%D8%AE%D9%8A%D9%84%20%D8%A7%D9%84%D9%86%D8%B3%D9%8A%D8%AC%D9%8A%20%D8%A7%D9%84%D8%B9%D8%A8%D8%AF%D9%84%D9%8A%202Q6Q%2BRVW%2C%20Yaqoub%20Jassim%20Alwazzan%20St%2C%20Abdali%2C%20Kuwait&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
            title="شركة النخيل النسيجي العبدلي 2Q6Q+RVW, Yaqoub Jassim Alwazzan St, Abdali, Kuwait"
            aria-label="شركة النخيل النسيجي العبدلي 2Q6Q+RVW, Yaqoub Jassim Alwazzan St, Abdali, Kuwait"
            style={{
              width: "555.73px",
              height: "568px",
            }}
          ></iframe>
        </div>
      </div>
      <GetInTouch />
    </div>
  );
}
