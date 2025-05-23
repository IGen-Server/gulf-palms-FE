"use client"

import { Button } from "@/components/ui/button"

export default function OrdersPageDemo() {
  return (
    <div>
      {/* Desktop View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left text-[15px] font-[600] text-gray-800">ORDER</th>
              <th className="px-4 py-2 text-left text-[15px] font-[600] text-gray-800">DATE</th>
              <th className="px-4 py-2 text-left text-[15px] font-[600] text-gray-800">STATUS</th>
              <th className="px-4 py-2 text-left text-[15px] font-[600] text-gray-800">DELIVERY DETAILS</th>
              <th className="px-4 py-2 text-left text-[15px] font-[600] text-gray-800">TOTAL</th>
              <th className="px-4 py-2 text-left text-[15px] font-[600] text-gray-800 pl-[100px]">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-4 text-[14px]">#27815</td>
              <td className="px-4 py-4 text-black/60 text-[14px]">February 11, 2025</td>
              <td className="px-4 py-4 text-black/60 text-[14px]">Failed</td>
              <td className="px-4 py-4 text-black/60 text-[14px]">
                <div>Delivery Date: February 21, 2025</div>
                <div>Delivery Time: 02:00 PM - 06:00 PM</div>
              </td>
              <td className="px-4 py-4">
                <span className="text-[#ff9666]">36,000 KD</span> for 5 items
              </td>
              <td className="px-4 py-4 pl-[100px]">
                <Button size="sm" className="bg-[#ff9666] hover:bg-[#ff8652] text-white">
                  PAY
                </Button>
                <Button size="sm" className="bg-[#ff9666] hover:bg-[#ff8652] text-white ml-2 mb-2">
                  VIEW
                </Button>
                <Button size="sm" className="bg-[#ff9666] hover:bg-[#ff8652] text-white">
                  CANCEL
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-4 py-4">
        <div className="flex justify-between items-center text-[12.5px]">
          <span className="text-gray-800  font-[600]">DATE</span>
          <span>February 11, 2025</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-800 text-[12.5px] font-[600]">STATUS</span>
          <span className="text-[12.5px]">Failed</span>
        </div>
        <div className="flex justify-between items-start text-[12.5px]">
          <span className="text-gray-800  font-[600]">DELIVERY DETAILS</span>
          <div className="text-right">
            <div>Delivery Date: February 21, 2025</div>
            <div>Delivery Time: 02:00 PM - 06:00 PM</div>
          </div>
        </div>
        <div className="flex justify-between items-center text-[14px]">
          <span className="text-gray-800 text-[12.5px] font-[600]">TOTAL</span>
          <span>
            <span className="text-[#ff9666]">36,000 KD</span> for 5 items
          </span>
        </div>
        <div className="flex justify-between items-start">
          <span className="text-gray-800 text-[12.5px] font-[600]">ACTIONS</span>
          <div className="text-right">
          <div className="flex justify-end gap-2">
          <Button size="sm" className="bg-[#ff9666] hover:bg-[#ff8652] text-white">
            PAY
          </Button>
          <Button size="sm" className="bg-[#ff9666] hover:bg-[#ff8652] text-white">
            VIEW
          </Button>
          <Button size="sm" className="bg-[#ff9666] hover:bg-[#ff8652] text-white">
            CANCEL
          </Button>
        </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

