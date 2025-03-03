"use client";

import React, { useEffect, useState } from "react";
import RenderImageAndProducts from "../common/RenderImageAndProducts";
import CustomCarousel from "../common/CustomCarousel";
import { extractCurrency, getCategoryNameAndLinksAsArray } from "@/services/utility/utility.service";
import { ProductCategoryModel } from "@/models/product/product";



interface RelatedProductsProps {
  products: any[];
  slugToCategoryRecord: Record<number, ProductCategoryModel>;
}

export default function RelatedProducts({ products, slugToCategoryRecord }: RelatedProductsProps) {
  return (
    <div className="z-[50]">
      <div className="pb-[50px] space-y-[10px]">
        <p className="text-[#242424] font-bold md:text-[36px] font-arabic">
          Related products
        </p>
      </div>
      {
        products &&
        <CustomCarousel
          slidesToShow={4}
          slidesToScroll={4}
          MobileSlidesNumber={1}
          data={products?.map((product) => ({
            component: (
              <RenderImageAndProducts
                key={product?.id}
                renderType="product"
                imageFileOrUrl={`product/${product?.slug}`}
                images={product.images}
                name={product.name}
                description={''}
                slug={product.slug}
                price={product.price}
                currency={extractCurrency(product.price_html)}
                productId={product.id}
                currentCategories={product.categories}
                productAttribute={product.attributes ? product.attributes[0] : {}}
                slugToCategoryRecord={slugToCategoryRecord}
              />
            ),
          }))}
        />
      }
    </div>
  );
}
