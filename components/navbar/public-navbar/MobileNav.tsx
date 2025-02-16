"use client";

import * as React from "react";
import { ChevronDown, Search } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { mobileCategoryItems, mobileMenuItems, NavItem } from "./navData";

function NavItemWithSubmenu({ item, index }: { item: NavItem; index: number }) {
  const [isOpen, setIsOpen] = React.useState(false);

  if (!item.submenu) {
    return (
      <Link
        href={item.href || "#"}
        className={cn(
          "flex items-center justify-between px-4 py-3 text-sm hover:bg-muted !text-[13px] text-black font-[600] uppercase",
          item.title === "pathname" && "text-orange-500",
          index === 0 ? "border-none" : "border-t"
        )}
      >
        {item.title}
      </Link>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex w-full hover:bg-muted border-t ">
        <Link
          href={item.href || "#"}
          className="flex-1 px-4 py-3 text-sm !text-[13px] text-black font-[600] border-r uppercase"
        >
          {item.title}
        </Link>
        <CollapsibleTrigger
          className={cn("px-3 py-3", isOpen ? "bg-orange-500 " : "")}
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
        <div className="space-y-1 bg-muted/50">
          {item.submenu.map((subItem) => (
            <Link
              key={subItem.title}
              href={subItem.href || "#"}
              className="flex items-center px-8 py-2 text-sm text-muted-foreground hover:bg-muted !text-[13px]"
            >
              {subItem.title}
            </Link>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export default function MobileNav() {
  return (
    <div className="w-full max-w-md mx-auto bg-background font-sans !text-[13px]">
      <div className="relative p-4">
        <Search className="absolute right-6 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground cursor-pointer" />
        <Input
          type="search"
          placeholder="Search for products"
          className="w-full pr-10 border-none shadow-none outline-none ring-0 focus:outline-none focus:ring-0 focus:border-none"
          style={{ outline: "none", boxShadow: "none", border: "none" }}
        />
      </div>

      <Tabs defaultValue="menu" className="w-full">
        <TabsList className="w-full grid grid-cols-2 !p-0 h-[60px]">
          <TabsTrigger
            value="menu"
            className="!text-[13px] !p-0 h-full rounded-none data-[state=active]:border-b-2 data-[state=active]:border-orange-500 data-[state=active]:font-[600]"
          >
            MENU
          </TabsTrigger>
          <TabsTrigger
            value="categories"
            className="!text-[13px] !p-0 h-full rounded-none data-[state=active]:border-b-2 data-[state=active]:border-orange-500 data-[state=active]:font-[600]"
          >
            CATEGORIES
          </TabsTrigger>
        </TabsList>
        <TabsContent value="menu" className=" ">
          <nav className="">
            {mobileMenuItems.map((item, index) => (
              <NavItemWithSubmenu key={item.title} item={item} index={index} />
            ))}
          </nav>
        </TabsContent>
        <TabsContent value="categories" className="">
          <nav className="">
            {mobileCategoryItems.map((item, index) => (
              <NavItemWithSubmenu key={item.title} item={item} index={index} />
            ))}
          </nav>
        </TabsContent>
      </Tabs>
    </div>
  );
}
