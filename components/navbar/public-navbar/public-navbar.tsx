"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "../../ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet"

import { HeartIcon, Menu, SearchIcon, ShoppingCart, ChevronDown } from "lucide-react"
import BrandFullLogo from "../../logo/brand-full-logo"
import { LocaleToggler } from "../../LocaleProvider/locale-togger"
import { NavLinksWithName } from "@/constants/global-constants"
import { useTranslation } from "react-i18next"
import { usePathname } from "next/navigation"

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { AuthSheet } from "@/components/common/SideDrawer"

export default function PublicNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { t, i18n } = useTranslation()
  const currentLanguage = i18n.language
  const pathname = usePathname()
  const [isHomePage, setIsHomePage] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    if (pathname === "/" || pathname === "/ar" || pathname === "/en" || pathname === "/en-us") {
      setIsHomePage(true)
    } else {
      setIsHomePage(false)
    }
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 500) {
        if (currentScrollY > lastScrollY) {
          setShowNavbar(false)
        } else {
          setShowNavbar(true)
        }
      } else {
        setShowNavbar(true)
      }

      setLastScrollY(currentScrollY)
      setIsScrolled(currentScrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const renderNavLinks = () =>
    NavLinksWithName.map((item, index) => {
      if (item.children) {
        return (
          <HoverCard key={index} openDelay={100} closeDelay={100}>
            <HoverCardTrigger asChild>
              <Link
                href={item.href}
                className="text-white hover:text-gray-200 transition-colors flex items-center gap-1 !text-[13px] font-semibold font-sans "
              >
                {t(`navigation.${item.name}`)}
                <ChevronDown className="w-3 text-secondary opacity-90" />
              </Link>
            </HoverCardTrigger>
            <HoverCardContent
              className={`bg-transparent mt-6  bg-white  ${
                item.href.includes("shop") ? "w-full left-0 p-12" : "w-[220px] p-4"
              }`}
            >
              {item.children.map((child, idx) => (
                <Link key={idx} href={child.href} className="block  px-4 py-2 text-gray-700 hover:bg-gray-200 ">
                  {t(`navigation.${child.name}`)}
                </Link>
              ))}
            </HoverCardContent>
          </HoverCard>
        )
      }

      return (
        <Link
          href={item.href}
          key={index}
          className="text-white hover:text-gray-200 transition-colors text-[13px] font-semibold font-sans"
        >
          {t(`navigation.${item.name}`)}
        </Link>
      )
    })

  return (
    <div
      className={`w-full fixed duration-500 top-0 z-[1] left-0 transition-transform flex items-center
        
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        ${
          isHomePage
            ? ` ${isScrolled ? "bg-primary shadow-lg h-[60px]" : "bg-transparent h-[60px] lg:h-[105px]"}`
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
                {isScrolled ? <BrandFullLogo height={60} width={125} /> : <BrandFullLogo height={77} width={170} />}
              </div>
            </div>
            <div className="flex items-center gap-4 min-w-[758px] justify-evenly flex-wrap ">{renderNavLinks()}</div>
          </nav>
          {/* Mobile Menu */}
          <div className="flex lg:hidden justify-between items-center w-full gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="hover:bg-transparent w-fit p-0 flex items-center gap-1">
                  <Menu className="h-5 w-5 text-white" />
                  <span className="text-[13px] font-bold text-secondary">MENU</span>
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
                      {t(`navigation.${item.name}`)}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>

            <div className="flex-1 flex justify-center">
              <div className="w-[126px]">
                <BrandFullLogo height={60} />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-secondary" />
                <p className="absolute -top-1 -right-2 text-xs bg-primary rounded-full h-4 grid place-content-center w-4 p-1">
                  0
                </p>
              </div>
              <LocaleToggler />
            </div>
          </div>

          <AuthSheet />

          <div className="hidden  lg:flex flex-row-reverse items-center gap-4 text-secondary ">
            <div className="relative">
              <ShoppingCart className="w-5 h-5" />
              <p className="absolute -top-1 -right-2 text-xs bg-primary rounded-full h-4 grid place-content-center w-4 p-1">
                0
              </p>
            </div>
            <div className="hidden lg:block">
              <HeartIcon className="w-5 h-5" />
            </div>
            <div className="hidden lg:block">
              <SearchIcon className="w-5 h-5" />
            </div>
          </div>
          {/* Right Actions */}
          <div className="ml-auto hidden lg:flex items-center gap-4 min-w-fit ">
            <p className="!text-[13px] font-semibold text-secondary">0.000 KD</p>
            <LocaleToggler />
          </div>
        </div>
      </div>
    </div>
  )
}

