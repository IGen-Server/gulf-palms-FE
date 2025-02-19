import Link from "next/link";
import { cn } from "@/lib/utils";

interface BreadcrumbLink {
  name: string;
  href: string;
  value?: any;
}

interface BreadcrumbProps {
  links: BreadcrumbLink[];
  updatePerPage?: (key: string, value: any) => void;
  uppercase?: boolean;
  currentStyle?: string;
}

export function CustomBreadCrumb({
  links,
  updatePerPage,
  uppercase = true,
  currentStyle = "",
}: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-[14px] ">
      {links.map((link, index) => {
        const isLast = index === links.length - 1;
        const linkName =
          uppercase ?? true ? link.name.toUpperCase() : link.name;

        return (
          <div key={index} className="flex items-center">
            {index !== 0 && <span className="mx-2 text-gray-800">/</span>}
            {isLast ? (
              <span
                onClick={() => updatePerPage && updatePerPage('per_page', link.value)}
                className={cn("text-gray-800", currentStyle && currentStyle)}
              >
                {linkName}
              </span>
            ) : (
              <Link href={link.href} className="hover:text-gray-500" onClick={() => updatePerPage && updatePerPage('per_page', link.value)}>
                {linkName}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
