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
    <div className="w-full mx-auto bg-white h-fit max-h-fit space-y-[0px]">
      <div className="w-full max-w-[1370px] mx-auto">
        <HeroSection />
      </div>
      <div className="w-full max-w-[1370px] mx-auto">
        <HomeFirstProductGrid />
      </div>
      <div className="w-full max-w-[1370px] mx-auto py-[100px]">
      <RecentProducts />
      </div>
      <ShowRoom />
      <div className="w-full max-w-[1370px] mx-auto pt-[100px]">
      <Services />
      </div>
      <div className="w-full max-w-[1370px] mx-auto">
        <Customers />
      </div>
      <div className="w-full max-w-[1370px] mx-auto">
        <ProductsShowCase />
      </div>
      <div className="w-full max-w-[1370px] mx-auto">
        <HomeSecondProductGrid />
      </div>
      <WhoWeAre />
      <div className="w-full max-w-[1370px] mx-auto">
        <LocationMap />
      </div>
    </div>
  );
}

export default HomePage;
