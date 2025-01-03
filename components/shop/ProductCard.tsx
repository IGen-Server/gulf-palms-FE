/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Heart, Search, ShoppingCart } from "lucide-react";

export default function ProductCard() {
  return (
    <div className="group max-w-[433px] grid place-content-center">
      <div className="relative">
        {/* Product Image Section */}
        <div className="mb-[-48.6px]"></div>
        <div className="grid place-content-center w-[280px] overflow-hidden ">
          <Link
            href="https://gulfpalms.com/en/product/bamboo-stick/"
            className="block"
          >
            <img
              loading="lazy"
              width={280}
              height={280}
              src="https://gulfpalms.com/wp-content/uploads/2024/01/Citrus-Porring-Soil-300x300.jpeg"
              alt="Bamboo Stick"
              className="w-[280px] h-auto group-hover:scale-[150%] duration-500"
            />
          </Link>
        </div>

        {/* Product Details */}
        <div className="w-full text-center">
          <div className="relative ">
            <h3 className="text-[14px] font-semibold ">
              <Link
                href="https://gulfpalms.com/en/product/bamboo-stick/"
                className="text-center"
              >
                Bamboo Stick
              </Link>
            </h3>
            <div className="text-[13.3px] text-[#a5a5a5]">
              <Link
                href="https://gulfpalms.com/en/product-category/garden-accessories/"
                rel="tag"
                className="hover:underline"
              >
                Garden Accessories
              </Link>
              ,{" "}
              <Link
                href="https://gulfpalms.com/en/product-category/garden-accessories/bamboo-sticks/"
                rel="tag"
                className="hover:underline"
              >
                Bamboo Sticks
              </Link>
            </div>
            <div>
              <span className="text-primary text-[14px] font-semibold">
                From{" "}
                <span className="">
                  0.040 <span className="">KD</span>
                </span>
              </span>
            </div>
          </div>

          {/* Compare Button */}
          <div className="absolute left-0 bottom-[100px] w-full bg-white transform translate-y-[-100%] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <div className="text-center py-2">
              <Link
                href="https://gulfpalms.com/en/product/bamboo-stick/?product_id=22789"
                rel="nofollow"
                data-id="22789"
                className="text-gray-700 hover:text-gray-500"
              >
                <span>Compare</span>
              </Link>
            </div>
          </div>

          {/* Hover Content */}
          <div className="transform translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 ">
            <div className="flex items-center justify-between">
              {/* Wishlist Button */}
              <div>
                <Link
                  href="https://gulfpalms.com/en/product/bamboo-stick/"
                  rel="nofollow"
                  className="text-gray-700 hover:text-gray-500"
                >
                  <Heart />
                </Link>
              </div>
              {/* Add to Cart Button */}
              <div className="bg-primary text-white uppercase font-semibold text-sm px-3 py-2 shadow-md shadow-primary/95 min-w-[150px] text-center">
                <div className="group select_product grid place-content-center cursor-pointer">
                  {/* Default Text */}
                  <span className="block group-hover[.select_product]:hidden">
                    Select options
                  </span>
                  {/* Hover Icon */}
                  <div className="hidden  group-hover[.select_product]:block">
                    <ShoppingCart />
                  </div>
                </div>
              </div>

              {/* Quick View Button */}
              <div>
                <Link
                  href="https://gulfpalms.com/en/product/bamboo-stick/"
                  className="text-gray-700 hover:text-gray-500"
                  rel="nofollow"
                >
                  <Search />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
