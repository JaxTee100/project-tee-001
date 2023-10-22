import React, {useState} from 'react'
import { BrandDropdown, ButtonComponent, ItemsDropdown, ModelDropdown, PostalDropdown, ToggleButton, YearDropdown } from '../../components';
import {LuSettings2} from 'react-icons/lu'
import {PiFunnelSimpleBold} from 'react-icons/pi'
import {MdOutlineKeyboardArrowUp} from 'react-icons/md'
import FilterContainer from '../filter-container/FilterContainer';

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
    <div className={`border  p-[24px] grid grid-cols-1 lg:flex lg:items-center lg:justify-between gap-[24px] rounded-[24px] lg:rounded-[80px] md:max-w-[696px] lg:max-w-[1556px] md:shadow-md lg:shadow-lg`}>
        <div className='flex justify-between '>
            <div className=''>
                <ToggleButton vehicle={vehicle} tires={tires} showTire={showTire} showVehicle={showVehicle} />
            </div>
            <div className='flex items-center text-[#475569]'>
                <PiFunnelSimpleBold  className='text-[20px] md:hidden' />
                <MdOutlineKeyboardArrowUp className='text-[20px] lg:hidden'/>
                <p className='hidden md:flex text-[14px]  lg:hidden'>Hide all filters</p>
            </div>
            
        </div>
        <div className=''>
          <FilterContainer />
        </div>
        
        <div className='max-w-md md:max-w-full lg:max-w-[182px]'>
          <ButtonComponent />
        </div>


        
    </div>
  )
}

export default SearchFilter
