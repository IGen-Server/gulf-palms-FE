/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Suspense, useEffect, useState, useRef } from "react";
import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";
import ProductCard from "@/components/shop/ProductCard";
import PriceSlider from "@/components/shop/PriceSlider";
import Productcategories from "@/components/shop/Productcategories";
import {
  ProductSortValues,
  SortingDropdown,
} from "@/components/shop/SortingDropdown";
import { LayoutGrid, Grip, EllipsisVertical } from "lucide-react";
import GetInTouch from "@/components/common/GetInTouch";
import { useTranslation } from "react-i18next";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { ProductService } from "@/services/api/product.service";
import { ProductModel } from "@/models/product/product";

const breadcrumbLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
];

const showPerPage = [
  { name: "9", href: "/shop/?per_page=9", value: 9 },
  { name: "12", href: "/shop/?per_page=12", value: 12 },
  { name: "18", href: "/shop/?per_page=18", value: 18 },
  { name: "24", href: "/shop/?per_page=24", value: 24 },
];

export default function Shop() {
  const [columns, setColumns] = useState(4);
  const { i18n } = useTranslation();
  const axiosInstanceWithLoader = CreateAxiosInstanceWithLoader();

  const [pageConfig, setPageConfig] = useState({
    lang: i18n.language,
    order: "asc",
    orderby: ProductSortValues[0],
    page: 1,
    per_page: 24,
    min_price: null,
    max_price: null,
  });

  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  const updatePageConfig = (key: string, value: any) => {
    setPageConfig((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const cleanedPageConfig = Object.fromEntries(
        Object.entries(pageConfig).filter(
          ([_, value]) => value !== null && value !== undefined
        )
      );

      try {
        const response = await ProductService.Get(
          cleanedPageConfig,
          axiosInstanceWithLoader
        );
        setProducts((prev) =>
          pageConfig.page === 1 ? response : [...prev, ...response]
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [pageConfig]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPageConfig((prev) => ({
            ...prev,
            page: prev.page + 1,
          }));
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [loading]);

  return (
    <div className="pt-[98px]">
      <div className="max-w-content mx-auto">
        <div className="flex flex-col items-center pb-[200px] pt-[50px]">
          <h1 className="text-[36px] font-bold text-black">Shop</h1>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="w-[276px] px-[15px] divide-y-2 hidden lg:block">
            <PriceSlider setPriceSlider={updatePageConfig} />
            <Productcategories />
          </div>
          <div className="flex-1">
            <div className="px-[15px] flex justify-between">
              <CustomBreadCrumb
                links={breadcrumbLinks}
                uppercase={false}
                currentStyle="font-semibold"
              />
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <p className="text-sm font-semibold">Show :</p>
                  <CustomBreadCrumb
                    links={showPerPage}
                    activeLastLink={true}
                    updatePerPage={updatePageConfig}
                    uppercase={false}
                    currentStyle="font-semibold"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <LayoutGrid
                    className="cursor-pointer h-[22px]"
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
           <div className="flex items-center justify-center">
           <div
              className={`grid pt-16 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-${columns}`}
            >
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  img={product.images ? product?.images[0]?.src : ""}
                  options={product.options}
                  sku={product.sku}
                  categories={product.categories}
                  description={undefined}
                />
              ))}
            </div>
           </div>
            <div ref={loaderRef} className="text-center my-6 grid place-content-center w-full">
              {loading && (
                <div className="flex items-center gap-2 bg-gray-100 w-fit px-3 py-2 border border-gray-400 rounded-lg">
                LOADING{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-spin"
                >
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <GetInTouch />
    </div>
  );
}
