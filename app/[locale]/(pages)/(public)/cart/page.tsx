"use client"

import { CartItemsForPage } from "@/components/cart/CartItemsForPage"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "@/providers/CartProvider"
import Link from "next/link"

export default function CartPage() {
  const { cartItems, subtotal, total, shippingCost } = useCart()

  return (
    <div className="container max-w-[1370px] py-12 mx-auto">
      {/* Progress Steps */}
      <div className="flex items-center justify-center gap-6 mb-16">
        <span className="font-bold text-sm tracking-wider border-b-2 border-primary pb-3">SHOPPING CART</span>
        <span className="text-muted-foreground text-sm">→</span>
        <span className="text-muted-foreground text-sm tracking-wider">CHECKOUT</span>
        <span className="text-muted-foreground text-sm">→</span>
        <span className="text-muted-foreground text-sm tracking-wider">ORDER COMPLETE</span>
      </div>

      <div className="grid lg:grid-cols-12 gap-12">
        {/* Cart Items Section */}
        <div className="lg:col-span-8">
          <div className="mb-8">
            {/* Table Headers */}
            <div className="grid grid-cols-12 gap-4 py-3 border-b border-gray-200 text-xs font-bold tracking-wider text-gray-600">
              <div className="col-span-5">PRODUCT</div>
              <div className="col-span-2">PRICE</div>
              <div className="col-span-2">QUANTITY</div>
              <div className="col-span-3 text-right">SUBTOTAL</div>
            </div>

            {/* Cart Items */}
            <div className="divide-y">
              {cartItems.map((item) => (
                <CartItemsForPage key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Coupon Section */}
          <div className="flex gap-6 items-start">
            <div className="flex gap-4 flex-1">
              <Input placeholder="Coupon code" className="max-w-[180px] h-11 text-sm" />
              <Button variant="outline" className="h-11 px-6 text-xs font-bold tracking-wider">
                APPLY COUPON
              </Button>
            </div>
          </div>
        </div>

        {/* Cart Totals Section */}
        <div className="lg:col-span-4">
          <div className="bg-[#F8F8F8] p-8 space-y-6">
            <h2 className="text-xl font-bold tracking-wide">CART TOTALS</h2>

            <div className="flex justify-between py-4 border-b border-gray-200">
              <span className="font-medium">Subtotal</span>
              <span className="text-primary font-medium">{subtotal.toFixed(3)} KD</span>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium">Shipping</span>
                <span className="text-primary font-medium">Kuwait: {shippingCost.toFixed(3)} KD</span>
              </div>
              <div className="text-sm text-muted-foreground pl-4">
                Shipping to 7/11 tajmahal road, mohammadpur, dhaka, Oman.
                <button className="text-primary hover:underline ml-2 font-medium">Change address</button>
              </div>
            </div>

            <div className="flex justify-between py-4 border-t border-gray-200">
              <span className="font-bold">Total</span>
              <span className="text-primary text-xl font-bold">{total.toFixed(3)} KD</span>
            </div>

            <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-sm font-bold tracking-wider">
              <Link href="/checkout"> PROCEED TO CHECKOUT</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

