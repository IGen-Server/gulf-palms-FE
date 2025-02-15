import { SignInResponseModel } from "@/models/auth/signin-response.model";
import { ApiRoutes } from "../utility/api.service";
import { WpResponseModel } from "@/models/wp-response.model";
import { UserProfileModel } from "@/models/user/user-profile.model";
import { UserAsCustomer } from "@/models/user/user-as-customer";
import { AxiosInstance } from "axios";

export const UserService  = {
  async GetProfile(axiosInstance: AxiosInstance): Promise<UserProfileModel> {
    try {
      const response = await axiosInstance.get<UserProfileModel>(ApiRoutes.User.Profile);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
  async GetSettings(axiosInstance: AxiosInstance): Promise<UserAsCustomer> {
    try {
      const response = await axiosInstance.get<UserAsCustomer>(ApiRoutes.User.Settings);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
}
