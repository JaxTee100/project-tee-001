import React, {forwardRef, useState} from 'react'
import {AiOutlineCar} from 'react-icons/ai'
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight} from 'react-icons/md'
import withClickOutside from '../year/withClickOutside';

const ModelFilter = forwardRef(({open, setOpen}, ref) => {
    const [selectedModel, setSelectedModel] = useState('CR-V Hybrid');
    const models = ['CR-V Hybrid' ];

    const handleModelClick = (model) => {
        setSelectedModel(model);
        setOpen(false)
    }
    const showDropdown = () => {
        setOpen(!open)
    }
  return (
    <div className="relative w-full flex mx-auto" ref={ref}>
        <div className="w-full h-[53px] flex items-center border rounded-[40px] py-[16px] px-[20px] shadow-sm text-slate-700">
                <AiOutlineCar size={20} className='mr-[12px]'/>
                <p className='mr-auto font-semibold text-[14px]'>{selectedModel}</p>
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
                    {models.map((model, index) => (
                    <p key={index} onClick={() => handleModelClick(model)} className="">
                        {model}🇳🇬 
                    </p>
                ))}
                </div>
                
            }
            </div>
        }

    </div>
  )
})

export default withClickOutside(ModelFilter)
