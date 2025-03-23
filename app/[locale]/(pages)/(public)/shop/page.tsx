/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Suspense, useEffect, useState, useRef } from "react";
import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";
import ProductCard from "@/components/shop/ProductCard";
import PriceSlider from "@/components/shop/PriceSlider";
import ProductCategories from "@/components/shop/Productcategories";
import {
  ProductSortValues,
  SortingDropdown,
} from "@/components/shop/SortingDropdown";
import {
  LayoutGrid,
  Grip,
  EllipsisVertical,
  Menu,
  ChevronDown,
  X,
} from "lucide-react";
import GetInTouch from "@/components/common/GetInTouch";
import { useTranslation } from "react-i18next";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { ProductService } from "@/services/api/product.service";
import { ProductCategoryModel } from "@/models/product/product";
import { generateIdToCategoryRecord } from "@/services/utility/utility.service";
import { useGlobalDataProvider } from "@/providers/GlobalDataProvider";
import { CustomBreadCrumb2 } from "@/components/common/CustomBreadCrumb2";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import MobileNav from "@/components/navbar/public-navbar/MobileNav";
import { DirectionProvider } from "@radix-ui/react-direction";
import ProductsGridSkeleton from "@/components/shop/ProductCardSkeleton";
import { useSearchParams } from "next/navigation";
import { arProducts, enProducts } from "./topRatedProductsData";
import TopRatedProducts from "./TopRatedProducts";

const breadcrumbLinks = [
  { name: "Home", arabicName: "الرئيسية", href: "/" },
  { name: "Shop", arabicName: " تسوق", href: "/shop" },
];

const showPerPage = [
  { name: "9", arabicName: "9", href: "/shop/?per_page=9", value: 9 },
  { name: "12", arabicName: "12", href: "/shop/?per_page=12", value: 12 },
  { name: "18", arabicName: "18", href: "/shop/?per_page=18", value: 18 },
  { name: "24", arabicName: "24", href: "/shop/?per_page=24", value: 24 },
];

