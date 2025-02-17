"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowLeftRight, Heart , Expand  } from "lucide-react";
import { useState } from "react";

export default function ProductDetailsPage() {
  const [selectedImage, setselectedImage] = useState(
    "https://gulfpalms.com/wp-content/uploads/2025/02/Jozi-3-300x300.jpg"
  );
  return (
    <div className="container max-w-[1200px] px-2 lg:px-0 lg:py-8 mx-auto font-sans">
      {/* Breadcrumb and Navigation */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="flex flex-col-reverse lg:flex-row gap-4">
          <div className="flex lg:flex-col gap-4">
            <div className="border rounded overflow-hidden cursor-pointer">
              <Image
                src="https://gulfpalms.com/wp-content/uploads/2025/02/Jozi-3-300x300.jpg"
                alt="Jozi plant thumbnail"
                width={122}
                height={122}
                className="object-cover w-full h-full"
                onClick={()=>setselectedImage("https://gulfpalms.com/wp-content/uploads/2025/02/Jozi-3-300x300.jpg")}
              />
            </div>
            <div className="border rounded overflow-hidden cursor-pointer">
              <Image
                src="https://gulfpalms.com/wp-content/uploads/2025/02/Jozi-2-300x300.png"
                alt="Jozi plant thumbnail"
                width={122}
                height={122}
                className="object-cover w-full h-full"
                onClick={()=>setselectedImage("https://gulfpalms.com/wp-content/uploads/2025/02/Jozi-2-300x300.png")}
              />
            </div>
          </div>

          <div className="relative flex-1">
            <Image
              src={selectedImage}
              alt="Jozi plant"
              width={450}
              height={450}
              className="object-cover rounded w-full max-w-[450px]"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <span>/</span>
              <Link href="/ya-hala-offers" className="hover:text-primary">
                Ya Hala Offers
              </Link>
              <span>/</span>
              <span>Jozi</span>
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-muted rounded-sm">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-muted rounded-sm">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <h1 border-b-2me="text-3xl font-arabic text-gray-800">Jozi</h1>
          <div className="text-primary text-2xl font-semibold">22.000 KD</div>

          <p className="text-muted-foreground">
            High quality grafted sider tree. It is evergreen and suitable for
            Kuwait&apos;s weather. Fruits are large and taste great. Ripens at
            the start of the season.
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-6">
            <button className="text-xl px-2 py-1 hover:bg-muted rounded">
              -
            </button>
            <input
              type="number"
              value="1"
              className="w-12 text-center border-none"
              min="1"
            />
            <button className="text-xl px-2 py-1 hover:bg-muted rounded">
              +
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="rounded-none px-6 py-2 bg-primary text-white border-b-2 border-orange-700/20 hover:bg-[#FFA366]/90">
              ADD TO CART
            </button>
            <button className="rounded-none px-6 py-2 bg-primary text-white border-b-2 border-orange-700/20 hover:bg-[#FFA366]/90">
              BUY NOW
            </button>
          </div>

          {/* Compare and Wishlist */}
          <div className="flex gap-6 text-sm text-muted-foreground">
            <button className="flex items-center gap-2 hover:primary">
              <ArrowLeftRight className="w-4 h-4" />
              Compare
            </button>
            <button className="flex items-center gap-2 hover:primary">
              <Heart className="w-4 h-4" />
              Add to wishlist
            </button>
          </div>

          {/* Product Info */}
          <div className="space-y-4 pt-4">
            <div className="flex gap-2">
              <span className="text-muted-foreground">Category:</span>
              <Link
                href="/ya-hala-offers"
                className="text-primary hover:underline"
              >
                Ya Hala Offers
              </Link>
            </div>

            <div className="flex gap-4 items-center">
              <span className="text-muted-foreground">Share:</span>
              <div className="flex gap-4">
                <Link href="#" className="hover:primary">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
                <Link href="#" className="hover:primary">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M1.815 21.585h20.37l-10.185-18.37-10.185 18.37zm8.185-7.585v-2h4v2h-4zm0 4v-2h4v2h-4z" />
                  </svg>
                </Link>
                <Link href="#" className="hover:primary">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </Link>
                <Link href="#" className="hover:primary">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Specifications */}
      <div className="mt-16">
        <div className="flex justify-between py-4 border-b">
          <span>Pot Size</span>
          <span>40CM</span>
        </div>
      </div>
    </div>
  );
}
