/* eslint-disable @next/next/no-img-element */
"use client"

import * as React from "react"
import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Mail,
  Linkedin,
  PhoneIcon as WhatsApp,
  Minus,
  Plus,
  X,
} from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ProductCategoryModel } from "@/models/product/product"
import { useCart } from "@/providers/CartProvider"


interface ProductDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  product: {
    id: string
    name: string
    price: number
    description: string
    image: string
    sku: string
    categories: ProductCategoryModel[]
    quantity?: number;
  }
}

export function ProductDrawer({ open, onOpenChange, product }: ProductDrawerProps) {
  const [quantity, setQuantity] = React.useState(1)
  const [isMobile, setIsMobile] = React.useState(false)
  const { addToCart } = useCart();

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const Content = (
    <div className="relative">
      {/* Close Button */}
      <button
        onClick={() => onOpenChange(false)}
        className="absolute right-4 top-4 z-10 hover:bg-gray-100 rounded-full p-2"
      >
        <X className="h-6 w-6" />
      </button>

      <div className="flex flex-col md:flex-row gap-8 p-6">
        {/* Image Section with View Details Button */}
        <div className="relative w-full md:w-1/2 aspect-square bg-white rounded-lg group">
          <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md z-10">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="object-contain w-full h-full p-4"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md z-10">
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* View Details Button - Appears on Hover */}
          <div className="absolute inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
            <Button className="w-full bg-[#fdb777] text-white hover:bg-[#fda757] font-semibold uppercase">
              View Details
            </Button>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col w-full md:w-1/2">
          <div className="text-right">
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-3xl font-bold mb-6">
              {product.price.toFixed(3)} <span className="text-orange-400">KD</span>
            </p>
          </div>

          <p className="text-gray-600 mb-8 text-sm leading-relaxed">{product.description}</p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 border rounded-md flex items-center justify-center hover:bg-gray-50"
            >
              <Minus className="h-4 w-4" />
            </button>
            <Input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
              className="w-16 text-center"
            />
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 border rounded-md flex items-center justify-center hover:bg-gray-50"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            <Button
              className="flex-1 bg-[#fdb777] hover:bg-[#fda757] text-white font-semibold"
              onClick={()=> {
                let cartProduct = { ...product, quantity: 1 };
                addToCart(cartProduct)
              }}
            >
              ADD TO CART
            </Button>
            <Button
              className="flex-1 bg-[#fdb777] hover:bg-[#fda757] text-white font-semibold"
              onClick={() => console.log("Buy now")}
            >
              BUY NOW
            </Button>
          </div>

          {/* Product Details */}
          <div className="space-y-2 text-sm mb-8">
            <p>
              <span className="font-semibold">SKU:</span> <span className="text-gray-600">{product.sku}</span>
            </p>
            <p>
              <span className="font-semibold">Categories:</span>{" "}
              <span className="text-gray-600">
                {product.categories.map((cat, i) => (
                  <span key={i} className="hover:text-[#fdb777] cursor-pointer">
                    {cat.name}
                    {i < product.categories.length - 1 ? ", " : ""}
                  </span>
                ))}
              </span>
            </p>
          </div>

          {/* Share Section */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold">Share:</span>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="hover:text-[#fdb777]">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-[#fdb777]">
                <Mail className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-[#fdb777]">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-[#fdb777]">
                <WhatsApp className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent side="bottom" className="h-[90vh] overflow-y-auto">
          {Content}
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">{Content}</DialogContent>
    </Dialog>
  )
}

