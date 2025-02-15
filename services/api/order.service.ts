import { AxiosInstance } from "axios";
import { ApiRoutes } from "../utility/api.service";

export const OrderService  = {
  async Get(axiosInstance: AxiosInstance, query: Record<string, any> = {}): Promise<any> {
    try {
      const queryParams = Object.keys(query).length ? `?${new URLSearchParams(query).toString()}` : '';
      const ordersUrl = `${ApiRoutes.Order.Get}${queryParams}`;

      const response = await axiosInstance.get<any>(ordersUrl);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
}
