import React from 'react'
import Package1 from '../../assets/packages/package1.png'
import SmallPackage from '../../assets/packages/small-package.png'
import { DropdownComponent } from '..'
import {IoMdRibbon} from 'react-icons/io'

const PackageCard = () => {
  return (
        <div className='relative w-full  h-[252px] md:h-[258px] lg:h-[323px] border rounded-[24px] flex flex-col lg:justify-between gap-[8px] lg:gap-[20px] mx-auto overflow-hidden shadow-md'>
            <div className='w-[110px] h-[15px] lg:h-[20px] flex justify-center items-center absolute top-[12px] left-[-29px] bg-[#f7ba82] -rotate-45'>
                <p className='mr-[5px] text-[12px] lg:text-[14px]'>Good</p>
                <IoMdRibbon className='text-[12px]' />

            </div>
            <div className='w-full lg:max-w-full lg:max-h-[190px] flex flex-col  gap-[16px] px-[12px] pt-[12px] pb-0 lg:px-[32px]'>
                <div className='flex flex-col justify-between '>
                    <h1 className='text-center text-[20px] font-semibold text-[#1e293b] lg:h-[70px] lg:w-[100%] lg:text-center '>17 inch Alloy wheel package</h1>
                    <div className='max-w-[312px] h-[62px] flex flex-col justify-between '>
                        <div className='w-[100px] lg:w-[110px] h-[18px] flex items-center justify-between '>
                            <p className='font-normal text-[12px] lg:text-[14px]'>Part#:</p>
                            <p className='font-semibold text-[12px] lg:text-[14px]'>Test 2023</p>
                        </div>
                        <div className='max-w-[208px] lg:max-w-[80%] ml-[10px] flex flex-col  '>
                            <p className='font-semibold text-[12px] lg:text-[14px] text-[#1e293b] flex items-center'>* 4x Michelin X-ice Snow 235/65R17</p>
                            <p className='font-semibold text-[12px] lg:text-[14px] text-[#1e293b]'>* 4x 17 Inch Alloy Wheel</p>
                        </div>
                    </div>

                </div>
                <div className='max-w-[200px] lg:max-w-[250px] h-[31px] flex justify-between items-center gap-[8px]'>
                    <div className='flex items-center w-[100px] justify-between '>
                        <p className='text-[12px] text-[#475569] lg:text-[14px]'>Price:</p>
                        <p className='font-semibold text-[12px] lg:text-[14px] text-[#1e293b]'>$256.59</p>
                    </div>
                    <div className='flex items-center  w-[120px] justify-between'>
                        <p className='text-[12px] lg:text-[14px] text-[#475569]'>Quantity:</p>
                        <DropdownComponent />
                    </div>
                </div>
                <div className='w-[109px] h-[24px]  flex justify-between items-center lg:mb-[100px]'>
                    <p className='text-[16px] lg:text-[20px] text-[#475569]'>Total:</p>
                    <p className='font-semibold text-[16px] lg:text-[20px] text-[#1e293b] '>$1026.36</p>
                </div>

            </div>
            <div className=' flex w-[122px] h-[125px]  lg:w-[282.22px] lg:h-[280px] absolute top-[100px] left-[245px] lg:top-[20%] lg:left-[60%]'>
                <img src={SmallPackage} alt='tire-pic' className=' z-[-10] lg:hidden' />
                <img src={Package1} alt='tire-pic' className='  z-[-10] hidden lg:flex' />
            </div>
            

            <button className='w-full h-[52px] md:h-[60px] lg:max-h-[56px] flex items-center justify-center gap-[20px]  bg-[#1e293b] text-white font-semibold text-[16px] '>
                Add to Quote
            </button>
        </div>
  )
}

export default PackageCard
