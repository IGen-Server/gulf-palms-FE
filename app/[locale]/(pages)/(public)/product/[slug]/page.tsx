/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import GetInTouch from "@/components/common/GetInTouch";
import { ProductDetailsExtended } from "@/components/shop/ProductDetailsExtented";
import RelatedProducts from "@/components/shop/RelatedProducts";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import ProductDetails from "./product-details";
import { useTranslation } from "react-i18next";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { ProductService } from "@/services/api/product.service";
import { ProductCategoryModel } from "@/models/product/product";
import { ProductCategoryService } from "@/services/api/product-category.service";
import { generateIdToCategoryRecord } from "@/services/utility/utility.service";
import { SlugType, useGlobalDataProvider } from "@/providers/GlobalDataProvider";
import { Skeleton } from "@/components/ui/skeleton";

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

export default function ProductPage() {

  const axiosInstanceWithLoader = CreateAxiosInstanceWithLoader();
  const axiosInstanceWithoutLoader = CreateAxiosInstanceWithLoader(false, false);
  const { categories, slugToTranslate, addSlugToTranslate } = useGlobalDataProvider();
  const { i18n: { language: currentLocale } } = useTranslation();
  const { slug } = useParams();
  const [pageConfig, setPageConfig] = useState({ lang: currentLocale, slug: slug });
  const [product, setProduct] = useState<any | null>(null);
  const hasMounted = useRef(false);

  useEffect(() => {
    if (hasMounted.current) return;
    hasMounted.current = true;

    const getProduct = async () => {
      try {
        const response = await ProductService.GetBySlug(
          pageConfig,
          axiosInstanceWithLoader
        );

        setProduct(response);
        addSlugToTranslate(currentLocale,
          decodeURIComponent(slug as string),
          currentLocale === 'ar' ? response.translations.en : response.translations.ar,
          SlugType.Product,
          ''
        );

        if (response.related_ids) {
          await getRelatedProducts(response.related_ids);
        }

        await getSuggestedProducts();
      } catch (error) {
        console.error(error);
      }
    };

    getProduct();
  }, [pageConfig]);

  // Related products
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [isRelatedProductLoading, setIsRelatedProductLoading] = useState<boolean>(false);
  const getRelatedProducts = async (relatedProductIds: number[]) => {
    try {
      setIsRelatedProductLoading(true);
      const response = await ProductService.Get(
        {
          lang: currentLocale,
          include: `[0,${relatedProductIds.join(',')}]`
        },
        axiosInstanceWithoutLoader
      );

      setRelatedProducts(response);
      setIsRelatedProductLoading(false);
    } catch (error) {
      console.error(error);
      setIsRelatedProductLoading(false);
    }
  };

  // Suggested products
  const [suggestedProducts, setSuggestedProducts] = useState<any[]>([]);
  const [isSuggestedProductsLoading, setIsSuggestedProductsLoading] = useState<boolean>(false);
  const getSuggestedProducts = async () => {
    try {
      setIsSuggestedProductsLoading(true);
      const response = await ProductService.Get(
        {
          lang: currentLocale,
          orderby: 'random',
          order: 'asc',
          page: 1,
          per_page: Math.floor(Math.random() * 4) + 2
        },
        axiosInstanceWithoutLoader
      );

      setSuggestedProducts(response);
      setIsSuggestedProductsLoading(false);
    } catch (error) {
      setIsSuggestedProductsLoading(false);
      console.error(error);
    }
  };

  // Category
  const [slugToCategoryRecord, setSlugToCategoryRecord] = useState<Record<number, ProductCategoryModel>>({});
  useEffect( () => {
    if (categories) {
      setSlugToCategoryRecord(generateIdToCategoryRecord(categories));
    }
  }, [categories]);

  return (
    <div className="pt-[75px] lg:pt-[98px]">

      <ProductDetails product={product} slugToCategoryRecord={slugToCategoryRecord} relatedProducts={relatedProducts} />
      
      <div className="w-screen max-w-[1370px] mx-auto py-[100px]">
      {
          suggestedProducts.length === 0 && isSuggestedProductsLoading &&
          <div className="flex flex-col mb-5">
            <h2 className="text-xl font-semibold mb-6">Frequently bought together</h2>
            <Skeleton className="h-[18rem] w-full rounded-xl bg-gray-100" />
          </div>
        }
        {suggestedProducts.length > 0  && <ProductDetailsExtended
          fertilizationData={fertilizationData}
          waterRequirementData={waterRequirementData}
          recommendedProducts={suggestedProducts}
          slugToCategoryRecord={slugToCategoryRecord} 
        />}
        {
          relatedProducts.length === 0 && isRelatedProductLoading &&
          <div className="flex flex-col">
            <p className="text-[#242424] font-bold md:text-[36px] font-arabic">Related products</p>
            <Skeleton className="h-[18rem] w-full rounded-xl bg-gray-100" />
          </div>
        }
        {relatedProducts.length > 0 && <RelatedProducts products={relatedProducts} slugToCategoryRecord={slugToCategoryRecord} />}
      </div>
      <GetInTouch />
    </div>
  );
}
