import React, {useState} from 'react'

const ToggleButton = () => {
    const [vehicle, setVehicle] = useState(true);
    const [tires, setTires] = useState(false);

    const showVehicle = () =>{
        setVehicle(true)
        setTires(false)
      }
      const showTire = () =>{
        setVehicle(false)
        setTires(true)
      }
  return (
    <div className='border w-[179px] h-[48px] lg:h-[66px] rounded-[63px] flex items-center cursor-pointer transition-colors ease-in-out duration-200 shadow-sm'>
        <button className={` ${vehicle ? 'w-[86px] lg:w-[116px]' : 'w-[93px] lg:w-[124px]' } lg:h-[58px]  ${vehicle ? 'bg-[#1e293b]' : 'bg-[transparent]' } text-[14px] ${vehicle ? 'text-[white]' : 'text-[#1e293b]' } flex items-center justify-center px-[16px] py-[12px] rounded-[39px]`} onClick={showVehicle}>
            Vehicle
        </button>
        <button className={`${tires ? 'w-[86px] lg:w-[116px]' : 'w-[93px] lg:w-[124px]' } lg:h-[58px] ${tires ? 'bg-[#1e293b]' : 'bg-[transparent]' }  text-[14px] ${tires ? 'text-[white]' : 'text-[#1e293b]' } flex items-center justify-center px-[16px] py-[12px] rounded-[39px] `}  onClick={showTire}>
            Tire Size
        </button>
    </div>
  )
}

export default ToggleButton
