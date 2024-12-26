/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

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
  productId?: string; // Product ID
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

  if (renderType === "product") {
    return (
      <div
        className="relative p-4 border border-gray-200 rounded-lg shadow-md w-64"
        onMouseEnter={() => setHoveredProductId(productId || "")}
        onMouseLeave={() => setHoveredProductId(null)}
      >
        {/* Product Image */}
        <img
          src={
            hoveredProductId === productId && images && images.length > 1
              ? images[1]
              : images?.[0]
          }
          alt={name}
          className="w-full h-full object-cover rounded-lg"
        />

        {/* Product Details */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-sm text-gray-600">{description}</p>
          <p className="text-lg font-bold">${price}</p>
        </div>
      </div>
    );
  }

  return null;
};

export default RenderImageAndProducts;
