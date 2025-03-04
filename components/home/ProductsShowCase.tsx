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
  const axiosInstanceWithLoader = CreateAxiosInstanceWithLoader(false,false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await ProductService.GetBySlugs(
          i18n.language,
          ['spring-bladglans-plant-polish',
            'palms-pollen-powder',
            'sukkari-75-litre',
            'bougainvillea',
            'aceplan',
            'temprid-sc',
            // 'sultana-potted-palm-arabic',
            'bougainvillea-net'],
          axiosInstanceWithLoader
        );
        
        setProducts([...response]);
      } catch (error) {
        console.error(error);
      } finally {
      }
    };

    getProducts();
  }, [axiosInstanceWithLoader, i18n.language]);

// console.log({products})
  const bottomLayer = (
    <div className="grid h-full w-full place-content-center ">
      <div className="max-lg:w-[85vw] lg:w-[576px] py-3 h-full flex flex-col justify-center items-center">
        <div className="grid place-content-center w-full">
          <div className="pb-[20px] text-center w-[364px]">
            <p className="text-[#777777] text-[30px] font-sans font-light">
            {t("productsShowcase.heading")}
            </p>
            <p className="text-[#242424] font-bold text-[36px] font-arabic">
              {/* Translated Product Title */}
              {t("productsShowcase.titleBottom")}
            </p>
            <p className="text-[#777777] text-[16px] font-sans">
              {/* Translated Description */}
              {t("productsShowcase.description")}
            </p>
          </div>
        </div>
        <CustomCarousel
          slidesToShow={2}
          slidesToScroll={2}
          MobileSlidesNumber={1}
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
                slug={""}
                currency={""}
                currentCategories={[]}
                productAttribute={null}
                slugToCategoryRecord={slugToCategoryRecord}
              />
            ),
            width: " !w-[218px] ",
          }))}
        />
      </div>
    </div>
  );
  const topLayer = (
    <div className="grid h-full w-full place-content-center ">
      <div className="max-lg:w-[85vw] lg:w-[576px] py-3 h-full flex flex-col justify-center items-center">
        <div className="grid place-content-center w-full">
          <div className="pb-[20px] text-center w-[364px]">
            <p className="text-[#777777] text-[30px] font-sans font-light">
            {t("productsShowcase.heading")}
            </p>
            <p className="text-[#242424] font-bold text-[36px] font-arabic">
              {/* Translated Product Title */}
              {t("productsShowcase.title")}
            </p>
            <p className="text-[#777777] text-[16px] font-sans">
              {/* Translated Description */}
              {t("productsShowcase.description")}
            </p>
          </div>
        </div>
        <CustomCarousel
          slidesToShow={2}
          slidesToScroll={2}
          MobileSlidesNumber={1}
          data={products?.slice(0,4)?.map((product) => ({
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
                slug={""}
                currency={""}
                currentCategories={[]}
                productAttribute={null}
                slugToCategoryRecord={slugToCategoryRecord}
              />
            ),
            width: " !w-[218px] ",
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
            imgHeight: "h-[706px] ",
          }}
          leftContent={{
            type: "component",
            component: topLayer,
          }}
          // colReversed = {true}
        />
        <ImageTextCard
          leftContent={{
            type: "image",
            src: "https://gulfpalms.com/wp-content/uploads/2021/09/2-slide-img.jpg",
            bgColor: "bg-white",
            imgHeight: "h-[730px] ",
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
