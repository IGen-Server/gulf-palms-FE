import { ReactNode } from "react";
import Footer from "@/components/footer/footer";
import UserNavbar from "@/components/navbar/user-navbar/user-navbar";

async function UserPageFullLayout({ children, params: { locale } }: { children: ReactNode, params: { locale: string } }) {
  return (
    <>
      <div className="mx-4 md:mx-6">
        <UserNavbar />
        {children}
      </div>
      <SectionGap />
      <Footer />
    </>
  );
}

function SectionGap() {
  return (<span className="my-5 border border-transparent"></span>);
}

export default UserPageFullLayout;
