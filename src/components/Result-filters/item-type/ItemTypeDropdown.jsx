import React, {forwardRef, useState} from 'react'
import {PiPokerChipDuotone} from 'react-icons/pi'
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight} from 'react-icons/md'
import withClickOutside from '../year/withClickOutside';

    
const ItemTypeDropdown = forwardRef(({open, setOpen}, ref) => {
    
    const [selectedItem, setSelectedItem] = useState('Tires');
    const items = ['Accessories', 'Tires', 'Wheels', 'Packages'  ];

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setOpen(false)
    }

    const showDropdown = () => {
        setOpen(!open)
    }
  return (
    <div className="relative flex mx-auto w-full " ref={ref}>
        <div className="w-full h-[53px] flex items-center border rounded-[40px] py-[16px] px-[20px] shadow-sm text-slate-700">
                <PiPokerChipDuotone size={20} className='mr-[12px]'/>
                <p className='mr-auto font-semibold text-[14px]'>{selectedItem}</p>
                {open ?
                <MdOutlineKeyboardArrowDown size={20} className='' onClick={showDropdown} />
                : <MdOutlineKeyboardArrowRight size={20} className='' onClick={showDropdown} />
                }
            
            
            
            
        </div>
        
        {
            open &&
            <div className="absolute top-[100%] z-[10] max-w-[500px] ">
            {
                <div className='  p-4 w-[250px]  bg-white flex flex-col justify-center rounded-md border'>
                    {items.map((item, index) => (
                    <p key={index} onClick={() => handleItemClick(item)} className="">
                        {item}
                    </p>
                ))}
                </div>
                
            }
            </div>
        }

    </div>
  )
})

export default withClickOutside(ItemTypeDropdown);
