"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import {
  HeartIcon,
  Menu,
  SearchIcon,
  ShoppingCart,
  ChevronDown,
} from "lucide-react";
import BrandFullLogo from "../../logo/brand-full-logo";
import { ThemeToggler } from "../../ThemeProvider/theme-toggler";
import { LocaleToggler } from "../../LocaleProvider/locale-togger";
import { NavLinksWithName } from "@/constants/global-constants";
import { useTranslation } from "react-i18next";

export default function PublicNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNavLinks = () =>
    NavLinksWithName.map((item, index) => {
      if (item.children) {
        return (
          <div key={index} className="group text-[15.6px]">
            <Link
              href={item.href}
              className="text-white hover:text-gray-200 transition-colors flex items-center gap-1"
            >
              {t(`navigation.${item.name}`)}
              <ChevronDown className="h-3 w-3 text-secondary" />
            </Link>
            <div
              className={`absolute hidden group-hover:block bg-transparent pt-6 ${
                item.href.includes("shop") ? "w-full left-0" : "w-[220px]"
              }`}
            >
              {item.children.map((child, idx) => (
                <Link
                  key={idx}
                  href={child.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200 bg-white"
                >
                  {t(`navigation.${child.name}`)}
                </Link>
              ))}
            </div>
          </div>
        );
      }

      return (
        <Link
          href={item.href}
          key={index}
          className="text-white hover:text-gray-200 transition-colors text-[15.6px]"
        >
          {t(`navigation.${item.name}`)}
        </Link>
      );
    });

  return (
    <div
      className={`w-full fixed duration-1000 top-0 z-50 left-0 transition-colors ${
        isScrolled ? "bg-primary shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1370px] mx-auto">
        <div className=" flex pt-3 px-4 items-center gap-4 min-h-[4rem] pb-2 md:pb-0">
          {/* Left Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-6 w-full ">
            <div
              className={`transition-all duration-1000 ${
                isScrolled ? "w-[125px] h-[60px]" : "w-[170px] h-[77px]"
              }`}
            >
              <BrandFullLogo height={77} />
            </div>
            {renderNavLinks()}
          </nav>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="md:hidden hover:bg-transparent w-fit p-0"
              >
                <Menu className="h-5 w-5 text-white" />
                <span className="text-[13px] gont-bold text-secondary">
                  MENU
                </span>
              </Button>
            </SheetTrigger>
            <div className="absolute right-[calc(50%_-_79px)] flex gap-4 md:hidden">
              <div className="w-[126px] ">
                <BrandFullLogo height={60} />
              </div>
              <div className="flex items-center gap-4 text-secondary">
                <div className="relative">
                  <ShoppingCart />
                  <p className="absolute -top-1 -right-2 text-xs bg-[#f89e6b] rounded-full h-4 grid place-content-center w-4 p-1">
                    0
                  </p>
                </div>
                <div className="hidden md:block">
                  <HeartIcon />
                </div>
                <div className="hidden md:block">
                  <SearchIcon />
                </div>
              </div>
              <LocaleToggler />
            </div>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                {NavLinksWithName.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {t(`navigation.${item.name}`)}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <div className="hidden md:flex items-center gap-4 text-secondary">
            <div className="relative">
              <ShoppingCart />
              <p className="absolute -top-1 -right-2 text-xs bg-[#f89e6b] rounded-full h-4 grid place-content-center w-4 p-1">
                0
              </p>
            </div>
            <div className="hidden md:block">
              <HeartIcon />
            </div>
            <div className="hidden md:block">
              <SearchIcon />
            </div>
          </div>

          {/* Right Actions */}
          <div className="ml-auto hidden md:flex items-center gap-4">
            <Button
              asChild
              variant={"ghost"}
              className="hover:bg-transparent w-fit p-0"
            >
              <Link
                href="/signup"
                className="text-[13px] font-bold text-secondary hover:text-secondary-foreground"
              >
                Login / Register
              </Link>
            </Button>
            <LocaleToggler />
          </div>
        </div>
      </div>
    </div>
  );
}
