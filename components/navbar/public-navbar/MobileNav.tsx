"use client"

import * as React from "react"
import { ChevronDown, Search } from "lucide-react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface NavItem {
  title: string
  href?: string
  submenu?: NavItem[]
}

const menuItems: NavItem[] = [
  { title: "HOME", href: "/" },
  { title: "ABOUT US", href: "/about" },
  { title: "SHOP", href: "/shop" },
  {
    title: "SHOWROOMS",
    href: "/showrooms",
    submenu: [
      { title: "Rai Nursery", href: "/showrooms/rai-nursery" },
      { title: "Abdali Farm Showroom", href: "/showrooms/abdali-farm" },
      { title: "Abdali Ittihad Showroom", href: "/showrooms/abdali-ittihad" },
      { title: "Wafrah Corporate Showroom", href: "/showrooms/wafrah-corporate" },
      { title: "Wafrah Farm Showroom", href: "/showrooms/wafrah-farm" },
    ],
  },
  {
    title: "SERVICES",
    href: "/services",
    submenu: [
      { title: "Palms Maintenance", href: "/services/palms-maintenance" },
      { title: "Garden Maintenance", href: "/services/garden-maintenance" },
      { title: "Farm Development", href: "/services/farm-development" },
      { title: "Designing & Landscaping", href: "/services/landscaping" },
      { title: "Project Execution", href: "/services/project-execution" },
      { title: "Irrigation System Installation", href: "/services/irrigation" },
      { title: "Indoor Plants Maintenance", href: "/services/indoor-maintenance" },
      { title: "Consultation", href: "/services/consultation" },
    ],
  },
  { title: "PROJECTS", href: "/projects" },
  {
    title: "OUR FARMS",
    href: "/farms",
    submenu: [
      { title: "Wafrah Farm", href: "/farms/wafrah" },
      { title: "Abdali Farm", href: "/farms/abdali" },
    ],
  },
  { title: "GALLERY", href: "/gallery" },
  { title: "CONTACT US", href: "/contact" },
]

