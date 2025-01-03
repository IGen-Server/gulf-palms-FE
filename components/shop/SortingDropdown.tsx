"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

export function SortingDropdown() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // List of valid orderby values
  const knownValues = [
    "menu_order",
    "popularity",
    "rating",
    "date",
    "price",
    "price-desc",
  ];

  // Get the current "orderby" parameter, default to "menu_order" if invalid
  const currentOrderby = knownValues.includes(
    searchParams.get("popularity") || ""
  )
    ? searchParams.get("orderby")!
    : "menu_order";

  // Handle change in sorting option
  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("orderby", value); // Update the "orderby" parameter
    params.set("paged", "1"); // Reset the pagination to page 1

    router.push(`/shop?${params.toString()}`); // Navigate to the updated URL
  };

  return (
    <form className="sorting" method="get">
      <Select onValueChange={handleChange} defaultValue={currentOrderby}>
        <SelectTrigger className="orderby" aria-label="Shop order">
          <span>{currentOrderby}</span>
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
