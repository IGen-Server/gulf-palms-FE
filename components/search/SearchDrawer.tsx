"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";

interface Product {
  name: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    name: "Mango Alphonso",
    price: "From 9.000 KD",
    image:
      "https://gulfpalms.com/wp-content/uploads/2023/08/Slide1-11-700x700.jpg",
  },
  {
    name: "Washington Navel Orange",
    price: "From 9.500 KD",
    image:
      "https://gulfpalms.com/wp-content/uploads/2023/08/red-blood-orange--700x700.jpg",
  },
  {
    name: "Red Blood Orange",
    price: "From 9.500 KD",
    image:
      "https://gulfpalms.com/wp-content/uploads/2023/08/Slide1-12-700x700.jpg",
  },
];

export default function SearchDrawer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="overflow-y-auto h-[calc(100vh-200px)] max-w-[1370px] mx-auto w-full flex flex-col items-center justify-start">
      <div className="mb-8 space-y-5">
        <Input
          type="text"
          placeholder="Search for products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="text-[30px] xl:text-[60px] h-fit font-semibold text-black  placeholder:font-semibold placeholder:text-black !focus-visible:ring-0 xl:pl-[200px]"
        />
        {!!searchQuery || (
          <p className="text-left xl:text-center pl-4 xl:pl-0 text-muted-foreground">
            Start typing to see products you are looking for.
          </p>
        )}
      </div>

      {filteredProducts.length === 0 && <div className="text-left mt-5 font-bold text-xl">No items found !</div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 h-[calc(100vh-300px)] overflow-y-auto">
        {filteredProducts.map((product, index) => (
          <div key={index} className="group cursor-pointer ">
            <div className="aspect-square mb-2 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={200}
                height={250}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-medium">{product.name}</h3>
            <p className="text-muted-foreground">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
