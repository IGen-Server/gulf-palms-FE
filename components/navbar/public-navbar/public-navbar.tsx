"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "../../ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../../ui/sheet";

import {
  HeartIcon,
  Menu,
  SearchIcon,
  ShoppingCart,
  ChevronDown,
} from "lucide-react";
import BrandFullLogo from "../../logo/brand-full-logo";
import { LocaleToggler } from "../../LocaleProvider/locale-togger";
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
import { useGlobalDataProvider } from "@/providers/GlobalDataProvider";
import { ClientRoutes } from "@/services/utility/router.service";
import { CookieStorageService } from "@/services/utility/storage.service";
import { isJwtTokenExpired, onLogout } from "@/services/utility/utility.service";
import { ProductCategoryService } from "@/services/api/product-category.service";
import { SideDrawerForCart } from "@/components/common/SideDrawerForCart";
import { SideDrawerForSearch } from "@/components/common/SideDrawerForSearch";

interface MenuItem {
  title: string;
  href?: string;
}

export default function PublicNavbar() {
  const { isTokenExpired, setIsTokenExpired } = useGlobalDataProvider();

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const pathname = usePathname();
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHomePage, setIsHomePage] = useState(false);

  const cartRef = useRef<HTMLDivElement>(null);
  const { cartItems, subtotal, isItemAdded, setIsItemAdded } = useCart();

  const sheetCloseRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    sheetCloseRef.current?.click();
  }, [pathname]);

  useEffect(() => {
    const accessToken = CookieStorageService.getAccessToken();
    if (accessToken) {
      setIsTokenExpired(isJwtTokenExpired(accessToken));
    } else {
      setIsTokenExpired(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const myDashboard: MenuItem[] =
    (t("my_account", {
      returnObjects: true,
    }) as MenuItem[]) || [];

  return (
    <div
      className={`w-full fixed duration-500 top-0 z-[49] left-0 transition-transform flex items-center
        
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        ${isHomePage
          ? ` ${isScrolled
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
                className={`transition-all duration-500 grid place-content-center ${isScrolled ? "w-[125px] h-[60px]" : "w-[170px] !h-[77px]"
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
                    {currentLanguage === "en" ? "MENU" : "القائمة"}
                  </span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="p-0 w-[340px] drawer max-h-screen overflow-y-auto"
              >
                <SheetClose className="sr-only" ref={sheetCloseRef}></SheetClose>
                <MobileNav />
              </SheetContent>
            </Sheet>

            <div className="flex-1 flex justify-center">
              <div className="w-[126px] pt-3 ">
                <BrandFullLogo height={60} />
              </div>
            </div>

            <div className="flex lg:hidden items-center gap-4">
              {pathname.endsWith("/cart") ? (
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
              ) : (
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
              )}

              <LocaleToggler />
            </div>
          </div>

          {!isTokenExpired && (
            <HoverCard openDelay={100} closeDelay={100}>
              <HoverCardTrigger asChild className="w-[120px] ">
                <Link
                  href={ClientRoutes.User.MyAccountDashboard}
                  className="hidden lg:flex text-white hover:text-gray-200 transition-colors items-center gap-1 !text-[13px] font-semibold font-sans uppercase w-[140px]"
                >
                  {t("account.title")}
                  <ChevronDown className="w-3 text-secondary opacity-90" />
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="w-[220px] p-4 mt-[16px]">
                <nav className="flex flex-col space-y-2">
                  {Array.isArray(myDashboard) &&
                    myDashboard.map((menu: any) => (
                      <Link
                        key={menu.title}
                        href={menu.title === "Logout" ? "" : menu.href || ""}
                        onClick={(e) => { if (menu.title === "Logout") { onLogout(e) } }}
                        className="text-gray-600 hover:text-gray-900 text-sm px-3 py-2 rounded-md hover:bg-gray-100"
                      >
                        {menu.title}
                      </Link>
                    ))}
                </nav>
              </HoverCardContent>
            </HoverCard>
          )}
          {isTokenExpired && (
            <SideDrawer
              side={currentLanguage === "en" ? "right" : "left"}
              title={t("auth.loginButton")}
              triggerComponent={
                <Button
                  asChild
                  variant="ghost"
                  className="hover:bg-transparent w-fit p-0 hidden lg:flex close_btn hover:text-white/70"
                >
                  <p className="!text-[13px] font-semibold text-secondary hover:text-secondary uppercase cursor-pointer">
                    {currentLanguage === "en"
                      ? "Login / Register"
                      : "دخول / تسجيل"}
                  </p>
                </Button>
              }
              bodyComponent={<UserSigninFormForDrawer />}
            />
          )}

          {/* {pathname.includes('my-account') || <AuthSheet />} */}

          <div className="hidden lg:flex flex-row-reverse items-center gap-4 text-secondary ">
            {pathname.endsWith("/cart") ? (
              <Button
                variant="ghost"
                className="hover:bg-transparent w-fit p-0 flex items-center text-white"
                onClick={() => router.push("/cart")}
              >
                <div ref={cartRef} className="relative cursor-pointer">
                  <ShoppingCart className="w-5 h-5" />
                  <p className="absolute -top-1 -right-2 text-xs bg-primary rounded-full h-4 w-4 grid place-content-center">
                    {cartItems.length || 0}
                  </p>
                </div>
              </Button>
            ) : (
              <SideDrawer
                title="Cart"
                triggerComponent={
                  <Button
                    variant="ghost"
                    className="hover:bg-transparent w-fit p-0 flex items-center text-white hover:text-white/70"

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
            )}

            <div className="hidden lg:block hover:text-white/70">
              <HeartIcon className="w-5 h-5" />
            </div>
            <div className="hidden lg:block hover:text-white/70">
              <SideDrawerForSearch
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
            <p className="!text-[13px] font-semibold text-secondary hover:opacity-90">
              {subtotal.toFixed(2)} KD
            </p>
            <LocaleToggler />
          </div>
        </div>
      </div>
    </div>
  );
}
