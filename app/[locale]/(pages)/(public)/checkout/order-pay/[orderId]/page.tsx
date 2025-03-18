"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/providers/CartProvider"
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service"
import { OrderService } from "@/services/api/order.service"
import { useParams } from "next/navigation"
import { PaymentService } from "@/services/api/payment.service"
import { ExistingPaymentRequestModel, PaymentRequestModel } from "@/models/payment/payment-request.model"
import { useTranslation } from "react-i18next"

export default function CheckoutPage() {
    const { orderId } = useParams();
    const [differentShipping, setDifferentShipping] = useState(false)
    const [termsAccepted, setTermsAccepted] = useState(false);
    const axiosInstanceWithLoader = CreateAxiosInstanceWithLoader();
    const [order, setOrder] = useState<any>();
    const { i18n: { language } } = useTranslation();

    useEffect(() => {
        const getOrder = async () => {
            try {
                const response = await OrderService.GetById(
                    +orderId,
                    axiosInstanceWithLoader
                );
                setOrder(response);

                console.log(response);

            } catch (error) {
                console.error(error);
            }
        };

        getOrder();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handlePay = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        if (!termsAccepted) {
            alert("Please accept the terms and conditions")
            return
        }
        // Process checkout
        const paymentData: ExistingPaymentRequestModel = {
            orderId: +orderId,
            lang: language as "en" | "ar",
        };

        PaymentService.PayForExistingOrder(paymentData, axiosInstanceWithLoader)
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
                <span className="font-semibold text-[1.375rem] text-[#242424]">SHOPPING CART</span>
                <span className="mx-2">→</span>
                <span className="font-semibold text-[1.375rem] border-b-[2px] border-b-primary">CHECKOUT</span>
                <span className="mx-2">→</span>
                <span className="font-semibold text-[22px] text-[#242424]">ORDER COMPLETE</span>
            </div>

            {/* Order Summary */}
            <div className="w-full max-w-[600px] mx-auto mt-16">
                <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex justify-between font-semibold mb-4">
                        <p className="flex-1">PRODUCT</p>
                        <p className="flex-1 text-center uppercase">Qty</p>
                        <p className="flex-1 text-right uppercase">Totals</p>
                    </div>

                    {order?.line_items.map((item: any) => (
                        <div key={item.id} className="flex justify-between py-3 border-t">
                            <p className="flex-1 text-sm">
                                {item.name}
                            </p>
                            <p className="flex-1 text-center text-sm">x {item.quantity}</p>
                            <p className="flex-1 text-right text-sm">{item.total} KD</p>
                        </div>
                    ))}

                    <div className="flex justify-between py-3 border-t font-semibold">
                        <p className="text-sm text-[#242424]">Subtotal: </p>
                        <p className="text-base text-primary">{order?.total} KD</p>
                    </div>

                    <div className="flex justify-between py-3 border-t">
                        <p className="font-semibold text-sm text-[#242424]">Payment method: </p>
                        <p className="text-sm text-lightGray">{order?.payment_method_title} KD</p>
                    </div>

                    <div className="flex justify-between py-3 border-t font-semibold text-2xl">
                        <p className="text-[#242424]">Total: </p>
                        <p className="text-primary">{order?.total} KD</p>
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

                        <Button type="submit" className="w-full bg-[#F4B183] hover:bg-[#E69B62] text-white" onClick={handlePay}>
                            Pay for order
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

