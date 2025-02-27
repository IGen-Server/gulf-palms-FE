/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import GetInTouch from "@/components/common/GetInTouch";
import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";
import { onLogout } from "@/services/utility/utility.service";
import { UserDataProvider, useUserData } from "@/providers/UserDataProvider";

const breadcrumbLinks = [
  { name: "Home", href: "/" },
  { name: "My account", href: "/my-account" },
];

export default function AccountLayout({ children }: { children: React.ReactElement; }) {
  return (
    <UserDataProvider>
      <AccountLayoutComponent>
        {children}
      </AccountLayoutComponent>
    </UserDataProvider>
  );
}

function AccountLayoutComponent({ children }: { children: React.ReactElement; }) {
  const { user } = useUserData();

  return (<div className="pt-[98px] ">
    {user ? (
      <div>
        <div className="flex flex-col items-center py-[50px]">
          <h1 className="text-[36px] font-bold text-black">My account</h1>
          <CustomBreadCrumb links={breadcrumbLinks} />
        </div>
        <div className="flex min-h-screen flex-col md:flex-row font-sans !text-[rgb(36,36,36)] max-w-[1192px] mx-auto">
          <aside className="w-full border-b md:w-64 md:border-b-0 md:border-r">
            <nav className="p-4">
              <h1 className="mb-6 text-[18px] font-[600] pl-2">MY ACCOUNT</h1>
              <div className="space-y-2">
                <NavLink href="/my-account" exact>
                  Dashboard
                </NavLink>
                <NavLink href="/my-account/orders">Orders</NavLink>
                <NavLink href="/my-account/downloads">Downloads</NavLink>
                <NavLink href="/my-account/edit-address">Addresses</NavLink>
                <NavLink href="/my-account/account-details">
                  Account details
                </NavLink>
                <NavLink href="">
                  <span onClick={onLogout}>Logout</span>
                </NavLink>
              </div>
            </nav>
          </aside>
          <main className="flex-1 p-6">
            {children}
            {/* {(() => {
              switch (pathname.split('/').filter(Boolean).pop()) {
                case ClientRoutes.User.MyAccountOrders.split('/').filter(Boolean).pop():
                  return <OrdersPage orders={orders} refreshOrders={getOrders} />;
                default:
                  return children;
              }
            })()} */}
          </main>
        </div>
      </div>
    ) : (
      <div className="max-w-[1192px] mx-auto">
        <div className="flex flex-col items-center py-[50px]">
          <h1 className="text-[36px] font-bold text-black">My account</h1>
          <CustomBreadCrumb links={breadcrumbLinks} />
        </div>
        <div className="pb-[80px]">{children}</div>
      </div>
    )}
    <GetInTouch />
  </div>);
}

function NavLink({
  href,
  children,
  exact = false,
}: {
  href: string;
  children: React.ReactNode;
  exact?: boolean;
}) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname?.startsWith(href);

  return (
    <Link
      href={href}
      className={`block rounded-none p-2 text-sm font-[600] ${isActive ? "!text-[#242424]" : "!text-[#242424] hover:bg-muted"
        }`}
    >
      {children}
    </Link>
  );
}
