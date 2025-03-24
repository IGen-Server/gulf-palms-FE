"use client"

import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import RenderImageAndProducts from "../common/RenderImageAndProducts"
import { extractCurrency } from "@/services/utility/utility.service"
import { useCart } from "@/providers/CartProvider"
import { ProductCategoryModel } from "@/models/product/product"

interface ProductDetailsProps {
  fertilizationData: {
    size: string
    details: string
  }[]
  waterRequirementData: {
    size: string
    details: string
  }[]
  recommendedProducts: any[],
  slugToCategoryRecord: Record<number, ProductCategoryModel>;
}

export function ProductDetailsExtended({
  fertilizationData,
  waterRequirementData,
  recommendedProducts,
  slugToCategoryRecord
}: ProductDetailsProps) {
  const [selectedProducts, setSelectedProducts] = React.useState<any[]>([])
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const { addToCart } = useCart()

  const totalPrice = React.useMemo(() => {
    return selectedProducts.reduce((sum, product) => sum + +product.price, 0)
  }, [selectedProducts])

  const chunkArray = (array: any[], size: number) => {
    return array.length > 0
      ? Array.from({ length: Math.ceil(array.length / size) }, (_, i) => array.slice(i * size, i * size + size))
      : []
  }

  const productChunks = chunkArray(recommendedProducts, 3)

  const handleAddToCart = () => {
    selectedProducts.forEach((product) => {
      console.log({ product })
      addToCart(product)
    })
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, productChunks.length - 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0))
  }

  return (
    <div className="w-full max-w-6xl mx-auto mb-16 border-t">
      {/* Tabs section remains unchanged */}

      {/* Frequently Bought Together Section */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-6">Frequently bought together</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Slider */}
          <div className="flex-1 relative flex items-center">
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="h-6 w-6 text-gray-500" />
            </button>

            <div className="overflow-hidden mx-8">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {productChunks.map((chunk, chunkIndex) => (
                  <div key={chunkIndex} className="flex flex-shrink-0 w-full">
                    {chunk.map((product, index) => (
                      <div key={product.id} className="w-[200px] flex-shrink-0 relative mx-2">
                        <RenderImageAndProducts
                          renderType="product"
                          imageFileOrUrl={""}
                          images={product.images}
                          name={product.name}
                          description={product.short_description}
                          slug={product.slug}
                          price={product.price}
                          currency={extractCurrency(product.price_html)}
                          productId={product.id}
                          currentCategories={product.categories}
                          productAttribute={product.attributes ? product.attributes[0] : {}}
                          slugToCategoryRecord={slugToCategoryRecord}
                        />
                        {index > 0 && <Plus className="absolute top-1/2 -left-5 h-6 w-6 text-gray-400 z-[200]" />}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md"
              disabled={currentSlide >= productChunks.length - 1}
            >
              <ChevronRight className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          {/* Product Selection Panel */}
          <div className="w-full lg:w-[400px] p-4 sm:p-6 border rounded-lg bg-gray-50">
            {recommendedProducts.map((product) => (
              <div key={product.id} className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-4 mb-2">
                    <Checkbox
                      checked={selectedProducts.some((p) => p.id === product.id)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedProducts([...selectedProducts, {
                            ...product,
                            price: Number(product?.price || 0),
                            image: product?.images[0]?.src || 'https://gulfpalms.com/wp-content/uploads/2023/08/Hibiscus-300x300.jpg'

                          }])
                        } else {
                          setSelectedProducts(selectedProducts.filter((p) => p.id !== product.id))
                        }
                      }}
                    />
                    <div className="flex justify-between items-start gap-2 flex-1">
                      <span className="text-xs sm:text-sm font-medium">{product.name}</span>
                      <span className="text-orange-400 font-semibold text-xs sm:text-sm whitespace-nowrap">
                        {product.price} {extractCurrency(product.price_html)}
                      </span>
                    </div>
                  </div>
                  {product &&
                    product.attributes[0] &&
                    product.attributes[0].visible &&
                    product.attributes[0].variation && (
                      <Select defaultValue={product?.attributes[0]?.options?.[0]}>
                        <SelectTrigger className="w-full h-8 sm:h-10 text-xs sm:text-sm">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {product?.attributes[0]?.options?.map((size: any) => (
                            <SelectItem key={size} value={size} className="text-xs sm:text-sm">
                              {size}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                </div>
              </div>
            ))}

            <div className="mt-4 sm:mt-6 pt-4 border-t">
              <p className="text-xs sm:text-sm text-gray-600 mb-2">
                For {selectedProducts.length} item{selectedProducts.length !== 1 ? "s" : ""}
              </p>
              <p className="text-xl sm:text-2xl font-bold text-orange-400 mb-4">
                {typeof totalPrice === "number" ? totalPrice.toFixed(3) : ""} KD
              </p>
              <Button
                className="w-full bg-[#fdb777] hover:bg-[#fda757] text-white h-8 sm:h-10 text-xs sm:text-sm"
                disabled={selectedProducts.length === 0}
                onClick={handleAddToCart}
              >
                ADD TO CART
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

