import PublicNavbar from "@/components/navbar/public-navbar/public-navbar";
import { ReactNode } from "react";
import Footer from "@/components/footer/footer";

async function PublicPageLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <div className="">
        <PublicNavbar />
        {children}
      </div>
      <SectionGap />
      <Footer />
    </>
  );
}

function SectionGap() {
  return <span className="my-5 border border-transparent"></span>;
}

export default PublicPageLayout;
