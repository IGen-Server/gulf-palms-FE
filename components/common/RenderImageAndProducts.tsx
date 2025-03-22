/* eslint-disable @next/next/no-img-element */
"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { Currency, Ellipsis, ShoppingCart } from "lucide-react";
import { ClipLoader } from "react-spinners";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Heart, Search, Shuffle } from "lucide-react";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ProductSelectionSheet from "./ProductSelectionSheet";
import {
  ProductAttribute,
  ProductCategoryModel,
} from "@/models/product/product";
import {
  getCategoryPathByIdFromRecord,
  getProductCategoryLink,
} from "@/services/utility/utility.service";

import { useCart } from "@/providers/CartProvider";
import { ProductDrawer } from "../shop/ProductDrawer";
import { useTranslation } from "react-i18next";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface HoverProduct {
  position: { x: number; y: number };
  imgUrl: string;
  hoveredHref: string;
  hoveredTitle: string;
  productId: string;
  price: string;
  description: string;
  buttonType?: string;
}

interface RenderImageAndProductsProps {
  renderType: "image" | "product";
  imageFileOrUrl: string;
  hoverProducts?: HoverProduct[];
  images?: any[];
  name?: string;
  description?: string;
  slug: string;
  price?: number;
  currency: string;
  productId: string;
  currentCategories: ProductCategoryModel[];
  productAttribute: ProductAttribute | null;
  quantity?: number;
  stock?: any,
  slugToCategoryRecord: Record<number, ProductCategoryModel>;
}

