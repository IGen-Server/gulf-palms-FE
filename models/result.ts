import { HttpStatusCode } from "axios";

export interface ResponseModel<T> {
  isSuccess: boolean;
  message: string;
  data: T;
  statusCode: HttpStatusCode;
}