/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import * as React from "react";
import { ChevronDown, Search } from "lucide-react";
import Link from "next/link";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { ProductService } from "@/services/api/product.service";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { NavItem } from "./navData";
import Image from "next/image";
import useMobileCategoryItems from "./useMenuItems";
import { useEffect, useState } from "react";
import { useDebounce } from "@/components/search/SearchDrawer";
import { useGlobalDataProvider } from "@/providers/GlobalDataProvider";

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

function NavItemWithSubmenu({ item, index }: { item: NavItem; index: number }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const desktopMenuItems: MenuItem[] =
    (t("desktopMenuItems", {
      returnObjects: true,
    }) as MenuItem[]) || [];

  const shop = desktopMenuItems[2].title;

  if (!item.submenu || item.title == shop) {
    return (
      <Link
        href={item.href || "#"}
        className={cn(
          "flex items-center justify-between px-4 py-3 hover:bg-muted text-sm font-semibold uppercase",
          item.title === "pathname" && "text-orange-500",
          index === 0 ? "border-none" : "border-t",

          language === "en" ? "" : "flex-row-reverse text-right"
        )}
      >
        {item.title}
      </Link>
    );
  }
  if (item.submenu && item.title != shop) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div
          className={`flex ${language === "en" ? "" : "flex-row-reverse text-right"
            } w-full hover:bg-muted border-t`}
        >
          <Link
            href={item.href || "#"}
            className="flex-1 px-4 py-3 text-sm font-semibold text-[#333] border-r uppercase"
          >
            {item.title}
          </Link>
          <CollapsibleTrigger
            className={cn("px-3 py-3", isOpen ? "bg-orange-500" : "")}
          >
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform",
                isOpen && "rotate-180",
                isOpen ? "text-white rounded-sm" : "text-muted-foreground"
              )}
            />
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className={`w-full space-y-1 bg-muted/50 `}>
            {item.submenu.map((subItem) => (
              <Link
                key={subItem.title}
                href={subItem.href || "#"}
                className={`flex items-center px-8 py-2 text-sm text-muted-foreground hover:bg-muted ${language === "en" ? "" : "justify-end"
                  }`}
              >
                {subItem.title}
              </Link>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  }
}

export default function MobileNav() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [products, setProducts] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categories } = useGlobalDataProvider();
  const { i18n, t } = useTranslation();

  const axiosInstanceWithoutLoader = CreateAxiosInstanceWithLoader(false, false);

  const [pageConfig, setPageConfig] = useState({
    search: searchQuery,
    per_page: 30,
    lang: i18n.language,
  });

  const debouncedSearchTerm = useDebounce(searchQuery, 1000);

  useEffect(() => {
    if (!debouncedSearchTerm) return;

    const updatePageConfig = async () => {
      console.log(debouncedSearchTerm);
      setPageConfig((prev) => ({
        ...prev,
        search: debouncedSearchTerm,
      }));
    };

    updatePageConfig();
  }, [debouncedSearchTerm]);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      try {
        if (pageConfig.search && categories?.find((x) => x.name === pageConfig.search)) {
          const productsByCategory = await ProductService.Get(
            {
              per_page: 30,
              lang: i18n.language,
              category: pageConfig.search
            },
            axiosInstanceWithoutLoader
          );
          setProducts(productsByCategory);
        } else {
          const productsBySearchTerm = await ProductService.Get(
            pageConfig,
            axiosInstanceWithoutLoader
          );

          setProducts(productsBySearchTerm);
        }
        setIsLoading(false);

      } catch (error) {
        console.error(error);
      }
    };

    if (pageConfig) {
      if (pageConfig.search) {
        getProducts();
      } else {
        setProducts([]);
      }
    }

  }, [pageConfig]);

  const mobileCategoryItems = useMobileCategoryItems();

  const mobileMenuItems: MenuItem[] =
    (t("desktopMenuItems", {
      returnObjects: true,
    }) as MenuItem[]) || [];

  return (
    <div className="w-full max-w-md mx-auto bg-background text-sm">
      {/* Search Bar */}
      <div className="relative p-4">
        {isLoading ? (
          <div className={`absolute ${pageConfig.lang === "en" ? "right-4" : "left-7"} top-1/2 -translate-y-1/2`}>
            <svg
              className="animate-spin h-4 w-4 text-muted-foreground"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        ) : (
          <Search
            className={`absolute ${pageConfig.lang === "en" ? "right-4" : "left-7"} 
        top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground cursor-pointer`}
          />
        )}
        <Input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={t('search.placeholder')}
          className={`w-full ${pageConfig.lang === "en" ? "pr-10" : ""
            } border-none shadow-none outline-none ring-0`}
        />
      </div>

      {/* No Items Found Message */}
      {!isLoading && products.length === 0 && (
        <div className="items-center px-6 py-3 text-sm font-semibold uppercase">
          No items found!
        </div>
      )}

      {/* Product List */}
      {searchQuery && products.length > 0 && (
        <div className="grid grid-cols-1 gap-6 px-6 mb-3">
          {products.map((product, index) => (
            <div key={index} className="group cursor-pointer shadow">
              <div className="aspect-square mb-2 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={product.images?.[0]?.src || "/placeholder.svg"}
                  alt={product.name || "Product Image"}
                  width={100}
                  height={150}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium text-center">{product.name}</h3>
              <p className="text-primary text-center">{product.price} Kd</p>
            </div>
          ))}
        </div>
      )}

      {/* Navigation Tabs */}
      <Tabs defaultValue="menu" className="w-full">
        <TabsList className="w-full grid grid-cols-2 p-0 h-[60px]">
          <TabsTrigger
            value="menu"
            className="text-sm p-0 h-full rounded-none data-[state=active]:border-b-2 data-[state=active]:border-orange-500 data-[state=active]:font-semibold"
          >
            {t("mobileNavTabs.tab1")}
          </TabsTrigger>
          <TabsTrigger
            value="categories"
            className="text-sm p-0 h-full rounded-none data-[state=active]:border-b-2 data-[state=active]:border-orange-500 data-[state=active]:font-semibold"
          >
            {t("mobileNavTabs.tab2")}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="menu">
          <nav>
            {mobileMenuItems.map((item, index) => (
              <NavItemWithSubmenu key={item.title} item={item} index={index} />
            ))}
          </nav>
        </TabsContent>
        <TabsContent value="categories">
          <nav>
            {mobileCategoryItems.map((item, index) => (
              <NavItemWithSubmenu key={item.title} item={item} index={index} />
            ))}
          </nav>
        </TabsContent>
      </Tabs>
    </div>
  );
}
