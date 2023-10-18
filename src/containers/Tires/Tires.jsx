import React from 'react'
import { TireCard1, TireCard2 } from '../../components'
import {PiFunnelSimpleBold} from 'react-icons/pi'

const Tires = () => {
  return (
    <div className='flex flex-col gap-[12px] md:gap-[16px] lg:gap-[24px] lg:px-[180px]'>
        <div className='flex  items-center justify-between'>
            <h4 className='font-semibold text-[16px] lg:text-[18px] text-[#1e293b]'>Tire Comparison:</h4>
            <div className='w-[139px] md:w-[459px] lg:w-[1246px] h-[1px]  bg-[#cbd5e1]'></div>
            <div className='flex w-[57px] md:w-[75px] lg:w-[80px]  justify-between items-center text-[#1e293b]'>
                <PiFunnelSimpleBold className='text-[12px] md:text-[16px] lg:text-[18px]'/>
                <p className='text-[12px] md:text-[16px] lg:text-[18px] '>Filters</p>
            </div>
        </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[24px] lg:mx-auto'>
        <TireCard1 />
        <TireCard1 />
        <TireCard1 />
        <TireCard1 />
        <TireCard2 />
        <TireCard2 />

      </div>
    </div>
  )
}

export default Tires