function ShopContent() {
  const { t, i18n: { language } } = useTranslation("common");

  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("s"));
  const [isResolved, setIsResolved] = useState(false);

  const [columns, setColumns] = useState(4);
  const [showMobileScreenCategory, setShowMobileScreenCategory] = useState(false);
  const { i18n } = useTranslation();
  const axiosInstanceWithoutLoader = CreateAxiosInstanceWithLoader(false, false);

  const { categories } = useGlobalDataProvider();

  // stop fetching more products
  const hasProducts = useRef(true);

  useEffect(() => {
    const param = searchParams.get("s");
    setSearchTerm(param);
    setIsResolved(true);
  }, [searchParams]);

  const initialPageConfig = {
    lang: i18n.language,
    order: "asc",
    orderby: ProductSortValues[0],
    page: 1,
    per_page: 24,
    min_price: null,
    max_price: null,
    stock_status: null,
    on_sale: null,
    search: null,
  }

  const [pageConfig, setPageConfig] = useState(initialPageConfig);

  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);
  const [showSidebarButton, setShowSidebarButton] = useState(false);

  const updatePageConfig = (key: string, value: any) => {
    setPageConfig((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };


  // stop fetching more products
  useEffect(() => {
    hasProducts.current = true;
  }, [pageConfig]);

  useEffect(() => {
    updatePageConfig('search', searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024) { // lg breakpoint in Tailwind
        setShowSidebarButton(window.scrollY > 250);
      } else {
        setShowSidebarButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    setProducts([]);

    const getProducts = async () => {

      if (!isResolved || !categories) {
        return;
      }

      setLoading(true);
      let pageConfigTemp: any = {};

      if (pageConfig.search && categories?.find((x) => x.name === pageConfig.search)) {
        pageConfigTemp = {
          ...pageConfig,
          category: pageConfig.search ? pageConfig.search : null,
          search: null
        };
      } else {
        pageConfigTemp = { ...pageConfig };
      }

      const cleanedPageConfig = Object.fromEntries(
        Object.entries(pageConfigTemp).filter(
          ([_, value]) => value !== null && value !== undefined
        )
      );

      try {
        const response = await ProductService.Get(
          cleanedPageConfig,
          axiosInstanceWithoutLoader
        );

        // stop fetching more products
        if (response.length == 0 || response.length < pageConfig.per_page) {
          hasProducts.current = false;
        }

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
  }, [pageConfig, categories]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // stop fetching more products (append after !loading => && hasProducts.current)
        if (entries[0].isIntersecting && !loading && hasProducts.current) {
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

  // Category
  const [slugToCategoryRecord, setSlugToCategoryRecord] = useState<
    Record<number, ProductCategoryModel>
  >({});

  useEffect(() => {
    const getProductCategories = async () => {
      if (categories) {
        setSlugToCategoryRecord(generateIdToCategoryRecord(categories));
      }
    };

    getProductCategories();
  }, [categories]);

  if (isResolved) {
    return (
      <div className="pt-10 lg:pt-[98px]">

        {/* Floating Sidebar for Mobile  */}
        <div className={`fixed top-1/2 transform -translate-y-1/2 transition-all duration-500 ${showSidebarButton
          ? i18n.language === "en"
            ? "left-0"
            : "right-0"
          : i18n.language === "en"
            ? "-left-16"
            : "-right-16"
          } text-sm cursor-pointer z-30`}>
          {" "}
          <DirectionProvider dir={i18n.language === "ar" ? "rtl" : "ltr"}>
            <Sheet>
              <SheetTrigger asChild>
                <div

                  className={`w-16 h-16 ${i18n.language === "en" ? "rounded-r-full" : "rounded-l-full"} bg-[#D4D4D4] flex justify-center items-center text-[#242424]`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-funnel"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" /></svg>

                </div>
              </SheetTrigger>
              <SheetContent
                side={i18n.language === "en" ? "left" : "right"}
                className="p-0 w-[300px] drawer overflow-y-auto"
              >
                <div className="w-[276px] px-[15px] py-7 divide-y-2">
                  <SheetClose asChild>
                    <div className="w-full flex justify-end items-center gap-2 pb-7">
                      <X size={16} />
                      <p className="font-semibold text-sm text-lightGray">{i18n.language === "en" ? "Close" : "يغلق"}</p>
                    </div>
                  </SheetClose>
                  <PriceSlider setPriceSlider={updatePageConfig} minPrice={pageConfig.min_price} maxPrice={pageConfig.max_price} onFilter={() => setProducts([])} />
                  <Suspense fallback={<div>Loading...</div>}>
                    <ProductCategories />
                  </Suspense>
                  <div className="mt-7">
                    <p className="mt-7 mb-5 uppercase font-semibold text-[16px] text-[#333]">{t("shop.stockStatus")}</p>
                    <div className="mt-7">
                      <p className="mt-7 mb-5 uppercase font-semibold text-[16px] text-[#333]">{t("shop.stockStatus")}</p>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                          <Checkbox
                            id="onSale"
                            checked={pageConfig.on_sale === true}
                            onCheckedChange={(checked) => updatePageConfig("on_sale", checked === true ? true : null)}
                            className="border-lightGray/30 hover:border-primary"
                          />
                          <label htmlFor="onSale" className="text-sm text-[#777] hover:text-[#333]">
                            {t("shop.onSale")}
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Checkbox
                            id="inStock"
                            checked={pageConfig.stock_status === "instock"}
                            onCheckedChange={(checked) => updatePageConfig("stock_status", checked === true ? "instock" : null)}
                            className="border-lightGray/30 hover:border-primary"
                          />
                          <label htmlFor="inStock" className="text-sm text-[#777] hover:text-[#333]">
                            {t("shop.inStock")}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <TopRatedProducts />
                </div>
              </SheetContent>
            </Sheet>
          </DirectionProvider>
        </div>
        <div className="max-w-content mx-auto">
          <div className="flex flex-col items-center pb-[100px] pt-[50px]">
            <h1 className="text-[36px] lg:text-[4.25rem] font-bold text-[#242424] leading-[5.125rem] font-serif capitalize">
              {searchTerm ? t("shop.search", { searchTerm: searchTerm }) : t("shop.title")}
            </h1>
            <div className="lg:hidden w-full mx-auto min-h-10 px-6 text-center">
              <p
                className="flex items-center gap-3 justify-center pt-4 cursor-pointer"
                onClick={() =>
                  setShowMobileScreenCategory(!showMobileScreenCategory)
                }
              >
                {i18n.language === "en" ? "Categories" : "الفئات"}{" "}
                <ChevronDown
                  className={`${showMobileScreenCategory ? " rotate-180 " : " "}`}
                />
              </p>

              {/* Smooth height transition container */}
              <div
                className={`overflow-hidden transition-all duration-500 ${showMobileScreenCategory
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
                  }`}
              >
                {showMobileScreenCategory && <ProductCategories />}
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-[276px] px-[15px] divide-y-2 hidden lg:block">
              <PriceSlider setPriceSlider={updatePageConfig} minPrice={pageConfig.min_price} maxPrice={pageConfig.max_price} onFilter={() => setProducts([])} />
              <Suspense fallback={<div>Loading...</div>}>
                <ProductCategories />
              </Suspense>
              <div className="mt-7">
                <p className="mt-7 mb-5 uppercase font-semibold text-[16px] text-[#333]">{t("shop.stockStatus")}</p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="onSale"
                      checked={pageConfig.on_sale === true}
                      onCheckedChange={(checked) => updatePageConfig("on_sale", checked === true ? true : null)}
                      className="border-lightGray/30 hover:border-primary"
                    />
                    <label htmlFor="onSale" className="text-sm text-[#777] hover:text-[#333]">
                      {t("shop.onSale")}
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="inStock"
                      checked={pageConfig.stock_status === "instock"}
                      onCheckedChange={(checked) => updatePageConfig("stock_status", checked === true ? "instock" : null)}
                      className="border-lightGray/30 hover:border-primary"
                    />
                    <label htmlFor="inStock" className="text-sm text-[#777] hover:text-[#333]">
                      {t("shop.inStock")}
                    </label>
                  </div>
                </div>
              </div>
              <TopRatedProducts />
            </div>
            <div className="flex-1 ">
              <div className="px-[15px] flex justify-between max-lg:border-b">
                <CustomBreadCrumb
                  links={breadcrumbLinks}
                  uppercase={false}
                  currentStyle="font-semibold text-sm"
                />

                <div className="flex items-center gap-4 ">
                  <div className="hidden lg:flex items-center gap-3">
                    <p className="text-sm font-semibold text-[#242424]">{t("shop.show")} :</p>
                    <Suspense fallback={<div>Loading...</div>}>
                      <CustomBreadCrumb2
                        links={showPerPage}
                        activeLastLink={true}
                        updatePerPage={updatePageConfig}
                        uppercase={false}
                        currentStyle="font-extrabold text-[#242424]"
                      />
                    </Suspense>
                  </div>
                  <div className="hidden lg:flex items-center gap-2">
                    <LayoutGrid
                      className={`cursor-pointer h-[22px] ${columns === 2
                        ? "font-extrabold text-[#242424]"
                        : " text-lightGray/50"
                        }`}
                      onClick={() => setColumns(2)}
                    />
                    <Grip
                      className={`cursor-pointer ${columns === 3
                        ? "font-extrabold text-[#242424]"
                        : " text-lightGray/50"
                        }`}
                      onClick={() => setColumns(3)}
                    />
                    <div
                      className={`flex items-center justify-center cursor-pointer -ml-[10px] ${columns === 4
                        ? "font-extrabold text-[#242424]"
                        : " text-lightGray/50"
                        }`}
                      onClick={() => setColumns(4)}
                    >
                      <EllipsisVertical className={language === "en" ? "-mr-[10px]" : "-ml-[10px]"} />
                      <Grip />
                    </div>
                  </div>
                  <div className="px-4 pb-1 text-sm text-lightGray font-sans lg:hidden">
                    {t("shop.showingResults", {
                      range: `1-24`,
                      total: 530
                    })}
                  </div>
                  <div className="max-lg:hidden">
                    <Suspense fallback={<div>Loading...</div>}>
                      <SortingDropdown setSorting={updatePageConfig} setSortingDir={updatePageConfig} onSortingChange={() => setProducts([])} />
                    </Suspense>
                  </div>
                </div>
              </div>
              <div className="lg:hidden flex w-full justify-between px-3 pt-7">
                <div className="flex items-center gap-3 text-sm cursor-pointer">
                  {" "}
                  <DirectionProvider dir={i18n.language === "ar" ? "rtl" : "ltr"}>
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button
                          variant="ghost"
                          className="hover:bg-transparent w-fit p-0 flex items-center gap-1 text-[#333]"
                        >
                          <Menu /> <span>{t("shop.showSidebar")}</span>
                          <span className="text-[13px] font-bold text-secondary">
                            {i18n.language === "en" ? "MENU" : "القائمة"}
                          </span>
                        </Button>
                      </SheetTrigger>
                      <SheetContent
                        side={i18n.language === "en" ? "left" : "right"}
                        className="p-0 w-[300px] drawer overflow-y-auto"
                      >
                        <div className="w-[276px] px-[15px] py-7 divide-y-2">
                          <SheetClose asChild>
                            <div className="w-full flex justify-end items-center gap-2 pb-7">
                              <X size={16} />
                              <p className="font-semibold text-sm text-lightGray">{i18n.language === "en" ? "Close" : "يغلق"}</p>
                            </div>
                          </SheetClose>
                          <PriceSlider setPriceSlider={updatePageConfig} minPrice={pageConfig.min_price} maxPrice={pageConfig.max_price} onFilter={() => setProducts([])} />
                          <Suspense fallback={<div>Loading...</div>}>
                            <ProductCategories />
                          </Suspense>
                          <div className="mt-7">
                            <p className="mt-7 mb-5 uppercase font-semibold text-[16px] text-[#333]">{t("shop.stockStatus")}</p>
                            <div className="mt-7">
                              <p className="mt-7 mb-5 uppercase font-semibold text-[16px] text-[#333]">{t("shop.stockStatus")}</p>
                              <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-2">
                                  <Checkbox
                                    id="onSale"
                                    checked={pageConfig.on_sale === true}
                                    onCheckedChange={(checked) => updatePageConfig("on_sale", checked === true ? true : null)}
                                    className="border-lightGray/30 hover:border-primary"
                                  />
                                  <label htmlFor="onSale" className="text-sm text-[#777] hover:text-[#333]">
                                    {t("shop.onSale")}
                                  </label>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Checkbox
                                    id="inStock"
                                    checked={pageConfig.stock_status === "instock"}
                                    onCheckedChange={(checked) => updatePageConfig("stock_status", checked === true ? "instock" : null)}
                                    className="border-lightGray/30 hover:border-primary"
                                  />
                                  <label htmlFor="inStock" className="text-sm text-[#777] hover:text-[#333]">
                                    {t("shop.inStock")}
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <TopRatedProducts />
                        </div>
                      </SheetContent>
                    </Sheet>
                  </DirectionProvider>
                </div>
                <Suspense fallback={<div>Loading...</div>}>
                  <SortingDropdown setSorting={updatePageConfig} setSortingDir={updatePageConfig} onSortingChange={() => setProducts([])} />
                </Suspense>
              </div>
              <div className="flex flex-col justify-center px-4 pt-7">
                <div className="w-full flex items-center gap-7">
                  {(pageConfig.min_price !== null || pageConfig.max_price !== null) && <button className="flex items-center gap-2 text-[#333] hover:text-lightGray" onClick={() => setPageConfig(initialPageConfig)}>
                    <X size={16} strokeWidth={1.5} className="" />
                    <p className="font-semibold text-[.8125rem]">{t("shop.clear")}</p>
                  </button>}
                  {(pageConfig.min_price !== null && pageConfig.min_price > 0) && <button className="flex items-center gap-2 text-[#333] hover:text-lightGray" onClick={() => setPageConfig((prev) => ({ ...prev, min_price: null }))}>
                    <X size={16} strokeWidth={1.5} className="" />
                    <p className="font-semibold text-[.8125rem]">{t("shop.min")}<span className="text-primary"> {pageConfig.min_price} KD</span></p>
                  </button>}
                  {pageConfig.max_price !== null && <button className="flex items-center gap-2 text-[#333] hover:text-lightGray" onClick={() => setPageConfig((prev) => ({ ...prev, max_price: null }))}>
                    <X size={16} strokeWidth={1.5} className="" />
                    <p className="font-semibold text-[.8125rem]">Max <span className="text-primary"> {pageConfig.max_price} KD</span></p>
                  </button>}
                </div>

                {(!products.length && loading) ? (
                  <ProductsGridSkeleton count={8} />
                )
                  : (<div
                    className={`w-full grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-${columns} mx-auto`}
                  >
                    {products.map((product) => (
                      <ProductCard
                        key={product.id}
                        id={product.id}
                        slug={product.slug}
                        name={product.name}
                        price={product.price}
                        img={product.images ? product?.images[0]?.src : ""}
                        images={product.images}
                        optionName={product.attributes[0]?.visible && product.attributes[0]?.variation
                          ? product.attributes[0]?.name
                          : ""}
                        options={product.attributes[0]?.visible && product.attributes[0]?.variation
                          ? product.attributes[0]?.options
                          : []}
                        sku={product.sku}
                        currentCategories={product.categories}
                        slugToCategoryRecord={slugToCategoryRecord}
                        description={product.short_description}
                      />
                    ))}
                  </div>
                  )}
              </div>
              <div
                ref={loaderRef}
                className="text-center my-6 grid place-content-center w-full"
              >
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
          </div >
        </div >
        <GetInTouch language={i18n.language} />
      </div >
    );
  }
}

export default function Shop() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}
