import React from 'react'
import { PackageCard } from '../../components'

const Packages = () => {
  return (
    <div className='flex flex-col gap-[16px]'>
        <div className='w-[350px] md:w-[696px] lg:w-[1536px] h-[49px] md:h-[64px] flex flex-col lg:px-[20px]  mx-auto'>
            <h2 className='font-semibold text-[16px] md:text-[24px] text-[#1e293b]'>Packages Options</h2>
            <div className='h-[21px] flex justify-between items center '>
                <div className='flex items-center justify-between w-[170px] md:w-[215px]'>
                    <p className='text-[12px] md:text-[16px] text-[#1e293b]'>2022 Civic Sedan EX </p>
                    <p className='font-bold text-[14px] md:text-[16px] text-[#ea0029] underline'>Change</p>
                </div>
                <div className='flex items-center w-[163px] md:w-[184px] gap-[8px] '>
                    <p className='text-[14px] md:text-[16px] text-[#1e293b]'>Your Results</p>
                    <p className='font-bold text-[14px] md:text-[16px] text-[#ea0029] underline'>All Season</p>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[24px] mx-auto '>
            <PackageCard />
            <PackageCard />
            <PackageCard />
        </div>
    </div>
  )
}

export default Packages
