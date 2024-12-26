import React from "react";
import RenderImageAndProducts from "../common/RenderImageAndProducts";
import CustomCarousel from "../common/CustomCarousel";
import ImageTextCard from "../common/ImageTextCard";

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
    name: "Red Sneakers",
    description: "Stylish red sneakers for casual wear.",
    price: 49.99,
    productId: "P003",
  },
  {
    renderType: "product",
    imageFileOrUrl: "",
    images: ["https://gulfpalms.com/wp-content/uploads/2023/10/18-430x430.jpg"],
    name: "Blue Denim Jacket",
    description: "Classic denim jacket for all seasons.",
    price: 79.99,
    productId: "P004",
  },
];

const topLayer = (
  <div className="z-[100] w-[550px] p-3">
    <div className="pb-[50px] space-y-[10px] text-center">
      <p className="text-gray-800 text-xl">GULF PALMS</p>
      <p className="text-gray-800 font-bold text-[29px]">PALMS PRODUCTS</p>
      <p className="text-gray-800  text-[13px]">
        Our Team are constantly working to keep the lead in the Kuwaiti market
        through establishing our vision and missions
      </p>
    </div>
    <CustomCarousel
      slidesToShow={2}
      slidesToScroll={2}
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

export default function ProductsShowCase() {
  return (
    <div className="h-[1200px]">
      <ImageTextCard
        leftContent={{
          type: "image",
          src: "https://gulfpalms.com/wp-content/uploads/2023/06/3-slide-img.jpg",
          bgColor: "bg-white",
        }}
        rightContent={{
          type: "component",
          component: topLayer,
        }}
      />
      <ImageTextCard
        rightContent={{
          type: "image",
          src: "https://gulfpalms.com/wp-content/uploads/2021/09/2-slide-img.jpg",
          bgColor: "bg-white",
        }}
        leftContent={{
          type: "component",
          component: topLayer,
        }}
      />
    </div>
  );
}
