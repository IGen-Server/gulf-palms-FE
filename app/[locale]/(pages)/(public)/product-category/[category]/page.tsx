"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import ProductCard from "@/components/shop/ProductCard";
import PriceSlider from "@/components/shop/PriceSlider";
import ProductCategories from "@/components/shop/Productcategories";
import { ProductSortValues, SortingDropdown } from "@/components/shop/SortingDropdown";
import { LayoutGrid, Grip, EllipsisVertical, X, MoveLeft, Menu, ChevronDown } from "lucide-react";
import GetInTouch from "@/components/common/GetInTouch";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { ProductService } from "@/services/api/product.service";
import { showPerPage } from "@/constants/global-constants";
import { ProductCategoryModel } from "@/models/product/product";
import { generateIdToCategoryRecord } from "@/services/utility/utility.service";
import { SlugType, useGlobalDataProvider } from "@/providers/GlobalDataProvider";
import { Checkbox } from "@/components/ui/checkbox";
import { CustomBreadCrumb2 } from "@/components/common/CustomBreadCrumb2";
import { DirectionProvider } from "@radix-ui/react-direction";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CategoryPage() {
  const { categories, addSlugToTranslate } = useGlobalDataProvider();
  const { category: categorySlug } = useParams();

  const [columns, setColumns] = useState(4)
  const { t, i18n: { language: currentLocale } } = useTranslation("common");
  const axiosInstanceWithLoader = CreateAxiosInstanceWithLoader();
  const router = useRouter();
  const pathname = usePathname();
  const paths = pathname.split("/");
  const path = paths[paths.length - 1];
  const normalizedCategory = path.includes("-") ? path.split("-").join(" ") : path;
  const currentPath = paths[paths.length - 1];
  const normalizedCurrentPath = currentPath.includes("-") ? currentPath.split("-").join(" ") : currentPath;

  const initialPageConfig = {
    lang: currentLocale,
    order: 'asc',
    orderby: ProductSortValues[0],
    page: 1,
    per_page: 24,
    min_price: null,
    max_price: null,
    category: categorySlug,
    stock_status: null,
    on_sale: null
  }

  // Orders // page: 1, per_page: 10
  const [pageConfig, setPageConfig] = useState(initialPageConfig);

  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<any>({});
  const loaderRef = useRef<HTMLDivElement>(null);
  const [showMobileScreenCategory, setShowMobileScreenCategory] =
    useState(false);
  const [showSidebarButton, setShowSidebarButton] = useState(false);

  const updatePageConfig = (key: string, value: any) => {
    setPageConfig((prevState) => ({
      ...prevState,
      [key]: value
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  // Category
  const [slugToCategoryRecord, setSlugToCategoryRecord] = useState<Record<number, ProductCategoryModel>>({});

  useEffect(() => {
    const getProductCategories = async () => {
      if (categories) {
        setSlugToCategoryRecord(generateIdToCategoryRecord(categories));

        let currentCategorySlug = decodeURIComponent(categorySlug as string);

        const selectedCategory = categories.find((x) => x.slug === currentCategorySlug) || null;
        setCurrentCategory(selectedCategory);

        if (selectedCategory) {
          addSlugToTranslate(currentLocale,
            decodeURIComponent(currentCategorySlug as string),
            currentLocale === 'ar' ? selectedCategory.translations.en : selectedCategory.translations.ar,
            SlugType.Category,
            ''
          );
        }
      }
    };

    getProductCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

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

  return (
    <div className="pt-[98px] ">
      <div className={`fixed top-1/2 transform -translate-y-1/2 transition-all duration-500 ${showSidebarButton
        ? currentLocale === "en"
          ? "left-0"
          : "right-0"
        : currentLocale === "en"
          ? "-left-16"
          : "-right-16"
        } text-sm cursor-pointer z-30`}>
        {" "}
        <DirectionProvider dir={currentLocale === "ar" ? "rtl" : "ltr"}>
          <Sheet>
            <SheetTrigger asChild>
              <div

                className="w-16 h-16 rounded-r-full bg-[#D4D4D4] flex justify-center items-center text-[#242424]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-funnel"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" /></svg>

              </div>
            </SheetTrigger>
            <SheetContent
              side={currentLocale === "en" ? "left" : "right"}
              className="p-0 w-[300px] drawer overflow-y-auto"
            >
              <div className="w-[276px] px-[15px] py-7 divide-y-2">
                <SheetClose asChild>
                  <div className="w-full flex justify-end items-center gap-2 pb-7">
                    <X size={16} />
                    <p className="font-semibold text-sm text-lightGray">{currentLocale === "en" ? "Close" : "يغلق"}</p>
                  </div>
                </SheetClose>
                <PriceSlider setPriceSlider={updatePageConfig} minPrice={pageConfig.min_price} maxPrice={pageConfig.max_price} />
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
                <div className="mt-7">
                  <p className="mt-7 mb-5 uppercase font-semibold text-[16px] text-[#333]">{t("shop.topRatedProducts")}</p>
                  <div className="flex items-center gap-3">
                    <Image src="https://clone.gulfpalms.com/wp-content/uploads/2023/08/Dracaena-Compacta-Height-60CM-3-1-860x860.jpg" alt="Product image" width={65} height={65} />
                    <div className="flex flex-col gap-2">
                      <p className="font-medium text-sm text-[#333]">Dracaena Compacta</p>
                      <p className="text-primary text-sm">{currentLocale === "en" ? "From" : "من"} 3.500 KD</p>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </DirectionProvider>
      </div>
      <div className="max-w-content mx-auto">
        <div className="flex flex-col items-center pb-[100px] pt-[50px]">
          <div className="flex items-center gap-3 text-[#242424]">
            <MoveLeft className="hover:text-lightGray cursor-pointer" onClick={() => router.back()} />
            <h1 className="text-[36px] lg:text-[4.25rem] font-bold text-[#242424] capitalize">
              {currentCategory?.name ? decodeURIComponent(currentCategory?.name) : ''}
            </h1>

          </div>
          <div className="lg:hidden w-full mx-auto min-h-10 px-6 text-[#333] text-center">
            <p
              className="flex items-center gap-3 justify-center pt-4 cursor-pointer"
              onClick={() =>
                setShowMobileScreenCategory(!showMobileScreenCategory)
              }
            >
              {currentLocale === "en" ? "Categories" : "الفئات"}{" "}
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
        <div className="flex items-start ">
          <div className="hidden lg:block w-[276px] px-[15px]  divide-y-2">
            <PriceSlider setPriceSlider={updatePageConfig} minPrice={pageConfig.min_price} maxPrice={pageConfig.max_price} />
            <ProductCategories category={normalizedCategory} currentPath={normalizedCurrentPath} />
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
            <div className="mt-7">
              <p className="mt-7 mb-5 uppercase font-semibold text-[16px] text-[#333]">{t("shop.topRatedProducts")}</p>
            </div>
          </div>
          <div className=" flex-1 ">
            <div className="px-[15px] flex  justify-between">
              {/* <CustomBreadCrumb
                links={breadcrumbLinks}
                uppercase={true}
                currentStyle="font-semibold"
              /> */}
              <div className="">
                <span className="text-muted-foreground font-medium">
                  <span>Home</span>&nbsp;&nbsp;/&nbsp;&nbsp;<span className=" font-semibold">{currentCategory?.name ? decodeURIComponent(currentCategory?.name) : ''}</span>
                </span>
              </div>
              <div className="hidden lg:flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <p className="text-sm font-semibold text-[#242424]">{t("shop.show")} :</p>
                  <CustomBreadCrumb2
                    links={showPerPage}
                    activeLastLink={true}
                    updatePerPage={updatePageConfig}
                    uppercase={false}
                    currentStyle="font-extrabold text-[#242424]"
                  />
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
                    <EllipsisVertical className={currentLocale === "en" ? "-mr-[10px]" : "-ml-[10px]"} />
                    <Grip />
                  </div>
                </div>

                <div className="hidden lg:block">
                  <Suspense fallback={<div>Loading...</div>}>
                    <SortingDropdown setSorting={updatePageConfig} setSortingDir={updatePageConfig} />
                  </Suspense>
                </div>
              </div>
              <div className="px-4 pb-1 text-sm text-lightGray lg:hidden">
                {t("shop.showingResults", {
                  range: `1-24`,
                  total: 530
                })}
              </div>
            </div>
            <div className="lg:hidden flex w-full justify-between px-3 mt-7">
              <div className="flex items-center gap-3 text-sm cursor-pointer">
                {" "}
                <DirectionProvider dir={currentLocale === "ar" ? "rtl" : "ltr"}>
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button
                        variant="ghost"
                        className="hover:bg-transparent w-fit p-0 flex items-center gap-1 text-[#333]"
                      >
                        <Menu /> <span>{t("shop.showSidebar")}</span>
                        <span className="text-[13px] font-bold text-secondary">
                          {currentLocale === "en" ? "MENU" : "القائمة"}
                        </span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent
                      side={currentLocale === "en" ? "left" : "right"}

                      className="p-0 w-[300px] drawer overflow-y-auto"
                    >
                      <div className="w-[276px] px-[15px] py-7 divide-y-2">
                        <SheetClose asChild>
                          <div className="w-full flex justify-end items-center gap-2 pb-7">
                            <X size={16} />
                            <p className="font-semibold text-sm text-lightGray">{currentLocale === "en" ? "Close" : "يغلق"}</p>
                          </div>
                        </SheetClose>
                        <PriceSlider setPriceSlider={updatePageConfig} minPrice={pageConfig.min_price} maxPrice={pageConfig.max_price} />
                        <Suspense fallback={<div>Loading...</div>}>
                          <ProductCategories />
                        </Suspense>
                        <div className="mt-7">
                          <p className="mt-7 mb-5 uppercase font-semibold text-[16px] text-[#333]">{t("shop.stockStatus")}</p>
                          <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                              <Checkbox
                                id="onSale"
                                // checked={termsAccepted}
                                // onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
                                className="border-lightGray/30 hover:border-primary"
                              />
                              <label htmlFor="onSale" className="text-sm text-[#777] hover:text-[#333]">
                                {t("shop.onSale")}
                              </label>
                            </div>
                            <div className="flex items-center gap-2">
                              <Checkbox
                                id="inStock"
                                // checked={termsAccepted}
                                // onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
                                className="border-lightGray/30 hover:border-primary"
                              />
                              <label htmlFor="inStock" className="text-sm text-[#777] hover:text-[#333]">
                                {t("shop.inStock")}
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="mt-7">
                          <p className="mt-7 mb-5 uppercase font-semibold text-[16px] text-[#333]">{t("shop.topRatedProducts")}</p>
                          <div className="flex items-center gap-3">
                            <Image src="https://clone.gulfpalms.com/wp-content/uploads/2023/08/Dracaena-Compacta-Height-60CM-3-1-860x860.jpg" alt="Product image" width={65} height={65} />
                            <div className="flex flex-col gap-2">
                              <p className="font-medium text-sm text-[#333]">Dracaena Compacta</p>
                              <p className="text-primary text-sm">{currentLocale === "en" ? "From" : "من"} 3.500 KD</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </DirectionProvider>
              </div>
              <Suspense fallback={<div>Loading...</div>}>
                <SortingDropdown setSorting={updatePageConfig} setSortingDir={updatePageConfig} />
              </Suspense>
            </div>
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
                <p className="font-semibold text-[.8125rem]">{t("shop.max")} <span className="text-primary"> {pageConfig.max_price} KD</span></p>
              </button>}
            </div>
            <div
              className={`w-full grid pt-16 grid-cols-2 gap-3 px-3 lg:grid-cols-${columns} px-2`}
            >
              {products?.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  slug={product.slug}
                  name={product.name}
                  price={product.price}
                  img={product.images ? product.images[0].src : ''}
                  images={product.images}
                  optionName={product.attributes[0]?.visible && product.attributes[0]?.variation
                    ? product.attributes[0]?.name
                    : ""}
                  options={product.attributes[0]?.visible && product.attributes[0]?.variation
                    ? product.attributes[0]?.options
                    : []}
                  sku={product.sku}
                  currentCategories={product.categories}
                  description={product.short_description}
                  slugToCategoryRecord={slugToCategoryRecord}
                />
              ))}
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
