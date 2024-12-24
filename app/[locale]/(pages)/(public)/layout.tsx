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
        <div className="absolute inset-0 bg-black bg-opacity-50 z-[1] "></div>
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

      <div className="flex-grow z-20 overflow-x-hidden px-1 sm:px-4 xl:px-0 bg-white">
        <PublicNavbar />
        <div className="min-h-[1000px]">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default PublicPageLayout;
