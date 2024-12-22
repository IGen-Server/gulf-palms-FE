"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import { Menu } from "lucide-react";
import BrandFullLogo from "../../logo/brand-full-logo";
import { ThemeToggler } from "../../ThemeProvider/theme-toggler";
import { LocaleToggler } from "../../LocaleProvider/locale-togger";
import { NavLinksWithName } from "@/constants/global-constants";

export default function PublicNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        isScrolled ? "bg-[#f89e6b] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex pt-3 px-4 items-center gap-4 min-h-[4rem]">
        {/* Left Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-6 w-full ">
          <div
            className={`transition-all duration-500 ${
              isScrolled ? "w-[125px] h-[60px]" : "w-[170px] h-[77px]"
            }`}
          >
            <BrandFullLogo height={isScrolled ? 60 : 77} />
          </div>
          {NavLinksWithName.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-white hover:text-gray-200 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5 text-white" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              {NavLinksWithName.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        {/* Right Actions */}
        <div className="ml-auto flex items-center gap-4">
          <LocaleToggler />
          <ThemeToggler />
          <Button asChild>
            <Link href="/signin">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
