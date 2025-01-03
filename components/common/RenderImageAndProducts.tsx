/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { Ellipsis, ShoppingCart } from "lucide-react";

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

interface HoverProduct {
  position: { x: number; y: number }; // Position on the image (absolute positioning)
  imgUrl: string; // Image URL for the hover product
  hoveredHref: string; // Image URL for the hover product
  hoveredTitle: string;
  productId: string; // Product ID
  price: string; // Product price
  description: string; // Product description
}

interface RenderImageAndProductsProps {
  renderType: "image" | "product"; // Determines the rendering type
  imageFileOrUrl: string; // URL or file path of the image
  hoverProducts?: HoverProduct[]; // Array of hoverable product data (for "image" type)
  images?: string[]; // Two images for hover effect (for "product" type)
  name?: string; // Product name
  description?: string; // Product description
  price?: number; // Product price
  productId: string; // Product ID
}

const RenderImageAndProducts: React.FC<RenderImageAndProductsProps> = ({
  renderType,
  imageFileOrUrl,
  hoverProducts,
  images,
  name,
  description,
  price,
  productId,
}) => {
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);
  const [expandedDescriptionId, setExpandedDescriptionId] = useState<
    string | null
  >(null);

  if (renderType === "image") {
    return (
      <div
        className="relative inline-block"
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${imageFileOrUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "",
        }}
      >
        {/* Main Image */}
        {/* <img src={imageFileOrUrl} alt="Main" className="w-full h-auto" /> */}

        {/* Hover Products */}
        {hoverProducts?.map((product, index) => (
          <HoverCard key={index}>
            <div
              className="absolute"
              style={{
                top: `${product.position.y}%`,
                left: `${product.position.x}%`,
              }}
            >
              {/* Position Marker */}

              <HoverCardTrigger
                onMouseEnter={() => setHoveredProductId(product.productId)}
                onMouseLeave={() => setHoveredProductId(null)}
              >
                <div className="relative w-[50px] h-[50px] grid place-content-center">
                  <div className="w-[20px] h-[20px] bg-primary rounded-full cursor-pointer grid place-content-center hotspot-btn">
                    <div className="w-[6px] h-[6px] bg-white rounded-full z-10">
                      <p className="hotspot-sonar !animate-ping"></p>
                    </div>
                  </div>
                </div>
              </HoverCardTrigger>

              {/* Hover Product Card */}
              {hoveredProductId === product.productId && (
                <HoverCardContent
                  className="p-4 bg-white shadow-lg border rounded-md text-center font-arabic"
                  onMouseEnter={() => setHoveredProductId(product.productId)}
                  onMouseLeave={() => setHoveredProductId(null)}
                >
                  <img
                    src={product.imgUrl}
                    alt={"image"}
                    className="w-full h-full object-cover mb-2"
                  />
                  <p className="text-[16px] font-semibold text-gray-500">
                    {product.hoveredTitle}
                  </p>
                  <p className="text-sm text-primary font-semibold py-4">
                    {product.price} KD
                  </p>
                  <div
                    className={`text-sm text-gray-500 overflow-hidden transition-all duration-300`}
                    style={{
                      height:
                        expandedDescriptionId === product.productId
                          ? "fit-content"
                          : "70px",
                    }}
                  >
                    {product.description}
                  </div>

                  <div className="h-fit flex flex-col items-center justify-between gap-2 border-t border-gray-100">
                    {/* Toggle Visibility */}
                    <Ellipsis
                      className={
                        expandedDescriptionId === product.productId
                          ? "opacity-0"
                          : "cursor-pointer "
                      }
                      onClick={() =>
                        setExpandedDescriptionId((prevId) =>
                          prevId === product.productId
                            ? null
                            : product.productId
                        )
                      }
                    />
                    <Link
                      href={product.hoveredHref}
                      className="bg-primary text-white text-[12px] px-3 py-2"
                    >
                      ADD TO CARD
                    </Link>
                  </div>
                </HoverCardContent>
              )}
            </div>
          </HoverCard>
        ))}
      </div>
    );
  }

  if (renderType === "product") {
    console.log(hoveredProductId === productId);
    return (
      <div
        className="relative overflow-hidden !w-[260px] !h-[357px] cursor-pointer z-[10]"
        onMouseEnter={() => {
          setHoveredProductId(productId);
        }}
        onMouseLeave={() => setHoveredProductId(null)}
      >
        {/* Product Image */}
        <div
          className={`w-full !h-[280px] duration-700 !overflow-hidden relative`}
        >
          <img
            src={images?.[0]}
            alt={name}
            className={`absolute inset-0 w-full h-full object-cover ${
              hoveredProductId === productId ? "opacity-0 " : "opacity-100"
            }`}
          />
          {/* Second Image */}
          <img
            src={images?.[1]}
            alt={name}
            className={`absolute inset-0 w-full h-full object-cover  ${
              hoveredProductId === productId
                ? "opacity-100 scale-[1.1] transition-transform duration-1000"
                : "opacity-0 scale-100"
            }`}
          />

          <div className="absolute bottom-0 left-0 w-full h-[38px] overflow-hidden">
            <div
              className={`h-full bg-primary w-full text-center font-arabic text-white duration-500 ${
                hoveredProductId === productId
                  ? "!translate-y-[0px] cursor-pointer opacity-90"
                  : "opacity-0 pointer-events-none translate-y-[38px]"
              }`}
            >
              <div className="group/cart">
                <p className="translate-y-[8px] group-hover/cart:translate-y-[38px] transition-all duration-1000">
                  SELECT OPTIONS
                </p>
                <p className="">
                  <ShoppingCart className="-translate-y-[50px] group-hover/cart:-translate-y-[15px] group-hover/cart:bg-opacity-100 w-full place-content-center transition-all duration-1000" />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`duration-500 ${
            hoveredProductId === productId ? "" : "opacity-0"
          } `}
        >
          <div className="absolute bg-white w-[45px] top-2 right-2 rounded-lg opacity-90 grid place-content-center py-2 ">
            <TooltipProvider>
              <div className="space-y-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Shuffle className="cursor-pointer w-[20px]" />
                  </TooltipTrigger>
                  <TooltipContent
                    sideOffset={15}
                    side="left"
                    className="bg-black"
                  >
                    <p>Compare</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Search className="cursor-pointer w-[20px]" />
                  </TooltipTrigger>
                  <TooltipContent
                    sideOffset={15}
                    side="left"
                    className="bg-black"
                  >
                    <p>Quickview</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Heart className="cursor-pointer w-[20px]" />
                  </TooltipTrigger>
                  <TooltipContent
                    sideOffset={15}
                    side="left"
                    className="bg-black"
                  >
                    <p>Add to wishlist</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>
        </div>

        {/* Product Details */}
        <div className="text-center bg-white mt-2">
          <h2 className="text-[14px] font-arabic text-gray-800">{name}</h2>
          <p className="text-[13.3px] text-gray-500 overflow-ellipsis">
            {description}
          </p>
          <p className="text-[14px] text-primary font-bold">From ${price}</p>
        </div>
      </div>
    );
  }

  return null;
};

export default RenderImageAndProducts;
