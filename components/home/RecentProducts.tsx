"use client";

import React, { useState, useEffect } from "react";
import RenderImageAndProducts from "../common/RenderImageAndProducts";
import CustomCarousel from "../common/CustomCarousel";
import { extractCurrency } from "@/services/utility/utility.service";
import { useTranslation } from "react-i18next";
import { ProductCategoryModel } from "@/models/product/product";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { ProductService } from "@/services/api/product.service";

// const products = [
//   {
//     renderType: "product",
//     imageFileOrUrl:
//       "https://gulfpalms.com/wp-content/uploads/2023/08/Kalanchoe-Height-25CM-2-300x300.jpg",
//     images: [
//       "https://gulfpalms.com/wp-content/uploads/2023/10/39-800x800.jpg",
//       "https://gulfpalms.com/wp-content/uploads/2023/12/w600by800-thumb-1.jpg",
//     ],
//     name: "Red Sneakers",
//     description: "Stylish red sneakers for casual wear.",
//     price: 49.99,
//     productId: "P001",
//     slug: "",
//     price_html: "",
//     categories: [],
//     attributes: [
//       {
//         variation: true,
//         visible: true,
//         options: ["10", "20", "30"],
//         id: 1,
//         name: "test",
//         slug: "test slug",
//         position: 1,
//       },
//     ],
//   },
//   {
//     renderType: "product",
//     imageFileOrUrl:
//       "https://gulfpalms.com/wp-content/uploads/2023/08/Hibiscus-300x300.jpg",
//     images: [
//       "https://gulfpalms.com/wp-content/uploads/2023/10/39-800x800.jpg",
//       "https://gulfpalms.com/wp-content/uploads/2023/10/40-800x800.jpg",
//     ],
//     name: "Blue Denim Jacket",
//     description: "Classic denim jacket for all seasons.",
//     price: 79.99,
//     productId: "P003",
//     slug: "",
//     price_html: "",
//     categories: [],
//     attributes: [
//       {
//         variation: true,
//         visible: true,
//         options: ["10", "20", "30"],
//         id: 2,
//         name: "test",
//         slug: "test slug",
//         position: 2,
//       },
//     ],
//   },
//   {
//     renderType: "product",
//     imageFileOrUrl:
//       "https://gulfpalms.com/wp-content/uploads/2023/08/Coleus-Pot-25CM-2-300x300.jpg",
//     images: [
//       "https://gulfpalms.com/wp-content/uploads/2023/10/39-800x800.jpg",
//       "https://gulfpalms.com/wp-content/uploads/2023/10/40-800x800.jpg",
//     ],
//     name: "Blue Denim Jacket",
//     description: "Classic denim jacket for all seasons.",
//     price: 79.99,
//     productId: "P004",
//     slug: "",
//     price_html: "",
//     categories: [],
//     attributes: [
//       {
//         variation: true,
//         visible: true,
//         options: ["10", "20", "30"],
//         id: 3,
//         name: "test",
//         slug: "test slug",
//         position: 3,
//       },
//     ],
//   },
//   {
//     renderType: "product",
//     imageFileOrUrl:
//       "https://gulfpalms.com/wp-content/uploads/2023/08/Monstera-Deliciosa-Height-150CM64-300x300.jpg",
//     images: [
//       "https://gulfpalms.com/wp-content/uploads/2023/10/39-800x800.jpg",
//       "https://gulfpalms.com/wp-content/uploads/2023/10/40-800x800.jpg",
//     ],
//     name: "Blue Denim Jacket",
//     description: "Classic denim jacket for all seasons.",
//     price: 79.99,
//     productId: "P005",
//     slug: "",
//     price_html: "",
//     categories: [],
//     attributes: [
//       {
//         variation: true,
//         visible: true,
//         options: ["10", "20", "30"],
//         id: 4,
//         name: "test",
//         slug: "test slug",
//         position: 4,
//       },
//     ],
//   },
//   {
//     renderType: "product",
//     imageFileOrUrl:
//       "https://gulfpalms.com/wp-content/uploads/2023/08/Ficus-Benjamina-Golden-King-Pot-30CM-2-300x300.jpg",
//     images: [
//       "https://gulfpalms.com/wp-content/uploads/2023/10/39-800x800.jpg",
//       "https://gulfpalms.com/wp-content/uploads/2023/10/40-800x800.jpg",
//     ],
//     name: "Blue Denim Jacket",
//     description: "Classic denim jacket for all seasons.",
//     price: 79.99,
//     productId: "P006",
//     slug: "",
//     price_html: "",
//     categories: [],
//     attributes: [
//       {
//         variation: true,
//         visible: true,
//         options: ["10", "20", "30"],
//         id: 5,
//         name: "test",
//         slug: "test slug",
//         position: 5,
//       },
//     ],
//   },
//   {
//     renderType: "product",
//     imageFileOrUrl:
//       "https://gulfpalms.com/wp-content/uploads/2023/08/Sansevieria-Green-Pot-18CM-1-300x300.jpg",
//     images: [
//       "https://gulfpalms.com/wp-content/uploads/2023/10/39-800x800.jpg",
//       "https://gulfpalms.com/wp-content/uploads/2023/10/40-800x800.jpg",
//     ],
//     name: "Blue Denim Jacket",
//     description: "Classic denim jacket for all seasons.",
//     price: 79.99,
//     productId: "P007",
//     slug: "",
//     price_html: "",
//     categories: [],
//     attributes: [
//       {
//         variation: true,
//         visible: true,
//         options: ["10", "20", "30"],
//         id: 6,
//         name: "test",
//         slug: "test slug",
//         position: 6,
//       },
//     ],
//   },
//   {
//     renderType: "product",
//     imageFileOrUrl:
//       "https://gulfpalms.com/wp-content/uploads/2023/10/8-300x300.jpg",
//     images: [
//       "https://gulfpalms.com/wp-content/uploads/2023/10/39-800x800.jpg",
//       "https://gulfpalms.com/wp-content/uploads/2023/10/40-800x800.jpg",
//     ],
//     name: "Blue Denim Jacket",
//     description: "Classic denim jacket for all seasons.",
//     price: 79.99,
//     productId: "P008",
//     slug: "",
//     price_html: "",
//     categories: [],
//     attributes: [
//       {
//         variation: true,
//         visible: true,
//         options: ["10", "20", "30"],
//         id: 7,
//         name: "test",
//         slug: "test slug",
//         position: 7,
//       },
//     ],
//   },
//   {
//     renderType: "product",
//     imageFileOrUrl:
//       "https://gulfpalms.com/wp-content/uploads/2023/10/40-300x300.jpg",
//     images: [
//       "https://gulfpalms.com/wp-content/uploads/2023/10/39-800x800.jpg",
//       "https://gulfpalms.com/wp-content/uploads/2023/10/40-800x800.jpg",
//     ],
//     name: "Blue Denim Jacket",
//     description: "Classic denim jacket for all seasons.",
//     price: 79.99,
//     productId: "P008",
//     slug: "",
//     price_html: "",
//     categories: [],
//     attributes: [
//       {
//         variation: true,
//         visible: true,
//         options: ["10", "20", "30"],
//         id: 8,
//         name: "test",
//         slug: "test slug",
//         position: 8,
//       },
//     ],
//   },
//   {
//     renderType: "product",
//     imageFileOrUrl:
//       "https://gulfpalms.com/wp-content/uploads/2023/10/30-300x300.jpg",
//     images: [
//       "https://gulfpalms.com/wp-content/uploads/2023/10/39-800x800.jpg",
//       "https://gulfpalms.com/wp-content/uploads/2023/10/40-800x800.jpg",
//     ],
//     name: "Blue Denim Jacket",
//     description: "Classic denim jacket for all seasons.",
//     price: 79.99,
//     productId: "P009",
//     slug: "",
//     price_html: "",
//     categories: [],
//     attributes: [
//       {
//         variation: true,
//         visible: true,
//         options: ["10", "20", "30"],
//         id: 9,
//         name: "test",
//         slug: "test slug",
//         position: 9,
//       },
//     ],
//   },
//   {
//     renderType: "product",
//     imageFileOrUrl:
//       "https://gulfpalms.com/wp-content/uploads/2023/10/18-300x300.jpg",
//     images: [
//       "https://gulfpalms.com/wp-content/uploads/2023/08/Coleus-Pot-25CM-2-300x300.jpg",
//       "https://gulfpalms.com/wp-content/uploads/2023/08/Sansevieria-Green-Pot-18CM-1-300x300.jpg",
//     ],
//     name: "Blue Denim Jacket",
//     description: "Classic denim jacket for all seasons.",
//     price: 79.99,
//     productId: "P010",
//     slug: "",
//     price_html: "",
//     categories: [],
//     attributes: [
//       {
//         variation: true,
//         visible: true,
//         options: ["10", "20", "30"],
//         id: 10,
//         name: "test",
//         slug: "test slug",
//         position: 10,
//       },
//     ],
//   },
// ];

