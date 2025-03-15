"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

interface BreadcrumbLink {
  name: string;
  arabicName?: string;
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
  const {
    i18n: { language },
  } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <nav className="flex items-center text-[14px]">
      {links.map((link, index) => {
        const isLast = index === links.length - 1;
        const linkName =
          language === "en"
            ? uppercase
              ? link.name.toUpperCase()
              : link.name
            : language === "ar"
            ? link.arabicName
            : "";
        const isSelected = index === links.length - 1;

        return (
          <div key={index} className="flex items-center font-sans">
            {index !== 0 && <span className="mx-2 text-gray-800">/</span>}
            {isLast ? (
              <span
                className={cn(
                  "font-semibold text-[.6875rem] leading-4 text-[#242424]",
                  currentStyle
                )}
              >
                {linkName}
              </span>
            ) : (
              <Link
                href={link.href}
                className={cn(
                  "font-semibold text-[.6875rem] leading-4 text-[#333] hover:text-gray-500 cursor-pointer",
                  isSelected && "font-semibold text-[#333]",
                  currentStyle
                )}
                onClick={() => {
                  setSelectedIndex(index);
                  updatePerPage && updatePerPage("per_page", link.value);
                }}
              >
                {linkName}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
