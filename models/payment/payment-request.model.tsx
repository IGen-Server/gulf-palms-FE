interface PaymentProduct {
  id: number;
  quantity: number;
}

export interface PaymentRequestModel {
  products: PaymentProduct[];
  email: string;
  customerName: string;
  mobileNumber: string;
  address: string;
  lang: 'en' | 'ar';
}

export interface ExistingPaymentRequestModel {
  orderId: number;
  lang: 'en' | 'ar';
}
