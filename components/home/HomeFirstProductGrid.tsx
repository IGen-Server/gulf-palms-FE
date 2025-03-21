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
  { id: 10171, arId: 15603, position: { x: 10, y: 27 }, group: "hoverProducts1", buttonType: "add_to_cart" },
  { id: 10169, arId: 15601, position: { x: 52, y: 62 }, group: "hoverProducts1", buttonType: "read_more" },
  { id: 10061, arId: 15314, position: { x: 75, y: 72 }, group: "hoverProducts1", buttonType: "select_options" },
  { id: 23312, arId: 23317, position: { x: 24, y: 44 }, group: "hoverProducts2", buttonType: "select_options" },
  { id: 23298, arId: 23303, position: { x: 52, y: 52 }, group: "hoverProducts2", buttonType: "select_options" },
  { id: 10035, arId: 15300, position: { x: 65, y: 78 }, group: "hoverProducts2", buttonType: "select_options" },
  { id: 9940, arId: 14685, position: { x: 29, y: 73 }, group: "hoverProducts2", buttonType: "select_options" },
  { id: 9997, arId: 15278, position: { x: 73, y: 52 }, group: "hoverProducts2", buttonType: "select_options" },
  { id: 11846, arId: 21503, position: { x: 30, y: 70 }, group: "hoverProducts3", buttonType: "buy_now" },
  { id: 24001, arId: 24003, position: { x: 50, y: 70 }, group: "hoverProducts4", buttonType: "buy_now" },
];

export default function HomeFirstProductGrid({ slugToCategoryRecord }: HomeFirstProductGridProps) {
  const { t, i18n: { language: currentLocale } } = useTranslation("common");
  const [hoverProducts, setHoverProducts] = useState<{ [key: string]: any[] }>({});
  const axiosInstanceWithoutLoader = useMemo(() => CreateAxiosInstanceWithLoader(false, false), []);
  console.log(currentLocale);


  const getRelatedProducts = async (hoveresProductIds: number[]) => {
    try {
      const response = await ProductService.Get(
        {
          lang: currentLocale,
          include: `[0,${hoveresProductIds.join(",")}]`,
        },
        axiosInstanceWithoutLoader
      );
      // console.log({response})
      return response;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const fetchProducts = useCallback(async () => {
    try {
      // Extract all product IDs from productData
      let hoveresProductIds;
      if (currentLocale === "en") {
        hoveresProductIds = productData.map((product) => product.id);
      } else {
        hoveresProductIds = productData.map((product) => product.arId);
      }


      // Fetch related products using getRelatedProducts
      const fetchedProducts = await getRelatedProducts(hoveresProductIds);

      // Map the fetched products to the desired format
      const results = fetchedProducts.map((product) => {
        const productInfo = currentLocale === "en" ? productData.find((p) => p.id == product.id) : productData.find((p) => p.arId == product.id);

        console.log(productInfo, "ProductInfo");


        return {
          position: productInfo?.position || { x: 0, y: 0 },
          group: productInfo?.group,
          imgUrl: product?.images[0]?.src || "",
          productId: product?.id?.toString(),
          hoveredTitle: product?.name,
          hoveredHref: product?.permalink?.replace(/\/(en|ar)\//, "/").replace(/^https?:\/\/[^/]+/, `/${currentLocale}`),
          price: product?.price,
          description: product?.short_description?.replace(/<[^>]*>?/gm, ""),
          buttonType: productInfo?.buttonType,
        };
      });

      // Group the products by their group
      const groupedProducts: { [key: string]: any[] } = {};

      results.forEach((product) => {
        const { group = "ungrouped", ...productData } = product;
        if (!groupedProducts[group]) groupedProducts[group] = [];
        groupedProducts[group].push(productData);
      });

      // Update the state with the grouped products
      setHoverProducts(groupedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);
  // console.log({hoverProducts})
  return (
    <div className="flex items-center gap-[40px] min-h-fit flex-col lg:flex-row lg:h-[839px] w-full">
      <div
        style={{
          backgroundImage: `url(https://gulfpalms.com/wp-content/uploads/2023/10/DSC08580.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative h-[350px] lg:h-full w-full lg:w-[576px]"
      >
        <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-30 p-[30px] text-white space-y-[10px]">
          <p className="md:text-[36px] !font-arabic font-bold">{t("HomeFirstProductGrid.gulfPalm")}</p>
          <p className="md:text-[16px] !font-arabic max-w-sm">{t("HomeFirstProductGrid.description")}</p>
        </div>
      </div>
      <div className="flex items-center gap-[17px] lg:gap-[40px] h-full">
        <div className="w-[calc(50vw-17px)] lg:w-[352px] flex flex-col h-full gap-[17px]">
          <div className="w-full h-[175px] lg:h-[325px] font-sans">
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
          <div className="w-full lg:flex-1 h-[233px] lg:h-[325px] ">
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
        <div className="w-[calc(50vw-17px)] lg:w-[352px] flex flex-col h-full gap-[17px] ">
          <div className="w-full h-[233px] lg:h-[325px] lg:flex-1 ">
            <RenderImageAndProducts
              productId="3"
              name="Flower"
              price={10}
              renderType="image"
              imageFileOrUrl="https://gulfpalms.com/wp-content/uploads/2023/10/3-mian-img.jpg"
              hoverProducts={[
                {
                  position: { x: 30, y: 70 },
                  imgUrl: "https://clone.gulfpalms.com/wp-content/uploads/2023/10/3-mian-img.jpg",
                  productId: "washingtonian-palms",
                  hoveredTitle: t("washingtonianPalms"),
                  hoveredHref: 'https://clone.gulfpalms.com/en/product-category/ornamental-palms-bonsai/washingtonian-palms/',
                  price: '',
                  description: '',
                  buttonType: 'buy_now',
                }
              ]}
              slug=""
              currency=""
              currentCategories={[]}
              productAttribute={null}
              slugToCategoryRecord={slugToCategoryRecord}
            />
          </div>
          <div className="w-full h-[175px] lg:h-[325px]">
            <RenderImageAndProducts
              productId="4"
              name="Flower"
              price={10}
              renderType="image"
              imageFileOrUrl="https://gulfpalms.com/wp-content/uploads/2023/10/kjkjkj600by600-thumb.jpg"
              hoverProducts={[
                {
                  position: { x: 50, y: 70 },
                  imgUrl: "https://clone.gulfpalms.com/wp-content/uploads/2023/10/600by600-thumb5.jpg",
                  productId: "plant-medium",
                  hoveredTitle: t("plantMedium"),
                  hoveredHref: 'https://clone.gulfpalms.com/en/product-category/plant-media/',
                  price: '',
                  description: '',
                  buttonType: 'buy_now',
                }
              ]}
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