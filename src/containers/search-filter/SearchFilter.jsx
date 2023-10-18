import React, {useState} from 'react'
import { BrandDropdown, ItemsDropdown, ModelDropdown, PostalDropdown, ToggleButton, YearDropdown } from '../../components';
import {LuSettings2} from 'react-icons/lu'
import {PiFunnelSimpleBold} from 'react-icons/pi'
import {MdOutlineKeyboardArrowUp} from 'react-icons/md'

const SearchFilter = () => {
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

    const brands = ["Honda", "Acura", "Hyundai", "Mazda" ];
  return (
    <div className={`h-[497px] lg:h-[106px] ${vehicle ? 'lg:w-[1470px]': 'lg:w-[900px] lg:gap-[5px]' } rounded lg:rounded-[80px] border  bg-white p-[24px] lg:px-[24px] lg:py-[20px] flex flex-col lg:flex-row lg:justify-start gap-[24px] lg:mx-auto shadow-md`}>
        <div className='flex items-center w-[300px] md:w-[648px] lg:w-[248px] '>
            <div className='mr-[auto]'>
                <ToggleButton vehicle={vehicle} tires={tires} showTire={showTire} showVehicle={showVehicle} />
            </div>
            <div className='flex  w-[40px] md:w-[124px] items-center justify-between text-[#1e293b] '>
                <PiFunnelSimpleBold  className='text-[20px] md:hidden' />
                <MdOutlineKeyboardArrowUp className='text-[20px] lg:hidden'/>
                <p className='hidden md:flex text-[14px] text-[#475569] lg:hidden'>Hide all filters</p>
            </div>
            
        </div>
        {
          vehicle && 
          <div className='w-[300px] md:w-[648px] lg:w-[989px]  border-blue-200  h-[297px] md:h-[192px] lg:h-[64px] grid grid-cols-1 md:grid-cols-2 lg:flex lg:items-center gap-[8px]  md:gap-[12px]  mx-auto '>
          <YearDropdown/>
          <BrandDropdown/>
          <ModelDropdown/>
          <ItemsDropdown/>
          <PostalDropdown/>

        </div>
        }
        {
          tires && 
          <div className='w-[300px]  md:w-[648px] lg:w-[313px]   h-[120px] md:h-[90px] lg:h-[64px] grid grid-cols-1 md:grid-cols-2 lg:flex lg:items-center gap-[8px]  md:gap-[12px]  mx-auto '>

          <ItemsDropdown/>
          <PostalDropdown/>

        </div>
        }
        
        <button className='w-[300px] md:w-[648px] h-[56px] rounded-[39px] lg:w-[182px] mx-auto flex justify-center items-center gap-[10px] px-[24px] py-[18px] bg-[#ea0029] shadow-md text-white font-semibold'>
          View Results
        </button>


        
    </div>
  )
}

export default SearchFilter
