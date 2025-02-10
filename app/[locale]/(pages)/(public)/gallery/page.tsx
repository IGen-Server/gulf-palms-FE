/* eslint-disable @next/next/no-img-element */
import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";
import GetInTouch from "@/components/common/GetInTouch";
import ProductsGrid from "@/components/common/ProductsGrid";
import React from "react";

const breadcrumbLinks = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
];

const imageUrls = [
  "https://gulfpalms.com/wp-content/uploads/2023/10/Hasawi-Field-3.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/Hasawi-Field-3.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/1.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/2.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/3-Washingtonia-palm.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/3-Washingtonia-palm.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/3-Washingtonia-palm.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/Blueberry-1.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/Blueberry-1.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/Botus-1.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/Bougainvillea.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/C5219.00_00_10_08.Still006-1.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/C5219.00_01_38_23.Still004-1.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/9.png",
  "https://gulfpalms.com/wp-content/uploads/2023/10/Clementine.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/Clerodendron.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/DSC01133.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/DSC01141.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/DSC01156.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/DSC01161-1.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/DSC01170-1.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/DSC01193-1.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/DSC01206-1.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/DSC04547-1.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/DSC04561-1.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/DSC04595.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/DSC04599.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/DSC04601.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/DSC04607.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/DSC04637-copy.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/DSC04682-1.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/DSC04685-1.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/DSC04688-1.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/DSC06085.png",
  "https://gulfpalms.com/wp-content/uploads/2023/10/DSC06095.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/DSC06112.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/DSC06117.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/DSC06186.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/DSC06262.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/DSC06464.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/DSC06474-1.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/Hasawi-Field-3.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/Hasawi-Field-3.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/1.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/2.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/3-Washingtonia-palm.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/3-Washingtonia-palm.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/3-Washingtonia-palm.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/Blueberry-1.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/Blueberry-1.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/Botus-1.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/Bougainvillea.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/C5219.00_00_10_08.Still006-1.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/C5219.00_01_38_23.Still004-1.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/9.png",
  "https://gulfpalms.com/wp-content/uploads/2023/10/Clementine.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/Clerodendron.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/DSC01133.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/DSC01141.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/DSC01156.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/DSC01161-1.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/DSC01170-1.jpg",
  "https://gulfpalms.com/wp-content/uploads/2023/10/DSC01193-1.jpg",
];

export default function Gallery() {
  return (
    <div className="pt-[98px] ">
      <div className="max-w-[1192px] mx-auto">
        <div className="flex flex-col items-center pb-[200px] pt-[50px]">
          <h1 className="text-[36px] font-bold text-black">Gallery</h1>
          <CustomBreadCrumb links={breadcrumbLinks} />
        </div>
        <div className="pb-[80px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
            <div className="space-y-7">
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/Hasawi-Field-3.jpg"
                alt="Image 1"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/1.jpg"
                alt="Image 3"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/2.jpg"
                alt="Image 4"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/3-Washingtonia-palm.jpg"
                alt="Image 5"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/3-Washingtonia-palm.jpg"
                alt="Image 7"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/Hasawi-Field-3.jpg"
                alt="Image 2"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/Blueberry-1.jpg"
                alt="Image 8"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/Blueberry-1.jpg"
                alt="Image 9"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/Botus-1.jpg"
                alt="Image 10"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/Bougainvillea.jpg"
                alt="Image 11"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/C5219.00_00_10_08.Still006-1.jpg"
                alt="Image 12"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/C5219.00_01_38_23.Still004-1.jpg"
                alt="Image 13"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/9.png"
                alt="Image 14"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/Clementine.jpg"
                alt="Image 15"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/Clerodendron.jpg"
                alt="Image 16"
                className="h-[409px] w-[272.5px] object-cover"
              />
            </div>
            <div className="space-y-7">
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/DSC01133.jpg"
                alt="Image 17"
                className="h-[309px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/DSC01141.jpg"
                alt="Image 18"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/DSC01156.jpg"
                alt="Image 19"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/DSC01161-1.jpg"
                alt="Image 20"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/Hasawi-Field-3.jpg"
                alt="Image 1"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/3-Washingtonia-palm.jpg"
                alt="Image 6"
                className="h-[209px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/Hasawi-Field-3.jpg"
                alt="Image 2"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/1.jpg"
                alt="Image 3"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/2.jpg"
                alt="Image 4"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/3-Washingtonia-palm.jpg"
                alt="Image 5"
                className="h-[309px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/3-Washingtonia-palm.jpg"
                alt="Image 6"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/3-Washingtonia-palm.jpg"
                alt="Image 7"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/Blueberry-1.jpg"
                alt="Image 8"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/Blueberry-1.jpg"
                alt="Image 9"
                className="h-[409px] w-[272.5px] object-cover"
              />
            </div>
            <div className="space-y-7">
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/Botus-1.jpg"
                alt="Image 10"
                className="h-[309px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/Bougainvillea.jpg"
                alt="Image 11"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/C5219.00_00_10_08.Still006-1.jpg"
                alt="Image 12"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/C5219.00_01_38_23.Still004-1.jpg"
                alt="Image 13"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/9.png"
                alt="Image 14"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/Clementine.jpg"
                alt="Image 15"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/Clerodendron.jpg"
                alt="Image 16"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/DSC01133.jpg"
                alt="Image 17"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/DSC01141.jpg"
                alt="Image 18"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/DSC01156.jpg"
                alt="Image 19"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/DSC01161-1.jpg"
                alt="Image 20"
                className="h-[409px] w-[272.5px] object-cover"
              />

              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/Clementine.jpg"
                alt="Image 15"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/Clerodendron.jpg"
                alt="Image 16"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/DSC01133.jpg"
                alt="Image 17"
                className="h-[409px] w-[272.5px] object-cover"
              />
            </div>
            <div className="space-y-7">
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/Botus-1.jpg"
                alt="Image 10"
                className="h-[309px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/Bougainvillea.jpg"
                alt="Image 11"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/C5219.00_00_10_08.Still006-1.jpg"
                alt="Image 12"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/C5219.00_01_38_23.Still004-1.jpg"
                alt="Image 13"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/9.png"
                alt="Image 14"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/Clementine.jpg"
                alt="Image 15"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/Clerodendron.jpg"
                alt="Image 16"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/DSC01133.jpg"
                alt="Image 17"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/DSC01141.jpg"
                alt="Image 18"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/DSC01156.jpg"
                alt="Image 19"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/DSC01161-1.jpg"
                alt="Image 20"
                className="h-[409px] w-[272.5px] object-cover"
              />

              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/Clementine.jpg"
                alt="Image 15"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/Clerodendron.jpg"
                alt="Image 16"
                className="h-[409px] w-[272.5px] object-cover"
              />
              <img
                src="https://gulfpalms.com/wp-content/uploads/2023/10/DSC01133.jpg"
                alt="Image 17"
                className="h-[409px] w-[272.5px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <GetInTouch />
    </div>
  );
}
