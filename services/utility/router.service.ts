"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export const useRouteService = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return {
    router,
    pathname,
    searchParams,
  };
};

export const ClientRoutes = {
  Admin: {
    SignIn: "/admin/sign-in",
    Overview: "/admin/overview",
  },
};
