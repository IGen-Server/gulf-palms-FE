"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export default function UserSigninFormForDrawer() {
  const [showPassword, setShowPassword] = useState(false);

  return (<>
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
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-round"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
      </div>
      <p className="text-sm font-bold text-gray-800">No account yet?</p>
      <Link
        href="/my-account"
        className="inline-block text-gray-800 hover:text-gray-500 !text-[13px] border-b-2 border-primary"
      >
        CREATE AN ACCOUNT
      </Link>
    </div>
  </>)
}
