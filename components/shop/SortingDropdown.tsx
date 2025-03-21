"use client";

import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useState } from "react";
import { ArrowUpDown } from 'lucide-react';
import { useTranslation } from "react-i18next";
import { DirectionProvider } from "@radix-ui/react-direction";

export const ProductSortValues = [
  "menu_order",
  "popularity",
  "rating",
  "date",
  "price",
  "price-desc",
];

interface SortingDropdownProps {
  setSorting: (key: string, value: any) => void;
  setSortingDir: (key: string, value: any) => void;

}

export function SortingDropdown({ setSorting, setSortingDir }: SortingDropdownProps) {
  const router = useRouter();
  const { t, i18n: { language } } = useTranslation();

  // List of valid orderby values
  const [currentOrderby, setCurrentOrderby] = useState<string>('menu_order');
  // const currentOrderby = ProductSortValues.includes(
  //   searchParams.get("popularity") || ""
  // )
  //   ? searchParams.get("orderby")!
  //   : "menu_order";

  // Handle change in sorting option
  const handleChange = (value: string) => {

    // const params = new URLSearchParams(searchParams.toString());
    // params.set("orderby", value); // Update the "orderby" parameter
    // params.set("paged", "1"); // Reset the pagination to page 1
    // router.push(`/shop?${params.toString()}`); // Navigate to the updated URL
    setCurrentOrderby(value)

    if (value === "price-desc") {
      setSorting('orderby', "price");
      setSorting('order', "desc");
      return;
    }


    setSorting('orderby', value);
    setSorting('order', "asc");

  };

  return (
    <DirectionProvider dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <form className="sorting lg:w-[178px] mr-4" method="get">
        <Select onValueChange={handleChange} defaultValue={currentOrderby} >
          <SelectTrigger
            className="orderby lg:flex hidden"
            aria-label="Shop order"
            id='sort_button'
          >
            <span className="text-[#242424]">
              {currentOrderby != "menu_order"
                ? currentOrderby
                : t("shop.default")}
            </span>
          </SelectTrigger>
          <SelectContent className="text-[#333]">
            <SelectItem value="menu_order">{t("shop.default")}</SelectItem>
            <SelectItem value="popularity">{t("shop.sortByPopularity")}</SelectItem>
            <SelectItem value="rating">{t("shop.sortByRating")}</SelectItem>
            <SelectItem value="date">{t("shop.sortByLatest")}</SelectItem>
            <SelectItem value="price">{t("shop.priceLowToHigh")}</SelectItem>
            <SelectItem value="price-desc">{t("shop.priceHighToLow")}</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={handleChange} defaultValue={currentOrderby} >
          <SelectTrigger className="lg:hidden sorting_mobile">
            <ArrowUpDown />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="menu_order">{t("shop.default")}</SelectItem>
            <SelectItem value="popularity">{t("shop.sortByPopularity")}</SelectItem>
            <SelectItem value="rating">{t("shop.sortByRating")}</SelectItem>
            <SelectItem value="date">{t("shop.sortByLatest")}</SelectItem>
            <SelectItem value="price">{t("shop.priceLowToHigh")}</SelectItem>
            <SelectItem value="price-desc">{t("shop.priceHighToLow")}</SelectItem>
          </SelectContent>
        </Select>
        <input type="hidden" name="paged" value="1" />
      </form>
    </DirectionProvider>

  );
}
