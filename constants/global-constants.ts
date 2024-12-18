export type NavLink = {
  name: string;
  href: string;
};

export const NavLinks = {
  Home: '/',
  Courses: '/courses',
  Pricing: '/pricing',
  BlogAndNews: '/blog-and-news',
  About: '/about',
} as const;

export const NavLinksWithName: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Courses', href: '/courses' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog & News', href: '/blog-and-news' },
  { name: 'About', href: '/about' },
];

export const UserNavLinks = {
  Dashboard: '/dashboard',
  Profile: '/profile',
} as const;

export const UserNavLinksWithName: NavLink[] = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Profile', href: '/profile' },
];
