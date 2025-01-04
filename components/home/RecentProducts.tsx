"use client";

import React from "react";
import RenderImageAndProducts from "../common/RenderImageAndProducts";
import CustomCarousel from "../common/CustomCarousel";

const products = [
  {
    renderType: "product",
    imageFileOrUrl: "",
    images: [
      "https://gulfpalms.com/wp-content/uploads/2023/10/39-800x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/40-800x800.jpg",
    ],
    name: "Red Sneakers",
    description: "Stylish red sneakers for casual wear.",
    price: 49.99,
    productId: "P001",
  },
  {
    renderType: "product",
    imageFileOrUrl: "",
    images: [
      "https://gulfpalms.com/wp-content/uploads/2023/10/39-800x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/40-800x800.jpg",
    ],
    name: "Blue Denim Jacket",
    description: "Classic denim jacket for all seasons.",
    price: 79.99,
    productId: "P003",
  },
  {
    renderType: "product",
    imageFileOrUrl: "",
    images: [
      "https://gulfpalms.com/wp-content/uploads/2023/10/39-800x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/40-800x800.jpg",
    ],
    name: "Blue Denim Jacket",
    description: "Classic denim jacket for all seasons.",
    price: 79.99,
    productId: "P004",
  },
  {
    renderType: "product",
    imageFileOrUrl: "",
    images: [
      "https://gulfpalms.com/wp-content/uploads/2023/10/39-800x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/40-800x800.jpg",
    ],
    name: "Blue Denim Jacket",
    description: "Classic denim jacket for all seasons.",
    price: 79.99,
    productId: "P005",
  },
  {
    renderType: "product",
    imageFileOrUrl: "",
    images: [
      "https://gulfpalms.com/wp-content/uploads/2023/10/39-800x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/40-800x800.jpg",
    ],
    name: "Blue Denim Jacket",
    description: "Classic denim jacket for all seasons.",
    price: 79.99,
    productId: "P006",
  },
  {
    renderType: "product",
    imageFileOrUrl: "",
    images: [
      "https://gulfpalms.com/wp-content/uploads/2023/10/39-800x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/40-800x800.jpg",
    ],
    name: "Blue Denim Jacket",
    description: "Classic denim jacket for all seasons.",
    price: 79.99,
    productId: "P007",
  },
  {
    renderType: "product",
    imageFileOrUrl: "",
    images: [
      "https://gulfpalms.com/wp-content/uploads/2023/10/39-800x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/40-800x800.jpg",
    ],
    name: "Blue Denim Jacket",
    description: "Classic denim jacket for all seasons.",
    price: 79.99,
    productId: "P008",
  },
  {
    renderType: "product",
    imageFileOrUrl: "",
    images: [
      "https://gulfpalms.com/wp-content/uploads/2023/10/39-800x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/40-800x800.jpg",
    ],
    name: "Blue Denim Jacket",
    description: "Classic denim jacket for all seasons.",
    price: 79.99,
    productId: "P008",
  },
  {
    renderType: "product",
    imageFileOrUrl: "",
    images: [
      "https://gulfpalms.com/wp-content/uploads/2023/10/39-800x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/40-800x800.jpg",
    ],
    name: "Blue Denim Jacket",
    description: "Classic denim jacket for all seasons.",
    price: 79.99,
    productId: "P009",
  },
  {
    renderType: "product",
    imageFileOrUrl: "",
    images: [
      "https://gulfpalms.com/wp-content/uploads/2023/10/39-800x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/40-800x800.jpg",
    ],
    name: "Blue Denim Jacket",
    description: "Classic denim jacket for all seasons.",
    price: 79.99,
    productId: "P010",
  },
];

export default function RecentProducts() {
  return (
    <div className="z-[100]">
      <div className="pb-[50px] space-y-[10px]">
        <p className="text-[#777777] text-[30px] font-sans font-light">
          NEWLY ADDED
        </p>
        <p className="text-[#242424] font-bold text-[36px] font-arabic">
          RECENT PRODUCTS
        </p>
        <p className="text-[#777777] text-[16px] font-sans">
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
