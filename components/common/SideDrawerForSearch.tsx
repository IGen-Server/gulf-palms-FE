"use client";

import { ReactNode, useState } from "react";
import { X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useGlobalDataProvider } from "@/providers/GlobalDataProvider";

interface SideDrawerForSearchProps {
  title: string;
  open?: boolean;
  side?: "top" | "bottom" | "left" | "right" | null | undefined;
  triggerComponent: ReactNode;
  bodyComponent: ReactNode;
}

export function SideDrawerForSearch({ title, triggerComponent, bodyComponent, side = "right", open }: SideDrawerForSearchProps) {
  const { isSearchDrawerOpen, setIsSearchDrawerOpen } = useGlobalDataProvider();

  return (
    <Sheet open={isSearchDrawerOpen} onOpenChange={setIsSearchDrawerOpen}>
      <SheetTrigger asChild>
        {triggerComponent}
      </SheetTrigger>
      <SheetContent side={side} className={`!z-[51] overflow-y-auto px-0 drawer ${side === 'bottom' ? " " : " w-[283px] xl:w-[340px]"}`}>
        <div className="grid gap-6">
          <div className="flex items-center justify-between !px-[20px] border-b pb-4">
            <h2 className="text-xl font-semibold ">{title}</h2>
            <SheetClose asChild className="cursor-pointer">
              <p className="text-md bg-transparent w-fit p-0 flex items-center text-gray-800 gap-2 hover:bg-transparent hover:text-gray-500">
                <X size={48} strokeWidth={1.5} />
              </p>
            </SheetClose>
          </div>
          <div className="">
            {bodyComponent}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
