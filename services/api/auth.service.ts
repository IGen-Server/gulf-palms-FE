import { TokenResponseModel } from "@/models/auth/token-response.model";
import { ResponseModel } from "@/models/result";
import AxiosInstance, { ApiRoutes } from "../utility/api.service";

export const signIn = async (email: string, password: string): Promise<ResponseModel<TokenResponseModel>> => {
  try {
    const response = await AxiosInstance.post<ResponseModel<TokenResponseModel>>(ApiRoutes.Auth.SignIn, {
      email: email,
      password: password
    });

    return response.data;
  } catch (error: any) {
    throw error;
  }
};
