"use client";

import { Suspense, useEffect, useState } from "react";
import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";
import ProductCard from "@/components/shop/ProductCard";
import PriceSlider from "@/components/shop/PriceSlider";
import Productcategories from "@/components/shop/Productcategories";
import { ProductSortValues, SortingDropdown } from "@/components/shop/SortingDropdown";
import { LayoutGrid, Grip, EllipsisVertical } from "lucide-react";
import GetInTouch from "@/components/common/GetInTouch";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { ProductService } from "@/services/api/product.service";
import { showPerPage } from "@/constants/global-constants";

export default function CategoryPage({ children }: { children: any }) {
  const pathname = usePathname().split("/");
  const slug = pathname[pathname.length - 1].split("-").join(" ");
  const breadcrumbLinks = [{ name: "Home", href: "/" }];

  pathname.slice(2).forEach((p) => {
    breadcrumbLinks.push({
      name: p.split("-").join(" "),
      href: `/product-category/${p}`,
    });
  });


  const [columns, setColumns] = useState(4)
  const { i18n } = useTranslation();
  const axiosInstanceWithLoader = CreateAxiosInstanceWithLoader();

  // Orders // page: 1, per_page: 10
  const [pageConfig, setPageConfig] = useState({
    lang: i18n.language,
    order: 'asc',
    orderby: ProductSortValues[0],
    page: 1,
    per_page: 24,
    min_price: null,
    max_price: null,
    category: slug
  });
  const [products, setProducts] = useState<any[] | null>(null);

  const updatePageConfig = (key: string, value: any) => {
    setPageConfig((prevState) => ({
      ...prevState,
      [key]: value
    }));
  };
  
  useEffect(() => {
    const getProducts = async () => {
      const cleanedPageConfig = Object.fromEntries(
        Object.entries(pageConfig).filter(([key, value]) => value !== null && value !== undefined)
      );
      
      ProductService.Get(cleanedPageConfig, axiosInstanceWithLoader)
        .then(response => {
          console.log(response);
          setProducts(response);
        })
        .catch(error => {
          console.error(error);
        });
    };

    getProducts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageConfig]);

  return (
    <div className="pt-[98px] ">
      <div className="max-w-content mx-auto">
        <div className="flex flex-col items-center pb-[200px] pt-[50px]">
          <h1 className="text-[36px] font-bold text-black capitalize">
            {slug}
          </h1>
        </div>
        <div className="flex items-start ">
          <div className="w-[276px] px-[15px]  divide-y-2">
            <PriceSlider setPriceSlider={updatePageConfig} />
            <Productcategories />
          </div>
          <div className=" flex-1 ">
            <div className="px-[15px] flex  justify-between">
              <CustomBreadCrumb
                links={breadcrumbLinks}
                uppercase={true}
                currentStyle="font-semibold"
              />
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <p className="text-sm font-semibold ">Show :</p>
                  <CustomBreadCrumb
                    links={showPerPage}
                    updatePerPage={updatePageConfig}
                    uppercase={false}
                    currentStyle="font-semibold"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <LayoutGrid
                    className="cursor-pointer"
                    onClick={() => setColumns(2)}
                  />
                  <Grip
                    className="cursor-pointer"
                    onClick={() => setColumns(3)}
                  />
                  <div
                    className="flex items-center justify-center cursor-pointer -ml-[10px]"
                    onClick={() => setColumns(4)}
                  >
                    <EllipsisVertical className="-mr-[10px]" />
                    <Grip />
                  </div>
                </div>
                <Suspense fallback={<div>Loading...</div>}>
                  <SortingDropdown setSorting={updatePageConfig} />
                </Suspense>
              </div>
            </div>
            <div
              className={`grid pt-16 grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-${columns}`}
            >
              {products?.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  img={product.images ? product.images[0].src : ''}
                  options={product.options}
                  sku={product.sku}
                  categories={product.categories}
                  description={undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <GetInTouch />
    </div>
  );
}
