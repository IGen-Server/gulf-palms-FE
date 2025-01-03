"use client";

import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";

export default function PriceSlider() {
  const [minValue, set_minValue] = useState(450);
  const [maxValue, set_maxValue] = useState(1450);
  const handleInput = (e: {
    min?: number;
    max?: number;
    minValue: any;
    maxValue: any;
  }) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

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
        <button className="text-[12px] px-[14px] py-[5px] bg-gray-100">
          Filter
        </button>
      </div>
    </div>
  );
}
