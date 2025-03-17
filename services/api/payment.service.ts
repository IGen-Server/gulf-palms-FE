import { AxiosInstance } from "axios";
import AxiosInstanceWithInterceptor, { ApiRoutes } from "../utility/api.service";
import { CustomAxiosInstance } from "../utility/axios-with-loader.service";
import { updateAxiosInstanceLoaderAndJwtChecking } from "../utility/utility.service";
import { PaymentRequestModel } from "@/models/payment/payment-request.model";

export const PaymentService  = {
  async Pay(paymentRequestModel: PaymentRequestModel, axiosInstance: CustomAxiosInstance, requiresJwt: boolean = false, enableLoader: boolean = true): Promise<any> {
    axiosInstance = updateAxiosInstanceLoaderAndJwtChecking(axiosInstance, requiresJwt, enableLoader);
    
    try {
      const response = await axiosInstance.post<any>(ApiRoutes.Payment.Pay, paymentRequestModel);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  }

}