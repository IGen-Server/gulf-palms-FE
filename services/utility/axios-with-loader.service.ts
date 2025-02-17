import { useLoading } from "@/providers/LoadingProvider";
import axios from "axios";
import { CookieStorageService } from "./storage.service";
import { ApiBaseUrl, ApiMaxTimeOut } from "@/constants/url.constant";
import { ClientRoutes } from "./router.service";

export const CreateAxiosInstanceWithLoader = () => {
  const { startLoading, stopLoading } = useLoading();

  const AxiosInstance = axios.create({
    baseURL: ApiBaseUrl,
    timeout: +ApiMaxTimeOut || 10000,
  });

  // Add request interceptor
  AxiosInstance.interceptors.request.use(
    (config) => {
      // Start loader
      startLoading();

      // Add authorization token if available
      const token = CookieStorageService.getAccessToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      stopLoading(); // Stop loader on request error
      return Promise.reject(error);
    }
  );

  // Add response interceptor
  AxiosInstance.interceptors.response.use(
    (response) => {
      stopLoading(); // Stop loader on successful response
      return response;
    },
    (error) => {
      stopLoading(); // Stop loader on error

      // Handle errors based on status codes
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

  return AxiosInstance;
};

export default CreateAxiosInstanceWithLoader;
