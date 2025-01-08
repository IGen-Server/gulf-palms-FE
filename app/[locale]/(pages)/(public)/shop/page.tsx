"use client";
import { Suspense } from "react";
import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";
import ProductCard from "@/components/shop/ProductCard";
import PriceSlider from "@/components/shop/PriceSlider";
import Productcategories from "@/components/shop/Productcategories";
import { SortingDropdown } from "@/components/shop/SortingDropdown";
import { LayoutGrid, Grip, EllipsisVertical } from "lucide-react";
import GetInTouch from "@/components/common/GetInTouch";

const breadcrumbLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
];

const showPerpage = [
  { name: "9", href: "/shop/?per_page=9" },
  { name: "12", href: "/shop/?per_page=12" },
  { name: "18", href: "/shop/?per_page=18" },
  { name: "24", href: "/shop/?per_page=24" },
];

export default function Shop() {
  return (
    <div className="pt-[98px] ">
      <div className="max-w-content mx-auto">
        <div className="flex flex-col items-center pb-[200px] pt-[50px]">
          <h1 className="text-[36px] font-bold text-black">Shop</h1>
        </div>
        <div className="flex items-start ">
          <div className="w-[276px] px-[15px]  divide-y-2">
            <PriceSlider />
            <Productcategories />
          </div>
          <div className=" flex-1 ">
            <div className="px-[15px] flex  justify-between">
              <CustomBreadCrumb
                links={breadcrumbLinks}
                uppercase={false}
                currentStyle="font-semibold"
              />
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <p className="text-sm font-semibold ">Show :</p>
                  <CustomBreadCrumb
                    links={showPerpage}
                    uppercase={false}
                    currentStyle="font-semibold"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <LayoutGrid className="cursor-pointer" />
                  <Grip className="cursor-pointer" />
                  <div className="flex items-center justify-center cursor-pointer -ml-[10px]">
                    <EllipsisVertical className="-mr-[10px]" />
                    <Grip />
                  </div>
                </div>
                <Suspense fallback={<div>Loading...</div>}>
                  <SortingDropdown />
                </Suspense>
              </div>
            </div>
            <div className="grid  pt-16">
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
      <GetInTouch />
    </div>
  );
}
