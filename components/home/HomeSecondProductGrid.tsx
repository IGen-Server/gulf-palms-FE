import React, { useEffect, useState, useCallback, useMemo } from "react";
import RenderImageAndProducts from "../common/RenderImageAndProducts";
import { ProductCategoryModel } from "@/models/product/product";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { ProductService } from "@/services/api/product.service";

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
  const [hoverProducts, setHoverProducts] = useState<{ [key: string]: any[] }>({});

  const axiosInstanceWithLoader = useMemo(() => CreateAxiosInstanceWithLoader(false,false), []);

  const fetchProducts = useCallback(async () => {
    try {
      const results = await Promise.allSettled(
        productData.map(({ id, position, group ,buttonType}) =>
          ProductService.GetById(id , axiosInstanceWithLoader).then(product => ({
            position,
            group, 
            imgUrl: product?.images[0]?.src || "",
            productId: product?.id?.toString(),
            hoveredTitle: product?.name,
            hoveredHref: product?.permalink,
            price: product?.price,
            description: product?.short_description?.replace(/<[^>]*>?/gm, ""),
            buttonType
          }))
        )
      );
      const groupedProducts: { [key: string]: any[] } = {};
      
      results.forEach((result) => {
        if (result.status === "fulfilled" && result.value) {
          const { group, ...productData } = result.value;
          if (!groupedProducts[group]) groupedProducts[group] = [];
          groupedProducts[group].push(productData);
        }
      });

      setHoverProducts(groupedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, [axiosInstanceWithLoader]); 


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
