import { SignInResponseModel } from "@/models/auth/signin-response.model";
import AxiosInstance, { ApiRoutes } from "../utility/api.service";
import { WpResponseModel } from "@/models/wp-response.model";

export const AuthService  = {
  async SignIn(email: string, password: string): Promise<WpResponseModel<SignInResponseModel>> {
    try {
      const response = await AxiosInstance.post<WpResponseModel<SignInResponseModel>>(ApiRoutes.Auth.SignIn, {
        email: email,
        password: password
      });
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },

  async SignUp(username: string, email: string, password: string): Promise<WpResponseModel<SignInResponseModel>> {
    try {
      const response = await AxiosInstance.post<WpResponseModel<SignInResponseModel>>(ApiRoutes.Auth.SignUp, {
        username: username,
        email: email,
        password: password
      });
      return response.data;
    } catch (error: any) {
      throw error;
    }
  }
}
