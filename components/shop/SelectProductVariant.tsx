import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X } from 'lucide-react'
import { Button } from '../ui/button'

interface ProductSelectionSheetProps {
  isOpen: boolean
  onClose: () => void
  productId: string
  options: string[]
}

const SelectProductVariant: React.FC<ProductSelectionSheetProps> = ({
  isOpen,
  onClose,
  productId,
  options = []
}) => {
  if (!isOpen) return null

  return (
    <div className="absolute -top-[50px] inset-0 w-full h-[328px] bg-white/90 z-20">
      {/* Close and Wishlist buttons */}
      <div className="absolute top-0 w-full px-4 flex justify-end z-10">
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-white shadow-md grid place-content-center"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* Size Selection */}
      <div className="absolute !top-[50%] grid place-content-center h-full left-1/2  -translate-x-1/2 -translate-y-1/2 w-[90%]">
        <div className="space-y-2">
          <label className="text-sm !text-center font-medium text-gray-700">Size:</label>
          <Select>
            <SelectTrigger className="w-full bg-white border-gray-300">
              <SelectValue placeholder="Choose an option" />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
        <Button className='absolute -bottom-5 w-full hover:bg-primary'>Add to cart</Button>
    </div>
  )
}

export default SelectProductVariant
