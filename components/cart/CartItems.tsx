"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useCart } from "@/providers/CartProvider";

interface CartItemProps {
  item: any;
  showSubtotal?: boolean;
}

export function CartItems({ item, showSubtotal = true }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex gap-4 py-4">
      <div className="relative w-20 h-20">
        <Image
          src={item.image?.src || item?.image ||  "/placeholder.svg"}
          alt={item.name}
          height={80}
          width={80}
          className="object-cover rounded h-[80px] w-[80px]"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between">
          <h3 className="font-medium">{item.name}</h3>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="mt-2 flex items-center gap-4">
          <div className="flex items-center border rounded">
            <button
              onClick={() =>
                updateQuantity(item.id, Math.max(1, item.quantity - 1))
              }
              className="px-2 py-1 hover:bg-muted"
            >
              -
            </button>
            <span className="w-8 text-center">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="px-2 py-1 hover:bg-muted"
            >
              +
            </button>
          </div>
          <div className="text-primary font-medium">
            {typeof item.price === "number" ? item.price.toFixed(3) : ""} KD
          </div>
          {showSubtotal && (
            <div className="ml-auto text-primary font-medium">
              {(item.price * item.quantity).toFixed(3)} KD
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
