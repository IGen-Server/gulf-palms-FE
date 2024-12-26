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

async function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <div>
      <div className="max-w-[100vw] md:w-[1370px] mx-auto bg-white min-h-fit space-y-[90px]">
        <HeroSection />
        <HomeFirstProductGrid />
        <RecentProducts />
        <ShowRoom />
        <Services />
        <ProductsShowCase />
        <HomeSecondProductGrid />
        <WhoWeAre />
        <LocationMap />
        <VideoShowCase />
      </div>
    </div>
  );
}

export default HomePage;
