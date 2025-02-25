"use client";

import { useEffect, useRef, useState } from "react";
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
import { LocaleToggler } from "../../LocaleProvider/locale-togger";
import { NavLinksWithName } from "@/constants/global-constants";
import { useTranslation } from "react-i18next";
import { usePathname, useRouter } from "next/navigation";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { SideDrawer } from "@/components/common/SideDrawer";
import UserSigninFormForDrawer from "@/components/auth/UserSigninFormForDrawer";
import MobileNav from "./MobileNav";
import { DesktopNav } from "./DesktopNav";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { useCart } from "@/providers/CartProvider";
import SearchDrawer from "@/components/search/SearchDrawer";
import { useAuth } from "@/providers/AuthProvider";
import { ClientRoutes } from "@/services/utility/router.service";

export default function PublicNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const cartRef = useRef<HTMLDivElement>(null);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const pathname = usePathname();
  const [isHomePage, setIsHomePage] = useState(false);
  const { cartItems, subtotal } = useCart();
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (
      pathname === "/" ||
      pathname === "/ar" ||
      pathname === "/en" ||
      pathname === "/en-us"
    ) {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 500) {
        if (currentScrollY > lastScrollY) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (cartItems.length > 0 && cartRef.current) {
      if (!cartRef.current.classList.contains("opened")) {
        cartRef.current.click();
        cartRef.current.classList.add("opened");
      }
    }
  }, [cartItems.length]);
  
  return (
    <div
      className={`w-full fixed duration-500 top-0 z-[49] left-0 transition-transform flex items-center
        
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        ${
          isHomePage
            ? ` ${
                isScrolled
                  ? "bg-primary shadow-lg h-[60px]"
                  : "bg-transparent h-[60px] lg:h-[105px]"
              }`
            : "bg-primary h-[60px] lg:h-fit"
        }`}
    >
      <div className="max-w-[100vw] w-full overflow-x-hidden lg:max-w-content mx-auto lg:w-[1396px] px-4 py-2">
        <div className=" flex items-center gap-6 pb-2 lg:pb-1">
          {/* Left Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:gap-6 w-full ">
            <div className="w-[170px]">
              <div
                className={`transition-all duration-500 grid place-content-center ${
                  isScrolled ? "w-[125px] h-[60px]" : "w-[170px] !h-[77px]"
                }`}
              >
                {isScrolled ? (
                  <BrandFullLogo height={60} width={125} />
                ) : (
                  <BrandFullLogo height={77} width={170} />
                )}
              </div>
            </div>
            <div className="flex items-center gap-4 min-w-[758px] justify-evenly flex-wrap">
              <DesktopNav />
            </div>
          </nav>
          {/* Mobile Menu */}
          <div className="flex lg:hidden justify-between items-center w-full gap-4 ">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="hover:bg-transparent w-fit p-0 flex items-center gap-1"
                >
                  <Menu className="h-5 w-5 text-white" />
                  <span className="text-[13px] font-bold text-secondary">
                    MENU
                  </span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="p-0 w-[340px] drawer max-h-screen overflow-y-auto"
              >
                <MobileNav />
              </SheetContent>
            </Sheet>

            <div className="flex-1 flex justify-center">
              <div className="w-[126px]">
                <BrandFullLogo height={60} />
              </div>
            </div>

            <div className="flex lg:hidden items-center gap-4">
              <SideDrawer
                title="Cart"
                triggerComponent={
                  <Button
                    variant="ghost"
                    className="hover:bg-transparent w-fit p-0 flex items-center text-white"
                  >
                    <div ref={cartRef} className="relative cursor-pointer">
                      <ShoppingCart className="w-5 h-5" />
                      <p className="absolute -top-1 -right-2 text-xs bg-primary rounded-full h-4 w-4 grid place-content-center">
                        {cartItems.length || 0}
                      </p>
                    </div>
                  </Button>
                }
                bodyComponent={<CartDrawer />}
              />

              <LocaleToggler />
            </div>
          </div>

          {user && (
            <Button
              asChild
              variant="ghost"
              className="hover:bg-transparent w-fit p-0 hidden lg:flex close_btn"
              onClick={() =>
                () => router.push(ClientRoutes.User.MyAccountDashboard)
              }
            >
              <p className="!text-[13px] font-semibold text-secondary hover:text-secondary uppercase cursor-pointer">
                My Account
              </p>
            </Button>
          )}
          {!user && (
            <SideDrawer
              title={"Sign in"}
              triggerComponent={
                <Button
                  asChild
                  variant="ghost"
                  className="hover:bg-transparent w-fit p-0 hidden lg:flex close_btn"
                >
                  <p className="!text-[13px] font-semibold text-secondary hover:text-secondary uppercase cursor-pointer">
                    Login / Register
                  </p>
                </Button>
              }
              bodyComponent={<UserSigninFormForDrawer />}
            />
          )}

          {/* {pathname.includes('my-account') || <AuthSheet />} */}

          <div className="hidden lg:flex flex-row-reverse items-center gap-4 text-secondary ">
            <SideDrawer
              title={"Cart"}
              triggerComponent={
                <Button
                  asChild
                  variant="ghost"
                  className="hover:bg-transparent w-fit p-0 hidden lg:flex close_btn hover:text-white text-white"
                >
                  <div className="relative cursor-pointer">
                    <ShoppingCart className="w-5 h-5 " />
                    <p className="absolute -top-1 -right-2 text-xs bg-primary rounded-full h-4 grid place-content-center w-4 p-1">
                      {cartItems?.length || 0}
                    </p>
                  </div>
                </Button>
              }
              bodyComponent={<CartDrawer />}
            />

            <div className="hidden lg:block">
              <HeartIcon className="w-5 h-5" />
            </div>
            <div className="hidden lg:block">
              <SideDrawer
                title={""}
                side="bottom"
                triggerComponent={
                  <SearchIcon className="w-5 h-5 cursor-pointer" />
                }
                bodyComponent={<SearchDrawer />}
              />
            </div>
          </div>
          {/* Right Actions */}
          <div className="ml-auto hidden lg:flex items-center gap-4 min-w-fit ">
            <p className="!text-[13px] font-semibold text-secondary">
              {subtotal} KD
            </p>
            <LocaleToggler />
          </div>
        </div>
      </div>
    </div>
  );
}
