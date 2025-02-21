import { ApiRoutes } from "../utility/api.service";
import { CustomAxiosInstance } from "../utility/axios-with-loader.service";
import { updateAxiosInstanceLoaderAndJwtChecking } from "../utility/utility.service";


export const ProductCategoryService  = {
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
}
