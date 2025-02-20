import { SignInResponseModel } from "@/models/auth/signin-response.model";
import AxiosInstanceWithInterceptor, { ApiRoutes } from "../utility/api.service";
import { WpResponseModel } from "@/models/wp-response.model";
import { UserProfileModel } from "@/models/user/user-profile.model";
import { UserAsCustomer } from "@/models/user/user-as-customer";
import { AxiosInstance } from "axios";

export const UserService  = {
  async GetProfile(axiosInstance: AxiosInstance = AxiosInstanceWithInterceptor): Promise<UserProfileModel> {
    try {
      const response = await axiosInstance.get<UserProfileModel>(ApiRoutes.User.Profile);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
  async GetFullProfile(axiosInstance: AxiosInstance = AxiosInstanceWithInterceptor): Promise<UserProfileModel> {
    try {
      const response = await axiosInstance.post<UserProfileModel>(ApiRoutes.User.Profile);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
  async SetProfile(body: any, axiosInstance: AxiosInstance = AxiosInstanceWithInterceptor): Promise<UserProfileModel> {
    try {
      const response = await axiosInstance.post<UserProfileModel>(ApiRoutes.User.Profile, body);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
  async GetSettings(axiosInstance: AxiosInstance = AxiosInstanceWithInterceptor): Promise<UserAsCustomer> {
    try {
      const response = await axiosInstance.get<UserAsCustomer>(ApiRoutes.User.Settings);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
  async SetSettings(body: any, axiosInstance: AxiosInstance = AxiosInstanceWithInterceptor): Promise<UserAsCustomer> {
    try {
      const response = await axiosInstance.post<UserAsCustomer>(ApiRoutes.User.Settings, body);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
}
