/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import GetInTouch from "@/components/common/GetInTouch";
import { ProductDetailsExtended } from "@/components/shop/ProductDetailsExtented";
import RelatedProducts from "@/components/shop/RelatedProducts";
import { notFound, useParams } from "next/navigation";
import React, { Suspense, useEffect, useRef, useState } from "react";
import ProductDetails from "./product-details";
import { useTranslation } from "react-i18next";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { ProductService } from "@/services/api/product.service";
import { ProductCategoryModel } from "@/models/product/product";
import { generateIdToCategoryRecord } from "@/services/utility/utility.service";
import { SlugType, useGlobalDataProvider } from "@/providers/GlobalDataProvider";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductPage() {
  const axiosInstanceWithoutLoader = CreateAxiosInstanceWithLoader(false, false);
  const { categories, slugToTranslate, addSlugToTranslate } = useGlobalDataProvider();
  const { t, i18n: { language: currentLocale } } = useTranslation("common");
  const { slug } = useParams();
  const [pageConfig, setPageConfig] = useState({ lang: currentLocale, slug: slug });
  const [product, setProduct] = useState<any | null>(null);
  const hasMounted = useRef(false);
  const [isProductLoading, setIsProductsLoading] = useState<boolean | null>(false);

  useEffect(() => {
    if (hasMounted.current) return;
    hasMounted.current = true;

    const getProduct = async () => {
      setIsProductsLoading(true);
      try {
        const response = await ProductService.GetBySlug(
          pageConfig,
          axiosInstanceWithoutLoader
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

        await getSuggestedProducts(response.id);
        setIsProductsLoading(false);
      } catch (error) {
        console.error(error);
        setIsProductsLoading(null);
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
  const getSuggestedProducts = async (productId: number) => {
    try {
      setIsSuggestedProductsLoading(true);
      const response = await ProductService.GetFrequentlyBoughtTogether(
        productId,
        axiosInstanceWithoutLoader
      );

      setSuggestedProducts(response.originalData);
      setIsSuggestedProductsLoading(false);
    } catch (error) {
      setIsSuggestedProductsLoading(false);
      console.error(error);
    }
  };

  // Category
  const [slugToCategoryRecord, setSlugToCategoryRecord] = useState<Record<number, ProductCategoryModel>>({});
  useEffect(() => {
    if (categories) {
      setSlugToCategoryRecord(generateIdToCategoryRecord(categories));
    }
  }, [categories]);

  return (
    <>
      <div className="pt-[75px] lg:pt-[98px]">

        <ProductDetails loading={isProductLoading || false} product={product} slugToCategoryRecord={slugToCategoryRecord} relatedProducts={relatedProducts} />

        <div className="w-screen max-w-[1370px] mx-auto pb-[100px]">
          {
            suggestedProducts?.length === 0 && isSuggestedProductsLoading &&
            <div className="flex flex-col mb-5">
              <h2 className="text-xl font-semibold mb-6">Frequently bought together</h2>
              <Skeleton className="h-[18rem] w-full rounded-xl bg-gray-100" />
            </div>
          }
          <Suspense fallback="Loading...">
            {suggestedProducts && suggestedProducts?.length > 0 && <ProductDetailsExtended
              currentProduct={product}
              recommendedProducts={suggestedProducts}
              slugToCategoryRecord={slugToCategoryRecord}
            />
            }
          </Suspense>
          {
            relatedProducts.length === 0 && isRelatedProductLoading &&
            <div className="flex flex-col">
              <p className="text-[#242424] font-bold md:text-[36px] font-arabic">{t("relatedProducts")}</p>
              <Skeleton className="h-[18rem] w-full rounded-xl bg-gray-100" />
            </div>
          }
          {relatedProducts?.length > 0 && <RelatedProducts products={relatedProducts} slugToCategoryRecord={slugToCategoryRecord} />}
        </div>
        <GetInTouch language={currentLocale} />
      </div>
    </>
  );
}
