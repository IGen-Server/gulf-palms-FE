'use client'

import GetInTouch from '@/components/common/GetInTouch'
import RelatedProducts from '@/components/shop/RelatedProducts'
import React from 'react'

export default function ProductDetails({children}:{children:React.ReactNode}) {
  return (
    <div className='pt-[75px] lg:pt-[98px]'>
        {children}
       <div className='w-screen max-w-[1370px] mx-auto py-[100px]'>
        <RelatedProducts/>
       </div>
       <GetInTouch/>
    </div>
  )
}
