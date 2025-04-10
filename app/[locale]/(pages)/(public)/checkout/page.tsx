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
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useUserDataProvider } from "@/providers/UserDataProvider"
import { useTranslation } from "react-i18next"

const billingFormSchema = z.object({
  // Existing billing fields
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  differentShipping: z.boolean().default(false),
  // Add shipping fields
  shippingFirstName: z.string().optional(),
  shippingLastName: z.string().optional(),
  shippingAddress: z.string().optional(),
  shippingCity: z.string().optional(),
  shippingPhone: z.string().optional(),
  shippingEmail: z.string().email("Invalid email address").optional(),
  notes: z.string().optional(),
}).refine((data) => {
  // Add validation when differentShipping is true
  if (data.differentShipping) {
    return (
      !!data.shippingFirstName &&
      !!data.shippingLastName &&
      !!data.shippingAddress &&
      !!data.shippingCity &&
      !!data.shippingPhone &&
      !!data.shippingEmail
    );
  }
  return true;
}, {
  message: "All shipping fields are required when shipping to a different address",
  path: ["shippingFirstName"]
});

type BillingFormValues = z.infer<typeof billingFormSchema>

export default function CheckoutPage() {
  const { cartItems, subtotal, total, shippingCost } = useCart()
  const [differentShipping, setDifferentShipping] = useState(false)
  const [termsAccepted, setTermsAccepted] = useState(false);
  const axiosInstanceWithLoader = CreateAxiosInstanceWithLoader();
  const { user } = useUserDataProvider();
  const { t, i18n: { language } } = useTranslation("common");

  console.log(user)
  const form = useForm<BillingFormValues>({
    // resolver: zodResolver(billingFormSchema),
    defaultValues: {
      // Existing billing fields
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      phone: "",
      email: "",
      differentShipping: false,
      // Add shipping fields
      shippingFirstName: "",
      shippingLastName: "",
      shippingAddress: "",
      shippingCity: "",
      shippingPhone: "",
      shippingEmail: "",
      notes: "",
    },
  })

  const handleSubmit = (values: BillingFormValues) => {
    // Handle form submission
    if (!termsAccepted) {
      alert("Please accept the terms and conditions")
      return
    }
    // Process checkout
    const paymentData: PaymentRequestModel = {
      products: cartItems.map((item) => {
        return ({ id: +item.id, quantity: item.quantity, variation_id: item.variationId || 0 })
      }),
      email: user?.email || "",
      customerName: user?.first_name || "",
      mobileNumber: values.phone,
      lang: language as "en" | "ar",
      billing: {
        first_name: values.firstName,
        last_name: values.lastName,
        company: "company",
        address_1: values.address,
        address_2: "address_",
        city: values.city,
        state: "state",
        postcode: "9000",
        country: "Kuwait",
        email: values.email,
        phone: values.phone
      },
      shipping: values.differentShipping ? {
        first_name: values.shippingFirstName!,
        last_name: values.shippingLastName!,
        company: "company",
        address_1: values.shippingAddress!,
        address_2: "",
        city: values.shippingCity!,
        state: "",
        postcode: "",
        country: "Kuwait",
        email: values.shippingEmail!,
        phone: values.shippingPhone!
      } : {
        first_name: values.firstName,
        last_name: values.lastName,
        company: "",
        address_1: values.address,
        address_2: "",
        city: values.city,
        state: "",
        postcode: "",
        country: "Kuwait",
        email: values.email,
        phone: values.phone
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

      <form onSubmit={form.handleSubmit(handleSubmit)} className="grid lg:grid-cols-2 gap-12">
        {/* Billing Details */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">BILLING DETAILS</h2>
          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2">
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  {...form.register("firstName")}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {form.formState.errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.firstName.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm mb-2">
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  {...form.register("lastName")}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {form.formState.errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2">
                Full address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...form.register("address")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {form.formState.errors.address && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.address.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm mb-2">
                Town / City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...form.register("city")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {form.formState.errors.city && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.city.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm mb-2">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                {...form.register("phone")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {form.formState.errors.phone && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm mb-2">
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                {...form.register("email")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {form.formState.errors.email && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="shipping"
                {...form.register("differentShipping")}
                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                onChange={(e) => {
                  form.setValue("differentShipping", e.target.checked);
                  setDifferentShipping(e.target.checked);
                }}
              />
              <label htmlFor="shipping" className="text-sm">
                Ship to a different address?
              </label>
            </div>

            {form.watch("differentShipping") && (
              <div className="grid gap-6 mt-6">
                <h3 className="text-lg font-semibold">Shipping Address</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2">
                      First name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...form.register("shippingFirstName")}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {form.formState.errors.shippingFirstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.shippingFirstName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm mb-2">
                      Last name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...form.register("shippingLastName")}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {form.formState.errors.shippingLastName && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.shippingLastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2">
                    Full address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...form.register("shippingAddress")}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {form.formState.errors.shippingAddress && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.shippingAddress.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm mb-2">
                    Town / City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...form.register("shippingCity")}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {form.formState.errors.shippingCity && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.shippingCity.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    {...form.register("shippingPhone")}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {form.formState.errors.shippingPhone && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.shippingPhone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm mb-2">
                    Email address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    {...form.register("shippingEmail")}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {form.formState.errors.shippingEmail && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.shippingEmail.message}
                    </p>
                  )}
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm mb-2">Order Notes (optional)</label>
              <textarea
                {...form.register("notes")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
                placeholder="Notes about your order, e.g. special notes for delivery"
              />
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
                <span className="text-sm">
                  {typeof item.price === "number" ? item.price.toFixed(3) : ""} KD
                </span>
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

