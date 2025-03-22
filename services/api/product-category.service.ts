import { ApiRoutes } from "../utility/api.service";
import { CustomAxiosInstance } from "../utility/axios-with-loader.service";
import { CacheService } from "../utility/cache.service";
import { updateAxiosInstanceLoaderAndJwtChecking } from "../utility/utility.service";

export const ProductCategoryService  = {
  async GetById(categoryId: number, axiosInstance: CustomAxiosInstance, requiresJwt: boolean = false, enableLoader: boolean = true): Promise<any> {
    axiosInstance = updateAxiosInstanceLoaderAndJwtChecking(axiosInstance, requiresJwt, enableLoader);
    
    try {
      const productCategoryByIdUrl = `${ApiRoutes.ProductCategory.GetById}/${categoryId}`;

      const response = await axiosInstance.get<any>(productCategoryByIdUrl);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
  async Get(query: Record<string, any> = {}, axiosInstance: CustomAxiosInstance, requiresJwt: boolean = false, enableLoader: boolean = true): Promise<any[]> {
    axiosInstance = updateAxiosInstanceLoaderAndJwtChecking(axiosInstance, requiresJwt, enableLoader);
    
    try {
      const queryParams = Object.keys(query).length ? `?${new URLSearchParams(query).toString()}` : '';
      const productCategoryUrl = `${ApiRoutes.ProductCategory.Get}${queryParams}`;

      const response = await axiosInstance.get<any[]>(productCategoryUrl);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
  async GetAllCacheCategories(query: Record<string, any> = {}, axiosInstance: CustomAxiosInstance, requiresJwt: boolean = false, enableLoader: boolean = true): Promise<any[]> {
    const cacheKey = `cacheCategories:${JSON.stringify(query)}`;
    // Check if the data is in cache (first LocalStorage, then in-memory cache)
    const cachedData = CacheService.get<any[]>(cacheKey);
    if (cachedData) {
      return cachedData; // Return cached data if available
    }

    axiosInstance = updateAxiosInstanceLoaderAndJwtChecking(axiosInstance, requiresJwt, enableLoader);
    
    try {
      const queryParams = Object.keys(query).length ? `?${new URLSearchParams(query).toString()}` : '';
      const productCategoryUrl = `${ApiRoutes.ProductCategory.Get}${queryParams}`;
      const response = await axiosInstance.get<any[]>(productCategoryUrl);
      
      // Store the response data in cache with a TTL of 1 hour (3600 seconds)
      CacheService.set(cacheKey, response.data, 1000 * 60 * 60); // 1 hour TTL

      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
}
