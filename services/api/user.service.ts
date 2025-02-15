import { SignInResponseModel } from "@/models/auth/signin-response.model";
import AxiosInstance, { ApiRoutes } from "../utility/api.service";
import { WpResponseModel } from "@/models/wp-response.model";
import { UserProfileModel } from "@/models/user/user-profile.model";
import { UserAsCustomer } from "@/models/user/user-as-customer";

export const UserService  = {
  async GetProfile(): Promise<UserProfileModel> {
    try {
      const response = await AxiosInstance.get<UserProfileModel>(ApiRoutes.User.Profile);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
  async GetSettings(): Promise<UserAsCustomer> {
    try {
      const response = await AxiosInstance.get<UserAsCustomer>(ApiRoutes.User.Settings);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
}
