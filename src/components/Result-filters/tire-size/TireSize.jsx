import React, {useState} from 'react'
import {PiPokerChipDuotone} from 'react-icons/pi'
import {BiMap} from 'react-icons/bi'
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {AiOutlineInfoCircle} from 'react-icons/ai'

const TireSize = () => {
    const [selectedTire, setSelectedTire] = useState('Enter Tire Size'); 
    const [showTireSize, setShowTireSize] = useState(false);


    const showAllTirreSizes = () =>{
        setShowTireSize(!showTireSize)
    }

    const tireSizes = [];
    for (let tire = 201; tire <= 223; tire++) {
      tireSizes.push(tire.toString());
    }

    const handleTireClick = (tire) => {
        setSelectedTire(tire);
        setShowTireSize(false)
    };
  return (
        <div className="hs-dropdown relative flex ">
            <button id="hs-dropdown-default" type="button" className="w-[340px] md:w-[333px] lg:w-[460px] h-[53px] md:h-[56px] lg:h-[64px]  bg-slate-50 text-[#1e293b] hs-dropdown-toggle py-[16px] px-[20px] flex justify-start items-center gap-2 rounded-[40px] border font-medium   shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                <PiPokerChipDuotone className='text-[14px] md:text-[16px] lg:text-[20px]'/>
                <p className='mr-auto text-[14px] md:text-[16px] lg:text-[20px]'>{selectedTire}</p>
                <AiOutlineInfoCircle className='text-[14px] md:text-[16px] lg:text-[20px]' />
            </button>

            <div className=" hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 opacity-0 w-72 hidden z-10 mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700" aria-labelledby="hs-dropdown-default">
                {
                    tireSizes.map((tire, index) => (
                        <a key={index} onClick={() => setSelectedTire(tire)} className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                            {tire}
                        </a>
                    ))
                }
            </div>
        </div>
  )
}

export default TireSize
