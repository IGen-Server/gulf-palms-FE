"use client";

import React, { useEffect, useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { OrderService } from "@/services/api/order.service";
import { ProductService } from "@/services/api/product.service";
import { useTranslation } from "react-i18next";

interface PriceSliderProps {
  setPriceSlider: (key: string, value: any) => void;
}

export default function PriceSlider({ setPriceSlider }: PriceSliderProps) {

  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(2250);
  const handleInput = (e: {
    min?: number;
    max?: number;
    minValue: any;
    maxValue: any;
  }) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  function onClickFilter () {
    setPriceSlider('min_price', minValue);
    setPriceSlider('max_price', maxValue);
  }

  return (
    <div className="space-y-4 pb-[30px]">
      <p className="uppercase font-semibold text-[16px] ">Filter by price</p>
      <MultiRangeSlider
        min={0}
        max={2250}
        step={1}
        minValue={minValue}
        maxValue={maxValue}
        onInput={(e) => {
          handleInput(e);
        }}
      />
      <div className="flex items-center justify-between">
        <div className="text-sm">
          <span className="text-gray-600 ">Price:</span>{" "}
          <span className="font-semibold">
            {minValue} KD — {maxValue} KD
          </span>
        </div>
        <button className="text-[12px] px-[14px] py-[5px] bg-gray-100" onClick={onClickFilter}>
          Filter
        </button>
      </div>
    </div>
  );
}
