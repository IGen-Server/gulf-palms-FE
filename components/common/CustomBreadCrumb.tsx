'use client'

import { useState } from "react";
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
  activeLastLink?: boolean;
  currentStyle?: string;
}

export function CustomBreadCrumb({
  links,
  updatePerPage,
  uppercase = true,
  activeLastLink = false,
  currentStyle = "",
}: BreadcrumbProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <nav className="flex items-center space-x-2 text-[14px]">
      {links.map((link, index) => {
        const isLast = index === links.length - 1;
        const linkName = uppercase ? link.name.toUpperCase() : link.name;
        const isSelected = index == selectedIndex;

        return (
          <div key={index} className="flex items-center">
            {index !== 0 && <span className="mx-2 text-gray-800">/</span>}
            {isLast && !activeLastLink ? (
              <span
                onClick={() => {
                  setSelectedIndex(index);
                  updatePerPage && updatePerPage("per_page", link.value);
                }}
                className={cn(
                  "text-gray-800 cursor-pointer",
                  isSelected && " font-extrabold text-black ",
                  currentStyle
                )}
              >
                {linkName}
              </span>
            ) : (
              <span
                className={cn(
                  "hover:text-gray-500 cursor-pointer",
                  isSelected && " font-extrabold text-black ",
                  currentStyle
                )}
                onClick={() => {
                  setSelectedIndex(index);
                  updatePerPage && updatePerPage("per_page", link.value);
                }}
              >
                {linkName}
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
