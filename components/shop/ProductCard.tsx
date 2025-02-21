"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Heart, Search, ShoppingCart, Shuffle } from "lucide-react";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import SelectProductVariant from "./SelectProductVariant";
import { ProductDrawer } from "./ProductDrawer";
import { ProductCategoryModel } from "@/models/product/product";

export default function ProductCard({
  id,
  name,
  price,
  img,
  options,
  sku,
  categories = [],
  description = "",
}: {
  id: any;
  name: any;
  price: any;
  img: any;
  options: any;
  sku: string;
  categories: ProductCategoryModel[];
  description: any;
}) {
  const [selectProductId, setSelectProductId] = useState<
    string | null | number
  >(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const productData = {
    id: id,
    name: name,
    price: Number.parseFloat(price),
    description: description || "Product description not available",
    image: img,
    sku: sku || 'N/A',
    categories: categories,
  };

  return (
    <div className="relative group max-w-[390px] grid place-content-center mb-[70px] custom-shadow pb-4 pt-7">
      <SelectProductVariant
        isOpen={isSheetOpen}
        setIsOpen={setIsSheetOpen}
        setSelectProductId={setSelectProductId}
        onClose={() => {
          setSelectProductId(null);
          setIsSheetOpen(false);
        }}
        productId={id}
        product={productData}
        options={options}
      />

      <ProductDrawer
        open={isQuickViewOpen}
        onOpenChange={setIsQuickViewOpen}
        product={productData}
      />

      {/* Product Image Section */}
      <div className="grid place-content-center w-full overflow-hidden h-[280px]">
        <Link href={`/shop/${name}`} className="block">
          <img
            loading="lazy"
            width={280}
            height={280}
            src={img}
            alt={name}
            className="w-full object-contain !h-[265px] group-hover:scale-[105%] duration-500"
          />
        </Link>
      </div>

      {/* Product Details */}
      <div className="w-full text-center">
        <h3 className="text-[14px] font-semibold">
          <Link href={`/product/${id}`} className="text-center">
            {name}
          </Link>
        </h3>
        {
          categories.map((category) => (
            <div key={category.id} className="text-[13.3px] text-[#a5a5a5]">
              <Link href={category.slug} rel="tag" className="hover:underline">
                {category.name}
              </Link>
            </div>
          ))
        }
        <div>
          <span className="text-primary text-[14px] font-semibold">
            From {price} <span className="">KD</span>
          </span>
        </div>
      </div>

      {/* Compare Button */}
      <div className="absolute left-0 bottom-[138px] w-full bg-white transform translate-y-[-100%] opacity-0 transition-all place-content-center grid duration-300 group-hover:translate-y-0 group-hover:opacity-100 border-t border-b">
        <div className="text-center py-2 " title="Compare">
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Shuffle className="cursor-pointer w-[15px] sm:w-[20px]" />
              </TooltipTrigger>
              <TooltipContent sideOffset={15} side="top" className="bg-black">
                <p className="text-xs sm:text-sm">Compare</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      {/* Hover Content */}
      <div className="transform translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 mt-3 px-3">
        <div className="flex items-center justify-between">
          {/* Wishlist Button */}
          <div>
            <Heart className="text-gray-700 hover:text-gray-500 cursor-pointer" />
          </div>

          {/* Add to Cart Button */}
          {selectProductId == id || (
            <div className="group/select_product bg-primary text-white uppercase font-semibold text-sm px-3 py-2 shadow-md shadow-primary/95 min-w-[150px] text-center h-[40px] grid place-content-center  overflow-hidden">
              <div
                className="grid place-content-center cursor-pointer"
                onClick={() => {
                  setSelectProductId(id);
                  setIsSheetOpen(true);
                }}
              >
                <span className="translate-y-3 group-hover/select_product:-translate-y-[100px] transition-all duration-500">
                  Add to Cart
                </span>
                <div className="translate-y-[100px] w-full place-items-center group-hover/select_product:-translate-y-2 transition-all duration-500">
                  <ShoppingCart />
                </div>
              </div>
            </div>
          )}

          {/* Quick View Button */}
          <div>
            <Search
              className="text-gray-700 hover:text-gray-500 cursor-pointer"
              onClick={() => setIsQuickViewOpen(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
