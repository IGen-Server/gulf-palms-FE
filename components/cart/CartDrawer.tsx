"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/providers/CartProvider";
import { CartItems } from "./CartItems";
import Link from "next/link";

export function CartDrawer() {
  const { cartItems, updateQuantity, removeFromCart, subtotal } = useCart();

  return (
    <div className="max-h-[calc(100vh-250px)]">
      <div className="h-[calc(100vh-250px)] flex-1 overflow-y-auto p-4 overflow-x-hidden">
        {cartItems.map((item) => (
          <CartItems key={item.id} item={item} showSubtotal={false} />
        ))}
      </div>

      <div className="p-4 border-t">
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
          <Button className="w-full bg-primary hover:bg-[#FFA366]/90">
            CHECKOUT
          </Button>
        </div>
      </div>
    </div>
  );
}
