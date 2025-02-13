"use client"

import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

export default function HeroSection() {
  const { t } = useTranslation()

  const content = (
    <>
      <p className="text-[24px] sm:text-[28px] lg:text-[42px] font-[300] font-sans">YOUR ONE-STOP SOLUTION FOR</p>
      <p className="text-[28px] sm:text-[32px] lg:text-[46px] font-bold font-arabic pt-1">ALL YOUR LANDSCAPING NEEDS</p>
      <p className="text-[14px] lg:text-[16px] pt-3 font-sans max-w-[600px] mx-auto lg:mx-0">
        A concept focused on customer delight, Gulf Palms has been striving to bring you closer to nature.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 pt-8 w-full sm:justify-center lg:justify-start">
        <Button
          className="rounded-none bg-primary opacity-90 hover:bg-primary hover:opacity-100 w-full sm:w-[137.8px] h-[48px] grid place-content-center font-semibold"
          variant={"default"}
        >
          READ MORE
        </Button>
        <Button
          variant={"outline"}
          className="rounded-none bg-transparent hover:bg-transparent hover:text-current w-full sm:w-[137.8px] h-[48px] grid place-content-center border-white lg:border-gray-400 hover:border-secondary font-semibold"
        >
          SHOP NOW
        </Button>
      </div>
    </>
  )

  return (
    <div className="w-full px-4 text-center lg:text-left absolute top-[125px] lg:top-[150px] 2xl:top-[333px] lg:w-[1380px] lg:ml-[50px] 2xl:-ml-[25px]">
      <div className="relative z-10 text-white lg:text-secondary">{content}</div>
    </div>
  )
}