interface RecentProductsProps {
  slugToCategoryRecord: Record<number, ProductCategoryModel>;
}

export default function RecentProducts({
  slugToCategoryRecord,
}: RecentProductsProps) {
  const [products, setProducts] = useState<any[]>([]);
  const { t, i18n } = useTranslation();
  const axiosInstanceWithLoader = CreateAxiosInstanceWithLoader(false,false);

  const [pageConfig, setPageConfig] = useState({
    lang: i18n.language,
    order: "asc",
    orderby: "date",
    page: 1,
    per_page: 15,
  });

  useEffect(() => {
    const getProducts = async () => {
      const cleanedPageConfig = Object.fromEntries(
        Object.entries(pageConfig).filter(
          ([_, value]) => value !== null && value !== undefined
        )
      );

      try {
        const response = await ProductService.Get(
          cleanedPageConfig,
          axiosInstanceWithLoader
        );
        setProducts((prev) =>
          pageConfig.page === 1 ? response : [...prev, ...response]
        );
      } catch (error) {
        console.error(error);
      } finally {
      }
    };

    getProducts();
  }, [axiosInstanceWithLoader, pageConfig]);

  console.log({ products });

  return (
    <div className="z-[50]">
      <div className="pb-[50px] space-y-[10px]">
        <p className="text-[#777777] md:text-[30px] font-sans font-light">
          {t("recentProducts.newlyAdded")}
        </p>
        <p className="text-[#242424] font-bold md:text-[36px] font-arabic">
          {t("recentProducts.title")}
        </p>
        <p className="text-[#777777] md:text-[16px] font-sans">
          {t("recentProducts.description")}
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
              productAttribute={product.attributes[0]}
              slugToCategoryRecord={slugToCategoryRecord}
            />
          ),
        }))}
      />
    </div>
  );
}
