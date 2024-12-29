/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";
import GetInTouch from "@/components/common/GetInTouch";
import React from "react";

const breadcrumbLinks = [
  { name: "Home", href: "/" },
  { name: "OurFarms", href: "/our-farms" },
];

export default function OurFarms() {
  const farms = [
    {
      name: "ABDALI",
      title: "ABDALI FARM",
      address: "Abdali - Jacob Jassim Al-Wazzan Street",
      video: "https://gulfpalms.com/wp-content/uploads/2021/09/2-slide-img.jpg",
      link: "https://maps.google.com/maps/dir//%D8%B4%D8%B1%D9%83%D8%A9+%D8%A7%D9%84%D9%86%D8%AE%D9%8A%D9%84+%D8%A7%D9%84%D9%86%D8%B3%D9%8A%D8%AC%D9%8A+%D8%A7%D9%84%D8%B9%D8%A8%D8%AF%D9%84%D9%8A+2Q6Q%2BRVW+Yaqoub+Jassim+Alwazzan+St+Abdali,+Kuwait%E2%80%AD/@30.0121227,47.7897133,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3fc51fa66ff7c6ab:0xe87ba4031a8f0893",
    },
    {
      name: "WAFRAH",
      title: "WAFRAH FARM",
      address: "Al-Wafra, Road 200, block 10, Al-Mazraa Showroom",
      video: "https://gulfpalms.com/wp-content/uploads/2021/09/2-slide-img.jpg",
      link: "https://maps.google.com/maps/dir//%D8%B4%D8%B1%D9%83%D8%A9+%D8%A7%D9%84%D9%86%D8%AE%D9%8A%D9%84+%D8%A7%D9%84%D9%86%D8%B3%D9%8A%D8%AC%D9%8A+%D8%A7%D9%84%D8%B9%D8%A8%D8%AF%D9%84%D9%8A+2Q6Q%2BRVW+Yaqoub+Jassim+Alwazzan+St+Abdali,+Kuwait%E2%80%AD/@30.0121227,47.7897133,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3fc51fa66ff7c6ab:0xe87ba4031a8f0893",
    },
  ];

  return (
    <section className="space-y-[80px] pt-[98px] w-full overflow-hidden">
      <div className="flex flex-col items-center pt-[50px]">
        <h1 className="text-[68px] font-bold text-black">Our Farms</h1>
        <CustomBreadCrumb links={breadcrumbLinks} />
      </div>
      <div className="w-[100vw] mx-auto overflow-hidden">
        {farms.map((farm, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-center max-w-[100vw] md:h-[520px] ${
              index % 2 === 0 ? "md:w-full" : "md:w-[1192px] !flex-row-reverse"
            } mx-auto rounded-lg `}
          >
            <div className="w-full h-full ">
              <div className="p-6 h-full w-full items-center text-center text-[#6F803D] grid place-content-center">
                <div className="flex flex-col items-center">
                  <div>
                    <h2 className="text-[30px] font-thin">{farm.name}</h2>
                    <h2 className="text-[30px] font-bold">{farm.title}</h2>
                    <p className="text-sm ">
                      <span className="font-bold">Address : </span>
                      {farm.address}
                    </p>
                  </div>
                  <div className="flex space-x-4 pt-4">
                    <Link
                      href="/contact-us"
                      className="text-white bg-[#6F803D] px-3 py-2 uppercase"
                    >
                      Contact Us
                    </Link>
                    <Link
                      href={farm.link}
                      target="_blank"
                      className="text-white bg-[#6F803D] px-3 py-2 uppercase"
                    >
                      Location
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-full h-full "
              style={{
                backgroundImage: `url(${farm.video})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        ))}
      </div>
      <GetInTouch />
    </section>
  );
}
