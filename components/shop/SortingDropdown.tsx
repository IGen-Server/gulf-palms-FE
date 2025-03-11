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
}

export function SortingDropdown({ setSorting }: SortingDropdownProps) {
  const router = useRouter();

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
    setSorting('orderby', value);
  };

  return (
    <form className="sorting lg:w-[178px] mr-4" method="get">
      <Select onValueChange={handleChange} defaultValue={currentOrderby} >
        <SelectTrigger
          className="orderby lg:flex hidden"
          aria-label="Shop order"
          id='sort_button'
        >
          <span>
            {currentOrderby != "menu_order"
              ? currentOrderby
              : "Default Sorting"}
          </span>
        </SelectTrigger>
        <SelectTrigger className="lg:hidden sorting_mobile " aria-label="Shop order">
          <ArrowUpDown />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="menu_order">Default sorting</SelectItem>
          <SelectItem value="popularity">Sort by popularity</SelectItem>
          <SelectItem value="rating">Sort by average rating</SelectItem>
          <SelectItem value="date">Sort by latest</SelectItem>
          <SelectItem value="price">Sort by price: low to high</SelectItem>
          <SelectItem value="price-desc">Sort by price: high to low</SelectItem>
        </SelectContent>
      </Select>
      <input type="hidden" name="paged" value="1" />
    </form>
  );
}
