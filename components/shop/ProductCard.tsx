"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Heart, Search, ShoppingCart, Shuffle } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import SelectProductVariant from "./SelectProductVariant";
import { ProductDrawer } from "./ProductDrawer";
import { ProductCategoryModel } from "@/models/product/product";
import { getCategoryPathById, getCategoryPathByIdFromRecord } from "@/services/utility/utility.service";
import { useTranslation } from "react-i18next";
import { ProductService } from "@/services/api/product.service";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { useCart } from "@/providers/CartProvider";

export default function ProductCard({
  id,
  slug,
  name,
  price,
  img,
  images,
  optionName,
  options,
  sku,
  currentCategories = [],
  description = "",
  slugToCategoryRecord,
  variations
}: {
  id: any;
  slug: string;
  name: any;
  price: any;
  img: any;
  images: any[];
  optionName: string;
  options: any;
  sku: string;
  currentCategories: ProductCategoryModel[];
  description: any;
  slugToCategoryRecord: Record<number, ProductCategoryModel>;
  variations: number[]
}) {
  const { t, i18n: { language } } = useTranslation("common");
  const [selectProductId, setSelectProductId] = useState<
    string | null | number
  >(null);
  const { addToCart } = useCart();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<string>("");
  const [variationsData, setVariationsData] = useState<any[]>([]);
  const [variantsLoading, setVariantsLoading] = useState(false);
  const selectedVariationDetails = options.find((variation: any) => variation.id === selectedVariant);
  const axiosInstanceWithoutLoader = CreateAxiosInstanceWithLoader(false, false);

  useEffect(() => {
    const getVariations = async () => {
      setVariantsLoading(true);
      try {
        const response = await ProductService.GetVariants(
          +id,
          variations,
          axiosInstanceWithoutLoader
        );

        setVariationsData(response);

        setVariantsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getVariations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price,
      quantity: 1,
      image: img,
      variationId: +selectedVariant
    });
  };

  const productData = {
    id: id,
    name: name,
    price: Number.parseFloat(price),
    description: description || t("shop.noDescription"),
    image: img,
    images,
    sku: sku || 'N/A',
    categories: currentCategories,
  };

  return (
    <div className="relative group w-full overflow-hidden grid place-content-center lg:mb-[70px] custom-shadow pb-4 lg:pt-7">
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
        options={variationsData.filter((variation) => variation.name) || []}
        selectedVariant={selectedVariant}
        clearVariant={() => setSelectedVariant("")}
        onSelectVariant={(variant) => setSelectedVariant(variant)}
      />

      <ProductDrawer
        open={isQuickViewOpen}
        onOpenChange={setIsQuickViewOpen}
        product={productData}
        optionName={optionName}
        options={variationsData.filter((variation) => variation.name) || []}
      />

      {/* Product Image Section */}
      <div className="grid place-content-center w-full overflow-hidden h-[280px] ">
        <Link href={`/product/${slug}`} className="block">
          <img
            loading="lazy"

            src={img}
            alt={name}
            className="w-full object-cover !h-[265px] group-hover:scale-[105%] duration-500"
          />
        </Link>
      </div>

      {/* Product Details */}
      <div className="w-full text-center">
        <h3 className="text-[14px] font-semibold text-[#333] hover:text-lightGray/70">
          <Link href={`/product/${slug}`} className="text-center">
            {name}
          </Link>
        </h3>

        {slugToCategoryRecord && currentCategories.map((category, index) => {
          // console.log(category.id, category.name);
          // console.log(category.slug, getCategoryPathByIdFromRecord(category.id, slugToCategoryRecord));
          return (
            <span key={category.id} className="text-[13.3px] text-[#a5a5a5]">
              <Link href={getCategoryPathByIdFromRecord(category.id, slugToCategoryRecord)} rel="tag" className="hover:underline">
                {category.name}
              </Link>
              {index < currentCategories.length - 1 && ", "}
            </span>
          );
        })}

        <div>
          <span className="text-primary text-[14px] font-semibold">
            {language === "en" ? "From" : "من"} {price} <span className="">KD</span>
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
                <p className="text-xs sm:text-sm">{t("compare")}</p>
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
          {
            variations.length > 0 ? (
              <div className="group/select_product bg-primary text-white uppercase font-semibold text-sm px-3 py-2 shadow-md shadow-primary/95 min-w-[150px] text-center h-[40px] hidden lg:grid place-content-center  overflow-hidden">
                <div
                  className="grid place-content-center cursor-pointer"
                  onClick={() => {
                    setSelectProductId(id);
                    setIsSheetOpen(true);
                  }}
                >
                  <span className="translate-y-3 group-hover/select_product:-translate-y-[100px] transition-all duration-500 uppercase">
                    {t("SelectOptions")}
                  </span>
                  <div className="translate-y-[100px] w-full place-items-center group-hover/select_product:-translate-y-2 transition-all duration-500">
                    <ShoppingCart />
                  </div>
                </div>
              </div>
            ) : (
              <div className="group/select_product bg-primary text-white uppercase font-semibold text-sm px-3 py-2 shadow-md shadow-primary/95 min-w-[150px] text-center h-[40px] hidden lg:grid place-content-center  overflow-hidden">
                <div
                  className="grid place-content-center cursor-pointer"
                  onClick={() => handleAddToCart()}
                >
                  <span className="translate-y-3 group-hover/select_product:-translate-y-[100px] transition-all duration-500 uppercase">
                    {t("shop.addToCart")}
                  </span>
                  <div className="translate-y-[100px] w-full place-items-center group-hover/select_product:-translate-y-2 transition-all duration-500">
                    <ShoppingCart />
                  </div>
                </div>
              </div>
            )
          }
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
