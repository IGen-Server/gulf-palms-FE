import { SignInResponseModel } from "@/models/auth/signin-response.model";
import AxiosInstance, { ApiRoutes } from "../utility/api.service";
import { WpResponseModel } from "@/models/wp-response.model";
import { UserProfileModel } from "@/models/user/user-profile.model";

export const UserService  = {
  async GetProfile(): Promise<UserProfileModel> {
    try {
      const response = await AxiosInstance.get<UserProfileModel>(ApiRoutes.User.Profile);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
}
