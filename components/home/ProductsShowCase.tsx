'use client'

import React from "react";
import RenderImageAndProducts from "../common/RenderImageAndProducts";
import CustomCarousel from "../common/CustomCarousel";
import ImageTextCard from "../common/ImageTextCard";
import { useTranslation } from "react-i18next"; 

const products = [
  {
    renderType: "product",
    imageFileOrUrl: "https://gulfpalms.com/wp-content/uploads/2023/08/Offshoot-Bag-Palm-75-litre-300x300.jpg",
    images: [
      "https://gulfpalms.com/wp-content/uploads/2024/10/%D9%85%D9%84%D9%85%D8%B9-%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/08/Offshoot-Bag-Palm-75-litre-300x300.jpg",
    ],
    name: "Red Sneakers",
    description: "Stylish red sneakers for casual wear.",
    price: 49.99,
    productId: "P001",
  },
  {
    renderType: "product",
    imageFileOrUrl: "https://gulfpalms.com/wp-content/uploads/2023/08/Slide2-1-300x300.jpg",
    images: [
      "https://gulfpalms.com/wp-content/uploads/2024/03/Palms-Pollen-Powder-1.jpg",
      "https://gulfpalms.com/wp-content/uploads/2023/08/Slide2-1-300x300.jpg",
    ],
    name: "Blue Denim Jacket",
    description: "Classic denim jacket for all seasons.",
    price: 79.99,
    productId: "P002",
  },
  {
    renderType: "product",
    imageFileOrUrl: "https://gulfpalms.com/wp-content/uploads/2023/10/18-300x300.jpg",
    images: ["https://gulfpalms.com/wp-content/uploads/2023/10/18-430x430.jpg","https://gulfpalms.com/wp-content/uploads/2023/10/18-300x300.jpg"],
    name: "Red Sneakers",
    description: "Stylish red sneakers for casual wear.",
    price: 49.99,
    productId: "P003",
  },
  {
    renderType: "product",
    imageFileOrUrl: "https://gulfpalms.com/wp-content/uploads/2023/10/8-300x300.jpg",
    images: ["https://gulfpalms.com/wp-content/uploads/2023/10/18-430x430.jpg","https://gulfpalms.com/wp-content/uploads/2023/10/8-300x300.jpg"],
    name: "Blue Denim Jacket",
    description: "Classic denim jacket for all seasons.",
    price: 79.99,
    productId: "P004",
  },
];


export default function ProductsShowCase() {
  const { t } = useTranslation();

  const topLayer = (
    <div className="grid h-full w-full place-content-center">
      <div className="max-lg:w-[85vw] lg:w-[576px] py-3 h-full flex flex-col justify-center items-center">
        <div className="grid place-content-center w-full">
          <div className="pb-[20px] text-center w-[364px]">
            <p className="text-[#777777] text-[30px] font-sans font-light">
              GULF PALMS
            </p>
            <p className="text-[#242424] font-bold text-[36px] font-arabic">
              {/* Translated Product Title */}
              {t("productsShowcase.title")}
            </p>
            <p className="text-[#777777] text-[16px] font-sans">
              {/* Translated Description */}
              {t("productsShowcase.description")}
            </p>
          </div>
        </div>
        <CustomCarousel
          slidesToShow={2}
          slidesToScroll={2}
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
                slug={""}
                currency={""}
                currentCategories={[]}
                productAttribute={null}
              />
            ),
            width: " !w-[218px] ",
          }))}
        />
      </div>
    </div>
  );

  return (
    <div className="grid place-content-center max-w-content mx-auto mt-[50px]">
      <div className="w-[1140px] space-y-[100px]">
        <ImageTextCard
          rightContent={{
            type: "image",
            src: "https://gulfpalms.com/wp-content/uploads/2023/06/3-slide-img.jpg",
            bgColor: "bg-white",
            imgHeight: "h-[706px] lg:max-w-[540px]",
          }}
          leftContent={{
            type: "component",
            component: topLayer,
          }}
          colReversed = {true}
        />
        <ImageTextCard
          leftContent={{
            type: "image",
            src: "https://gulfpalms.com/wp-content/uploads/2021/09/2-slide-img.jpg",
            bgColor: "bg-white",
            imgHeight: "h-[730px] lg:max-w-[540px]",
          }}
          rightContent={{
            type: "component",
            component: topLayer,
          }}
          
        />
      </div>
    </div>
  );
}
