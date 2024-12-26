/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Heart, Search, Shuffle } from "lucide-react";

interface HoverProduct {
  position: { x: number; y: number }; // Position on the image (absolute positioning)
  imgUrl: string; // Image URL for the hover product
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

  if (renderType === "image") {
    return (
      <div
        className="relative inline-block"
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${imageFileOrUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Main Image */}
        {/* <img src={imageFileOrUrl} alt="Main" className="w-full h-auto" /> */}

        {/* Hover Products */}
        {hoverProducts?.map((product, index) => (
          <HoverCard key={index}>
            <div
              className="absolute z-[10]"
              style={{
                top: `${product.position.y}%`,
                left: `${product.position.x}%`,
              }}
            >
              {/* Position Marker */}
              <HoverCardTrigger
                className="w-8 h-8 bg-primary rounded-full cursor-pointer animate-pulse grid place-content-center"
                onMouseEnter={() => setHoveredProductId(product.productId)}
                onMouseLeave={() => setHoveredProductId(null)}
              >
                <p className="w-3 h-3 bg-white rounded-full"></p>
              </HoverCardTrigger>

              {/* Hover Product Card */}
              {hoveredProductId === product.productId && (
                <HoverCardContent className="p-4 bg-white shadow-lg border rounded-md z-[50]">
                  <img
                    src={product.imgUrl}
                    alt={product.description}
                    className="w-full h-full object-cover mb-2"
                  />
                  <p className="text-sm font-semibold">{product.description}</p>
                  <p className="text-sm text-gray-600">${product.price}</p>
                </HoverCardContent>
              )}
            </div>
          </HoverCard>
        ))}
      </div>
    );
  }
  console.log({ hoveredProductId });
  if (renderType === "product") {
    return (
      <div
        className="relative overflow-hidden !w-[260px] !h-[376px] cursor-pointer z-[10]"
        onMouseEnter={() => {
          setHoveredProductId(productId);
          console.log("hovered");
        }}
        onMouseLeave={() => setHoveredProductId(null)}
      >
        {/* Product Image */}
        <div
          className={`w-full !h-[280px] duration-300 overflow-hidden relative ${
            hoveredProductId === productId ? "scale-[1.2]" : "scale-100"
          }`}
        >
          <img
            src={(images?.length && images.length > 0 && images?.[0]) || ""}
            alt={name}
            className={`w-full h-[250px] object-cover !overflow-hidden `}
          />
        </div>

        {hoveredProductId === productId && (
          <div>
            <div className="h-[280px] w-full bg-black opacity-5 absolute top-0 left-0"></div>
            <div className="absolute bg-white w-[45px] h-[150px] top-2 right-2 rounded-lg opacity-90 grid place-content-center ">
              <div className="flex flex-col gap-3">
                <Shuffle className="cursor-pointer w-8 h-8" />
                <Search className="cursor-pointer w-8 h-8" />
                <Heart className="cursor-pointer w-8 h-8" />
              </div>
            </div>
            <div className="absolute text-white text-lg grid place-content-center bg-primary w-full h-[50px] bottom-[95px] opacity-90 left-0">
              SELECT OPTIONS
            </div>
          </div>
        )}

        {/* Product Details */}
        <div className="text-center !h-[96px] bg-white">
          <h2 className="text-lg font-thin text-black">{name}</h2>
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
