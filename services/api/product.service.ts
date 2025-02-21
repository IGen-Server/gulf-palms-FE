import { AxiosInstance } from "axios";
import AxiosInstanceWithInterceptor, { ApiRoutes } from "../utility/api.service";
import { CustomAxiosInstance } from "../utility/axios-with-loader.service";
import { updateAxiosInstanceLoaderAndJwtChecking } from "../utility/utility.service";
import { ProductModel } from "@/models/product/product";

export const ProductService  = {
  async Get(query: Record<string, any> = {}, axiosInstance: CustomAxiosInstance, requiresJwt: boolean = false, enableLoader: boolean = true): Promise<any[]> {
    axiosInstance = updateAxiosInstanceLoaderAndJwtChecking(axiosInstance, requiresJwt, enableLoader);
    
    try {
      const queryParams = Object.keys(query).length ? `?${new URLSearchParams(query).toString()}` : '';
      const productsUrl = `${ApiRoutes.Product.Get}${queryParams}`;

      const response = await axiosInstance.get<any[]>(productsUrl);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
  async GetSuggestedProducts(query: Record<string, any> = {}, axiosInstance: CustomAxiosInstance, requiresJwt: boolean = false, enableLoader: boolean = true): Promise<any[]> {
    axiosInstance = updateAxiosInstanceLoaderAndJwtChecking(axiosInstance, requiresJwt, enableLoader);
    
    try {
      const queryParams = Object.keys(query).length ? `?${new URLSearchParams(query).toString()}` : '';
      const productsUrl = `${ApiRoutes.Product.GetSuggestedProducts}${queryParams}`;

      const response = await axiosInstance.get<any[]>(productsUrl);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
}
