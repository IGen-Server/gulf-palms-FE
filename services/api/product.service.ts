import { i18n } from "i18next";
import { AxiosInstance } from "axios";
import AxiosInstanceWithInterceptor, {
  ApiRoutes,
} from "../utility/api.service";
import { CustomAxiosInstance } from "../utility/axios-with-loader.service";
import { updateAxiosInstanceLoaderAndJwtChecking } from "../utility/utility.service";
import { ProductModel } from "@/models/product/product";

export const ProductService = {
  async GetById(
    productId: number,
    axiosInstance: CustomAxiosInstance,
    requiresJwt: boolean = false,
    enableLoader: boolean = true
  ): Promise<any> {
    axiosInstance = updateAxiosInstanceLoaderAndJwtChecking(
      axiosInstance,
      requiresJwt,
      enableLoader
    );

    try {
      const productsUrl = `${ApiRoutes.Product.GetById}/${productId}`;
      const response = await axiosInstance.get<any>(productsUrl);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
  async GetBySlug(
    query: Record<string, any> = {},
    axiosInstance: CustomAxiosInstance,
    requiresJwt: boolean = false,
    enableLoader: boolean = true
  ): Promise<any> {
    axiosInstance = updateAxiosInstanceLoaderAndJwtChecking(
      axiosInstance,
      requiresJwt,
      enableLoader
    );

    try {
      const queryParams = Object.keys(query).length
        ? `?${new URLSearchParams(query).toString()}`
        : "";
      const productsUrl = `${ApiRoutes.Product.GetBySlug}${queryParams}`;

      const response = await axiosInstance.get<any>(productsUrl);

      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
  async GetBySlugs(
    lang: string,
    slugs: string[],
    axiosInstance: CustomAxiosInstance,
    requiresJwt: boolean = false,
    enableLoader: boolean = true
  ): Promise<any[]> {
    if (!slugs.length) return [];

    axiosInstance = updateAxiosInstanceLoaderAndJwtChecking(
      axiosInstance,
      requiresJwt,
      enableLoader
    );

    try {
      // Map each slug to a `GetBySlug` call and await all promises
      const productArrays = await Promise.all(
        slugs.map((slug) => this.GetBySlug({ lang, slug }, axiosInstance))
      );
      console.log({ productArrays }, productArrays.flat());
      // Flatten the results since each `GetBySlug` call returns an array
      return productArrays.flat();
    } catch (error: any) {
      console.error("Error fetching products by slugs:", error);
      throw error;
    }
  },
  async Get(
    query: Record<string, any> = {},
    axiosInstance: CustomAxiosInstance
  ): Promise<any[]> {
    try {
      const queryParams = Object.keys(query).length
        ? `?${new URLSearchParams(query).toString()}`
        : "";
      const productsUrl = `${ApiRoutes.Product.Get}${queryParams}`;

      const response = await axiosInstance.get<any[]>(productsUrl);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
  async GetSuggestedProducts(
    query: Record<string, any> = {},
    axiosInstance: CustomAxiosInstance
  ): Promise<any[]> {
    try {
      const queryParams = Object.keys(query).length
        ? `?${new URLSearchParams(query).toString()}`
        : "";
      const productsUrl = `${ApiRoutes.Product.GetSuggestedProducts}${queryParams}`;

      const response = await axiosInstance.get<any[]>(productsUrl);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
};
