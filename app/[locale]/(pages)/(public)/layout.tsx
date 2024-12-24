import PublicNavbar from "@/components/navbar/public-navbar/public-navbar";
import { ReactNode } from "react";
import Footer from "@/components/footer/footer";
import Image from "next/image";
import homePageImage from "../../../../assets/images/homePageImage.jpg";

async function PublicPageLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return (
    <div className="relative min-h-screen w-screen">
      {/* <div className="absolute inset-0 w-full h-full">
        <div className="block md:hidden max-w-[100vw] overflow-x-hidden">
          <Image
            src={homePageImage}
            alt="Background"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div> */}

      <div
        className="overflow-hidden inset-0"
        style={{
          padding: "56.25% 0 0 0",
          position: "relative",
          overflow: "hidden",
          height: "100%",
          width: "100vw",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10 "></div>
        <iframe
          src="https://player.vimeo.com/video/835241101?muted=1&autoplay=1&loop=1&background=1&app_id=122963"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            minWidth: "100vw",
          }}
          title="مشروع الزهرة -"
        ></iframe>
      </div>

      <div className="z-10 max-w-[100vw] md:w-[1370px] mx-auto overflow-x-hidden px-1 sm:px-4 xl:px-0">
        <PublicNavbar />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default PublicPageLayout;
