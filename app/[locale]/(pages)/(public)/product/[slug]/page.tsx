"use client";

import GetInTouch from "@/components/common/GetInTouch";
import { ProductDetailsExtended } from "@/components/shop/ProductDetailsExtented";
import RelatedProducts from "@/components/shop/RelatedProducts";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ProductDetails from "./product-details";
import { useTranslation } from "react-i18next";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { ProductService } from "@/services/api/product.service";

const fertilizationData = [
  { size: "Small", details: "Apply 50g of organic fertilizer every 2 months." },
  {
    size: "Medium",
    details: "Apply 100g of organic fertilizer every 2 months.",
  },
  {
    size: "Large",
    details: "Apply 150g of organic fertilizer every 3 months.",
  },
  { size: "XL", details: "Apply 200g of organic fertilizer every 4 months." },
  { size: "XXL", details: "Apply 250g of organic fertilizer every 6 months." },
];

const waterRequirementData = [
  {
    size: "Small",
    details: "Water 2 times per week in summer, 1 time in winter.",
  },
  {
    size: "Medium",
    details: "Water 3 times per week in summer, 2 times in winter.",
  },
  {
    size: "Large",
    details: "Water 4 times per week in summer, 2 times in winter.",
  },
  {
    size: "XL",
    details: "Water 5 times per week in summer, 3 times in winter.",
  },
  {
    size: "XXL",
    details: "Water daily in summer, 4 times per week in winter.",
  },
];

const recommendedProducts = [
  {
    "id": "p1",
    "name": "Organic Plant Fertilizer",
    "category": "Fertilizers",
    "price": 4.990,
    "image": "https://gulfpalms.com/wp-content/uploads/2023/09/GULF-AGRO-1-LITRE-700x700.jpg",
    "sizes": ["500g", "1kg", "5kg"]
  },
  {
    "id": "p2",
    "name": "Premium Potting Soil",
    "category": "Soil & Compost",
    "price": 7.250,
    "image": "https://gulfpalms.com/wp-content/uploads/2023/10/WhatsApp-Image-2025-02-06-at-15.31.01-600x800.jpeg",
    "sizes": ["2kg", "5kg", "10kg"]
  },
  {
    "id": "p3",
    "name": "Self-Watering Planter",
    "category": "Planters & Pots",
    "price": 12.500,
    "image": "https://gulfpalms.com/wp-content/uploads/2023/11/113-700x700.jpg",
    "sizes": ["Small", "Medium", "Large"]
  }
]

export default function ProductPage({
  children,
}: {
  children: React.ReactNode;
}) {

  const { i18n } = useTranslation();
  const { slug } = useParams();
  const axiosInstanceWithLoader = CreateAxiosInstanceWithLoader();

  const [pageConfig, setPageConfig] = useState({
    lang: i18n.language,
    slug: slug,
  });

  const [product, setProduct] = useState<any | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await ProductService.Get(
          pageConfig,
          axiosInstanceWithLoader
        );

        console.log(response[0]);
        setProduct(response[0]);
      } catch (error) {
        console.error(error);
      }
    };

    getProducts();
  }, [pageConfig]);

  return (
    <div className="pt-[75px] lg:pt-[98px]">

      <ProductDetails product={product} />
      
      <div className="w-screen max-w-[1370px] mx-auto py-[100px]">
        <ProductDetailsExtended
          fertilizationData={fertilizationData}
          waterRequirementData={waterRequirementData}
          recommendedProducts={recommendedProducts}
        />
        <RelatedProducts />
      </div>
      <GetInTouch />
    </div>
  );
}
