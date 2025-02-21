"use client";

import { ReactNode } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface SideDrawerProps {
  title: string;
  side?: "top" | "bottom" | "left" | "right";
  triggerComponent?: ReactNode;
  bodyComponent: ReactNode;
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
}

export function SideDrawer({
  title,
  triggerComponent,
  bodyComponent,
  side = "right",
  isOpen,
  setIsOpen,
}: SideDrawerProps) {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      {triggerComponent && (
        <SheetTrigger asChild>{triggerComponent}</SheetTrigger>
      )}
      <SheetContent
        side={side}
        className={`!z-[51] overflow-y-auto px-0 drawer ${
          side === "bottom" ? "" : "w-[283px] xl:w-[340px]"
        }`}
      >
        <div className="grid gap-6">
          <div className="flex items-center justify-between !px-[20px] border-b pb-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <SheetClose asChild className="cursor-pointer">
              <p className="text-md bg-transparent w-fit p-0 flex items-center text-gray-800 gap-2 hover:bg-transparent hover:text-gray-500">
                <span>X</span>
                <span>Close</span>
              </p>
            </SheetClose>
          </div>
          {bodyComponent}
        </div>
      </SheetContent>
    </Sheet>
  );
}
