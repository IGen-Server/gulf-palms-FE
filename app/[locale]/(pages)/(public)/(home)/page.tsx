import React from "react";
import HeroSection from "@/components/home/HeroSection";
import HomeFirstProductGrid from "@/components/home/HomeFirstProductGrid";
import RecentProducts from "@/components/home/RecentProducts";
import ShowRoom from "@/components/home/ShowRoom";
import Services from "@/components/home/Services";
import ProductsShowCase from "@/components/home/ProductsShowCase";
import HomeSecondProductGrid from "@/components/home/HomeSecondProductGrid";
import WhoWeAre from "@/components/home/WhoWeAre";
import LocationMap from "@/components/home/LocationMap";
import VideoShowCase from "@/components/home/VideoShowCase";
import Customers from "@/components/home/Customers";

async function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <div className="max-w-[100vw] md:w-[1370px] mx-auto bg-white h-fit max-h-fit space-y-[0px]">
      <HeroSection />
      <HomeFirstProductGrid />
      <div className="pt-[100px]">
        <RecentProducts />
      </div>
      <ShowRoom />
      <div className="pt-[1000px] lg:pt-[396px] pb-[50px]">
        <Services />
      </div>
      <Customers/>
      <ProductsShowCase />
      <HomeSecondProductGrid />
      <div className="">
        <WhoWeAre />
        <div>
          <LocationMap />
        </div>
      </div>
      {/* <VideoShowCase />
      <div className="pt-1"></div> */}
    </div>
  );
}

export default HomePage;
