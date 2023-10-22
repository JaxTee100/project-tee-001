import React, {forwardRef, useState} from 'react'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight} from 'react-icons/md'
import withClickOutside from '../year/withClickOutside';

const PostalCode = forwardRef(({open, setOpen}, ref) => {
    const [selectedCode, setSelectedCode] = useState('15400');
    const codes = ['15400', '142200', '5370', '9004'];

    const handleCodeClick = (code) => {
        setSelectedCode(code);
        setOpen(false);
    }


    const showDropdown = () => {
        setOpen(!open)
    }
  return (
    <div className="relative w-full flex mx-auto  " ref={ref}>
        <div className="h-[53px] w-full flex items-center border rounded-[40px] py-[16px] px-[20px] shadow-sm text-slate-700">
                <HiOutlineLocationMarker size={20} className='mr-[12px]'/>
                <p className='mr-auto font-semibold text-[14px]'>{selectedCode}</p>
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
                    {codes.map((code, index) => (
                    <p key={index} onClick={() => handleCodeClick(code)} className="">
                        {code}
                    </p>
                ))}
                </div>
                
            }
            </div>
        }

    </div>
  )
})

export default withClickOutside(PostalCode)
