/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback, useMemo } from "react";
import RenderImageAndProducts from "../common/RenderImageAndProducts";
import { ProductCategoryModel } from "@/models/product/product";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { ProductService } from "@/services/api/product.service";
import { useTranslation } from "react-i18next";

interface HomeSecondProductGridProps {
  slugToCategoryRecord: Record<number, ProductCategoryModel>;
}

const productData = [
  { id: 10071, position: { x: 41, y: 64 }, group: "hoverProducts1", buttonType: 'add_to_cart' },
  { id: 22621, position: { x: 45, y: 75 }, group: "hoverProducts2", buttonType: 'select_options' },
  { id: 11012, position: { x: 62, y: 73 }, group: "hoverProducts3", buttonType: 'select_options' },
  { id: 21363, position: { x: 82, y: 50 }, group: "hoverProducts3", buttonType: 'select_options' },
  { id: 21374, position: { x: 45, y: 72 }, group: "hoverProducts3", buttonType: 'add_to_cart' },
  { id: 15194, position: { x: 32, y: 61 }, group: "hoverProducts4", buttonType: 'select_options' },
  { id: 15342, position: { x: 52, y: 73 }, group: "hoverProducts4", buttonType: 'select_options' },
  { id: 10165, position: { x: 70, y: 65 }, group: "hoverProducts4", buttonType: 'add_to_cart' },
  { id: 15177, position: { x: 32, y: 61 }, group: "hoverProducts5", buttonType: 'select_options' },
  { id: 15300, position: { x: 50, y: 73 }, group: "hoverProducts5", buttonType: 'select_options' },
  { id: 15149, position: { x: 65, y: 65 }, group: "hoverProducts5", buttonType: 'select_options' },
];



export default function HomeSecondProductGrid({ slugToCategoryRecord }: HomeSecondProductGridProps) {
  const { t, i18n: { language: currentLocale } } = useTranslation();
  const [hoverProducts, setHoverProducts] = useState<{ [key: string]: any[] }>({});
  const axiosInstanceWithoutLoader = useMemo(() => CreateAxiosInstanceWithLoader(false, false), []);

  const getRelatedProducts = async (hoveresProductIds: number[]) => {
    try {
      const response = await ProductService.Get(
        {
          lang: currentLocale,
          include: `[10071,${hoveresProductIds.join(",")}]`,
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
          position: productData[idx+1]?.position || { x: 0, y: 0 },
          group: productData[idx+1]?.group,
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

  return (
    <div className="py-[90px]">
      <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-5">
        <div className="space-y-5">
          <div className="w-[45vw] lg:w-[446.65px] h-[595.5px]">
            <RenderImageAndProducts
              renderType="image"
              name= "Flower"
              price = {10}
              imageFileOrUrl="https://gulfpalms.com/wp-content/uploads/2023/10/jjf600by800-thumb.jpg"
              hoverProducts={hoverProducts.hoverProducts1 || []}
              productId={""}
              slug={""}
              currency={""}
              currentCategories={[]}
              productAttribute={null}
              slugToCategoryRecord={slugToCategoryRecord}
            />
          </div>
          <div className="w-[45vw] lg:w-[446.65px] h-[446.6px]">
            <RenderImageAndProducts
              renderType="image"
              name= "Flower"
              price = {10}
              imageFileOrUrl="https://gulfpalms.com/wp-content/uploads/2023/09/600by600-thumb5-300x300.jpg"
              hoverProducts={hoverProducts.hoverProducts3 || []}
              productId={""}
              slug={""}
              currency={""}
              currentCategories={[]}
              productAttribute={null}
              slugToCategoryRecord={slugToCategoryRecord}
            />
          </div>
        </div>
        <div className="space-y-5">
          <div className="w-[45vw] lg:w-[446.65px] h-[446.6px]">
            <RenderImageAndProducts
              renderType="image"
              name= "Flower"
              price = {10}
              imageFileOrUrl="https://gulfpalms.com/wp-content/uploads/2023/09/600by6003-thumb-300x300.jpg"
              hoverProducts={hoverProducts.hoverProducts2 || []}
              productId={""}
              slug={""}
              currency={""}
              currentCategories={[]}
              productAttribute={null}
              slugToCategoryRecord={slugToCategoryRecord}
            />
          </div>
          <div className="w-[45vw] lg:w-[446.65px] h-[595.5px]">
            <RenderImageAndProducts
              renderType="image"
              name= "Flower"
              price = {10}
              imageFileOrUrl="https://gulfpalms.com/wp-content/uploads/2023/10/e600by800-thumb.jpg"
              hoverProducts={hoverProducts.hoverProducts4 || []}
              productId={""}
              slug={""}
              currency={""}
              currentCategories={[]}
              productAttribute={null}
              slugToCategoryRecord={slugToCategoryRecord}
            />
          </div>
        </div>
        <div className="space-y-5">
          <div className="w-[100vw] lg:w-[446.65px] h-[595.5px]">
            <RenderImageAndProducts
              renderType="image"
              name= "Flower"
              price = {10}
              imageFileOrUrl="https://gulfpalms.com/wp-content/uploads/2023/10/q600by800-thumb.jpg"
              hoverProducts={hoverProducts.hoverProducts5 || []}
              productId={""}
              slug={""}
              currency={""}
              currentCategories={[]}
              productAttribute={null}
              slugToCategoryRecord={slugToCategoryRecord}
            />
          </div>
          <div className="w-[100vw] lg:w-[446.65px] h-[595.5px]">
            <RenderImageAndProducts
              renderType="image"
              name= "Flower"
              price = {10}
              imageFileOrUrl="https://gulfpalms.com/wp-content/uploads/2023/10/w600by800-thumb.jpg"
              hoverProducts={[]}
              productId={""}
              slug={""}
              currency={""}
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
