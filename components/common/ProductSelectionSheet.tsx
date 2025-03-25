"use client";

import React, { Dispatch, SetStateAction } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X } from 'lucide-react'
import { DirectionProvider } from '@radix-ui/react-direction'
import { useTranslation } from 'react-i18next';

interface ProductSelectionSheetProps {
  isOpen: boolean
  onClose: () => void
  productId: string;
  optionName: string;
  options: any[];
  selectedVariant?: string;
  onSelectVariant?: (variant: string) => void;
  clearVariant?: () => void;
  homepage?: boolean;
}

const ProductSelectionSheet: React.FC<ProductSelectionSheetProps> = ({
  isOpen,
  onClose,
  productId,
  optionName,
  options = [],
  selectedVariant,
  onSelectVariant,
  clearVariant,
  homepage = false
}) => {
  const { t, i18n: { language } } = useTranslation("common");

  const selectedVariationDetails = options.find((variation: any) => variation.id === selectedVariant);

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 w-full h-full sm:h-[280px] bg-white/90 z-20">
      {/* Close and Wishlist buttons */}
      <div className="absolute top-0 w-full px-4 flex justify-end z-10">
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-white shadow-md grid place-content-center"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* Size Selection */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%]">
        <div className={`flex flex-col ${language === " en" ? "items-start" : "items-end"} ${homepage ? "items-center" : ""} gap-2`}>
          <label className={`text-sm font-medium text-gray-700`}>{optionName}:</label>
          <DirectionProvider dir={language === "en" ? "ltr" : "rtl"}>
            <Select value={selectedVariant} onValueChange={onSelectVariant}>
              <SelectTrigger className="w-full bg-white border-gray-300">
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
          </DirectionProvider>
          {homepage && selectedVariant && <div className={`flex items-center gap-1 text-lightGray  hover:text-[#242424] cursor-pointer`} onClick={() => clearVariant && clearVariant()}>
            <X size={12} strokeWidth={1.5} />
            <p className="">{language === "en" ? "Clear" : "إزالة"}</p>
          </div>}
          {homepage && selectedVariant && <div
            className={`overflow-hidden transition-all duration-300 ease-in-out flex items-center gap-3 ${selectedVariant ? "max-h-[100px] opacity-100" : "max-h-0 opacity-0"
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
      </div>
    </div>
  )
}

export default ProductSelectionSheet
