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

interface Product {
  name: string;
  price: string;
  image: string;
}


export default function SearchDrawer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(true);
  const { i18n } = useTranslation();
  
  const axiosInstanceWithLoader = CreateAxiosInstanceWithLoader();

  const [pageConfig, setPageConfig] = useState({
    search: searchQuery,
    lang: i18n.language,
  });

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await ProductService.Get(
          pageConfig,
          axiosInstanceWithLoader
        );

        console.log(response);
        searchQuery && setProducts(response);
        
      } catch (error) {
        console.error(error);
      }
    };

    searchQuery && getProducts();
  }, [pageConfig,searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="overflow-y-auto h-[calc(100vh-200px)] max-w-[1370px] mx-auto w-full flex flex-col items-center justify-start">
      <div className="mb-8 space-y-5 flex flex-col justify-center items-center">
        <Input
          type="text"
          placeholder="Search for products"
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)}
          className="text-[30px] xl:text-[40px] h-fit font-semibold text-black  placeholder:font-semibold placeholder:text-black !focus-visible:ring-0 xl:pl-[200px] !border-none !shadow-none w-[380px] !p-0 text-center"
        />
        {!!searchQuery || (
          <p className="text-left xl:text-center pl-4 xl:pl-0 text-muted-foreground w-[380px]">
            Start typing to see products you are looking for.
          </p>
        )}
      </div>

      {searchQuery && products.length === 0 && <div className="text-left mt-5 font-bold text-xl">No items found !</div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 h-[calc(100vh-300px)] overflow-y-auto w-full">
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
      {/* <div className="border-t text-center w-full pt-5 uppercase font-semibold">
         <Link href={`/?s=${searchQuery}/&post_type=product`}> View all results </Link>
        </div> */}
    </div>
  );
}
