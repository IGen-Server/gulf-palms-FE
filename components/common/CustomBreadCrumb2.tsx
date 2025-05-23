"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { useState } from "react";

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

export function CustomBreadCrumb2({
  links,
  updatePerPage,
  uppercase = true,
  activeLastLink = false,
  currentStyle = "",
}: BreadcrumbProps) {
  const {
    i18n: { language },
  } = useTranslation();
  const searchParams = useSearchParams();
  // const perPage = searchParams.get("per_page");
  const [perPage, setPerPage] = useState(24)

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
        const isCurrent = perPage ? perPage === link.value : isLast;

        return (
          <div key={index} className="flex items-center">
            {index !== 0 && <span className="mx-2 text-gray-800">/</span>}

            <p

              className={cn(
                "font-semibold text-[.6875rem] leading-4 text-lightGray hover:text-[#242424] cursor-pointer",
                isCurrent && currentStyle
              )}
              onClick={() => setPerPage(link.value)}
            >
              {linkName}
            </p>

          </div>
        );
      })}
    </nav>
  );
}
