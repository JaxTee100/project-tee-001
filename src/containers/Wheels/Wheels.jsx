import React from 'react'
import { WheelsCard } from '../../components'

const Wheels = () => {
  return (
    <div className='flex flex-col justify-center w-[358px] md:w-[696px] lg:w-[1536px] lg:p-[32px] gap-[12px] lg:gap-[32px] lg:border lg:rounded-[24px] mx-auto my-0'>
        <h2 className='font-semibold text-[16px] md:text-[24px] text-[#1e293b]'>Select a Wheel to preview</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] lg:gap-[32px]'>
        <WheelsCard />
        <WheelsCard />
        <WheelsCard />
        <WheelsCard />
        <WheelsCard />
        <WheelsCard />
        <WheelsCard />
        <WheelsCard />
        <WheelsCard />

      </div>
    </div>
  )
}

export default Wheels
