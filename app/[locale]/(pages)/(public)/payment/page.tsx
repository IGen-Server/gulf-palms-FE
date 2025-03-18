'use client'

import { Button } from '@/components/ui/button'
import { PaymentRequestModel } from '@/models/payment/payment-request.model';
import { useCart } from '@/providers/CartProvider';
import { PaymentService } from '@/services/api/payment.service';
import CreateAxiosInstanceWithLoader from '@/services/utility/axios-with-loader.service';

export default function PaymentPage() {
  const axiosInstanceWithLoader = CreateAxiosInstanceWithLoader();
  const axiosInstanceWithoutLoader = CreateAxiosInstanceWithLoader(false, false);
  const { cartItems, subtotal, total, shippingCost } = useCart()


  function paymentTest() {
    const paymentData: PaymentRequestModel = {
      products: cartItems.map((product) => {
        return ({ id: product.id as number, quantity: product.quantity })
      }),
      email: 'john.doe@example.com',
      customerName: 'John Doe',
      mobileNumber: '12345678',
      address: '123 Street, City, Country',
      lang: 'en',
    };

    PaymentService.Pay(paymentData, axiosInstanceWithLoader)
      .then(response => {
        console.log(response.Data.PaymentURL);
        if (response?.Data?.PaymentURL) {
          // Redirect to MyFatoorah payment page
          window.location.href = response.Data.PaymentURL;
        } else {
          console.error('Payment URL not found in response', response);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div className='h-60 bg-gray-500 mt-24 text-white text-4xl text-center'>
      <h1>Payment Page</h1>

      <Button onClick={paymentTest}>Pay</Button>
    </div>
  )
}
