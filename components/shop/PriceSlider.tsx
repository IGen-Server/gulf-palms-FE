"use client";

import React, { useEffect, useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { OrderService } from "@/services/api/order.service";
import { ProductService } from "@/services/api/product.service";
import { useTranslation } from "react-i18next";

interface PriceSliderProps {
  setPriceSlider: (key: string, value: any) => void;
  minPrice: null | number;
  maxPrice: null | number;
}

export default function PriceSlider({ setPriceSlider, minPrice, maxPrice }: PriceSliderProps) {
  const [minValue, set_minValue] = useState(minPrice || 0);
  const [maxValue, set_maxValue] = useState(maxPrice || 2250);
  const { t } = useTranslation("common");

  useEffect(() => {
    set_minValue(minPrice || 0);
    set_maxValue(maxPrice || 2250);
  }, [minPrice, maxPrice]);

  console.log(minValue, maxValue);

  const handleInput = (e: {
    min?: number;
    max?: number;
    minValue: any;
    maxValue: any;
  }) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  function onClickFilter() {
    setPriceSlider('min_price', minValue);
    setPriceSlider('max_price', maxValue);
  }

  return (
    <div className="space-y-4 pb-[30px]">
      <p className="uppercase font-semibold text-base text-[#333]">{t("shop.filterByPrice")}</p>
      <MultiRangeSlider
        min={0}
        max={2250}
        step={1}
        minValue={minValue}
        maxValue={maxValue}
        className="-ml-3"
        onInput={(e) => {
          handleInput(e);
        }}
      />
      <div className="flex items-center justify-between">
        <div className="text-sm">
          <span className="text-lightGray">{t("shop.price")}:</span>{" "}
          <span className="font-semibold text-sm text-primary">
            {minValue} KD — {maxValue} KD
          </span>
        </div>
        <button className="font-semibold uppercase text-[12px] text-[#333] px-[14px] py-[5px] bg-gray-100 hover:bg-gray-200 duration-300" onClick={onClickFilter}>
          {t("shop.filter")}
        </button>
      </div>
    </div>
  );
}
