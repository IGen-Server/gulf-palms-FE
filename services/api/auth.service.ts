import { SignInResponseModel } from "@/models/auth/signin-response.model";
import { ApiRoutes } from "../utility/api.service";
import { WpResponseModel } from "@/models/wp-response.model";
import { AxiosInstance } from "axios";

export const AuthService  = {
  async SignIn(axiosInstance: AxiosInstance, email: string, password: string): Promise<WpResponseModel<SignInResponseModel>> {
    try {
      const response = await axiosInstance.post<WpResponseModel<SignInResponseModel>>(ApiRoutes.Auth.SignIn, {
        email: email,
        password: password
      });
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },

  async SignUp(axiosInstance: AxiosInstance, username: string, email: string, password: string): Promise<WpResponseModel<SignInResponseModel>> {
    try {
      const response = await axiosInstance.post<WpResponseModel<SignInResponseModel>>(ApiRoutes.Auth.SignUp, {
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
