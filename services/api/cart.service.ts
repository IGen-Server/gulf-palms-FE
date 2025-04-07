import { SignInResponseModel } from "@/models/auth/signin-response.model";
import AxiosInstanceWithInterceptor, { ApiRoutes } from "../utility/api.service";
import { WpResponseModel } from "@/models/wp-response.model";
import { UserProfileModel } from "@/models/user/user-profile.model";
import { UserAsCustomer } from "@/models/user/user-as-customer";
import { AxiosInstance } from "axios";
import { CookieStorageService } from "../utility/storage.service";
import { CART_NONCE_KEY, CART_TOKEN_KEY } from "@/constants/global-constants";

export const CartService  = {
  async GetCartItems(axiosInstance: AxiosInstance = AxiosInstanceWithInterceptor): Promise<any> {
    try {
      const response = await axiosInstance.get<any>(ApiRoutes.Cart.GetAllItems);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
  async AddCartItem(productId: number, quantity: number, axiosInstance: AxiosInstance = AxiosInstanceWithInterceptor): Promise<any> {
    try {
      const XWCStoreAPINonce = CookieStorageService.get(CART_NONCE_KEY);
      const CartToken = CookieStorageService.get(CART_TOKEN_KEY);

      const response = await axiosInstance.post<any>(ApiRoutes.Cart.AddCartItem, {
        productId: productId,
        quantity: quantity,
        XWCStoreAPINonce: XWCStoreAPINonce,
        CartToken: CartToken
      });
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
  async UpdateCartItem(productId: number, quantity: number, axiosInstance: AxiosInstance = AxiosInstanceWithInterceptor): Promise<any> {
    try {
      const XWCStoreAPINonce = CookieStorageService.get(CART_NONCE_KEY);
      const CartToken = CookieStorageService.get(CART_TOKEN_KEY);

      const response = await axiosInstance.post<any>(ApiRoutes.Cart.UpdateCartItem, {
        productId: productId,
        quantity: quantity,
        XWCStoreAPINonce: XWCStoreAPINonce,
        CartToken: CartToken
      });
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
  async DeleteCartItem(productId: number, axiosInstance: AxiosInstance = AxiosInstanceWithInterceptor): Promise<any> {
    try {
      const XWCStoreAPINonce = CookieStorageService.get(CART_NONCE_KEY);
      const CartToken = CookieStorageService.get(CART_TOKEN_KEY);

      const response = await axiosInstance.post<any>(ApiRoutes.Cart.DeleteCartItem, {
        productId: productId,
        XWCStoreAPINonce: XWCStoreAPINonce,
        CartToken: CartToken
      });
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
}
