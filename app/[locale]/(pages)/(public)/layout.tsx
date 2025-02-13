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
      <div className="overflow-x-hidden bg-white min-h-fit">
        <PublicNavbar />
        <div className="">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default PublicPageLayout;
