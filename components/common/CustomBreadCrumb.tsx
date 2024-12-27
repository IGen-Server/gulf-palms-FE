import Link from "next/link";

interface BreadcrumbLink {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  links: BreadcrumbLink[];
}

export function CustomBreadCrumb({ links }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 uppercase text-[11px] ">
      {links.map((link, index) => (
        <div key={index} className="flex items-center">
          {index !== 0 && <span className="mx-2 text-gray-800">/</span>}
          {index === links.length - 1 ? (
            <span className="text-gray-800">{link.name}</span>
          ) : (
            <Link href={link.href} className=" hover:text-gray-500">
              {link.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
