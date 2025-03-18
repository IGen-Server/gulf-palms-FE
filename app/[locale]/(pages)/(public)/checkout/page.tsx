"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/providers/CartProvider"
import { PaymentService } from "@/services/api/payment.service"
import { PaymentRequestModel } from "@/models/payment/payment-request.model"
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service"

export default function CheckoutPage() {
  const { cartItems, subtotal, total, shippingCost } = useCart()
  const [differentShipping, setDifferentShipping] = useState(false)
  const [termsAccepted, setTermsAccepted] = useState(false);
  const axiosInstanceWithLoader = CreateAxiosInstanceWithLoader();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    if (!termsAccepted) {
      alert("Please accept the terms and conditions")
      return
    }
    // Process checkout
    const paymentData: PaymentRequestModel = {
      products: [
        { id: 10169, quantity: 2, variation_id: 0 },
        { id: 10061, quantity: 3, variation_id: 0 }
      ],
      email: "john.doe@example.com",
      customerName: "John Doe",
      mobileNumber: "12345678",
      lang: "en",
      billing: {
        first_name: "first_name",
        last_name: "last_name",
        company: "company",
        address_1: "address_1",
        address_2: "address_2",
        city: "city",
        state: "state",
        postcode: "postcode",
        country: "country",
        email: "email@gmail.com",
        phone: "+965 1234 5678"
      },
      shipping: {
        first_name: "first_name",
        last_name: "last_name",
        company: "company",
        address_1: "address_1",
        address_2: "address_2",
        city: "city",
        state: "state",
        postcode: "postcode",
        country: "country",
        phone: "+965 1234 5678",
        email: ""
      }
    }


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
    <div className="max-w-7xl mx-auto px-4 py-8 pt-[98px] lg:pt-[120px]">
      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-8 text-sm">
        <span className="text-muted-foreground">SHOPPING CART</span>
        <span className="mx-2">→</span>
        <span className="font-semibold">CHECKOUT</span>
        <span className="mx-2">→</span>
        <span className="text-muted-foreground">ORDER COMPLETE</span>
      </div>

      {/* Coupon Notice */}
      <div className="mb-8">
        <p className="text-sm">
          Have a coupon?{" "}
          <Link href="#" className="text-primary hover:underline">
            Click here to enter your code
          </Link>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-12">
        {/* Billing Details */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">BILLING DETAILS</h2>
          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2">
                  First name <span className="text-red-500">*</span>
                </label>
                <Input required />
              </div>
              <div>
                <label className="block text-sm mb-2">
                  Last name <span className="text-red-500">*</span>
                </label>
                <Input required />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2">
                Full address <span className="text-red-500">*</span>
              </label>
              <Input required />
            </div>

            <div>
              <label className="block text-sm mb-2">
                Town / City <span className="text-red-500">*</span>
              </label>
              <Input required />
            </div>

            <div>
              <label className="block text-sm mb-2">
                Phone <span className="text-red-500">*</span>
              </label>
              <Input type="tel" required />
            </div>

            <div>
              <label className="block text-sm mb-2">
                Email address <span className="text-red-500">*</span>
              </label>
              <Input type="email" required />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="shipping"
                checked={differentShipping}
                onCheckedChange={(checked) => setDifferentShipping(checked as boolean)}
              />
              <label htmlFor="shipping" className="text-sm">
                Ship to a different address?
              </label>
            </div>

            <div>
              <label className="block text-sm mb-2">Order Notes (optional)</label>
              <Textarea placeholder="Notes about your order, e.g. special notes for delivery" />
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">YOUR ORDER</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex justify-between font-semibold mb-4">
              <span>PRODUCT</span>
              <span>SUBTOTAL</span>
            </div>

            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between py-3 border-t">
                <span className="text-sm">
                  {item.name} × {item.quantity}
                </span>
                <span className="text-sm">{item.price.toFixed(3)} KD</span>
              </div>
            ))}

            <div className="flex justify-between py-3 border-t">
              <span>Subtotal</span>
              <span>{subtotal.toFixed(3)} KD</span>
            </div>

            <div className="flex justify-between py-3 border-t">
              <span>Shipping</span>
              <span>Kuwait</span>
            </div>

            <div className="flex justify-between py-3 border-t font-semibold">
              <span>Total</span>
              <span>{total.toFixed(3)} KD</span>
            </div>

            {/* Payment Method */}
            <div className="mt-6">
              <div className="bg-white p-4 rounded border mb-4">
                <Image src="https://portal.myfatoorah.com/imgs/payment-methods/kn.png" alt="KNET Payment" width={50} height={40} className="mb-2" />
                <p className="text-sm text-muted-foreground">Checkout with My Favorite Payment Gateway</p>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                Your personal data will be used to process your order, support your experience throughout this website,
                and for other purposes described in our{" "}
                <Link href="#" className="text-primary hover:underline">
                  Privacy policy
                </Link>
                .
              </p>

              <div className="flex items-center space-x-2 mb-6">
                <Checkbox
                  id="terms"
                  checked={termsAccepted}
                  onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
                  required
                />
                <label htmlFor="terms" className="text-sm">
                  I have read and agree to the website{" "}
                  <Link href="#" className="text-primary hover:underline">
                    Terms and conditions
                  </Link>
                  <span className="text-red-500">*</span>
                </label>
              </div>

              <Button type="submit" className="w-full bg-[#F4B183] hover:bg-[#E69B62] text-white">
                PLACE ORDER
              </Button>
            </div>
          </div>
        </div>
      </form>

      {/* Delivery Details */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">DELIVERY DETAILS</h2>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>Order before 5 PM and receive your order tomorrow between 10 AM and 6 PM</p>
          <p>For orders after 5 PM your order will be delivered within 48 hours between 10 AM and 6 PM</p>
        </div>
      </div>
    </div>
  )
}

