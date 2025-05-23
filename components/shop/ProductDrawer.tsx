/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
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
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProductCategoryModel } from "@/models/product/product";
import { useCart } from "@/providers/CartProvider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { DirectionProvider } from '@radix-ui/react-direction';
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { CartService } from "@/services/api/cart.service";
import { useUserDataProvider } from "@/providers/UserDataProvider";

export const shareLinks = {
  whatsapp:
    "https://api.whatsapp.com/send?text=https%3A%2F%2Fgulfpalms.com%2Fen%2Fproduct%2Fbougainvillea-net%2F",
  linkedin:
    "https://www.linkedin.com/shareArticle?mini=true&url=https://gulfpalms.com/en/product/bougainvillea-net/",
  mail: "mailto:?subject=Check%20this%20https://clone.gulfpalms.com/en/product/sansevieria-green/",
  facebook:
    "https://www.facebook.com/sharer/sharer.php?u=https://clone.gulfpalms.com/en/product/sansevieria-green/",
};

interface ProductDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    images?: any[];
    sku: string;
    categories: ProductCategoryModel[];
    quantity?: number;
    slug?: any;
  };
  optionName: string;
  options?: any;
}

export function ProductDrawer({
  open,
  onOpenChange,
  product,
  optionName,
  options = [],
}: ProductDrawerProps) {
  const [quantity, setQuantity] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, i18n: { language } } = useTranslation();
  const { initializeCartItems, addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<string>("");
  const selectedVariationDetails = options.find((variation: any) => variation.id === selectedVariant);
  const { isAuthenticated } = useUserDataProvider();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const images = product?.images || [{ src: "/placeholder.svg" }];

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const axiosInstanceWithoutLoader = CreateAxiosInstanceWithLoader(false, false);
  const [isAddingCartItem, setIsAddingCartItem] = useState(false);
  const handleAddToCart = async (productData: any) => {
    // await addToCart({

    if (options.length > 0 && !selectedVariant) {
      alert("Please select some product options before adding this product to your cart.");
      return;
    }

    if (!isAuthenticated) {
      addToCart({
        id: selectedVariant ? +selectedVariant : product.id,
        name: product.name as string,
        price: Number(product.price),
        quantity: quantity || 1,
        image: product.images?.[0]?.src || product.image,
      });
      return;
    }

    try {
      setIsAddingCartItem(true);
      const response = await CartService.AddCartItem(+productData.variationId === 0 ? productData.id : +productData.variationId, productData.quantity, axiosInstanceWithoutLoader);
      console.log(response);
      initializeCartItems(response);

      setIsAddingCartItem(false);
    } catch (error) {
      console.error('Error adding cart item:', error);
      setIsAddingCartItem(false);
    }
  };

  const Content = (
    <div className="relative">
      <div className="flex flex-col md:flex-row gap-8 p-6">
        {/* Image Section with View Details Button */}
        <div className="relative w-full md:w-1/2 aspect-square bg-white rounded-lg group overflow-hidden">
          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-1 z-10 bg-white/70 hover:bg-white transition"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Display only the current image */}
          <img
            src={images[currentIndex]?.src}
            alt={product?.name || "Product Image"}
            className="object-contain w-full h-full p-4 transition-opacity duration-300"
          />

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 z-10 bg-white/70 hover:bg-white transition"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* View Details Button - Appears on Hover */}
          <div className="absolute inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
            <Link
              href={`/product/${product?.slug}/`}
              className=" w-full h-full"
            >
              <Button className="w-full bg-[#fdb777] text-white hover:bg-[#fda757] font-semibold uppercase">
                {t("ViewDetails")}
              </Button>
            </Link>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col w-full md:w-1/2">
          <div className="text-right">
            <Link href={`/product/${product.slug}`} className="text-[26px] text-[#333] hover:opacity-65 duration-300 font-semibold mb-2">{product.name}</Link>
            <p className="text-[21.7px] font-bold mb-6 text-primary">
              {(options?.length || 0) > 1 && <span>{language === "en" ? "From" : "من"}</span>}{" "}
              {typeof product.price === "number" ? product.price.toFixed(3) : ""} KD <span className="">KD</span>{" "}
            </p>
          </div>

          <div
            className="text-lightGray mb-8 text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />

          {options?.length > 0 && (
            <div className="flex items-center gap-3 space-y-2 pb-4">
              <label className="text-sm font-semibold text-gray-700">{optionName}:</label>
              <DirectionProvider dir={language === "en" ? "ltr" : "rtl"}>
                <Select value={selectedVariant} onValueChange={setSelectedVariant}>
                  <SelectTrigger className="w-full bg-white border-gray-300">
                    <SelectValue placeholder={t("Choose_an_option")} className="placeholder-lightGray" />
                  </SelectTrigger>
                  <SelectContent>
                    {options?.map((option: any) => (
                      <SelectItem key={option.id} value={option.id}>
                        {option.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </DirectionProvider>
              {selectedVariant && <div className={`flex items-center gap-1 text-lightGray  hover:text-[#242424] cursor-pointer`} onClick={() => setSelectedVariant("")}>
                <X size={12} strokeWidth={1.5} />
                <p className="">{language === "en" ? "Clear" : "إزالة"}</p>
              </div>}
            </div>
          )}

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out flex items-center gap-3 ${selectedVariant ? "max-h-[100px] opacity-100" : "max-h-0 opacity-0"
              }`}
          >
            <p className={`w-max font-semibold text-[1.0625rem] text-primary py-2 ${language === "ar" ? "flex flex-row-reverse justify-end" : ""
              }`}>
              <span>{selectedVariationDetails?.price}</span>
              <span className="mx-1">KD</span>
            </p>
            {selectedVariationDetails?.stock_status === "outofstock" && <p className="font-semibold text-sm text-[#B50808]">{t("shop.outOfStock")}</p>}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            {/* Quantity Selector */}
            <div className="flex items-center mb-8">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-12 h-9 border rounded-md flex items-center justify-center hover:bg-gray-50"
              >
                <Minus className="h-4 w-4" />
              </button>

              <Input
                type="number"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Number.parseInt(e.target.value) || 1)
                }
                className="w-12 text-center p-0"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-12 h-9 border rounded-md flex items-center justify-center hover:bg-gray-50"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <Button
              className="flex-1 bg-primary hover:bg-[#fda757] text-white font-semibold"
              onClick={() => {
                let cartProduct = { ...product, quantity: quantity || 1, variationId: +selectedVariant };
                handleAddToCart(cartProduct);
              }}
            >
              {t("AddToCart")}
            </Button>
            <Button
              className="flex-1 bg-primary hover:bg-[#fda757] text-white font-semibold"
              onClick={() => console.log("Buy now")}
            >
              {t("BuyNow")}
            </Button>
          </div>

          {/* Product Details */}
          <div className="space-y-2 text-sm mb-8">
            <p>
              <span className="font-semibold text-[#333]">{t("SKU")}:</span>{" "}
              <span className="text-lightGray">{product.sku}</span>
            </p>
            <p>
              <span className="font-semibold text-[#333]">{t("Categories")}:</span>{" "}
              <span className="text-lightGray">
                {product.categories.map((cat, i) => (
                  <Link
                    href={`/product-category/ornamental-plants/${cat.name}`}
                    key={i}
                    className="hover:text-[#fdb777] cursor-pointer"
                  >
                    {cat.name}
                    {i < product.categories.length - 1 ? ", " : ""}
                  </Link>
                ))}
              </span>
            </p>
          </div>

          {/* Share Section */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold">{t("Share")}:</span>
            <div className="flex gap-2">
              <Link href={shareLinks.facebook} target="_blank">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-[#fdb777]"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
              </Link>
              <Link href={shareLinks.mail} target="_blank">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-[#fdb777]"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
              <Link href={shareLinks.linkedin} target="_blank">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-[#fdb777]"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href={shareLinks.whatsapp} target="_blank">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-[#fdb777]"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent side="bottom" className="h-[90vh] overflow-y-auto">
          {Content}
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">{Content}</DialogContent>
    </Dialog>
  );
}
