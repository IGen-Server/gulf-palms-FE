/* eslint-disable @next/next/no-img-element */
"use client"

import * as React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import RenderImageAndProducts from "../common/RenderImageAndProducts"
import { extractCurrency } from "@/services/utility/utility.service"

interface ProductDetailsProps {
  fertilizationData: {
    size: string
    details: string
  }[]
  waterRequirementData: {
    size: string
    details: string
  }[]
  recommendedProducts: {
    id: string
    name: string
    price: number
    image: string
    sizes?: string[]
    category?: string
  }[]
}

export function ProductDetailsExtended({ fertilizationData, waterRequirementData, recommendedProducts }: ProductDetailsProps) {
  const [selectedProducts, setSelectedProducts] = React.useState<string[]>([])
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const totalPrice = React.useMemo(() => {
    return recommendedProducts
      .filter((product) => selectedProducts.includes(product.id))
      .reduce((sum, product) => sum + product.price, 0)
  }, [recommendedProducts, selectedProducts])

  return (
    <div className="w-full max-w-6xl mx-auto mb-16 border-t ">
      <Tabs defaultValue="fertilization" className="w-full !bg-white border-b">
        <TabsList className="w-full justify-center h-auto rounded-none mb-8 !bg-white ">
          <TabsTrigger
            value="fertilization"
            className="text-base px-6 py-3 rounded-none border-t-4 border-transparent data-[state=active]:border-orange-400 data-[state=active]:shadow-none -mt-[5px] "
          >
            FERTILIZATION PROGRAM
          </TabsTrigger>
          <TabsTrigger
            value="water"
            className="text-base px-6 py-3 rounded-none border-t-4 border-transparent data-[state=active]:border-orange-400 data-[state=active]:shadow-none -mt-[5px]"
          >
            WATER REQUIREMENT (SUMMER & WINTER)
          </TabsTrigger>
        </TabsList>

        <TabsContent value="fertilization" className="mt-0 pb-[50px] px-5">
          <div className="overflow-x-auto">
          <table className="w-full border-collapse">
              <thead className="bg-[#f3b083]">
                <tr>
                  {fertilizationData.map((item, index) => (
                    <th key={index} className="p-4 text-center font-semibold border">
                      {item.size}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {fertilizationData.map((item, index) => (
                    <td key={index} className="p-4 text-sm text-gray-600 text-center border">
                      {item.details}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="water" className="mt-0 pb-[50px] px-5">
        <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-[#f3b083]">
                <tr>
                  {waterRequirementData.map((item, index) => (
                    <th key={index} className="p-4 text-center font-semibold border">
                      {item.size}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {waterRequirementData.map((item, index) => (
                    <td key={index} className="p-4 text-sm text-gray-600 text-center border">
                      {item.details}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>

      {/* Frequently Bought Together Section */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-6">
          Frequently bought together
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Slider */}
          <div className="flex-1 relative">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                className="absolute left-0 z-1 p-2"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="overflow-hidden mx-8">
                <div
                  className="flex items-center gap-5 transition-transform duration-300"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {recommendedProducts.map((product, index) => (
                    <div key={product.id} className="w-[200px] relative ">
                      <RenderImageAndProducts
                        key={product.id}
                        renderType="product"
                        imageFileOrUrl={product.image}
                        images={[
                          product.image,
                          recommendedProducts[index - 1]?.image ||
                            "http://localhost:3000/_next/image?url=https%3A%2F%2Fgulfpalms.com%2Fwp-content%2Fuploads%2F2025%2F02%2FJozi-3-300x300.jpg&w=640&q=75",
                        ]}
                        name={product.name}
                        description={product.category}
                        slug={''} //product.slug
                        price={product.price}
                        currency={''} //extractCurrency(product.price_html)
                        productId={product.id}
                        currentCategories={[]}
                      />
                      {index > 0 && (
                        <Plus className="absolute top-1/2 -left-5 h-6 w-6 text-gray-400 z-[200]" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() =>
                  setCurrentSlide(
                    Math.min(recommendedProducts.length - 1, currentSlide + 1)
                  )
                }
                className="absolute right-0 z-10 p-2"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Product Selection Panel */}
          <div className="w-full lg:w-[400px] p-4 sm:p-6 border rounded-lg bg-gray-50">
            {recommendedProducts.map((product) => (
              <div
                key={product.id}
                className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4 "
              >
                <div className=" flex-1 min-w-0 ">
                  <div className="flex items-center gap-4 mb-2">
                    <Checkbox
                      checked={selectedProducts.includes(product.id)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedProducts([
                            ...selectedProducts,
                            product.id,
                          ]);
                        } else {
                          setSelectedProducts(
                            selectedProducts.filter((id) => id !== product.id)
                          );
                        }
                      }}
                    />
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-xs sm:text-sm font-medium">
                        {product.name}
                      </span>
                      <span className="text-orange-400 font-semibold text-xs sm:text-sm whitespace-nowrap">
                        {product.price.toFixed(3)} KD
                      </span>
                    </div>
                  </div>
                  {product.sizes && (
                    <Select defaultValue={product.sizes[0]}>
                      <SelectTrigger className="w-full h-8 sm:h-10 text-xs sm:text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {product.sizes.map((size) => (
                          <SelectItem
                            key={size}
                            value={size}
                            className="text-xs sm:text-sm"
                          >
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
                For {selectedProducts.length} items
              </p>
              <p className="text-xl sm:text-2xl font-bold text-orange-400 mb-4">
                {totalPrice.toFixed(3)} KD
              </p>
              <Button
                className="w-full bg-[#fdb777] hover:bg-[#fda757] text-white h-8 sm:h-10 text-xs sm:text-sm"
                onClick={() => console.log("Adding to cart:", selectedProducts)}
              >
                ADD TO CART
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

