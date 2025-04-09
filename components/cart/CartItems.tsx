"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useCart } from "@/providers/CartProvider";
import { CartService } from "@/services/api/cart.service";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { useRef, useState } from "react";
import debounce from 'lodash/debounce';
import { useUserDataProvider } from "@/providers/UserDataProvider";
import { useTranslation } from "react-i18next";

interface CartItemProps {
  item: any;
  showSubtotal?: boolean;
}

export function CartItems({ item, showSubtotal = true }: CartItemProps) {
  const { updateQuantity, removeFromCart, updateCartCredentials } = useCart();
  const axiosInstanceWithoutLoader = CreateAxiosInstanceWithLoader(false, false);
  const [isCartItemUpdating, setIsCartItemUpdating] = useState<boolean>(false);
  const { isAuthenticated } = useUserDataProvider();
  const { t } = useTranslation("common");

  const useDebouncedUpdateCartItemQuantity = () => {
    const debouncedFn = useRef(
      debounce(async (cartKey: string, itemId: number, quantity: number, updateQuantityFn: any, setLoadingFn: any) => {
        try {
          setLoadingFn(true);
          const response = await CartService.UpdateCartItem(itemId, quantity, axiosInstanceWithoutLoader);
          updateCartCredentials(response.cartToken, response.nonce);

          const item = response.data.items.find((x: any) => x.id === itemId);
          updateQuantityFn(itemId, Math.max(1, item?.quantity));
          setLoadingFn(false);
        } catch (error) {
          console.error('Error updating cart item quantity:', error);
          setLoadingFn(false);
        }
      }, 500) // 500ms debounce time
    ).current;

    return debouncedFn;
  };

  const debouncedUpdate = useDebouncedUpdateCartItemQuantity();
  const handleQuantityChange = (cartKey: string, itemId: number, newQuantity: number, bundleId: number) => {
    if (newQuantity < 1) {
      return;
    }

    if (!isAuthenticated) {
      updateQuantity(itemId, Math.max(1, newQuantity), bundleId);
      return;
    }

    updateQuantity(itemId, Math.max(1, newQuantity), bundleId);
    debouncedUpdate(cartKey, itemId, newQuantity, updateQuantity, setIsCartItemUpdating);
  };

  const handleCartItemRemove = async (cartKey: string, itemId: number) => {
    if (!isAuthenticated) {
      removeFromCart(itemId);
      return;
    }
    try {
      const response = await CartService.DeleteCartItem(itemId);
      updateCartCredentials(response.cartToken, response.nonce);
      removeFromCart(itemId);
    } catch (error) {
      console.error('Error updating cart item quantity:', error);
    }
  };

  // const showControls = () => {
  //   // Show controls (remove and quantity) if:
  //   // 1. Item has no bundleId (regular item) OR
  //   // 2. Item's id matches its bundleId (main bundle item)
  //   return !item.bundleId || item.productId === item.bundleId;
  // };

  return (
    <div className="flex gap-4 py-4">
      <div className="relative w-20 h-20">
        <Image
          src={item.image?.src || item?.image || "/placeholder.svg"}
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
            onClick={() => handleCartItemRemove(item.cartKey, item.id)}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="mt-2 flex items-center gap-4">
          <div className="flex items-center border rounded">
            <button
              onClick={() => handleQuantityChange(item.cartKey, item.id, item.quantity - 1, item.bundleId)}
              className="px-2 py-1 hover:bg-muted"

            >
              -
            </button>
            <span className="w-8 text-center">{item.quantity}</span>
            <button

              onClick={() => handleQuantityChange(item.cartKey, item.id, item.quantity + 1, item.bundleId)}
              className="px-2 py-1 hover:bg-muted"

            >
              +
            </button>
          </div>
          <div className="text-primary font-medium">
            {item.quantity} x {typeof item.price === "number" ? item.price.toFixed(3) : ""} KD
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
