"use client";

import React from "react";
import RenderImageAndProducts from "../common/RenderImageAndProducts";
import CustomCarousel from "../common/CustomCarousel";
import { extractCurrency } from "@/services/utility/utility.service";

const products = [
  {
    renderType: "product",
    imageFileOrUrl: "https://gulfpalms.com/wp-content/uploads/2023/08/Kalanchoe-Height-25CM-2-300x300.jpg",
    images: [
      "https://gulfpalms.com/wp-content/uploads/2023/10/39-800x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/12/w600by800-thumb-1.jpg",
    ],
    name: "Red Sneakers",
    description: "Stylish red sneakers for casual wear.",
    price: 49.99,
    productId: "P001",
    slug: "",
    price_html: "",
    categories: [],
    attributes: []
  },
  {
    renderType: "product",
    imageFileOrUrl: "https://gulfpalms.com/wp-content/uploads/2023/08/Hibiscus-300x300.jpg",
    images: [
      "https://gulfpalms.com/wp-content/uploads/2023/10/39-800x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/40-800x800.jpg",
    ],
    name: "Blue Denim Jacket",
    description: "Classic denim jacket for all seasons.",
    price: 79.99,
    productId: "P003",
    slug: "",
    price_html: "",
    categories: [],
    attributes: []
  },
  {
    renderType: "product",
    imageFileOrUrl: "https://gulfpalms.com/wp-content/uploads/2023/08/Coleus-Pot-25CM-2-300x300.jpg",
    images: [
      "https://gulfpalms.com/wp-content/uploads/2023/10/39-800x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/40-800x800.jpg",
    ],
    name: "Blue Denim Jacket",
    description: "Classic denim jacket for all seasons.",
    price: 79.99,
    productId: "P004",
    slug: "",
    price_html: "",
    categories: [],
    attributes: []
  },
  {
    renderType: "product",
    imageFileOrUrl: "https://gulfpalms.com/wp-content/uploads/2023/08/Monstera-Deliciosa-Height-150CM64-300x300.jpg",
    images: [
      "https://gulfpalms.com/wp-content/uploads/2023/10/39-800x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/40-800x800.jpg",
    ],
    name: "Blue Denim Jacket",
    description: "Classic denim jacket for all seasons.",
    price: 79.99,
    productId: "P005",
    slug: "",
    price_html: "",
    categories: [],
    attributes: []
  },
  {
    renderType: "product",
    imageFileOrUrl: "https://gulfpalms.com/wp-content/uploads/2023/08/Ficus-Benjamina-Golden-King-Pot-30CM-2-300x300.jpg",
    images: [
      "https://gulfpalms.com/wp-content/uploads/2023/10/39-800x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/40-800x800.jpg",
    ],
    name: "Blue Denim Jacket",
    description: "Classic denim jacket for all seasons.",
    price: 79.99,
    productId: "P006",
    slug: "",
    price_html: "",
    categories: [],
    attributes: []
  },
  {
    renderType: "product",
    imageFileOrUrl: "https://gulfpalms.com/wp-content/uploads/2023/08/Sansevieria-Green-Pot-18CM-1-300x300.jpg",
    images: [
      "https://gulfpalms.com/wp-content/uploads/2023/10/39-800x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/40-800x800.jpg",
    ],
    name: "Blue Denim Jacket",
    description: "Classic denim jacket for all seasons.",
    price: 79.99,
    productId: "P007",
    slug: "",
    price_html: "",
    categories: [],
    attributes: []
  },
  {
    renderType: "product",
    imageFileOrUrl: "https://gulfpalms.com/wp-content/uploads/2023/10/8-300x300.jpg",
    images: [
      "https://gulfpalms.com/wp-content/uploads/2023/10/39-800x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/40-800x800.jpg",
    ],
    name: "Blue Denim Jacket",
    description: "Classic denim jacket for all seasons.",
    price: 79.99,
    productId: "P008",
    slug: "",
    price_html: "",
    categories: [],
    attributes: []
  },
  {
    renderType: "product",
    imageFileOrUrl: "https://gulfpalms.com/wp-content/uploads/2023/10/40-300x300.jpg",
    images: [
      "https://gulfpalms.com/wp-content/uploads/2023/10/39-800x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/40-800x800.jpg",
    ],
    name: "Blue Denim Jacket",
    description: "Classic denim jacket for all seasons.",
    price: 79.99,
    productId: "P008",
    slug: "",
    price_html: "",
    categories: [],
    attributes: []
  },
  {
    renderType: "product",
    imageFileOrUrl: "https://gulfpalms.com/wp-content/uploads/2023/10/30-300x300.jpg",
    images: [
      "https://gulfpalms.com/wp-content/uploads/2023/10/39-800x800.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/10/40-800x800.jpg",
    ],
    name: "Blue Denim Jacket",
    description: "Classic denim jacket for all seasons.",
    price: 79.99,
    productId: "P009",
    slug: "",
    price_html: "",
    categories: [],
    attributes: []
  },
  {
    renderType: "product",
    imageFileOrUrl: "https://gulfpalms.com/wp-content/uploads/2023/10/18-300x300.jpg",
    images: [
      "https://gulfpalms.com/wp-content/uploads/2023/08/Coleus-Pot-25CM-2-300x300.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/08/Sansevieria-Green-Pot-18CM-1-300x300.jpg",
    ],
    name: "Blue Denim Jacket",
    description: "Classic denim jacket for all seasons.",
    price: 79.99,
    productId: "P010",
    slug: "",
    price_html: "",
    categories: [],
    attributes: []
  },
];

export default function RecentProducts() {
  return (
    <div className="z-[50]">
      <div className="pb-[50px] space-y-[10px]">
        <p className="text-[#777777] md:text-[30px] font-sans font-light">
          NEWLY ADDED
        </p>
        <p className="text-[#242424] font-bold md:text-[36px] font-arabic">
          RECENT PRODUCTS
        </p>
        <p className="text-[#777777] md:text-[16px] font-sans">
          Providing outstanding agricultural products, services and solutions
          for our clients both individuals and institutions.{" "}
        </p>
      </div>
      <CustomCarousel
        slidesToShow={4}
        slidesToScroll={4}
        MobileSlidesNumber={1}
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
              slug={product.slug} 
              currency={extractCurrency(product.price_html)} 
              currentCategories={product.categories} 
              productAttribute={product.attributes ? product.attributes[0] : null}
            />
          ),
        }))}
      />
    </div>
  );
}
