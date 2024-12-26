"use client";

import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  const content = (
    <>
      <p className="text-[] lg:text-[42px] md:text-[30px] font-thin">
        YOUR ONE-STOP SOLUTION FOR
      </p>
      <p className="text-[] lg:text-[46px] md:text-[35px] font-bold">
        ALL YOUR LANDSCAPING NEEDS
      </p>
      <p className="text-[12px] lg:text-[16px] md:text-[14px] pt-3">
        A concept focused on customer delight, Gulf Palms has been striving to
        bring you closer to nature.
      </p>
      <div className="flex items-center gap-4 pt-6">
        <Button className="rounded-none">READ MORE</Button>
        <Button variant={"outline"} className="rounded-none bg-transparent">
          SHOP NOW
        </Button>
      </div>
    </>
  );

  return (
    <div className="top-[80px] sm:top-[20%] lg:top-[25%] xl:top-[300px] bottom-[300px] w-full items-center justify-center z-10  absolute max-h-fit">
      <div className="text-secondary">{content}</div>
    </div>
  );
}
