"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function BillingAddressForm() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Billing address</h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName">
              First name
              <span className="text-red-500 ml-0.5">*</span>
            </Label>
            <Input id="firstName" placeholder="SHIHAB" className="bg-gray-50" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">
              Last name
              <span className="text-red-500 ml-0.5">*</span>
            </Label>
            <Input id="lastName" placeholder="SABBIR" className="bg-gray-50" required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="fullAddress">
            Full address
            <span className="text-red-500 ml-0.5">*</span>
          </Label>
          <Input id="fullAddress" placeholder="Mohammadpur" className="bg-gray-50" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="area">
            Area
            <span className="text-red-500 ml-0.5">*</span>
          </Label>
          <Input id="area" placeholder="Qairawan" className="bg-gray-50" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">
            Phone
            <span className="text-red-500 ml-0.5">*</span>
          </Label>
          <Input id="phone" type="tel" placeholder="+8801521255003" className="bg-gray-50" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            Email address
            <span className="text-red-500 ml-0.5">*</span>
          </Label>
          <Input id="email" type="email" placeholder="shihab11231@gmail.com" className="bg-gray-50" required />
        </div>

        <Button type="submit" className="bg-[#ff9666] hover:bg-[#ff8652] text-white">
          SAVE ADDRESS
        </Button>
      </form>
    </div>
  )
}

