"use client";

import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";
import GetInTouch from "@/components/common/GetInTouch";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const imageUrls = [
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/tissue-culture-palm1.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/washingtonia-palm-1.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/Hasawi-Field-3.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/1.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/2.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/3-Washingtonia-palm.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/3-1.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/6-1.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/Blueberry-1.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/Botus-1.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/Bougainvillea.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/C5219.00_00_10_08.Still006-1.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/C5219.00_01_38_23.Still004-1.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/9.png",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/Clementine.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/Clerodendron.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/DSC01133.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/DSC01134.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/DSC01141.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/DSC01156.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/DSC01161-1.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/DSC01170-1.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/DSC01193-1.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/DSC01206-1.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/DSC04547-1.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/DSC04561-1.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/DSC04595.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/DSC04599.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/DSC04601.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/DSC04607.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/DSC04637-copy.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/DSC04682-1.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/DSC04685-1.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/DSC04688-1.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/DSC06085.png",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/DSC06095.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/DSC06112.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/DSC06117.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/DSC06186.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/DSC06262.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/DSC06464.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/DSC06474-1.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/DSC06502.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/DSC06635.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/DSC06977-1.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/DSC08518.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/DSC08548.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/DSC08573.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/Dwarf-Bougainvillea.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/euphorbia-milli.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/Hanging-Plants.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/Hibiscus.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/Hibiscus-1.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/Mango2.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/orange-1.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/Orange-2.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/Passion-Fruit.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/Potted-palm.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/Potted-palm-1.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/qqw.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/Tecoma.-copy.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/tissue-culture-palm1.jpg",
  "https://clone.gulfpalms.com/wp-content/uploads/2023/10/washingtonia-palm-1.jpg"
]



const Gallery = () => {
  const {
    i18n: { language },
  } = useTranslation();

  const breadcrumbLinks = [
    { name: "Home", arabicName: "الرئيسية", href: "/" },
    { name: "Gallery", arabicName: "معرض الصور", href: "/gallery" },
  ];

  return (
    <div className="pt-16 lg:pt-[98px] ">
      <div className="max-w-[1192px] mx-auto">
        <div className="flex flex-col items-center gap-2 pb-28 lg:pb-[170px] pt-[50px]">
          <h1 className="text-4xl lg:text-[4.25rem] lg:leading-[5.125rem] font-bold text-black">
            {language === "en" ? "Gallery" : "معرض الصور"}
          </h1>
          <CustomBreadCrumb links={breadcrumbLinks} />
        </div>
        <PhotoProvider
          speed={() => 800}
          easing={(type) =>
            type === 2
              ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
              : "cubic-bezier(0.34, 1.56, 0.64, 1)"
          }
          toolbarRender={({ onScale, scale }) => {
            return (
              <>
                <svg
                  className="PhotoView-Slider__toolbarIcon"
                  onClick={() => onScale(scale + 1)}
                />
                <svg
                  className="PhotoView-Slider__toolbarIcon"
                  onClick={() => onScale(scale - 1)}
                />
              </>
            );
          }}
        >
          <div className="pb-[80px] px-4">
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 sm:gap-2">
              {imageUrls.map((image, index) => {
                return (
                  <PhotoView key={index} src={image}>
                    <Image
                      src={image}
                      alt="Gallery Image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-auto mb-2"
                    />
                  </PhotoView>
                );
              })}
            </div>
          </div>
        </PhotoProvider>
      </div>

      <GetInTouch language={language} />
    </div>
  );
};
export default Gallery;
