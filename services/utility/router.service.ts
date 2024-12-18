import { usePathname, useRouter, useSearchParams } from "next/navigation";

export interface ClientRoutesModel {
  Admin: {
    SignIn: string;
    Overview: string;
    Settings: string;
  };
}

export const ClientRoutes: ClientRoutesModel = {
  Admin: {
    SignIn: "/admin/signin",
    Overview: "/admin/overview",
    Settings: "/admin/settings",
  },
};

export class RouteService {
  private router = useRouter();
  private pathname = usePathname();
  private searchParams = useSearchParams();

  constructor() {}
}
