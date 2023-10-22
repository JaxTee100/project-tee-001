import React, {useState, useRef, useEffect, forwardRef} from 'react'
import {BsCalendarDate} from 'react-icons/bs'
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight} from 'react-icons/md'
import withClickOutside from './withClickOutside';

const YearFilter =forwardRef( ({open, setOpen}, ref) => {
    const [selectedYear, setSelectedYear] = useState('2023');

    const showDropdown = () => {
        setOpen(!open)
    }
    const years = [];
    for (let year = 2010; year <= 2023; year++) {
      years.push(year.toString());
    }

    const select = (year) =>{
        setSelectedYear(year);
        setOpen(false)
    }
    
  return (
        <div className="relative w-full  flex mx-auto  " ref={ref}>
            <div className="h-[53px] w-full flex items-center border rounded-[40px] py-[16px] px-[20px] shadow-sm text-slate-700">
                    <BsCalendarDate size={20} className='mr-[12px]'/>
                    <p className='mr-auto font-semibold text-[14px]'>{selectedYear}</p>
                    {open ?
                        <MdOutlineKeyboardArrowDown size={20} className='' onClick={showDropdown} />
                    :   <MdOutlineKeyboardArrowRight size={20} className='' onClick={showDropdown} />
                    }
                
                
            </div>
            
            {
                open &&
                <div className="absolute  top-[100%] z-[10]   max-w-[500px] ">
                {
                    <div className='  p-4 w-[250px]  bg-white flex flex-col justify-center rounded-md border'>
                        {years.map((year, index) => (
                        <p key={index} onClick={() => select(year)} className="">
                            {year}
                        </p>
                    ))}
                    </div>
                    
                }
                </div>
            }
            
        </div>
  )
})

export default withClickOutside(YearFilter);
