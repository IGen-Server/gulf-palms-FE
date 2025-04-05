import Image from "next/image"
import { X } from "lucide-react"
import { useCart } from "@/providers/CartProvider"
import { CartService } from "@/services/api/cart.service";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { useRef, useState } from "react";
import debounce from 'lodash/debounce';

export function CartItemsForPage({ item }:{item:any}) {
  const { updateQuantity, removeFromCart } = useCart()

  const axiosInstanceWithoutLoader = CreateAxiosInstanceWithLoader(false, false);
  const [isCartItemUpdating, setIsCartItemUpdating] = useState<boolean>(false);
  
  const useDebouncedUpdateCartItemQuantity = () => {
    const debouncedFn = useRef(
      debounce(async (cartKey: string, itemId: number, quantity: number, updateQuantityFn: any, setLoadingFn: any) => {
        try {
          setLoadingFn(true);
          const response = await CartService.UpdateCartItem(cartKey, quantity, axiosInstanceWithoutLoader);
  
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
  const handleQuantityChange = (cartKey: string, itemId: number, newQuantity: number) => {
    if (newQuantity < 1) {
      return;
    }

    updateQuantity(itemId, Math.max(1, newQuantity));
    debouncedUpdate(cartKey, itemId, newQuantity, updateQuantity, setIsCartItemUpdating);
  };

  const handleCartItemRemove = async (cartKey: string, itemId: number) => {
    try {
      await CartService.DeleteCartItem(cartKey);
      removeFromCart(itemId);
    } catch (error) {
      console.error('Error updating cart item quantity:', error);
    }
  };

  return (
    <div className="grid grid-cols-12 gap-4 py-6 items-center relative">
      {/* Remove Button - Positioned absolutely */}
      <button onClick={() => handleCartItemRemove(item.cartKey, item.id)} className="absolute left-0 text-gray-400 hover:text-gray-600">
        <X className="w-3.5 h-3.5" />
      </button>

      {/* Product */}
      <div className="col-span-5 flex gap-4 items-center pl-8">
        <div className="w-[70px] h-[70px] relative">
          <Image src={item.image?.src || item?.image ||  "/placeholder.svg"} alt={item.name} fill className="object-cover rounded" />
        </div>
        <span className="font-medium">{item.name}</span>
      </div>

      {/* Price */}
      <div className="col-span-2 text-primary font-medium">
        {typeof item.price === "number" ? item.price.toFixed(3) : ""} KD
      </div>

      {/* Quantity */}
      <div className="col-span-2">
        <div className="flex items-center border rounded-sm w-fit">
          <button
            onClick={() => handleQuantityChange(item.cartKey, item.id, item.quantity - 1)}
            className="w-8 h-8 flex items-center justify-center text-lg hover:bg-gray-50"
          >
            -
          </button>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => handleQuantityChange(item.cartKey, item.id, Number.parseInt(e.target.value) || 1)}
            className="w-8 text-center border-x bg-transparent"
            min="1"
          />
          <button
            onClick={() => handleQuantityChange(item.cartKey, item.id, item.quantity + 1)}
            className="w-8 h-8 flex items-center justify-center text-lg hover:bg-gray-50"
          >
            +
          </button>
        </div>
      </div>

      {/* Subtotal */}
      <div className="col-span-3 text-right text-primary font-medium">{(item.price * item.quantity).toFixed(3)} KD</div>
    </div>
  )
}

