import React, {useState} from 'react'

const ToggleButton = ({vehicle, tires, showVehicle, showTire}) => {
    

   
  return (
    <div className='border max-w-full lg:max-w-[248px] h-[48px] lg:h-[66px] rounded-[63px] lg:p-[4px] flex items-center cursor-pointer  shadow-sm md:shadow-md lg:shadow-lg'>
        <button className={`h-[48px]  lg:h-[58px]  ${vehicle ? 'bg-[#1e293b] w-[50%] ' : 'bg-[transparent] w-[50%] ' } text-[14px] ${vehicle ? 'text-[white]' : 'text-[#1e293b]' } flex items-center justify-center px-[16px] py-[12px] lg:py-[14px] rounded-[39px]`} onClick={showVehicle}>
            Vehicle
        </button>
        <button className={`h-[48px] lg:h-[58px]  ${tires ? 'bg-[#1e293b] w-[50%]' : 'bg-[transparent] w-[50%]' }  text-[14px] ${tires ? 'text-[white]' : 'text-[#1e293b]' } flex items-center justify-center px-[10px] py-[12px] lg:py-[14px] rounded-[39px] `}  onClick={showTire}>
            Tire Size
        </button>
    </div>
  )
}

export default ToggleButton
