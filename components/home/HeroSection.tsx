"use client";

import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();
  return (
    <div className="relative w-full h-[868px] text-secondary">
      <div className="absolute left-0 top-[300px] bottom-[300px] ">
        <p className="text-[42px]">YOUR ONE-STOP SOLUTION FOR</p>
        <p className="text-[46px] font-bold">ALL YOUR LANDSCAPING NEEDS</p>
        <p className="text-[16px] pt-3">
          A concept focused on customer delight, Gulf Palms has been striving to
          bring you closer to nature.
        </p>
        <div className="flex items-center gap-4 pt-6">
          <Button className="rounded-none">READ MORE</Button>
          <Button variant={"outline"} className="rounded-none bg-transparent">
            SHOP NOW
          </Button>
        </div>
      </div>
    </div>
  );
}
