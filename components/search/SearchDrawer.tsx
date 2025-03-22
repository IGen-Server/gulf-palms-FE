/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { ProductService } from "@/services/api/product.service";
import { useTranslation } from "react-i18next";
import { useGlobalDataProvider } from "@/providers/GlobalDataProvider";

export const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

interface Product {
  name: string;
  price: string;
  image: string;
}

export default function SearchDrawer() {
  const axiosInstanceWithLoader = CreateAxiosInstanceWithLoader();
  const { categories } = useGlobalDataProvider();
  const { isSearchDrawerOpen, setIsSearchDrawerOpen } = useGlobalDataProvider();

  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(true);
  const { t, i18n } = useTranslation();
  
  const [pageConfig, setPageConfig] = useState({
    search: searchQuery,
    per_page:30,
    lang: i18n.language,
  });

  const debouncedSearchTerm = useDebounce(searchQuery, 1000);

  useEffect(() => {
    if (!debouncedSearchTerm) return;

    const updatePageConfig = async () => {
      console.log(debouncedSearchTerm);
      setPageConfig((prev) => ({
        ...prev,
        search: debouncedSearchTerm,
      }));
    };

    updatePageConfig();
  }, [debouncedSearchTerm]);

  useEffect(() => {
    const getProducts = async () => {
      try {

        if (pageConfig.search && categories?.find((x) => x.name === pageConfig.search)) {
          const productsByCategory = await ProductService.Get(
            {
              per_page:30,
              lang: i18n.language,
              category: pageConfig.search
            },
            axiosInstanceWithLoader
          );
          setProducts(productsByCategory);
        } else {
          const productsBySearchTerm = await ProductService.Get(
            pageConfig,
            axiosInstanceWithLoader
          );
  
          setProducts(productsBySearchTerm);
        }
        
      } catch (error) {
        console.error(error);
      }
    };

    if (pageConfig) {
      if (pageConfig.search){
        getProducts();
      } else{
        setProducts([]);
      }
    }

  }, [pageConfig]);

  if (!isOpen) return null;

  return (
    <div className="overflow-y-auto h-[calc(100vh-200px)] max-w-[1370px] mx-auto w-full flex flex-col items-center justify-start overflow-x-hidden ">
      <div className="mb-8 space-y-5 flex flex-col justify-center items-center">
        <Input
          type="text"
          placeholder={t('search.placeholder')}
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)}
          className="text-[30px] xl:text-[40px] h-fit font-semibold text-black  placeholder:font-semibold placeholder:text-black !focus-visible:ring-0 xl:pl-[200px] !border-none !shadow-none w-[380px] !p-0 text-center"
        />
        {!!searchQuery || (
          <p className="text-left xl:text-center pl-4 xl:pl-0 text-muted-foreground w-[380px]">
            {t('search.message')}
          </p>
        )}
      </div>

      {/* {searchQuery && products.length === 0 && <div className="text-left mt-5 font-bold text-xl">No items found !</div>} */}

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols- gap-6 h-[calc(100vh-300px)] overflow-y-auto w-full overflow-x-hidden  px-4">
        {products.map((product, index) => (
          <div key={index} className="group cursor-pointer w-[180px] h-[280px] flex flex-col items-start justify-start overflow-hidden">
            <Image
              src={product.images[0]?.src || "/placeholder.svg"}
              alt={product.name}
              width={180}
              height={180}
              className="object-cover w-[180px] h-[180px] group-hover:scale-105 transition-transform duration-300 mb-2 "
            />
            <h3 className="font-medium text-sm">{product?.name}</h3>
            <p className="text-primary">{product?.price} Kd</p>
          </div>
        ))}
       
      </div>
     {searchQuery && products.length && <Link onClick={() => { setIsSearchDrawerOpen(false) }} href={`/shop/?s=${searchQuery}&post_type=product`} className="w-screen overflow-hidden pt-5 cursor-pointer  border-t place-content-end font-semibold text-center">
        VIEW ALL RESULTS
        </Link>}
    </div>
  );
}
