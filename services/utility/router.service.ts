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
  Home: "/",
  User: {
    MyAccountDashboard: "/my-account",
    MyAccountOrders: "/my-account/orders",
  },
  Admin: {
    SignIn: "/admin/sign-in",
    Overview: "/admin/overview",
  },
};

export class RouteService {
  private router = useRouter();
  private pathname = usePathname();
  private searchParams = useSearchParams();
  // private langCodes: string[] = getLanguageCodesAsArray();

  constructor() {}

  public getFullUrl(): string {
    return `${this.pathname}${
      this.searchParams.toString().length > 0
        ? `?${this.searchParams.toString()}`
        : ""
    }`;
  }

  // public changeRouteLocale(locale: string): void {
  //   const fullUrl = this.getFullUrl();
  //   const match = fullUrl.match(/^\/([^\/?]+)/);
  //   const firstPathSegment = match ? match[1] : "";
  //   const isLangCodeMatch = this.langCodes.includes(firstPathSegment);
  //   const newUrl = fullUrl.replace(
  //     isLangCodeMatch ? `/${firstPathSegment}` : "",
  //     ""
  //   );
  //   const redirectPathWithLocale = `/${locale}${newUrl}`;
  //   this.router.push(redirectPathWithLocale);
  // }

  public redirectTo(path: string, refresh: boolean = false): void {
    if (refresh) this.router.refresh();
    this.router.push(path);
  }
  public refresh(): void {
    this.router.refresh();
  }
}
