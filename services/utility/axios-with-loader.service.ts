import { useLoading } from "@/providers/LoadingProvider";
import axios, { AxiosInstance } from "axios";
import { CookieStorageService } from "./storage.service";
import { ApiBaseUrl, ApiMaxTimeOut } from "@/constants/url.constant";

export interface CustomAxiosInstance extends AxiosInstance {
  setRequiresJwt: (value: boolean) => void;
  setEnableLoader: (value: boolean) => void;
}

const CreateAxiosInstanceWithLoader = (initialRequiresJwt: boolean = false, initialLoaderEnable: boolean = true): CustomAxiosInstance => {
  const { startLoading, stopLoading } = useLoading();
  let requiresJwt = initialRequiresJwt;
  let enableLoader = initialLoaderEnable;

  const AxiosInstance = axios.create({
    baseURL: ApiBaseUrl,
    timeout: +ApiMaxTimeOut || 10000,
  }) as CustomAxiosInstance; // Cast to custom type

  // Add request interceptor
  AxiosInstance.interceptors.request.use(
    (config) => {
      // Start loader
      if (enableLoader) {
        startLoading();
      }

      // Add authorization token if available
      const token = CookieStorageService.getAccessToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      } else {
        if (requiresJwt) {
          return Promise.reject();
        }
      }
      return config;
    },
    (error) => {
      if (enableLoader) {
        stopLoading(); // Stop loader on request error
      }
      return Promise.reject(error);
    }
  );

  // Add response interceptor
  AxiosInstance.interceptors.response.use(
    (response) => {
      if (enableLoader) {
        stopLoading(); // Stop loader on successful response
      }
      return response;
    },
    (error) => {
      if (enableLoader) {
        stopLoading(); // Stop loader on error
      }

      if (error.response) {
        if (error.response.status === 401) {
          console.log("Unauthorized. Redirecting to login...");
          // window.location.href = ClientRoutes.User.MyAccount;
        } else if (error.response.status === 403) {
          console.log("Forbidden access.");
          // window.location.href = ClientRoutes.Home;
        } else {
          console.error("API Error (interceptor):", error.response.data.message || error.message);
        }
      } else {
        console.error("Network Error (interceptor):", error.message);
      }

      return Promise.reject(error);
    }
  );

  // Method to update requiresJwt dynamically
  AxiosInstance.setRequiresJwt = (value: boolean) => {
    requiresJwt = value;
  };

  // Method to update enableLoader dynamically
  AxiosInstance.setEnableLoader = (value: boolean) => {
    enableLoader = value;
  };

  return AxiosInstance;
};

export default CreateAxiosInstanceWithLoader;
