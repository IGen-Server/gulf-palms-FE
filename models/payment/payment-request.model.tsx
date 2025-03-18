interface PaymentProduct {
  id: number;
  quantity: number;
  variation_id: number;
}

export interface PaymentRequestModel {
  products: PaymentProduct[];
  email: string;
  customerName: string;
  mobileNumber: string;
  lang: 'en' | 'ar';
  billing: BillingShippingInfo;
  shipping: BillingShippingInfo;
}

export interface BillingShippingInfo {
  first_name: string;
  last_name: string;
  company: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  email: string;
  phone: string;
}

export interface PaymentRequestModelForExistingOrder {
  orderId: number;
  lang: string;
}
