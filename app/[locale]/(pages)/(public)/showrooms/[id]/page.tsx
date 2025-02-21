/* eslint-disable @next/next/no-img-element */
import GetInTouch from "@/components/common/GetInTouch"
import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb"
import { Button } from "@/components/ui/button"

export default async function ShowroomDetails({
  params,
}: {
  params: Promise<{
    id: any
    slug: string
  }>
}) {
  const slug = (await params).id
  const breadcrumbLinks = [
    { name: "Home", href: "/" },
    { name: "Showrooms", href: "/showrooms" },
    {
      name: slug,
      href: "/",
    },
  ]

  return (
    <div className="pt-[98px] w-full mx-auto flex flex-col items-center">
      <div className="flex flex-col items-center pt-[50px] pb-[40px]">
        <h1 className="text-[68px] font-bold text-black capitalize">{slug}</h1>
        <CustomBreadCrumb links={breadcrumbLinks} />
      </div>
      <div className="w-full max-w-[1200px] mx-auto flex items-stretch justify-center gap-0 overflow-hidden">
        <div
          style={{
            width: "507px",
            height: "570px",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://gulfpalms.com/wp-content/uploads/2023/06/3-slide-img.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="relative flex flex-col items-center justify-center text-center px-8"
        >
          <div className="text-white space-y-4">
            <h2 className="text-5xl font-bold mb-4">ABDALI</h2>
            <h3 className="text-3xl font-semibold mb-8">ABDALI FARM SHOWROOM</h3>
            <p className="text-lg mb-12">Address: Abdali - Jacob Jassim Al-Wazzan Street</p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" className="bg-gray-200/20 hover:bg-gray-200/30 text-white border-white">
                CONTACT US
              </Button>
              <Button variant="outline" className="bg-gray-200/20 hover:bg-gray-200/30 text-white border-white">
                OUR LOCATION
              </Button>
            </div>
          </div>
          <img
            src="https://gulfpalms.com/wp-content/uploads/2023/06/logo-white.png"
            alt="Gulf Palms Logo"
            className="absolute bottom-8 w-32"
          />
        </div>
        <div className="w-[555.73px] h-[570px]">
          <iframe
            loading="lazy"
            width="100%"
            height="100%"
            src="https://maps.google.com/maps?q=%D8%B4%D8%B1%D9%83%D8%A9%20%D8%A7%D9%84%D9%86%D8%AE%D9%8A%D9%84%20%D8%A7%D9%84%D9%86%D8%B3%D9%8A%D8%AC%D9%8A%20%D8%A7%D9%84%D8%B9%D8%A8%D8%AF%D9%84%D9%8A%202Q6Q%2BRVW%2C%20Yaqoub%20Jassim%20Alwazzan%20St%2C%20Abdali%2C%20Kuwait&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
            title="شركة النخيل النسيجي العبدلي 2Q6Q+RVW, Yaqoub Jassim Alwazzan St, Abdali, Kuwait"
            aria-label="شركة النخيل النسيجي العبدلي 2Q6Q+RVW, Yaqoub Jassim Alwazzan St, Abdali, Kuwait"
          ></iframe>
        </div>
      </div>
      <GetInTouch />
    </div>
  )
}

