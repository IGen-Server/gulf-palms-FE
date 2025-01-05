"use client";

import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  const content = (
    <>
      <p className="text-[] lg:text-[42px] md:text-[30px] font-[300] font-sans">
        YOUR ONE-STOP SOLUTION FOR
      </p>
      <p className="text-[] lg:text-[46px] md:text-[35px] font-bold font-arabic">
        ALL YOUR LANDSCAPING NEEDS
      </p>
      <p className="text-[12px] lg:text-[16px] md:text-[14px] pt-3 font-sans">
        A concept focused on customer delight, Gulf Palms has been striving to
        bring you closer to nature.
      </p>
      <div className="flex items-center gap-4 pt-6">
        <Button
          className="rounded-none bg-primary opacity-90 hover:bg-primary hover:opacity-100 w-[147.7px] h-[48px] grid place-content-center"
          variant={"default"}
        >
          READ MORE
        </Button>
        <Button
          variant={"outline"}
          className="rounded-none bg-transparent hover:bg-transparent hover:text-current w-[147.7px] h-[48px] grid place-content-center border-gray-400 hover:border-secondary"
        >
          SHOP NOW
        </Button>
      </div>
    </>
  );

  return (
    <div className="top-[150px] 2xl:top-[363px] w-[1380px] ml-[50px] 2xl:-ml-[14px] items-center justify-center z-10 absolute">
      <div className="text-secondary">{content}</div>
    </div>
  );
}
