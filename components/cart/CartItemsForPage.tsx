import Image from "next/image"
import { X } from "lucide-react"
import { useCart } from "@/providers/CartProvider"

export function CartItemsForPage({ item }:{item:any}) {
  const { updateQuantity, removeFromCart } = useCart()

  return (
    <div className="grid grid-cols-12 gap-4 py-6 items-center relative">
      {/* Remove Button - Positioned absolutely */}
      <button onClick={() => removeFromCart(item.id)} className="absolute left-0 text-gray-400 hover:text-gray-600">
        <X className="w-3.5 h-3.5" />
      </button>

      {/* Product */}
      <div className="col-span-5 flex gap-4 items-center pl-8">
        <div className="w-[70px] h-[70px] relative">
          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover rounded" />
        </div>
        <span className="font-medium">{item.name}</span>
      </div>

      {/* Price */}
      <div className="col-span-2 text-primary font-medium">{item.price.toFixed(3)} KD</div>

      {/* Quantity */}
      <div className="col-span-2">
        <div className="flex items-center border rounded-sm w-fit">
          <button
            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
            className="w-8 h-8 flex items-center justify-center text-lg hover:bg-gray-50"
          >
            -
          </button>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value) || 1)}
            className="w-8 text-center border-x bg-transparent"
            min="1"
          />
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
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

