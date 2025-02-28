import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function GetInTouch({ language }: { language?: string }) {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://gulfpalms.com/wp-content/uploads/2023/10/new-page-title-img.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-screen grid place-content-center py-[70px] max-lg:px-5"
    >
      <div className="p-[30px] w-full lg:w-[1192px] h-fit lg:h-[298px] bg-white grid grid-cols-1 lg:grid-cols-2">
        <div className="text-center flex flex-col justify-center items-center w-full p-[10px] max-lg:pb-12 ">
          <Link href="https://gulfpalms.com/test/">
            <Image
              src="https://gulfpalms.com/wp-content/uploads/2023/06/GP_Logo-Orange-02.png"
              alt="Gulf Palms Logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[92px] md:w-[120px] lg:w-[170px] h-9 md:h-12 lg:h-[67px] mx-auto"
            />
          </Link>
          <div className="mt-4 max-w-[478px]">
            <p className="text-[#777] text-[14px] leading-[1.375rem]">
              {language === "en"
                ? "A concept focused on customer delight, Gulf Palms has been striving to bring you closer to nature."
                : "مفهوم يركز على إسعاد العملاء، تسعى شركة نخيل الخليج جاهدة لتقريبك من الطبيعة."}
            </p>
          </div>
          <div className="mt-4">
            <Link
              href="https://gulfpalms.com/en/shop/"
              className=" bg-primary text-white px-5 py-[10px] text-[13px] font-semibold "
            >
              {language === "en" ? "SHOP NOW" : "تسوق الآن"}
            </Link>
          </div>
        </div>

        <div className="text-center flex flex-col items-center w-full border-l">
          <div>
            <h4 className="text-primary text-xs lg:text-base uppercase">
              {language === "en" ? "Contact Us" : "اتصل بنا"}
            </h4>
            <h2 className="font-semibold text-[26px] text-[#242424] leading-9 mt-2">
              {language === "en"
                ? "GET IN TOUCH WITH US"
                : "ابق على تواصل معنا"}
            </h2>
            <div className="mt-4 text-[14px] leading-[1.375rem]">
              <div className="text-[#777]">
                {language === "en"
                  ? "Nurseries 48 &amp; 49, 4th Ring Road, Ar Rai, Kuwait"
                  : "مشتل ٤٨ و ٤٩، الدائري الرابع، الري، الكويت"}
                <p className="">
                  {language === "en" ? "Phone: " : "هاتف: "}
                  <a href="tel:+96560660378" className="text-[#242424]">
                    {language === "en" ? "+965 6066 0378" : "٦٠٦٦٠٣٧٨"}
                  </a>
                </p>
                <p className="text-[#777]">
                  {language === "en" ? "Email: " : "بريد إلكتروني: "}
                  <a
                    href="mailto:contact@gulfpalms.com"
                    className="text-[#242424]"
                  >
                    contact@gulfpalms.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Link
              href="https://gulfpalms.com/en/contact-us/"
              className=" bg-primary text-white px-5 py-[10px]  text-[13px] font-bold"
            >
              {language === "en" ? "CONTACT US" : "اتصل بنا"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
