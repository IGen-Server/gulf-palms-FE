/* eslint-disable react-hooks/exhaustive-deps */
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
import { ProductCategoryModel } from "@/models/product/product";
import { ProductCategoryService } from "@/services/api/product-category.service";
import { generateIdToCategoryRecord } from "@/services/utility/utility.service";
import { useAuth } from "@/providers/Authprovider";

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

export default function ProductPage({
  children,
}: {
  children: React.ReactNode;
}) {

  const { i18n } = useTranslation();
  const { slug } = useParams();
  const { setTranslation } = useAuth();
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

        setProduct(response[0]);

        if (response[0].related_ids) {
          await getRelatedProducts(response[0].related_ids)
        }

        await getSuggestedProducts();

        const productTranslationIds = response[0]?.translations;
        let productOtherLangId;

        if (i18n.language === 'en') {
          productOtherLangId = productTranslationIds?.ar;
        } else {
          productOtherLangId = productTranslationIds?.en;
        }
        
        if (productOtherLangId) {
          const productInOtherLang = await ProductService.GetById(
            productOtherLangId,
            axiosInstanceWithLoader
          );

          setTranslation(i18n.language, decodeURIComponent(response[0].slug), decodeURIComponent(productInOtherLang?.slug));
          setTranslation(i18n.language === 'en' ? 'ar' : 'en', decodeURIComponent(productInOtherLang?.slug), decodeURIComponent(response[0].slug));
        }

      } catch (error) {
        console.error(error);
      }
    };

    getProducts();
  }, [pageConfig]);

  // Related products
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const getRelatedProducts = async (relatedProductIds: number[]) => {
    try {
      const response = await ProductService.Get(
        {
          lang: i18n.language,
          include: `[0,${relatedProductIds.join(',')}]`
        },
        axiosInstanceWithLoader
      );
      setRelatedProducts(response);
    } catch (error) {
      console.error(error);
    }
  };

  // Suggested products
  const [suggestedProducts, setSuggestedProducts] = useState<any[]>([]);
  const getSuggestedProducts = async () => {
    try {
      const response = await ProductService.Get(
        {
          lang: i18n.language,
          orderby: 'random',
          order: 'asc',
          page: 1,
          per_page: Math.floor(Math.random() * 4) + 2
        },
        axiosInstanceWithLoader
      );
      setSuggestedProducts(response);
    } catch (error) {
      console.error(error);
    }
  };

  // Category
  const [slugToCategoryRecord, setSlugToCategoryRecord] = useState<Record<number, ProductCategoryModel>>({});
  useEffect(() => {
    const getProductCategories = async () => {
      try {
        let response = await ProductCategoryService.Get(
          {
            lang: i18n.language,
            page: 1,
            per_page: 100
          },
          axiosInstanceWithLoader
        );

        if (i18n.language === 'ar') {
          response = response?.map(item => ({
            ...item,
            slug: decodeURIComponent(item.slug)
          }));
        }

        var currentSlugToCategoryRecord = generateIdToCategoryRecord(response);
        setSlugToCategoryRecord(currentSlugToCategoryRecord);

      } catch (error) {
        console.error(error);
      }
    };

    getProductCategories();
  }, []);

  return (
    <div className="pt-[75px] lg:pt-[98px]">

      <ProductDetails product={product} slugToCategoryRecord={slugToCategoryRecord}/>
      
      <div className="w-screen max-w-[1370px] mx-auto py-[100px]">
        {suggestedProducts.length > 0  && <ProductDetailsExtended
          fertilizationData={fertilizationData}
          waterRequirementData={waterRequirementData}
          recommendedProducts={suggestedProducts}
        />}
        {relatedProducts.length > 0 && <RelatedProducts products={relatedProducts} />}
      </div>
      <GetInTouch />
    </div>
  );
}
