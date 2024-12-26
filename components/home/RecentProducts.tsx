"use client";

import React from "react";
import RenderImageAndProducts from "../common/RenderImageAndProducts";
import CustomCarousel from "../common/CustomCarousel";

const products = [
  {
    renderType: "product",
    imageFileOrUrl: "",
    images: ["https://gulfpalms.com/wp-content/uploads/2023/10/18-430x430.jpg"],
    name: "Red Sneakers",
    description: "Stylish red sneakers for casual wear.",
    price: 49.99,
    productId: "P001",
  },
  {
    renderType: "product",
    imageFileOrUrl: "",
    images: ["https://gulfpalms.com/wp-content/uploads/2023/10/18-430x430.jpg"],
    name: "Blue Denim Jacket",
    description: "Classic denim jacket for all seasons.",
    price: 79.99,
    productId: "P002",
  },
];

export default function RecentProducts() {
  return (
    <div className="z-[100]">
      <div className="pb-[50px] space-y-[10px]">
        <p className="text-gray-800 text-xl">NEWLY ADDED</p>
        <p className="text-gray-800 font-bold text-[29px]">RECENT PRODUCTS</p>
        <p className="text-gray-800  text-[13px]">
          Providing outstanding agricultural products, services and solutions
          for our clients both individuals and institutions.{" "}
        </p>
      </div>
      <CustomCarousel
        slidesToShow={4}
        slidesToScroll={4}
        data={products.map((product) => ({
          component: (
            <RenderImageAndProducts
              key={product.productId}
              renderType="product"
              imageFileOrUrl={product.imageFileOrUrl}
              images={product.images}
              name={product.name}
              description={product.description}
              price={product.price}
              productId={product.productId}
            />
          ),
        }))}
      />
    </div>
  );
}
