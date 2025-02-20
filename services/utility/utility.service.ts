import { AxiosInstance } from "axios";
import AxiosInstanceWithInterceptor from "./api.service";
import { CookieStorageService } from "./storage.service";
import { CustomAxiosInstance } from "./axios-with-loader.service";
import { ClientRoutes } from "./router.service";

export function getNameInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export function getTotalQuantity(lineItems: any[] | null | undefined): number {
  // Return 0 if lineItems is null, undefined, or an empty array
  if (!lineItems || lineItems.length === 0) {
      return 0;
  }

  // Sum up the quantities if lineItems is valid
  return lineItems.reduce((total, item) => total + (item.quantity || 0), 0);
}

export function onLogout(e:any) {
  e.preventDefault();
  CookieStorageService.clearAllTokens();
  window.location.href = ClientRoutes.User.MyAccountDashboard;
}

export function updateAxiosInstanceLoaderAndJwtChecking(axiosInstance: CustomAxiosInstance, requiresJwt: boolean = false, enableLoader: boolean = true) {
  if (requiresJwt === true) {
    axiosInstance.setRequiresJwt(true);
  }
  if (enableLoader === false) {
    axiosInstance.setEnableLoader(false);
  }
  return axiosInstance;
}
