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

const distributeImages = (images: string[], totalCols: number) => {
  const items = images.map((url, index) => {
    const randomHeight = `${380 + Math.random() * 45}px`;

    return {
      id: index,
      content: (
        <img
          src={url}
          alt={`Image ${index + 1}`}
          className="w-[292.5px]"
          style={{ maxHeight: randomHeight }}
        />
      ),
      col: (index % totalCols) + 1,
    };
  });

  return items;
};

export default function Gallery() {
  const gridItems = distributeImages(imageUrls, 4);
  return (
    <div className="pt-[98px] ">
      <div className="max-w-[1192px] mx-auto ">
        <div className="flex flex-col items-center pb-[200px] pt-[50px]">
          <h1 className="text-[36px] font-bold text-black">Gallery</h1>
          <CustomBreadCrumb links={breadcrumbLinks} />
        </div>
        <div className="pb-[80px]">
          <ProductsGrid items={gridItems} />
        </div>
      </div>
      <GetInTouch />
    </div>
  );
}
