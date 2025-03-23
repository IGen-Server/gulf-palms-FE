import { i18n } from "i18next";
import { AxiosInstance } from "axios";
import AxiosInstanceWithInterceptor, {
  ApiRoutes,
} from "../utility/api.service";
import { CustomAxiosInstance } from "../utility/axios-with-loader.service";
import { updateAxiosInstanceLoaderAndJwtChecking } from "../utility/utility.service";
import { ProductModel } from "@/models/product/product";
import { CacheService } from "../utility/cache.service";

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

      // Flatten the results since each `GetBySlug` call returns an array
      return productArrays.flat();
    } catch (error: any) {
      console.error("Error fetching products by slugs:", error);
      throw error;
    }
  },
  async Get(query: Record<string, any> = {}, axiosInstance: CustomAxiosInstance, useCaching: boolean = false): Promise<any[]> {
    const cacheKey = `cacheGetProducts:${JSON.stringify(query)}`;
    // Check if the data is in cache (first LocalStorage, then in-memory cache)
    const cachedData = CacheService.get<any[]>(cacheKey);
    if (cachedData) {
      return cachedData; // Return cached data if available
    }

    try {
      const queryParams = Object.keys(query).length ? `?${new URLSearchParams(query).toString()}` : "";
      const productsUrl = `${ApiRoutes.Product.Get}${queryParams}`;
      const response = await axiosInstance.get<any[]>(productsUrl);

      // Store the response data in cache with a TTL of 1 hour (3600 seconds)
      CacheService.set(cacheKey, response.data, 1000 * 60 * 60); // 1 hour TTL

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
  async GetVariant(variantId: number, axiosInstance: CustomAxiosInstance): Promise<any> {
    try {
      const variantUrl = `${ApiRoutes.Product.GetVariant}/${variantId}`;
      const response = await axiosInstance.get<any>(variantUrl);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
  async GetFrequentlyBoughtTogether(productId: number, axiosInstance: CustomAxiosInstance): Promise<any[]> {
    try {
      const frequentlyBoughtTogetherProductsUrl = `${ApiRoutes.Product.GetFrequentlyBoughtTogether}/${productId}`;
      const response = await axiosInstance.get<any[]>(frequentlyBoughtTogetherProductsUrl);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
};