const RenderImageAndProducts: React.FC<RenderImageAndProductsProps> = ({
  renderType,
  imageFileOrUrl,
  hoverProducts,
  images,
  name,
  stock = 'instock',
  description,
  slug,
  price,
  currency,
  productId,
  currentCategories = [],
  productAttribute,
  quantity,
  slugToCategoryRecord,
}) => {
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);
  const [wishList, setWishList] = useState<any[]>([])
  const [selectProductId, setSelectProductId] = useState<string | null>(null);
  const [expandedDescriptionId, setExpandedDescriptionId] = useState<
    string | null
  >(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { t, i18n: { language } } = useTranslation("common");
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<string>("");

  const handleAddToCart = async () => {
    if (!selectedVariant) {
      alert("Please select some product options before adding this product to your cart.");
      return;
    }
    setLoading(true); // Set loading to true
    try {
      await addToCart({
        id: productId,
        name: name as string,
        price: Number(price) as number,
        quantity: 1,
        image: images?.[0] || imageFileOrUrl,
        // variant: selectedVariant
      });
      setIsSheetOpen(false);
    } catch (error) {
      console.error("Error adding to cart:", error);
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  const renderHoveredButton = (product: HoverProduct) => {
    if (product.buttonType === "add_to_cart") {
      return (
        <div
          className="bg-primary text-white text-[10px] sm:text-[12px] px-2 sm:px-3 py-1 sm:py-2 w-fit cursor-pointer"
          onClick={() => handleAddToCart()}
        >
          {loading ? <ClipLoader /> : t("AddToCart")}
        </div>
      );
    }
    if (product.buttonType === "read_more") {
      return (
        <Link
          href={product.hoveredHref}
          className="bg-gray-200 text-black text-[10px] sm:text-[12px] px-2 sm:px-3 py-1 sm:py-2 w-fit cursor-pointer"
        >
          {t("ReadMore")}
        </Link>
      );
    }
    if (product.buttonType === "select_options") {
      return (
        <Link
          href={product.hoveredHref}
          className="bg-primary text-white text-[10px] sm:text-[12px] px-2 sm:px-3 py-1 sm:py-2 w-fit cursor-pointer"
        >
          {t("SelectOptions")}
        </Link>
      );
    }
    if (product.buttonType === "buy_now") {
      return (
        <Link
          href={product.hoveredHref}
          className="bg-primary text-white text-[10px] sm:text-[12px] px-2 sm:px-3 py-1 sm:py-2 w-fit cursor-pointer"
        >
          {t("BuyNow")}
        </Link>
      );
    }
  };

  if (renderType === "image") {
    return (
      <>
        <div
          className={`hidden lg:block relative w-full h-full`}
          style={{
            backgroundImage: `url(${imageFileOrUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {hoverProducts?.map((product, index) => {
            console.log(product);

            return (
              <HoverCard key={index} openDelay={100}>
                <div
                  className="absolute"
                  style={{
                    top: `${product.position.y}%`,
                    left: `${product.position.x}%`,
                  }}
                >
                  <HoverCardTrigger
                    onMouseEnter={() => setHoveredProductId(product.productId)}
                    onMouseLeave={() => setHoveredProductId(null)}
                    onClick={() => setHoveredProductId(product.productId)}
                  >
                    <div className="relative w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] grid place-content-center">
                      <div className="w-[15px] sm:w-[20px] h-[15px] sm:h-[20px] bg-primary rounded-full cursor-pointer grid place-content-center hotspot-btn">
                        <div className="w-[4px] sm:w-[6px] h-[4px] sm:h-[6px] bg-white rounded-full z-10">
                          <p className="hotspot-sonar !animate-ping"></p>
                        </div>
                      </div>
                    </div>
                  </HoverCardTrigger>

                  {hoveredProductId === product.productId && (
                    <HoverCardContent
                      className="p-4 bg-white shadow-lg border rounded-md text-center font-arabic w-[280px] sm:w-[320px]"
                      onMouseEnter={() => setHoveredProductId(product.productId)}
                      onMouseLeave={() => setHoveredProductId(null)}
                    // onClick={() => setHoveredProductId(product.productId)}
                    >
                      <img
                        src={product.imgUrl || "/placeholder.svg"}
                        alt={product.hoveredTitle}
                        className="w-full h-auto object-cover mb-2"
                      />
                      <Link href={`${product.hoveredHref}`}>
                        <p className="text-[14px] sm:text-[16px] font-semibold text-gray-500">
                          {product.hoveredTitle}
                        </p>
                      </Link>
                      {product?.price && (
                        <p className="text-center !px-0 py-2 text-primary text-[16px] font-semibold">
                          {t("from")} {product?.price} KD
                        </p>
                      )}
                      <div
                        className={`text-xs sm:text-sm text-gray-500 overflow-hidden transition-all duration-300`}
                        style={{
                          height:
                            expandedDescriptionId == product.productId
                              ? " fit-content "
                              : " 48px ",
                        }}
                      >
                        {product.description}
                      </div>

                      <div className="h-fit flex flex-col items-center justify-between gap-2 border-t border-gray-100 relative mt-2">
                        {product.description && (
                          <>
                            {!expandedDescriptionId && (
                              <div className="absolute h-[15px] blur-sm bg-white/80 w-full -top-3 left-0"></div>
                            )}
                            <Ellipsis
                              className={
                                expandedDescriptionId === product.productId
                                  ? "opacity-0"
                                  : "cursor-pointer"
                              }
                              onClick={() =>
                                setExpandedDescriptionId((prevId) =>
                                  prevId === product.productId
                                    ? null
                                    : product.productId
                                )
                              }
                            />
                          </>
                        )}

                        {renderHoveredButton(product)}
                      </div>
                    </HoverCardContent>
                  )}
                </div>
              </HoverCard>
            )
          })}
        </div>
        <div
          className={`block lg:hidden relative w-full h-full`}
          style={{
            backgroundImage: `url(${imageFileOrUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {hoverProducts?.map((product, index) => (
            <Popover key={index}>
              <div
                className="absolute"
                style={{
                  top: `${product.position.y}%`,
                  left: `${product.position.x}%`,
                }}
              >
                <PopoverTrigger

                  onClick={() => setHoveredProductId(product.productId)}
                >
                  <div className="relative w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] grid place-content-center">
                    <div className="w-[15px] sm:w-[20px] h-[15px] sm:h-[20px] bg-primary rounded-full cursor-pointer grid place-content-center hotspot-btn">
                      <div className="w-[4px] sm:w-[6px] h-[4px] sm:h-[6px] bg-white rounded-full z-10">
                        <p className="hotspot-sonar !animate-ping"></p>
                      </div>
                    </div>
                  </div>
                </PopoverTrigger>

                {hoveredProductId === product.productId && (
                  <PopoverContent
                    className="p-4 bg-white shadow-lg border rounded-md text-center font-arabic w-[280px] sm:w-[320px]"

                    onClick={() => setHoveredProductId(product.productId)}
                  >
                    <img
                      src={product.imgUrl || "/placeholder.svg"}
                      alt={product.hoveredTitle}
                      className="w-full h-auto object-cover mb-2"
                    />
                    <p className="text-[14px] sm:text-[16px] font-semibold text-gray-500">
                      {product.hoveredTitle}
                    </p>
                    {product?.price && (
                      <p className="text-center !px-0 py-2 text-primary text-[16px] font-semibold">
                        From {product?.price} KD
                      </p>
                    )}
                    <div
                      className={`text-xs sm:text-sm text-gray-500 overflow-hidden transition-all duration-300`}
                      style={{
                        height:
                          expandedDescriptionId == product.productId
                            ? " fit-content "
                            : " 48px ",
                      }}
                    >
                      {product.description}
                    </div>

                    <div className="h-fit flex flex-col items-center justify-between gap-2 border-t border-gray-100 relative mt-2">
                      {product.description && (
                        <>
                          {!expandedDescriptionId && (
                            <div className="absolute h-[15px] blur-sm bg-white/80 w-full -top-3 left-0"></div>
                          )}
                          <Ellipsis
                            className={
                              expandedDescriptionId === product.productId
                                ? "opacity-0"
                                : "cursor-pointer"
                            }
                            onClick={() =>
                              setExpandedDescriptionId((prevId) =>
                                prevId === product.productId
                                  ? null
                                  : product.productId
                              )
                            }
                          />
                        </>
                      )}

                      {renderHoveredButton(product)}
                    </div>
                  </PopoverContent>
                )}
              </div>
            </Popover>
          ))}
        </div>
      </>
    );
  }

  if (renderType === "product") {
    const productData = {
      id: productId,
      name: name || "",
      price: Number(price),
      description: description || t("shop.noDescription"),
      image: imageFileOrUrl || (images && (images[0]?.src || images[0])),
      images: images,
      sku: productId || "N/A",
      categories: currentCategories,
      quantity: quantity,
      slug: slug,
    };

    return (
      <>
        <div
          className="relative bg-white overflow-hidden max-w-full sm:max-w-[260px] h-[380px] sm:h-[375px] cursor-pointer z-[10]"
          onMouseEnter={() => setHoveredProductId(productId)}
          onMouseLeave={() => setHoveredProductId(null)}
        >
          <div className="w-full h-[280px] duration-700 overflow-hidden relative">
            <Link href={`/product/${slug}`}>
              <img
                src={images?.[0]?.src || imageFileOrUrl || "/placeholder.svg"}
                alt={name}
                className={`absolute inset-0 w-full h-full object-cover ${hoveredProductId === productId
                  ? " opacity-100 lg:opacity-0 "
                  : " lg:opacity-100 "
                  }`}
              />
              <img
                src={
                  images?.[1]?.src ||
                  images?.[0]?.src ||
                  imageFileOrUrl ||
                  "/placeholder.svg"
                }
                alt={name}
                className={`absolute inset-0 w-full h-full object-cover ${hoveredProductId === productId
                  ? "opacity-0 lg:opacity-100 lg:scale-[1.1] transition-transform duration-1000"
                  : "opacity-0 scale-100"
                  }`}
              />
            </Link>
            <div className="absolute top-0 left-2 ">
              {stock === "instock" ? (
                <p className="font-bold text-[11px] rounded-full shadow flex items-center justify-center h-[46px] w-[46px] !font-arabic text-black bg-white text-center leading-none uppercase">
                  {t("inStock")}
                </p>
              ) : (
                <p className="font-bold text-xs rounded-full shadow flex items-center justify-center h-[46px] w-[46px] !font-arabic text-black bg-white text-center leading-none">
                  {t("SoldOut")}
                </p>
              )}
            </div>
            {productAttribute &&
              productAttribute.visible &&
              productAttribute.variation && (
                <ProductSelectionSheet
                  isOpen={isSheetOpen}
                  onClose={() => {
                    setSelectProductId(null);
                    setIsSheetOpen(false);
                  }}
                  productId={productId}
                  optionName={productAttribute.name}
                  options={productAttribute.options}
                  selectedVariant={selectedVariant}
                  onSelectVariant={(variant) => setSelectedVariant(variant)}
                />
              )}

            <div
              className={`hidden lg:block absolute bottom-0 left-0 w-full h-[38px] overflow-hidden ${selectProductId === productId && "z-[20]"
                }`}
            >
              <div
                className={`h-full bg-primary w-full text-center font-arabic text-white duration-500 ${hoveredProductId === productId ||
                  selectProductId === productId
                  ? " cursor-pointer opacity-90 hover:opacity-100 hover:bg-[#f0864a]"
                  : " opacity-0 pointer-events-none "
                  }`}
              >
                {(selectProductId === productId && isSheetOpen) ? (
                  <p className="pt-2 uppercase" onClick={() => handleAddToCart()}>{t("AddToCart")}</p>
                ) :
                  <div className="group/cart relative h-full flex flex-col items-center justify-center" onClick={() => {
                    setSelectProductId(productId);
                    setIsSheetOpen(true);
                  }}>
                    <p
                      className={`translate-y-3 group-hover/cart:-translate-y-[20px] transition-all duration-200 text-xs sm:text-sm ${selectProductId === productId
                        ? " -translate-y-[20px] "
                        : "  "
                        }`}
                    >
                      {t("SelectOptions")}
                    </p>
                    <p
                      className={`translate-y-[50px] group-hover/cart:-translate-y-3 transition-all duration-200 ${selectProductId === productId
                        ? " -translate-y-3 z-[20] "
                        : "  "
                        } `}

                    >
                      {loading && isSheetOpen ? (
                        <ClipLoader />
                      ) : (
                        <ShoppingCart
                          className="w-4 h-4 sm:w-5 sm:h-5"
                        />
                      )}
                    </p>
                  </div>
                }
              </div>
            </div>

            <div className="hidden lg:grid absolute top-2 right-2 rounded-lg  place-content-center">
              <div
                className={`h-[100px] sm:h-[135px] w-[35px] sm:w-[45px] text-center font-arabic text-gray-700 duration-500 ${hoveredProductId === productId ||
                  selectProductId === productId
                  ? "!translate-y-[0px] shadow shadow-gray-300 p-2 bg-white"
                  : "opacity-0 pointer-events-none translate-x-[50px]"
                  }`}
              >
                <div className=" group/cart h-full z-10">
                  <TooltipProvider delayDuration={0}>
                    <div className="flex flex-col justify-between items-center h-full">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Shuffle className="cursor-pointer w-[15px] sm:w-[20px]" />
                        </TooltipTrigger>
                        <TooltipContent
                          sideOffset={15}
                          side="left"
                          className="bg-black"
                        >
                          <p className="text-xs sm:text-sm">Compare</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Search
                            className="cursor-pointer w-[15px] sm:w-[20px]"
                            onClick={() => setIsQuickViewOpen(true)}
                          />
                        </TooltipTrigger>
                        <TooltipContent
                          sideOffset={15}
                          side="left"
                          className="bg-black"
                        >
                          <p className="text-xs sm:text-sm">Quickview</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          {wishList.includes(productId) ? (
                            <p className="w-[15px] sm:w-[20px]">✔</p>
                          ) : (
                            <Heart
                              className="cursor-pointer w-[15px] sm:w-[20px]"
                              onClick={() => {
                                setWishList((prev) => [...prev, productId]);
                              }}
                            />
                          )}
                        </TooltipTrigger>
                        <TooltipContent
                          sideOffset={15}
                          side="left"
                          className="bg-black"
                        >
                          <p className="text-xs sm:text-sm">Add to wishlist</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </TooltipProvider>
                </div>
              </div>
            </div>
            {/* mobile */}
            <div className="lg:hidden absolute right-6 grid place-content-center rounded-full shadow-md h-[30px] w-[30px]">
              {wishList.includes(productId) ? (
                "✔"
              ) : (
                <Heart
                  className="cursor-pointer w-[15px]"
                  onClick={() => {
                    setWishList((prev) =>
                      prev.includes(productId)
                        ? prev.filter((p) => p !== productId)
                        : [...prev, productId]
                    );
                  }}
                />
              )}
            </div>

            <div
              onClick={() => {
                setSelectProductId(productId);
                setIsSheetOpen(true);
              }}
              className={`lg:hidden absolute left-2 p-1 bottom-0 grid place-content-center bg-primary shadow-md h-[35px] ${selectProductId === productId
                ? "w-full z-[20] h-[45px]"
                : "w-[35px]"
                } `}
            >
              {loading && isSheetOpen ? (
                <ClipLoader />
              ) : (
                <ShoppingCart
                  onClick={() => {
                    const isSelected = selectProductId === productId;
                    const isSheetOpenTrue = isSheetOpen;
                    if (isSelected && isSheetOpenTrue) {
                      handleAddToCart();
                    }
                  }}
                  className="cursor-pointer w-full text-white"
                />
              )}
            </div>
          </div>

          <div className="text-center bg-white mt-2 ">
            <Link href={`/product/${slug}`} className="text-center">
              <h2 className="text-[12px] sm:text-[14px] font-arabic text-gray-800">
                {name}
              </h2>
            </Link>
            {/* <p className="text-[11px] sm:text-[13.3px] text-gray-500 overflow-ellipsis">{description}</p> */}
            {currentCategories?.map((category, index) => (
              <span key={category.id} className="text-[13.3px] text-[#a5a5a5]">
                <Link
                  href={getCategoryPathByIdFromRecord(
                    category.id,
                    slugToCategoryRecord
                  )}
                  rel="tag"
                  className="hover:underline"
                >
                  {category.name}
                </Link>
                {index < currentCategories.length - 1 && ", "}
              </span>
            ))}
            <p className="text-[12px] sm:text-[14px] text-primary font-bold">
              {(productAttribute?.options?.length || 0) > 1 && (
                <span>{language === "en" ? "From" : "من"}</span>
              )}{" "}
              {price} {currency}
            </p>
          </div>
        </div>
        <ProductDrawer
          open={isQuickViewOpen}
          onOpenChange={setIsQuickViewOpen}
          product={productData}
          optionName={productAttribute?.visible && productAttribute?.variation
            ? productAttribute?.name
            : ""}
          options={
            productAttribute?.visible && productAttribute?.variation
              ? productAttribute.options
              : []
          }
        />
      </>
    );
  }

  return null;
};

export default RenderImageAndProducts;
