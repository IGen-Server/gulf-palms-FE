"use client";

import { useState } from "react";
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

export function AuthSheet() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          asChild
          variant="ghost"
          className="hover:bg-transparent w-fit p-0 hidden lg:flex close_btn"
        >
          <p className="!text-[13px] font-semibold text-secondary hover:text-secondary uppercase cursor-pointer">
            Login / Register
          </p>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="z-[10000] overflow-y-auto px-0 w-[283px] xl:w-[340px] drawer">
        <div className="grid gap-6">
          <div className="flex items-center justify-between !px-[20px] border-b pb-4">
            <h2 className="text-xl font-semibold ">Sign in</h2>
            <SheetClose asChild className="cursor-pointer">
              <p className="text-md bg-transparent w-fit p-0 flex items-center text-gray-800 gap-2 hover:bg-transparent hover:text-gray-500">
                <span>X</span>
                <span>Close</span>
              </p>
            </SheetClose>
          </div>
          <form className="grid gap-8 px-[20px]">
            <div className="grid gap-3">
              <Label htmlFor="email">
                Username or email address{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                required
                className="h-10 border-gray-200"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">
                Password <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="h-10 border-gray-200"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full px-[20px] py-[5px] bg-primary hover:bg-[#E59B62] text-white border-b-2 border-[#e68b46]"
            >
              LOG IN
            </Button>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <Link href="/my-account/lost-password/" className="text-sm text-primary hover:text-[#FFA755]">
                Lost your password?
              </Link>
            </div>
          </form>

          <div className="mt-6 text-center space-y-4 border-t border-b py-6">
            <div className="h-[54px] w-full text-gray-400 grid place-content-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
            </div>
            <p className="text-sm font-bold text-gray-800">No account yet?</p>
            <Link
              href="/my-account"
              className="inline-block text-gray-800 hover:text-gray-500 !text-[13px] border-b-2 border-primary"
            >
              CREATE AN ACCOUNT
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
