import { SignInResponseModel } from "@/models/auth/signin-response.model";
import AxiosInstanceWithInterceptor, { ApiRoutes } from "../utility/api.service";
import { WpResponseModel } from "@/models/wp-response.model";
import { AxiosInstance } from "axios";

export const AuthService  = {
  async SignIn(email: string, password: string, axiosInstance: AxiosInstance = AxiosInstanceWithInterceptor): Promise<WpResponseModel<SignInResponseModel>> {
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

  async SignUp(username: string, email: string, password: string, lang: string, axiosInstance: AxiosInstance = AxiosInstanceWithInterceptor): Promise<any> {
    try {
      const response = await axiosInstance.post<any>(ApiRoutes.Auth.SignUp, {
        username: username,
        email: email,
        password: password,
        lang: lang
      });
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },

  async GetRecoverPasswordLinkInEmail(emailOrUsername: string, lang: string, axiosInstance: AxiosInstance = AxiosInstanceWithInterceptor): Promise<any> {
    try {
      const response = await axiosInstance.post<any>(ApiRoutes.Auth.GetRecoveryEmail, {
        emailOrUsername: emailOrUsername,
        lang: lang
      });
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },

  async VerifyRecoveryToken(token: string, lang: string, axiosInstance: AxiosInstance = AxiosInstanceWithInterceptor): Promise<any> {
    try {
      const response = await axiosInstance.post<any>(ApiRoutes.Auth.VerifyRecoveryToken, {
        token: token,
        lang: lang
      });
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },

  async ResetPassword(password: string, confirmPassword: string, token: string, lang: string, axiosInstance: AxiosInstance = AxiosInstanceWithInterceptor): Promise<any> {
    try {
      const response = await axiosInstance.post<any>(ApiRoutes.Auth.ResetPassword, {
        password,
        confirmPassword,
        token,
        lang
      });
      return response.data;
    } catch (error: any) {
      throw error;
    }
  }
}
