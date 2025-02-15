"use client";

import { ReactNode, useState } from "react";
import { Eye, EyeOff, UserRound, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

interface SideDrawerProps {
  title: string;
  triggerComponent: ReactNode;
  bodyComponent: ReactNode;
}

export function SideDrawer({ title, triggerComponent, bodyComponent }: SideDrawerProps) {

  return (
    <Sheet>
      <SheetTrigger asChild>
        {triggerComponent}
      </SheetTrigger>
      <SheetContent side="right" className="!z-[51] overflow-y-auto px-0 w-[283px] xl:w-[340px] drawer">
        <div className="grid gap-6">
          <div className="flex items-center justify-between !px-[20px] border-b pb-4">
            <h2 className="text-xl font-semibold ">{title}</h2>
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
