import { SignInResponseModel } from "@/models/auth/signin-response.model";
import AxiosInstanceWithInterceptor, { ApiRoutes } from "../utility/api.service";
import { WpResponseModel } from "@/models/wp-response.model";
import { AxiosInstance } from "axios";

export interface ContactFormData {
  yourName: string;
  yourEmail: string;
  tel767: string;
  text1: string;
  yourMessage: string;
  // wpcf7?: string;
  // wpcf7Version?: string;
  // wpcf7Locale?: string;
  // wpcf7UnitTag?: string;
  // wpcf7ContainerPost?: string;
}

export const ContactService  = {
  async Save(contactFormData: ContactFormData, axiosInstance: AxiosInstance = AxiosInstanceWithInterceptor): Promise<WpResponseModel<SignInResponseModel>> {
    try {
      const response = await axiosInstance.post<any>(ApiRoutes.Contact.Save, contactFormData);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  }
}
