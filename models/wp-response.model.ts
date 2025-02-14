export interface WpResponseModel<T> {
  success: boolean;
  data: T;
  error?: { wpErrorCode?: string; };
}
