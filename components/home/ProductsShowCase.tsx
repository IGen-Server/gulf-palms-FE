/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useState, useEffect } from "react";
import RenderImageAndProducts from "../common/RenderImageAndProducts";
import CustomCarousel from "../common/CustomCarousel";
import ImageTextCard from "../common/ImageTextCard";
import { useTranslation } from "react-i18next";
import { ProductCategoryModel } from "@/models/product/product";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { ProductService } from "@/services/api/product.service";

interface ProductsShowCaseProps {
  slugToCategoryRecord: Record<number, ProductCategoryModel>;
}

export default function ProductsShowCase({ slugToCategoryRecord }: ProductsShowCaseProps) {
  const [products, setProducts] = useState<any[]>([]);
  const { t, i18n } = useTranslation();
  const axiosInstanceWithOutLoader = CreateAxiosInstanceWithLoader(false, false);

  const getRelatedProducts = async (hoveresProductIds: number[]) => {
    try {
      const response = await ProductService.Get(
        {
          lang: i18n.language,
          include: `[0,${hoveresProductIds.join(",")}]`,
        },
        axiosInstanceWithOutLoader
      );

      return response;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await getRelatedProducts([10171, 10169, 10061, 23312, 23298, 9997, 9940, 10035]);
        console.log({ response })
        setProducts([...response.flat()]);
      } catch (error) {
        console.error(error);
      } finally {
      }
    };

    getProducts();
  }, []);

  // console.log({products})
  const bottomLayer = (
    <div className="grid h-full w-full place-content-center ">
      <div className="max-lg:w-[85vw] lg:w-[550px] py-3 h-full flex flex-col justify-center items-center ">
        <div className="grid place-content-center w-full">
          <div className="pb-[20px] text-center w-[364px]">
            <p className="text-[#777777] text-[30px] font-light">
              {t("productsShowcase.heading")}
            </p>
            <p className="text-[#242424] font-bold text-[36px] font-arabic">
              {/* Translated Product Title */}
              {t("productsShowcase.titleBottom")}
            </p>
            <p className="text-[#777777] text-[16px]">
              {/* Translated Description */}
              {t("productsShowcase.description")}
            </p>
          </div>
        </div>
        <CustomCarousel
          slidesToShow={2}
          slidesToScroll={2}
          MobileSlidesNumber={2}
          compactArrow={true}
          data={products?.slice(4)?.map((product) => ({
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
                currency={""}
                currentCategories={product.categories}
                productAttribute={null}
                slugToCategoryRecord={slugToCategoryRecord}

              />
            ),
            width: " w-full lg:max-w-[218px]  ",
          }))}
        />
      </div>
    </div>
  );
  const topLayer = (
    <div className="grid h-full w-full place-content-center ">
      <div className="max-lg:w-[85vw] lg:w-[550px] py-3 h-full flex flex-col justify-center items-center">
        <div className="grid place-content-center w-full">
          <div className="pb-[20px] text-center w-[364px]">
            <p className="text-[#777777] text-[30px] font-light">
              {t("productsShowcase.heading")}
            </p>
            <p className="text-[#242424] font-bold text-[36px] font-arabic">
              {/* Translated Product Title */}
              {t("productsShowcase.title")}
            </p>
            <p className="text-[#777777] text-[16px]">
              {/* Translated Description */}
              {t("productsShowcase.description")}
            </p>
          </div>
        </div>
        <CustomCarousel
          slidesToShow={2}
          slidesToScroll={2}
          MobileSlidesNumber={2}
          compactArrow={true}
          data={products?.slice(0, 4)?.map((product) => ({
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
                slug={product?.slug}
                currency={""}
                currentCategories={product.categories}
                productAttribute={null}
                slugToCategoryRecord={slugToCategoryRecord}
              />
            ),
            width: " w-full lg:max-w-[218px] ",
          }))}
        />
      </div>
    </div>
  );
  return (
    <div className="grid place-content-center lg:w-[1250px] max-w-[100vw] mx-auto mt-[50px] ">
      <div className="space-y-[100px] w-full lg:space-y-0 ">
        <ImageTextCard
          rightContent={{
            type: "image",
            src: "https://gulfpalms.com/wp-content/uploads/2023/06/3-slide-img.jpg",
            bgColor: "bg-white",
            imgHeight: "h-[410px] lg:h-[706px]",
          }}
          leftContent={{
            type: "component",
            component: topLayer,
          }}
          colReversed={true}
        />
        <ImageTextCard
          leftContent={{
            type: "image",
            src: "https://gulfpalms.com/wp-content/uploads/2021/09/2-slide-img.jpg",
            bgColor: "bg-white",
            imgHeight: "h-[410px] lg:h-[730px] ",
          }}
          rightContent={{
            type: "component",
            component: bottomLayer,
          }}
        />
      </div>
    </div>
  );
}
