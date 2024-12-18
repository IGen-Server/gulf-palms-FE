import { ReactNode } from "react";

async function UserPageLayout({ children, params: { locale } }: { children: ReactNode, params: { locale: string } }) {
  return (
    <>
      {children}
    </>
  );
}

export default UserPageLayout;
