"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import useMobileCategoryItems from "../navbar/public-navbar/useMenuItems";
import { useTranslation } from "react-i18next";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function ProductCategories({ category, currentPath }: { category?: string; currentPath?: string; }) {
  const { t, i18n: { language } } = useTranslation("common");
  const mobileCategoryItems = useMobileCategoryItems();
  const [value, setValue] = useState(`category-${category}`);
  // console.log({mobileCategoryItems})
  return (
    <div className="space-y-4 pt-[30px]">
      <p className="uppercase font-semibold text-[16px] text-[#333]">{t("shop.categories")}</p>
      <Accordion type="single" value={value} onValueChange={setValue} collapsible className="w-full">
        {mobileCategoryItems.map((category, index) => (
          <AccordionItem key={index} value={`category-${category.title.toLowerCase()}`}>
            <AccordionTrigger className={`${language === "en" ? "text-sm" : "text-lg"} text-[#777] hover:text-[#333] hover:no-underline duration-300`}>
              <Link href={category.href} className={`${currentPath === category.title.toLowerCase() ? "font-semibold text-primary" : ""} hover:no-underline`}>
                {category.title}
              </Link>
              {category?.submenu && <ChevronDownIcon className="w-6 h-6 p-1 rounded-full shrink-0 text-muted-foreground transition-transform duration-300 hover:bg-lightGray/10" />}
            </AccordionTrigger>
            <AccordionContent className="pl-6">
              <ul className="space-y-2">
                {category?.submenu?.map((subcategory, subIndex) => (
                  <li key={subIndex}>
                    <a
                      href={subcategory.href}
                      className={`${currentPath === subcategory.title.toLowerCase() ? "font-semibold text-primary" : ""} ${language === "en" ? "text-sm" : "text-lg"} text-[#777] hover:text-[#333] duration-300`}
                    >
                      {subcategory.title}
                    </a>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
