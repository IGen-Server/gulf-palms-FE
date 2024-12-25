import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function GetInTouch() {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://gulfpalms.com/wp-content/uploads/2023/10/new-page-title-img.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-screen grid place-content-center py-[70px]"
    >
      <div className="p-[30px] md:w-[1192px] h-fit lg:h-[298px] bg-white grid grid-cols-1 md:grid-cols-2">
        <div className="text-center flex flex-col items-center w-full p-[10px] ">
          <Link href="https://gulfpalms.com/test/">
            <Image
              src="https://gulfpalms.com/wp-content/uploads/2023/06/GP_Logo-Orange-02.png"
              alt="Gulf Palms Logo"
              width={170}
              height={67}
              className="mx-auto"
            />
          </Link>
          <div className="mt-4 max-w-[478px]">
            <p className="text-gray-700 text-[14px] ">
              A concept focused on customer delight, Gulf Palms has been
              striving to bring <br /> you closer to nature.
            </p>
          </div>
          <div className="mt-4">
            <Link
              href="https://gulfpalms.com/en/shop/"
              className=" bg-primary text-white px-5 py-[10px]  text-[13px] font-bold "
            >
              SHOP NOW
            </Link>
          </div>
        </div>

        <div className="text-center flex flex-col items-center w-full border-l">
          <div>
            <h4 className="text-primary uppercase">Contact Us</h4>
            <h2 className="text-[26px] font-bold mt-2">GET IN TOUCH WITH US</h2>
            <div className="mt-4 text-gray-700 text-[14px]">
              <p>
                Nurseries 48 &amp; 49, 4th Ring Road, Ar Rai, Kuwait
                <br />
                Phone: <a href="tel:+96560660378">+965 6066 0378</a>
                <br />
                Email:{" "}
                <a href="mailto:contact@gulfpalms.com">contact@gulfpalms.com</a>
              </p>
            </div>
          </div>
          <div className="mt-4">
            <Link
              href="https://gulfpalms.com/en/contact-us/"
              className=" bg-primary text-white px-5 py-[10px]  text-[13px] font-bold"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