const categoryItems: NavItem[] = [
  { title: "YA HALA OFFERS", href: "/offers" },
  {
    title: "TISSUE CULTURE PALMS",
    href: "/tissue-culture-palms",
    submenu: [
      { title: "Field Palms", href: "/tissue-culture-palms/field" },
      { title: "Potted Palms", href: "/tissue-culture-palms/potted" },
      { title: "Mother Offshoots", href: "/tissue-culture-palms/mother" },
      { title: "Potted Offshoots", href: "/tissue-culture-palms/offshoots" },
    ],
  },
  { title: "GRAFTED SIDER", href: "/grafted-sider" },
  {
    title: "FRUITS TREES",
    href: "/fruits",
    submenu: [
      { title: "Berries", href: "/fruits/berries" },
      { title: "Fig", href: "/fruits/fig" },
      { title: "Grapes", href: "/fruits/grapes" },
      { title: "Mango", href: "/fruits/mango" },
      { title: "Others", href: "/fruits/others" },
    ],
  },
  {
    title: "CITRUSES TREES",
    href: "/citrus",
    submenu: [
      { title: "Clementine", href: "/citrus/clementine" },
      { title: "Lemon", href: "/citrus/lemon" },
      { title: "Orange", href: "/citrus/orange" },
      { title: "Others", href: "/citrus/others" },
    ],
  },
  {
    title: "ORNAMENTAL PLANTS",
    href: "/ornamental",
    submenu: [
      { title: "Bougainvilleas", href: "/ornamental/bougainvilleas" },
      { title: "Climbers & Creepers", href: "/ornamental/climbers" },
      { title: "Desert Plants", href: "/ornamental/desert" },
      { title: "Perennials and Seasonal", href: "/ornamental/perennials" },
      { title: "Shrubs", href: "/ornamental/shrubs" },
      { title: "Trees", href: "/ornamental/trees" },
    ],
  },
  {
    title: "INDOOR PLANTS",
    href: "/indoor",
    submenu: [
      { title: "Green Plants", href: "/indoor/green" },
      { title: "Flowering Plants", href: "/indoor/flowering" },
      { title: "Cactus & Succulents", href: "/indoor/cactus" },
      { title: "Hanging Plants", href: "/indoor/hanging" },
    ],
  },
  { title: "HERBS", href: "/herbs" },
  {
    title: "ORNAMENTAL PALMS & BONSAI",
    href: "/palms-bonsai",
    submenu: [
      { title: "Olive Trees", href: "/palms-bonsai/olive-trees" },
      { title: "Olives", href: "/palms-bonsai/olives" },
      { title: "Washingtonian Palms", href: "/palms-bonsai/washingtonian" },
      { title: "Other Palms", href: "/palms-bonsai/other" },
    ],
  },
  {
    title: "PLANT CARE",
    href: "/plant-care",
    submenu: [
      { title: "Fungicides", href: "/plant-care/fungicides" },
      { title: "Insecticides", href: "/plant-care/insecticides" },
      { title: "Others", href: "/plant-care/others" },
    ],
  },
  {
    title: "PLANT MEDIA",
    href: "/media",
    submenu: [
      { title: "Plants Mixtures", href: "/media/mixtures" },
      { title: "Soil", href: "/media/soil" },
      { title: "Soil Improver", href: "/media/improver" },
      { title: "Peat Moss", href: "/media/peat-moss" },
      { title: "Others", href: "/media/others" },
    ],
  },
  {
    title: "FERTILIZERS",
    href: "/fertilizers",
    submenu: [
      { title: "Granular Fertilizers", href: "/fertilizers/granular" },
      { title: "Liquid Fertilizer", href: "/fertilizers/liquid" },
      { title: "Organic Fertilizers", href: "/fertilizers/organic" },
      { title: "Soluble Fertilizers", href: "/fertilizers/soluble" },
    ],
  },
  {
    title: "SEEDS",
    href: "/seeds",
    submenu: [
      { title: "Vegetables", href: "/seeds/vegetables" },
      { title: "Flowers", href: "/seeds/flowers" },
      { title: "Herbs", href: "/seeds/herbs" },
    ],
  },
  {
    title: "POTS & BAGS",
    href: "/pots",
    submenu: [
      { title: "Planter Bags", href: "/pots/planter-bags" },
      { title: "Plastic Pots", href: "/pots/plastic" },
      { title: "Ceramic Pots", href: "/pots/ceramic" },
      { title: "Concrete Pots", href: "/pots/concrete" },
      { title: "Fiber Pots", href: "/pots/fiber" },
    ],
  },
  {
    title: "GARDEN ACCESSORIES",
    href: "/accessories",
    submenu: [
      { title: "Bamboo Sticks", href: "/accessories/bamboo" },
      { title: "Date Bags", href: "/accessories/date-bags" },
      { title: "Gravels & Stone", href: "/accessories/gravels" },
      { title: "Shade Net", href: "/accessories/shade-net" },
      { title: "Tools", href: "/accessories/tools" },
    ],
  },
  { title: "GARDEN FURNITURE", href: "/furniture" },
]

function NavItemWithSubmenu({ item }: { item: NavItem }) {
  const [isOpen, setIsOpen] = React.useState(false)

  if (!item.submenu) {
    return (
      <Link
        href={item.href || "#"}
        className={cn(
          "flex items-center justify-between px-4 py-3 border-t text-sm hover:bg-muted !text-[13px] text-black font-[600]",
          item.title === "pathname" && "text-orange-500",
        )}
      >
        {item.title}
      </Link>
    )
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex w-full hover:bg-muted border-t ">
        <Link href={item.href || "#"} className="flex-1 px-4 py-3 text-sm !text-[13px] text-black font-[600] border-r">
          {item.title}
        </Link>
        <CollapsibleTrigger className={cn(
            "px-3 py-3",
            isOpen ? "bg-orange-500 " : "",
        )}>
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform",
              isOpen && "rotate-180",
              isOpen ? "text-white rounded-sm" : "text-muted-foreground",
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
  )
}

export default function MobileNav() {
  return (
    <div className="w-full max-w-md mx-auto bg-background font-sans !text-[13px]">
      <div className="relative p-4">
        <Search className="absolute left-6 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
        <Input type="search" placeholder="Search for products" className="w-full pl-10" />
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
            {menuItems.map((item) => (
              <NavItemWithSubmenu key={item.title} item={item} />
            ))}
          </nav>
        </TabsContent>
        <TabsContent value="categories" className="">
          <nav className="">
            {categoryItems.map((item) => (
              <NavItemWithSubmenu key={item.title} item={item} />
            ))}
          </nav>
        </TabsContent>
      </Tabs>
    </div>
  )
}

