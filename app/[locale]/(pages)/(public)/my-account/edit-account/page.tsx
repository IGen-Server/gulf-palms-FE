"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react"
import { useAuth } from "@/providers/AuthProvider"

export default function AccountDetailsPage() {

  const { userSettings } = useAuth();

  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <form className="max-w-2xl mx-auto p-6 space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-gray-600">
            First name
            <span className="text-red-500 ml-0.5">*</span>
          </Label>
          <Input id="firstName" defaultValue="SHIHAB" className="bg-gray-50" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-gray-600">
            Last name
            <span className="text-red-500 ml-0.5">*</span>
          </Label>
          <Input id="lastName" defaultValue="SABBIR" className="bg-gray-50" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="displayName" className="text-gray-600">
            Display name
            <span className="text-red-500 ml-0.5">*</span>
          </Label>
          <Input id="displayName" className="bg-gray-50" />
          <p className="text-sm text-gray-500 italic">
            This will be how your name will be displayed in the account section and in reviews
          </p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-600">
            Email address
            <span className="text-red-500 ml-0.5">*</span>
          </Label>
          <Input id="email" type="email" defaultValue="shihab11231@gmail.com" className="bg-gray-50" />
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Password change</h2>
        <div className="space-y-2">
          <Label htmlFor="currentPassword" className="text-gray-600">
            Current password (leave blank to leave unchanged)
          </Label>
          <div className="relative">
            <Input id="currentPassword" type={showCurrentPassword ? "text" : "password"} className="bg-gray-50 pr-10" />
            <button
              type="button"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showCurrentPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="newPassword" className="text-gray-600">
            New password (leave blank to leave unchanged)
          </Label>
          <div className="relative">
            <Input id="newPassword" type={showNewPassword ? "text" : "password"} className="bg-gray-50 pr-10" />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="text-gray-600">
            Confirm new password
          </Label>
          <div className="relative">
            <Input id="confirmPassword" type={showConfirmPassword ? "text" : "password"} className="bg-gray-50 pr-10" />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
      </div>

      <Button type="submit" className="bg-[#ff9666] hover:bg-[#ff8652] text-white">
        SAVE CHANGES
      </Button>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Social Login Accounts</h2>
        <p className="text-gray-600">
          You have no social login profiles connected.{" "}
          <a href="#" className="text-[#ff9666] hover:text-[#ff8652] no-underline">
            Connect one now
          </a>
        </p>
      </div>
    </form>
  )
}

