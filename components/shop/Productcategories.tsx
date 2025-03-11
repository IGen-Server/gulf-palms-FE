import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import useMobileCategoryItems from "../navbar/public-navbar/useMenuItems";

export default function ProductCategories() {
  const mobileCategoryItems = useMobileCategoryItems();
  // console.log({mobileCategoryItems})
  return (
    <div className="space-y-4 pt-[30px]">
      <p className="uppercase font-semibold text-[16px]">Product categories</p>
      <Accordion type="single" collapsible className="w-full">
        {mobileCategoryItems.map((category, index) => (
          <AccordionItem key={index} value={`category-${index}`}>
            <AccordionTrigger className="text-[14px]  text-gray-600 hover:no-underline">
              <Link href={category.href} className="hover:no-underline">
                {category.title}
              </Link>
            </AccordionTrigger>
            <AccordionContent className="pl-6">
              <ul className="space-y-2">
                {category?.submenu?.map((subcategory, subIndex) => (
                  <li key={subIndex}>
                    <a
                      href={subcategory.href}
                      className="text-sm text-gray-600 hover:text-blue-600"
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
