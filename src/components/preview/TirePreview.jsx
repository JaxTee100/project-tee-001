import React, { useState } from 'react'
import PreviewImage from '../../assets/tires/preview-image.png'

const TirePreview = () => {

        const [selectedDiv, setSelectedDiv] = useState(1);
      
        const handleDivClick = (divNumber) => {
          setSelectedDiv(divNumber);
        };


  return (
    <div className='flex flex-col md:flex-row gap-[16px] w-[340px] md:w-[693px] lg:w-[1536px] h-[282px] md:h-[73px] lg:h-[128px] lg:gap-[auto] lg:justify-start lg:items-center mx-auto' >
      <div className='flex justify-between lg:justify-center  items-center w-[340px] lg:w-[534.1px] lg:h-[128px] lg:mr-auto '>
        <img className='md:w-[109px] lg:w-[252.1px] md:h-[73px]  lg:h-[128px] lg:mr-[30px]' src={PreviewImage} alt='car-img' />
        <div className='md:w-[109px] lg:w-[228px] md:h-[73px] lg:h-[61px]'>
            <h3 className='font-semibold text-[16px] lg:text-[24px] text-[#1e293b]'>CR-V Hybrid Touring</h3>
            <p className='font-normal text-[14px] text-[#1e293b]'>Honda-2023</p>
        </div>
      </div>
      <div onClick={() => handleDivClick(1)} className={`w-[340px] md:w-[139px] lg:w-[163px] h-[59px] md:h-[65px] lg:h-[79px] lg:justify-center ${selectedDiv === 1 ? 'bg-[#1e293b] text-white hover:bg-slate-700' : 'bg-white text-[#1e293b] hover:bg-slate-50'} border  rounded-[16px] shadow-sm  flex flex-col gap-[4px] px-[16px] py-[8px]  cursor-pointer`}>
        <h3 className='font-semibold text-[14px] md:text-[16px] lg:text-[20px]'>Original Size</h3>
        <div className=' flex'>
            <p className='font-normal text-[12px] md:text-[14px] mr-[15px]'>Size:</p>
            <p className='font-semibold text-[12px] md:text-[14px]'>235/60R17</p>
        </div>
      </div>
      <div onClick={() => handleDivClick(2)} className={`w-[340px] md:w-[141px] lg:w-[157px] h-[59px] md:h-[65px] lg:h-[79px] lg:justify-center  ${selectedDiv === 2 ? 'bg-[#1e293b] text-white hover:bg-slate-700' : 'bg-white text-[#1e293b] hover:bg-slate-50'} border  rounded-[16px] shadow-sm  flex flex-col gap-[4px] px-[16px] py-[8px] cursor-pointer`}>
        <h3 className='font-semibold text-[14px] md:text-[16px] lg:text-[20px]'>Down Size</h3>
        <div className=' flex'>
            <p className='font-normal text-[12px] md:text-[14px] mr-[15px]'>Size:</p>
            <p className='font-semibold text-[12px] md:text-[14px]'>235/60R18</p>
        </div>
      </div>
      <div onClick={() => handleDivClick(3)} className={`w-[340px] md:w-[139px] lg:w-[163px] h-[59px] md:h-[65px] lg:h-[79px] lg:justify-center   ${selectedDiv === 3 ? 'bg-[#1e293b] text-white hover:bg-slate-700' : 'bg-white text-[#1e293b] hover:bg-slate-50'} border rounded-[16px] shadow-sm  flex flex-col gap-[4px] px-[16px] py-[8px] cursor-pointer`}>
        <h3 className='font-semibold text-[14px] md:text-[16px] lg:text-[20px]'>Original Size</h3>
        <div className=' flex'>
            <p className='font-normal text-[12px] md:text-[14px] mr-[15px]'>Size:</p>
            <p className='font-semibold text-[12px] md:text-[14px]'>235/60R19</p>
        </div>
      </div>
     
     
    </div>
  )
}

export default TirePreview
