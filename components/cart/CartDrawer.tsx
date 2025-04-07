"use client";

import { ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/providers/CartProvider";
import { CartItems } from "./CartItems";
import Link from "next/link";

export function CartDrawer() {
  const { cartItems, subtotal } = useCart();

  return (
    <div className="max-h-[calc(100vh-250px)]">
      <div className="h-[calc(100vh-250px)] flex-1 overflow-y-auto p-4 overflow-x-hidden">
        {
          cartItems.length === 0 ? (
            <div className="flex flex-col items-center gap-3 h-full mt-12">
              <ShoppingCart color="#bbb" size={125} className="opacity-50" />
              <p className="font-semibold text-[#242424]">No products in the cart.</p>
              <Link href="/shop" className="bg-primary text-white uppercase px-3 cursor-pointer py-2">Return to shop</Link>
            </div>
          ) :
            cartItems.map((item) => (
              <CartItems key={item.id} item={item} showSubtotal={false} />
            ))}
      </div>

      {cartItems.length > 0 && <div className="p-4 border-t">
        <div className="flex justify-between mb-4">
          <span className="font-medium">Subtotal:</span>
          <span className="text-primary font-medium">
            {subtotal.toFixed(3)} KD
          </span>
        </div>
        <div className="grid gap-2">
          <Link href="/cart">
            <Button variant="outline" className="w-full text-sm font-semibold">
              VIEW CART
            </Button>
          </Link>
          <Link href="/checkout">
            <Button className="w-full bg-primary hover:bg-[#FFA366]/90">
              CHECKOUT
            </Button>
          </Link>
        </div>
      </div>}
    </div>
  );
}
