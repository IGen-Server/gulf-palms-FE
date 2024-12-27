import PublicNavbar from "@/components/navbar/public-navbar/public-navbar";
import { ReactNode } from "react";
import Footer from "@/components/footer/footer";

function PublicPageLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return (
    <div>
      <div className="content overflow-x-hidden px-1 sm:px-4 xl:px-0 bg-white">
        <PublicNavbar />
        <div className="min-h-[1000px]">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default PublicPageLayout;
