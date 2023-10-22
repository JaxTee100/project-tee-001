import React, {forwardRef, useState} from 'react'
import {LuSettings2} from 'react-icons/lu'
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight} from 'react-icons/md'
import withClickOutside from '../year/withClickOutside';

const BrandDropdown = forwardRef(({open, setOpen }, ref) => {
    const [selectedBrand, setSelectedBrand] = useState('Honda'); 




    const brands = ["Honda", "Acura", "Hyundai", "Mazda" ];

    const handleBrandClick = (brand) => {
        setSelectedBrand(brand);
        setOpen(false)
    };
    const showDropdown = () => {
        setOpen(!open)
    }

  return (
    <div className="relative flex mx-auto w-full " ref={ref}>
        <div className="w-full h-[53px] flex items-center border rounded-[40px] py-[16px] px-[20px] shadow-sm text-slate-700">
                <LuSettings2 size={20} className='mr-[12px]'/>
                <p className='mr-auto font-semibold text-[14px]'>{selectedBrand}</p>
                {open ?
                <MdOutlineKeyboardArrowDown size={20} className='' onClick={showDropdown} />
                : <MdOutlineKeyboardArrowRight size={20} className='' onClick={showDropdown} />
                }
            
            
            
            
        </div>
        
        {
            open &&
            <div className="absolute top-[100%] z-[10]  max-w-[500px] ">
            {
                <div className='  p-4 w-[250px]  bg-white flex flex-col justify-center rounded-md border'>
                    {brands.map((brand, index) => (
                    <p key={index} onClick={() => handleBrandClick(brand)} className="">
                        {brand}
                    </p>
                ))}
                </div>
                
            }
            </div>
        }
    
</div>
  );
})

export default withClickOutside(BrandDropdown)
