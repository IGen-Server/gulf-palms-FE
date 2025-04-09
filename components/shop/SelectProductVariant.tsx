"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { useCart } from "@/providers/CartProvider";
import { useTranslation } from "react-i18next";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { CartService } from "@/services/api/cart.service";
import { useUserDataProvider } from "@/providers/UserDataProvider";

interface ProductSelectionSheetProps {
  isOpen: boolean;
  onClose: () => void;
  productId: string;
  options: any[];
  product?: any;
  setIsOpen?: any;
  selectedVariant: string;
  onSelectVariant?: (variant: string) => void;
  clearVariant?: () => void;
  setSelectProductId?: any;
}

const SelectProductVariant: React.FC<ProductSelectionSheetProps> = ({
  isOpen,
  onClose,
  productId,
  options = [],
  product,
  setIsOpen,
  setSelectProductId,
  selectedVariant,
  onSelectVariant,
  clearVariant,
}) => {
  const { t, i18n: { language } } = useTranslation("common");
  const { addToCart, initializeCartItems } = useCart();
  const { isAuthenticated } = useUserDataProvider();
  if (!isOpen) return null;

  const selectedVariationDetails = options.find((variation: any) => variation.id === selectedVariant);

  const axiosInstanceWithoutLoader = CreateAxiosInstanceWithLoader(false, false);
  // const [isAddingCartItem, setIsAddingCartItem] = useState(false);
  const handleAddToCart = async () => {

    // console.log(productData.id);
    // console.log(+selectedVariant);
    // console.log(productData.quantity);
    // console.log(productData.price);

    if (options.length > 0 && !selectedVariant) {
      alert("Please select some product options before adding this product to your cart.");
      return;
    }

    if (!isAuthenticated) {
      addToCart({
        ...product,
        id: selectedVariant ? +selectedVariant : product.id,
        quantity: 1,
        image: product.images?.[0]?.src
      });
      return;
    }

    try {
      // setIsAddingCartItem(true);

      // addToCart({
      //   id: product.id,
      //   name: product.name,
      //   price: product.price,
      //   quantity: 1,
      //   image: product.image,
      //   variationId: +selectedVariant
      // });

      const response = await CartService.AddCartItem(selectedVariant ? +selectedVariant : product.id, 1, axiosInstanceWithoutLoader);
      console.log(response);

      initializeCartItems(response);
      setIsOpen(false);
      setSelectProductId(null)

      // setIsAddingCartItem(false);
    } catch (error) {
      console.error('Error adding cart item:', error);
      // setIsAddingCartItem(false);
    }
  };


  // const handleAddToCart = () => {
  //   addToCart({
  //     id: product.id,
  //     name: product.name,
  //     price: product.price,
  //     quantity: 1,
  //     image: product.image,
  //     variationId: +selectedVariant
  //   });
  //   setIsOpen(false);
  //   setSelectProductId(null)
  // };

  return (
    <div className="absolute -top-[50px] inset-0 w-full h-[328px] flex flex-col justify-center pb-7 bg-white/90 z-20">
      {/* Close and Wishlist buttons */}
      <div className="absolute top-[3.5rem] w-full px-4 flex justify-end z-10">
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-white shadow-md grid place-content-center"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* Size Selection */}
      <div className="w-full flex flex-col items-center px-5 translate-y-1/2">
        <div className="w-full h-full flex flex-col gap-2">
          <label className="text-sm !text-center font-medium text-gray-700">Size:</label>
          <Select value={selectedVariant} onValueChange={onSelectVariant}>
            <SelectTrigger className="min-w-full bg-white border-gray-300">
              <SelectValue placeholder={t("Choose_an_option")} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.id} value={option.id}>
                  {option.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {selectedVariant && <div className={`flex items-center gap-1 text-lightGray  hover:text-[#242424] cursor-pointer`} onClick={() => clearVariant && clearVariant()}>
          <X size={12} strokeWidth={1.5} />
          <p className="">{language === "en" ? "Clear" : "إزالة"}</p>
        </div>}
        {selectedVariant && <div
          className={`overflow-hidden transition-all duration-300 ease-in-out flex items-center gap-3 pt-7 ${selectedVariant ? "max-h-[100px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <p className={`w-max font-semibold text-[1.0625rem] text-primary py-2 ${language === "ar" ? "flex flex-row-reverse justify-end" : ""
            }`}>
            <span>{selectedVariationDetails?.price}</span>
            <span className="mx-1">KD</span>
          </p>
          {selectedVariationDetails?.stock_status === "outofstock" && <p className="font-semibold text-sm text-[#B50808]">{t("shop.outOfStock")}</p>}
        </div>}
      </div>
      <Button className="absolute -bottom-7 w-full hover:bg-primary h-[45px]"
        onClick={() => handleAddToCart()}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default SelectProductVariant;
