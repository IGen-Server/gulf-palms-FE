/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useTranslation } from "react-i18next";
import useMobileCategoryItems from "./useMenuItems";

interface Category {
  title: string;
  href?: string;
  icon?: string;
  submenu?: Category[] | [] | any;
}

interface MenuItem {
  title: string;
  href?: string;
  submenu?: Category[];
}

export function DesktopNav() {
  const { t } = useTranslation();

  const mobileCategoryItems = useMobileCategoryItems();

  const desktopMenuItems: MenuItem[] =
    (t("desktopMenuItems", {
      returnObjects: true,
    }) as MenuItem[]) || [];

  const updatedMenuItems: MenuItem[] = [...desktopMenuItems];
  updatedMenuItems[2] = {
    ...updatedMenuItems[2],
    submenu: [...mobileCategoryItems],
  };

  return (
    <nav className="hidden lg:flex items-center justify-evenly flex-wrap w-full">
      {updatedMenuItems.map((item) => {
        if (item.title === t("Shop")) {
          return (
            <HoverCard key={item.title} openDelay={100} closeDelay={100}>
              <HoverCardTrigger asChild>
                <Link
                  href={item.href || "#"}
                  className="text-white hover:text-gray-200 transition-colors flex items-center gap-1 !text-[13px] font-semibold"
                >
                  {item.title}
                  <ChevronDown className="w-3 text-secondary opacity-90" />
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="!w-[100vw] !p-0 mt-[16px]">
                <div className="max-w-[1100px] mx-auto p-8">
                  <div className="grid grid-cols-3 gap-x-8 gap-y-5">
                    {item.submenu?.map((category: any) => (
                      <HoverCard
                        key={category.title}
                        openDelay={100}
                        closeDelay={100}
                      >
                        <HoverCardTrigger asChild>
                          <Link
                            href={category.href || "#"}
                            className="flex items-start gap-4 group"
                          >
                            {category.icon && (
                              <div className="w-[28.5px] h-[28.5px] shrink-0">
                                <img
                                  src={category.icon || "/placeholder.svg"}
                                  alt=""
                                  className="w-full h-full object-contain opacity-100"
                                />
                              </div>
                            )}
                            <span className="text-gray-700 group-hover:text-primary text-[16px] font-medium flex items-center gap-1 font-arabic">
                              {category.title}
                            </span>
                          </Link>
                        </HoverCardTrigger>
                        {category.submenu && (
                          <HoverCardContent
                            className="w-[220px] !p-0 shadow-none border-none"
                            side="right"
                            align="start"
                            sideOffset={-50}
                          >
                            <nav className="flex flex-col space-y-2">
                              {category.submenu.map((subItem: any) => (
                                <Link
                                  key={subItem.title}
                                  href={subItem.href || "#"}
                                  className="text-gray-600 hover:text-white text-[15px] px-3 py-2 rounded-md hover:bg-primary"
                                >
                                  {subItem.title}
                                </Link>
                              ))}
                            </nav>
                          </HoverCardContent>
                        )}
                      </HoverCard>
                    ))}
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          );
        }

        if (item.submenu) {
          return (
            <HoverCard key={item.title} openDelay={100} closeDelay={100}>
              <HoverCardTrigger asChild>
                <Link
                  href={item.href || "#"}
                  className="text-white hover:text-gray-200 transition-colors flex items-center gap-1 !text-[13px] font-semibold"
                >
                  {item.title}
                  <ChevronDown className="w-3 text-secondary opacity-90" />
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="w-[220px] p-4 mt-[16px]">
                <nav className="flex flex-col space-y-2">
                  {item.submenu.map((subItem: any) => (
                    <Link
                      key={subItem.title}
                      href={subItem.href || "#"}
                      className="text-gray-600 hover:text-gray-900 text-sm px-3 py-2 rounded-md hover:bg-gray-100"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </nav>
              </HoverCardContent>
            </HoverCard>
          );
        }

        return (
          <Link
            key={item.title}
            href={item.href || "#"}
            className="text-white hover:text-gray-200 transition-colors !text-[13px] font-semibold"
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}
