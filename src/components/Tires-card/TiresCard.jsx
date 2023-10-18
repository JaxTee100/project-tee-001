import React from 'react'
import Logo from '../../assets/tires/bf-tire.png'
import Tire from '../../assets/tires/tire.png'
import { DropdownComponent } from '..'

const TiresCard2 = () => {
  return (
    <div className='w-[358px] md:w-[336px] lg:w-[490.67px] h-[300px]  flex flex-col justify-around gap-[20px] pt-[12px] lg:pt-[24px]  shadow-md border rounded-[24px] relative overflow-hidden'>
      <div className='w-[358px] md:w-[336px] lg:w-[426.67px] lg:justify-between h-[46px]  p-[8px]  mx-auto flex gap-[16px] items-start lg:items-center'>
        <div className='w-[212px] md:w-[190px]  lg:w-[235px] h-[46px] text-[#1e293b]'>
            <h2 className='font-semibold text-[16px] lg:text-[25px]'>Geolandar CV G058</h2>
            <p className='font-normal text-[12px] lg:text-[14px]'>#7543974-23244-104/H/SL</p>
        </div>
        <img src={Logo} className='w-[106px] h-[26.5px]' alt='tire-logo'/>
      </div>

      <div className='w-[132px] lg:w-[252px] h-[54px] lg:h-[36px] flex flex-col lg:flex-row lg:items-center lg:justify-between lg:ml-[23px]  gap-[4px] pl-[16px]'>
        <div className='flex w-[92px] h-[21px] gap-[4px]'>
            <p className='font-normal text-[14px] text-[#475569]'>Price:</p>
            <p className='font-semibold text-[14px] text-[#1e293b]'>$243.60</p>
        </div>
        <div className='flex items-center justify-between w-[126px] h-[29px]'>
            <p className='font-normal text-[14px] text-[#475569]'>Quantity:</p>
            <DropdownComponent />
        </div>
      </div>

      <div className='w-[117px] lg:w-[134px] h-[46px] flex flex-col gap-[4px] lg:ml-[23px] pl-[16px] '>
        <div className='flex w-[92px] h-[21px] gap-[4px]'>
            <p className='font-normal text-[14px] lg:text-[20px] text-[#475569]'>Total:</p>
            <p className='font-semibold text-[14px] lg:text-[20px] text-[#1e293b]'>$974.40</p>
        </div>
        <div className='flex w-[116px] h-[29px] items-center '>
            <p className='font-normal text-[14px] text-[#475569]'>Saving:</p>
            <p className='font-semibold text-[14px] text-[#ea0029] p-2'>$194.07</p>
        </div>
      </div>
        <img src={Tire} alt='tire-pic' className=' w-[166px] absolute right-[0px] top-[120px] z-[-10]' />
      
      <button className='w-[358px] md:w-[336px] lg:w-[490.67px] h-[82px] p-[16px] flex gap-[auto] justify-between bg-[#1e293b] text-white'>
        <div className='w-[101px] lg:w-[228px]  h-[50px]lg:h-[21px] lg:flex lg:justify-between'>
            <p className='font-semibold text-[14px]'>Add to Quote</p>
            <p className='font-semibold text-[14px] w-[115px]'>Create Package</p>
        </div>
        <div className='flex w-[94px] h-[21px]  justify-between'>
                <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 outline-none  rounded border-white border-4 text-white focus:ring-black"
                    />
                </div>
                <div className="text-sm leading-6">
                    <label htmlFor="comments" className="font-medium text-[14px] text-white">
                      Compare
                    </label>
                </div>
        </div>
      </button>
    </div>
  )
}

export default TiresCard2
