import React from 'react'
import {AiOutlineInfoCircle, AiOutlineShoppingCart} from 'react-icons/ai'
import { DropdownComponent } from '..'
import Wheel from '../../assets/wheels/wheel.png'


const WheelsCard = () => {
  return (
    <div className='w-[358px] h-[208px] md:w-[336px] lg:w-[469.33px] lg:h-[257px] rounded-[24px] shadow-md border flex flex-col focus:border-[red] active:border-[red] overflow-hidden'>
      <div className='w-[358px] md:w-[336px] lg:w-[469.33px] h-[152px] lg:h-[201px] p-[16px] md:px-[5px] md:py-[10px] flex items-center gap-[8px]'>
        <div className=''>
            <img src={Wheel} alt='wheels' className='w-[70px] h-[71px] lg:w-[125.72px] lg:h-[128px] lg:mr-[20px]' />
        </div>
        <div className='w-[248px] h-[120px] md:w-[226px] lg:w-[255.62px] lg:h-[153px] flex flex-col gap-[10px] '>
            <h2 className='font-semibold text-[18px] lg:text-[25px] text-[#1e293b]'>08W19-T3L-300</h2>
            <div className='flex justify-start  w-[100%] md:w-[234px] lg:w-[274px] h-[18px] gap-[16px] md:gap-[10px] '>
                <p className='text-[12px] lg:text-[14px] font-normal text-[#475569]'>Part #: </p>
                <p className='font-semibold text-[12px] lg:text-[14px] text-[#1e293b]'>08W19-T3L-300</p>
                <p className='font-normal text-[12px] lg:text-[14px] text-[#475569]'>Diameter: </p>
                <p className='font-semibold text-[12px]  lg:text-[14px] text-[#1e293b]'>17</p>
            </div>
            <div className='flex justify-between w-[100%] md:w-[234px] h-[18px] gap-[16px] md:gap-[10px]  items-center'>
                <p className='font-normal text-[12px] lg:text-[14px] text-[#475569]'>Price: </p>
                <p className='font-semibold text-[12px] lg:text-[14px] text-[#1e293b]'>$194.07</p>
                <p className='font-normal text-[12px] lg:text-[14px] text-[#475569]'>Quantity:</p> <DropdownComponent />
            </div>
            <div className='flex w-[94px] h-[21px] justify-between lg:w-[154px] '>
                <p className='font-normal text-[14px] lg:text-[20px] text-[#475569]'>Total:</p>
                <p className='font-semibold text-[14px] lg:text-[20px] text-[#1e293b]'>$776.28</p>
            </div>

            
        </div>
      </div>
      <button className='flex w-[100%] h-[56px] justify-center items-center gap-[16px] p-[16px] text-[#445567]   border-t-2 border-gray-100 active:bg-[red] active:text-white'>
        <div className='flex gap-[8px] items-center w-[130px] lg:w-[154px] h-[24px]   cursor-pointer rounded-[24px] p-2 '>
            <AiOutlineInfoCircle size={20} />
            <p className='text-[14px] lg:text-[16px]  '>View Details</p>
        </div>
        <p className=''>|</p>
        <div className='flex gap-[8px] w-[134.04px] lg:w-[154px] h-[21px] items-center cursor-pointer rounded-[24px] p-2 '>
            <AiOutlineShoppingCart className=''/>
            <p className='text-[14px] lg:text-[16px] '>Add to quote</p>
        </div>
      </button>
    </div>
  
  )
}

export default WheelsCard
