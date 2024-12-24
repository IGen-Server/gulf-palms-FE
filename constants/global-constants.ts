export type NavLink = {
  name: string;
  href: string;
  children?: NavLink[]; // Optional field for nested links
};

export const NavLinksWithName: NavLink[] = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about-us" },
  {
    name: "SHOP",
    href: "/shop",
    children: [
      { name: "Shop 1", href: "/showrooms/shop-1" },
      { name: "Shop 2", href: "/showrooms/shop-2" },
      // Add more showrooms here as needed
    ],
  },
  {
    name: "SHOWROOMS",
    href: "/showrooms",
    children: [
      { name: "Showroom 1", href: "/showrooms/showroom-1" },
      { name: "Showroom 2", href: "/showrooms/showroom-2" },
      // Add more showrooms here as needed
    ],
  },
  {
    name: "SERVICES",
    href: "/services",
    children: [
      { name: "Service 1", href: "/services/service-1" },
      { name: "Service 2", href: "/services/service-2" },
      // Add more services here as needed
    ],
  },
  { name: "PROJECTS", href: "/projects" },
  {
    name: "OUR FARM",
    href: "/our-farms",
    children: [
      { name: "Farm 1", href: "/our-farms/farm-1" },
      { name: "Farm 2", href: "/our-farms/farm-2" },
      // Add more farms here as needed
    ],
  },
  { name: "GALLERY", href: "/gallery" },
  { name: "CONTACT US", href: "/contact-us" },
];

export const UserNavLinks = {
  Dashboard: "/dashboard",
  Profile: "/profile",
} as const;
