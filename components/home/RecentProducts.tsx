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
  {
    renderType: "product",
    imageFileOrUrl: "",
    images: ["https://gulfpalms.com/wp-content/uploads/2023/10/18-430x430.jpg"],
    name: "Green Backpack",
    description: "Durable backpack for travel and school.",
    price: 39.99,
    productId: "P003",
  },
  {
    renderType: "product",
    imageFileOrUrl: "",
    images: ["https://gulfpalms.com/wp-content/uploads/2023/10/18-430x430.jpg"],
    name: "Orange Watch",
    description: "Stylish wristwatch with a vibrant orange strap.",
    price: 59.99,
    productId: "P004",
  },
  {
    renderType: "product",
    imageFileOrUrl: "",
    images: ["https://gulfpalms.com/wp-content/uploads/2023/10/18-430x430.jpg"],
    name: "Purple Hoodie",
    description: "Cozy hoodie perfect for cool weather.",
    price: 69.99,
    productId: "P005",
  },
  {
    renderType: "product",
    imageFileOrUrl: "",
    images: ["https://gulfpalms.com/wp-content/uploads/2023/10/18-430x430.jpg"],
    name: "Black Sneakers",
    description: "Comfortable black sneakers for everyday use.",
    price: 55.99,
    productId: "P006",
  },
  {
    renderType: "product",
    imageFileOrUrl: "",
    images: ["https://gulfpalms.com/wp-content/uploads/2023/10/18-430x430.jpg"],
    name: "White T-Shirt",
    description: "Basic white T-shirt made from soft cotton.",
    price: 19.99,
    productId: "P007",
  },
  {
    renderType: "product",
    imageFileOrUrl: "",
    images: ["https://gulfpalms.com/wp-content/uploads/2023/10/18-430x430.jpg"],
    name: "Gray Hoodie",
    description: "Warm gray hoodie for chilly evenings.",
    price: 54.99,
    productId: "P008",
  },
  {
    renderType: "product",
    imageFileOrUrl: "",
    images: ["https://gulfpalms.com/wp-content/uploads/2023/10/18-430x430.jpg"],
    name: "Yellow Beanie",
    description: "Soft and cozy yellow beanie for cold weather.",
    price: 15.99,
    productId: "P009",
  },
  {
    renderType: "product",
    imageFileOrUrl: "",
    images: ["https://gulfpalms.com/wp-content/uploads/2023/10/18-430x430.jpg"],
    name: "Brown Leather Belt",
    description: "Stylish leather belt to complement your outfits.",
    price: 34.99,
    productId: "P010",
  },
  {
    renderType: "product",
    imageFileOrUrl: "",
    images: ["https://gulfpalms.com/wp-content/uploads/2023/10/18-430x430.jpg"],
    name: "Blue Scarf",
    description: "Warm and stylish blue scarf for the winter.",
    price: 22.99,
    productId: "P011",
  },
  {
    renderType: "product",
    imageFileOrUrl: "",
    images: ["https://gulfpalms.com/wp-content/uploads/2023/10/18-430x430.jpg"],
    name: "Red Baseball Cap",
    description: "Bright red baseball cap for outdoor activities.",
    price: 18.99,
    productId: "P012",
  },
  {
    renderType: "product",
    imageFileOrUrl: "",
    images: ["https://gulfpalms.com/wp-content/uploads/2023/10/18-430x430.jpg"],
    name: "White Sneakers",
    description: "Classic white sneakers for a clean, fresh look.",
    price: 49.99,
    productId: "P013",
  },
  {
    renderType: "product",
    imageFileOrUrl: "",
    images: ["https://gulfpalms.com/wp-content/uploads/2023/10/18-430x430.jpg"],
    name: "Leather Backpack",
    description: "Elegant leather backpack for professionals.",
    price: 129.99,
    productId: "P014",
  },
  {
    renderType: "product",
    imageFileOrUrl: "",
    images: ["https://gulfpalms.com/wp-content/uploads/2023/10/18-430x430.jpg"],
    name: "Black Watch",
    description: "Sleek black wristwatch for formal occasions.",
    price: 89.99,
    productId: "P015",
  },
];

export default function RecentProducts() {
  return (
    <div className="z-[100]">
      <div>
        <p className="text-gray-800 text-xl">NEWLY ADDED</p>
        <p className="text-gray-800 font-bold text-[29px]">RECENT PRODUCTS</p>
        <p className="text-gray-800  text-[13px]">
          Providing outstanding agricultural products, services and solutions
          for our clients both individuals and institutions.{" "}
        </p>
      </div>
      <RenderImageAndProducts
        renderType="product"
        imageFileOrUrl={""}
        images={[
          "https://gulfpalms.com/wp-content/uploads/2023/10/18-430x430.jpg",
        ]}
        name={"White T-Shirt"}
        description={"Basic white T-shirt made from soft cotton."}
        price={19.99}
        productId={"P007"}
      />
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
