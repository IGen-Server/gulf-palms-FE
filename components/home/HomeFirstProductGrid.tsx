/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
import RenderImageAndProducts from "../common/RenderImageAndProducts";
import { useTranslation } from "react-i18next";
import { ProductCategoryModel } from "@/models/product/product";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { ProductService } from "@/services/api/product.service";

interface HomeFirstProductGridProps {
  slugToCategoryRecord: Record<number, ProductCategoryModel>;
}

const productData = [
  { id: 10171, position: { x: 10, y: 27 }, group: "hoverProducts1", buttonType: "add_to_cart" },
  { id: 15601, position: { x: 52, y: 62 }, group: "hoverProducts1", buttonType: "read_more" },
  { id: 15314, position: { x: 75, y: 72 }, group: "hoverProducts1", buttonType: "select_options" },
  { id: 23317, position: { x: 24, y: 44 }, group: "hoverProducts2", buttonType: "select_options" },
  { id: 23303, position: { x: 52, y: 52 }, group: "hoverProducts2", buttonType: "select_options" },
  { id: 15278, position: { x: 65, y: 78 }, group: "hoverProducts2", buttonType: "select_options" },
  { id: 14685, position: { x: 29, y: 73 }, group: "hoverProducts2", buttonType: "select_options" },
  { id: 15300, position: { x: 73, y: 52 }, group: "hoverProducts2", buttonType: "select_options" },
  { id: 21503, position: { x: 30, y: 70 }, group: "hoverProducts3", buttonType: "buy_now" },
  { id: 24003, position: { x: 50, y: 70 }, group: "hoverProducts4", buttonType: "buy_now" },
];

export default function HomeFirstProductGrid({ slugToCategoryRecord }: HomeFirstProductGridProps) {
  const { t, i18n: { language: currentLocale } } = useTranslation();
  const [hoverProducts, setHoverProducts] = useState<{ [key: string]: any[] }>({});
  const axiosInstanceWithoutLoader = useMemo(() => CreateAxiosInstanceWithLoader(false, false), []);

  const getRelatedProducts = async (hoveresProductIds: number[]) => {
    try {
      const response = await ProductService.Get(
        {
          lang: currentLocale,
          include: `[0,${hoveresProductIds.join(",")}]`,
        },
        axiosInstanceWithoutLoader
      );
      return response; // Assuming the response contains an array of products
    } catch (error) {
      console.error(error);
      return []; // Return an empty array in case of error
    }
  };

  const fetchProducts = useCallback(async () => {
    try {
      // Extract all product IDs from productData
      const hoveresProductIds = productData.map((product) => product.id);

      // Fetch related products using getRelatedProducts
      const fetchedProducts = await getRelatedProducts(hoveresProductIds);

      // Map the fetched products to the desired format
      const results = fetchedProducts.reverse().map((product,idx) => {
        const productInfo = productData.find((p) => p.id == product.id);
        console.log({productData,fetchedProducts})
        return {
          position: productData[idx]?.position || { x: 0, y: 0 },
          group: productData[idx]?.group,
          imgUrl: product?.images[0]?.src || "",
          productId: product?.id?.toString(),
          hoveredTitle: product?.name,
          hoveredHref: product?.permalink,
          price: product?.price,
          description: product?.short_description?.replace(/<[^>]*>?/gm, ""),
          buttonType: productInfo?.buttonType || "add_to_cart",
        };
      });

      // Group the products by their group
      const groupedProducts: { [key: string]: any[] } = {};

      results.forEach((product) => {
        const { group, ...productData } = product;
        if (!groupedProducts[group]) groupedProducts[group] = [];
        groupedProducts[group].push(productData);
      });

      // Update the state with the grouped products
      setHoverProducts(groupedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, [getRelatedProducts]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
// console.log({hoverProducts})
  return (
    <div className="flex items-center gap-[40px] min-h-fit h-[100vh] flex-col lg:flex-row lg:h-[839px] w-max font-sans">
      <div
        style={{
          backgroundImage: `url(https://gulfpalms.com/wp-content/uploads/2023/10/DSC08580.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative h-[350px] lg:h-full w-full lg:w-[576px]"
      >
        <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-30 p-[30px] text-white space-y-[10px]">
          <p className="md:text-[36px] font-arabic font-bold">{t("HomeFirstProductGrid.gulfPalm")}</p>
          <p className="md:text-[16px] max-w-sm">{t("HomeFirstProductGrid.description")}</p>
        </div>
      </div>
      <div className="flex items-center gap-[17px] lg:gap-[40px] h-full">
        <div className="w-[calc(50vw-17px)] lg:w-[352px] flex flex-col h-full gap-[17px]">
          <div className="w-full h-[325px]">
            <RenderImageAndProducts
              productId="1"
              name="Flower"
              price={10}
              renderType="image"
              imageFileOrUrl="https://gulfpalms.com/wp-content/uploads/2023/10/3123600by600-thumb-430x430.jpg"
              hoverProducts={hoverProducts.hoverProducts1 || []}
              slug=""
              currency=""
              currentCategories={[]}
              productAttribute={null}
              slugToCategoryRecord={slugToCategoryRecord}
            />
          </div>
          <div className="w-full flex-1 h-full">
            <RenderImageAndProducts
              productId="2"
              name="Flower"
              price={10}
              renderType="image"
              imageFileOrUrl="https://gulfpalms.com/wp-content/uploads/2023/10/lkl600by800-thumb.jpg"
              hoverProducts={hoverProducts.hoverProducts2 || []}
              slug=""
              currency=""
              currentCategories={[]}
              productAttribute={null}
              slugToCategoryRecord={slugToCategoryRecord}
            />
          </div>
        </div>
        <div className="w-[calc(50vw-17px)] lg:w-[352px] flex flex-col h-full gap-[17px]">
          <div className="w-full h-full flex-1">
            <RenderImageAndProducts
              productId="3"
              name="Flower"
              price={10}
              renderType="image"
              imageFileOrUrl="https://gulfpalms.com/wp-content/uploads/2023/10/3-mian-img.jpg"
              hoverProducts={hoverProducts.hoverProducts3 || []}
              slug=""
              currency=""
              currentCategories={[]}
              productAttribute={null}
              slugToCategoryRecord={slugToCategoryRecord}
            />
          </div>
          <div className="w-full h-[325px]">
            <RenderImageAndProducts
              productId="4"
              name="Flower"
              price={10}
              renderType="image"
              imageFileOrUrl="https://gulfpalms.com/wp-content/uploads/2023/10/kjkjkj600by600-thumb.jpg"
              hoverProducts={hoverProducts.hoverProducts4 || []}
              slug=""
              currency=""
              currentCategories={[]}
              productAttribute={null}
              slugToCategoryRecord={slugToCategoryRecord}
            />
          </div>
        </div>
      </div>
    </div>
  );
}