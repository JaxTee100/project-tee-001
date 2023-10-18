import React, {useState} from 'react'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'

const Dropdown = () => {
    const [number, setNumber] = useState(2);
    const handleSelect = (num) => {
        setNumber(num);
    }
  return (
        <div className="hs-dropdown relative inline-flex">
            <button id="hs-dropdown-default" type="button" className="w-[53px] h-[29px] hs-dropdown-toggle  inline-flex justify-center items-center gap-2 rounded-[40px] border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 outline-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                {number}
                <MdOutlineKeyboardArrowDown size={20}/>
            </button>

            <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 opacity-0 w-52  hidden z-10 mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700" aria-labelledby="hs-dropdown-default">
                {Array.from({ length: 10}, (_, index) => (
                    <a key={index} onClick={() => handleSelect(index)} className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                        {index}
                    </a>
                ))}
                
            </div>
        </div>
  )
}

export default Dropdown
