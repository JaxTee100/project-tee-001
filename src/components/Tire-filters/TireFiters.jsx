import React, {useState} from 'react'
import {MdOutlineCancel, MdOutlineKeyboardArrowRight, MdKeyboardArrowDown} from 'react-icons/md'

const TireFiters = () => {
    const[seasons, setSeasons] = useState(true);
    const[tireSize, setTireSize] = useState(true);
    const[tireBrand, setTireBrand] = useState(true);


    const selectSeasons = () =>{
        setSeasons(!seasons)
    }
    const selectTireSize = () =>{
        setTireSize(!tireSize)
    }
    const selectTireBrand = () =>{
        setTireBrand(!tireBrand)
    }
  return (
    <div className=' w-[355px] h-[900px] shadow-sm border flex flex-col gap-[32px] p-[24px] filters'>

        <div className='w-[320px] h-[55px] gap-[auto] flex  justify-between'>
            <div className='w-[231px] h-[55px] flex flex-col gap-[4px] justify-around '>
                <h3 className='font-semibold text-[20px] text-[#1e293b]'>Filters</h3>
                <p className='font-regular text-[14px] text-[#1e293b]'>Select & apply the described filters</p>
            </div>
            <MdOutlineCancel className='text-[#1e293b] text-[20px] mt-[5px]'/>
        </div>

        {/* Seasons */}
        <div className='w-[320px] h-[146px] flex flex-col gap-[24px]'>
            <div className='h-[46px] py-[8px] flex justify-between items-center border-b-2'>
                <h4 className='font-normal text-[20px] text-[#475569]'>Season</h4>
                {seasons ? <MdKeyboardArrowDown className='text-[20px]' onClick={selectSeasons} size={20}/> : <MdOutlineKeyboardArrowRight className='text-[20px]'  onClick={selectSeasons} />}
                
                
            </div>
            { seasons &&
            <div className="flex flex-col gap-y-3">
                <div className="flex items-center">
                    <input type="radio" name="season" className=" shrink-0 mt-0.5 rounded-full   accent-red-500    dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="winter" checked/>
                    <label for="winter" className="text-[20px] text-[#475569] ml-2 dark:text-gray-400">Winter</label>
                </div>

                <div className="flex items-center">
                    <input type="radio" name="season" className="shrink-0 mt-0.5 border-gray-200 rounded-full accent-red-500   dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="all-season1"/>
                    <label for="all-season1" className="text-[20px] text-[#475569] ml-2 dark:text-gray-400">All Season</label>
                </div>

    
            </div>
            }
        </div>

        {/* tire-size */}
        <div className='w-[320px] h-[146px] flex flex-col gap-[24px]'>
            <div className='h-[46px] py-[8px] flex justify-between items-center border-b-2'>
                <h4 className='font-normal text-[20px] text-[#475569]'>Tire Size</h4>
                {tireSize ? <MdKeyboardArrowDown className='text-[20px]'  onClick={selectTireSize} /> : <MdOutlineKeyboardArrowRight className='text-[20px]'  onClick={selectTireSize} />}
                
                
            </div>
            { tireSize &&
            <div className="flex flex-col gap-y-3">
                <div className="flex items-center">
                    <input type="radio" name="tire-size" className=" shrink-0 mt-0.5 rounded-full   accent-red-500    dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="winter" checked/>
                    <label for="winter" className="text-[20px] text-[#475569] ml-2 dark:text-gray-400">215/55r18/Original</label>
                </div>

                <div className="flex items-center">
                    <input type="radio" name="tire-size" className="shrink-0 mt-0.5 border-gray-200 rounded-full accent-red-500   dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="all-season2"/>
                    <label for="all-season2" className="text-[20px] text-[#475569] ml-2 dark:text-gray-400">All Season</label>
                </div>

    
            </div>
            }
        </div>

        {/* tire-brands */}
        <div className='w-[320px] h-[146px] flex flex-col gap-[24px]'>
            <div className='h-[46px] py-[8px] flex justify-between items-center border-b-2'>
                <h4 className='font-normal text-[20px] text-[#475569]'>Tire Brand</h4>
                {tireBrand ? <MdKeyboardArrowDown className='text-[20px]'  onClick={selectTireBrand} /> : <MdOutlineKeyboardArrowRight className='text-[20px]'  onClick={selectTireBrand} />}
                
                
            </div>
            { tireBrand &&
            <ul className="max-w-sm flex flex-col">
                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white  text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                    <div className="relative flex items-start w-full">
                    <div className="flex items-center h-5">
                        <input id="hs-list-group-item-checkbox-1" name="hs-list-group-item-checkbox-1" type="checkbox" className="border-gray-200 accent-red-500  rounded dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" checked/>
                    </div>
                    <label for="hs-list-group-item-checkbox-1" class="ml-3.5 block w-full text-sm text-gray-600 dark:text-gray-500">
                        Bfgoodrich
                    </label>
                    </div>
                </li>

                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white  text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                    <div className="relative flex items-start w-full">
                    <div className="flex items-center h-5">
                        <input id="hs-list-group-item-checkbox-2" name="hs-list-group-item-checkbox-2" type="checkbox" className="border-gray-200 accent-red-500  rounded dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                    </div>
                    <label for="hs-list-group-item-checkbox-2" className="ml-3.5 block w-full text-sm text-gray-600 dark:text-gray-500">
                        Bridgestone
                    </label>
                    </div>
                </li>

                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white  text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                    <div className="relative flex items-start w-full">
                    <div className="flex items-center h-5">
                        <input id="hs-list-group-item-checkbox-3" name="hs-list-group-item-checkbox-3" type="checkbox" className="border-gray-200 accent-red-500  rounded dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                    </div>
                    <label for="hs-list-group-item-checkbox-3" className="ml-3.5 block w-full text-sm text-gray-600 dark:text-gray-500">
                        Bridgestone
                    </label>
                    </div>
                </li>
                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white  text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                    <div className="relative flex items-start w-full">
                    <div className="flex items-center h-5">
                        <input id="hs-list-group-item-checkbox-3" name="hs-list-group-item-checkbox-3" type="checkbox" className="border-gray-200 accent-red-500  rounded dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                    </div>
                    <label for="hs-list-group-item-checkbox-3" className="ml-3.5 block w-full text-sm text-gray-600 dark:text-gray-500">
                        Bridgestone
                    </label>
                    </div>
                </li>
                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white  text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                    <div className="relative flex items-start w-full">
                    <div className="flex items-center h-5">
                        <input id="hs-list-group-item-checkbox-3" name="hs-list-group-item-checkbox-3" type="checkbox" className="border-gray-200 accent-red-500  rounded dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                    </div>
                    <label for="hs-list-group-item-checkbox-3" className="ml-3.5 block w-full text-sm text-gray-600 dark:text-gray-500">
                        Bridgestone
                    </label>
                    </div>
                </li>
                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white  text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                    <div className="relative flex items-start w-full">
                    <div className="flex items-center h-5">
                        <input id="hs-list-group-item-checkbox-3" name="hs-list-group-item-checkbox-3" type="checkbox" className="border-gray-200 accent-red-500  rounded dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                    </div>
                    <label for="hs-list-group-item-checkbox-3" className="ml-3.5 block w-full text-sm text-gray-600 dark:text-gray-500">
                        Bridgestone
                    </label>
                    </div>
                </li>
                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white  text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                    <div className="relative flex items-start w-full">
                    <div className="flex items-center h-5">
                        <input id="hs-list-group-item-checkbox-3" name="hs-list-group-item-checkbox-3" type="checkbox" className="border-gray-200 accent-red-500  rounded dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                    </div>
                    <label for="hs-list-group-item-checkbox-3" className="ml-3.5 block w-full text-sm text-gray-600 dark:text-gray-500">
                        Bridgestone
                    </label>
                    </div>
                </li>
                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white  text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                    <div className="relative flex items-start w-full">
                    <div className="flex items-center h-5">
                        <input id="hs-list-group-item-checkbox-3" name="hs-list-group-item-checkbox-3" type="checkbox" className="border-gray-200 accent-red-500  rounded dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                    </div>
                    <label for="hs-list-group-item-checkbox-3" className="ml-3.5 block w-full text-sm text-gray-600 dark:text-gray-500">
                        Bridgestone
                    </label>
                    </div>
                </li>
            </ul>
            }

        </div>




    </div>
  )
}

export default TireFiters
