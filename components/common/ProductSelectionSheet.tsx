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
  onSelectVariant?: (variant: string) => void
}

const ProductSelectionSheet: React.FC<ProductSelectionSheetProps> = ({
  isOpen,
  onClose,
  productId,
  optionName,
  options = [],
  selectedVariant,
  onSelectVariant
}) => {
  const { t, i18n: { language } } = useTranslation("common");

  console.log(options);


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
        <div className={`flex flex-col ${language === " en" ? "items-start" : "items-end"} gap-2`}>
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
        </div>
      </div>
    </div>
  )
}

export default ProductSelectionSheet
