import React, { useState } from 'react'
import PreviewWheel from '../../assets/wheels/preview-wheel.png'
import BigWheel from '../../assets/wheels/big-wheel.png'

const WheelsPreview = () => {
    const [color, setColor] = useState(1);
  return (
    <div className='flex flex-col md:flex-row items-center  w-[340px] md:w-[582px] lg:w-[1536px] h-[308px] md:h-[325px] lg:h-[686px]  md:justify-center lg:justify-end lg:px-[48px] lg:pt-[48px] lg:pb-[24px]  mx-auto'>
      <div className='w-[275px] md:w-[417px] lg:w-[800px] h-[268px] md:h-[325px] lg:h-[100%]  flex flex-col lg:justify-between gap-[12px]  '>
        <div className='flex flex-col gap-[16px]'>
            <div className='text-center w-[283px] md:w-[417px]  h-[74px] md:h-[69px] lg:w-[100%] lg:flex lg:flex-col lg:items-center '>
                <h3 className='font-semibold text-[16px] md:text-[24px] text-[#1e293b]'>CR-V Hybrid Touring</h3>
                <p className='font-normal md:w-[427px] text-[14px] text-[#1e293b]'>You can customise the color of the car & select a wheel to preview</p>
            </div>
            <img className='md:w-[337px] lg:hidden  md:h-[171px]  ' src={PreviewWheel} alt='car-immg' />
            <img className='hidden md:hidden lg:block' src={BigWheel} alt='bog-wheel' />
        </div>
        <div className='w-[160px] md:w-[258px] h-[36px] md:h-[21px] mx-auto text-center'>
            <p className='font-normal text-[12px] md:text-[14px] text-[#1e293b]  '>Vehicle may not appear exactly shown</p>
        </div>
      </div>
      <div className='w-[154px] md:w-[24px] h-[24px] md:h-[154px] flex md:flex-col justify-between my-auto  lg:ml-[300px]'>
        <div className='rounded-[50%] w-[24px] h-[24px] bg-[#d5d5d5] '></div>
        <div className='rounded-[50%] w-[24px] h-[24px] bg-[#b0b0b0] '></div>
        <div className='rounded-[50%] w-[24px] h-[24px] bg-[#777777] '></div>
        <div className='rounded-[50%] w-[24px] h-[24px] bg-red-500 '></div>
        <div className='rounded-[50%] w-[24px] h-[24px] bg-[#525252] '></div>
        <div className='rounded-[50%] w-[24px] h-[24px] bg-[#ec4899] '></div>

      </div>
    </div>
  )
}

export default WheelsPreview
