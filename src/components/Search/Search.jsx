import React, { useState } from 'react'
import {BsCalendarDate} from 'react-icons/bs'
import {AiOutlineRight, AiOutlineDown, AiOutlineCar, AiOutlineInfoCircle} from 'react-icons/ai'
import {LuSettings2} from 'react-icons/lu'
import {PiPokerChipDuotone} from 'react-icons/pi'
import {BiMap} from 'react-icons/bi'

const Search = () => {
  //toggle states
  const [vehicle, setVehicle] = useState(true)
  const [tires, setTires] = useState(false);

  //dropdown states
  const [dropDown, setDropDown]  = useState(false)

  



  //functions for toggle buttons
  const showVehicle = () =>{
    setVehicle(true)
    setTires(false)
  }
  const showTire = () =>{
    setVehicle(false)
    setTires(true)
  }

  //functions for dropdown
  const dropdown = () =>{
    setDropDown(!dropDown)
  }

  
  return (
    <div className='flex flex-col gap-[16px]'>
      <div className='flex bg-white items-center w-[350px]  md:w-[180px] lg:w-[404px] h-[57px] md:h-[55px] lg:h-[63px] rounded-[63px] p-[4px] md:p-0 border  mx-auto shadow-sm md:shadow-md lg:shadow-lg'>
        <button className={`flex w-[170px] md:w-[86px] lg:w-[204px] md:h-[48px] lg:h-[55px] justify-center items-center ${vehicle ? 'bg-slate-800 text-white' : 'bg-white text-[#475569]'} font-semibold text-[14px] md:text-[16px] px-[24px] md:px-[16px] py-[14px] md:py-[12px] rounded-[39px]`} onClick={showVehicle}><span className='md:hidden lg:inline mr-1'>Search by </span>Vehicle</button>
        <button className={`flex w-[170px] md:w-[86px] lg:w-[204px] md:h-[48px] lg:h-[55px] justify-center items-center ${tires ? 'bg-slate-800 text-white': 'bg-white text-[#475569]'} font-semibold text-[14px] md:text-[16px] px-[20px] md:px-[10px]  py-[14px] md:py-[10px] rounded-[39px]`} onClick={showTire}><span className='md:hidden lg:inline mr-1'>Search by</span>Tire Size</button>
      </div>
      {
        vehicle && 
        <div className='w-[350px] md:w-[696px] lg:w-[1556px]  h-[408px] md:h-[302px] lg:h-[104px]   border flex  flex-col lg:flex-row items-center rounded-[24px] lg:rounded-[80px] bg-white p-[8px] md:p-[20px] lg:px-[24px] lg;py-[20px] gap-[12px] mx-auto shadow-sm md:shadow-md lg:shadow-lg'>
          <div className='md:w-[648px] md:h-[192px] lg:w-[1314px] lg:h-[64px] flex flex-col md:grid md:grid-cols-2 md:gap-[12px]  lg:flex lg:flex-row   gap-[12px]'>
            <div className='flex justify-start items-center w-[340px] md:w-[318px] lg:w-[229px] h-[53px] lg:h-[64px] md:h-[56px] bg-slate-100 rounded-[40px] px-[24px] py-[16px] border'>
              <BsCalendarDate className='text-[#475569] text-[14px] lg:text-[20px] mr-[12px]'/>
              <input className='outline-none bg-slate-100 text-[#475569] text-[14px] md:text-[16px] lg:text-[20px] h-[40px] w-[200px] lg:w-[100px]  mr-auto'  type='text' placeholder='Select Year'/>
              <AiOutlineDown className='text-[#475569] text-[14px] lg:text-[20px] mr-[12px]'/> 
            
              
            </div>
            <div className='flex justify-start items-center w-[340px] md:w-[318px] lg:w-[245px] h-[53px] md:h-[56px] lg:h-[64px] bg-slate-100 rounded-[40px] px-[24px] py-[16px] border'>
              <LuSettings2 className='text-[#475569] text-[14px] lg:text-[20px] mr-[12px]'/>
              <input className='outline-none bg-slate-100 text-[#475569] text-[14px] md:text-[16px] lg:text-[20px] h-[40px] w-[200px] lg:w-[130px]  mr-auto'  type='text' placeholder='Select Maker'/>
              <AiOutlineDown className='text-[#475569] text-[14px] lg:text-[20px] mr-[12px]'/>
              
            </div>
            <div className='flex justify-start items-center w-[340px] md:w-[318px] lg:w-[246px] h-[53px] md:h-[56px] lg:h-[64px] bg-slate-100 rounded-[40px] px-[24px] py-[16px] border'>
              <AiOutlineCar className='text-[#475569] text-[14px] lg:text-[20px] mr-[12px]'/>
              <input className='outline-none bg-slate-100 text-[#475569] text-[14px] md:text-[16px] lg:text-[20px] h-[40px]  w-[200px] lg:w-[130px]  mr-auto'  type='text' placeholder='Select Model'/>
              <AiOutlineDown className='text-[#475569] text-[14px] lg:text-[20px] mr-[12px]' />
              
            </div>
            <div className='flex justify-start items-center w-[340px] md:w-[318px] lg:w-[310px] h-[53px] md:h-[56px] lg:h-[64px] bg-slate-100 rounded-[40px] px-[24px] py-[16px] border'>
              <PiPokerChipDuotone className='text-[#475569] text-[14px] lg:text-[20px] mr-[12px]'/>
              <input className='outline-none bg-slate-100 text-[#475569] text-[14px] md:text-[16px] lg:text-[20px] h-[40px] w-[200px] lg:w-[130px]  mr-auto'  type='text' placeholder='Select Product Type'/>
              <AiOutlineDown className='text-[#475569] text-[14px] lg:text-[20px] mr-[12px]' />
              
            </div>
            <div className='flex justify-start items-center w-[340px] md:w-[318px] lg:w-[236px] h-[53px] md:h-[56px] lg:h-[64px] bg-slate-100 rounded-[40px] px-[15px] py-[16px] border'>
              <BiMap className='text-[#475569] text-[14px] lg:text-[20px] mr-[12px]'/>
              <input className='outline-none bg-slate-100 text-[#475569] text-[14px] md:text-[16px] lg:text-[20px] h-[40px] w-[200px] lg:w-[140px]  mr-auto'  type='text' placeholder='Enter Zip Code'/>
              <AiOutlineDown className='text-[#475569] text-[14px] lg:text-[20px] mr-[12px]' />
            </div>
            
            
          </div>

          <button className='w-[340px] md:w-[648px] lg:w-[182px]  h-[52px] md:h-[56px] lg:h-[64px] rounded-[39px] flex justify-center items-center gap-[10px] px-[24px] lg:px-[25px] py-[18px] lg:py-[22px] bg-[#ea0029] font-semibold text-[16px] md:text-[20px] text-white'>View Results</button>
      </div>
      }
      {
        tires && 
        <div className='w-[350px] md:w-[696px] lg:w-[976px] h-[198px] md:h-[72px] lg:h-[104px] border  flex flex-col md:flex-row items-center rounded-[24px] md:rounded-[80px] bg-white p-[8px] md:p-[12px] lg:px-[24px] lg:py-[20px] gap-[12px] mx-auto shadow-sm md:shadow-md lg:shadow-lg'>
            
            <div className='flex justify-start items-center w-[340px] md:w-[330px] lg:w-[460px] h-[53px] md:h-[48px] lg:h-[64px] bg-slate-100 rounded-[40px] px-[24px] md:px-[20px] py-[16px] md:py-[12px] border'>
              <PiPokerChipDuotone className='text-[#475569] text-[14px] md:text-[16px] lg:text-[20px] mr-[12px]'  />
              <input className='outline-none bg-slate-100 text-[#475569] text-[14px] md:text-[16px] lg:text-[20px] h-[40px] w-[200px] mr-auto' type='text'  placeholder='Enter Tire Size'/>
            
              <AiOutlineInfoCircle className='text-[#475569] text-[14px] md:text-[16px] lg:text-[20px]' />
            </div>
            <div className='flex justify-start items-center w-[340px] md:w-[181px] lg:w-[262px]  h-[53px] md:h-[48px] lg:h-[64px] bg-slate-100 rounded-[40px] px-[24px] md:px-[20px] py-[16px] md:py-[12px] border'>
              <BiMap className='text-[#475569] text-[14px] md:text-[16px] lg:text-[20px] mr-[12px] md:mr-[5px]'/>
              <input className='outline-none bg-slate-100 text-[#475569] text-[14px] md:text-[16px]  lg:text-[20px] h-[40px] w-[200px] lg:w-[165px] md:w-[120px] mr-auto' type='text' placeholder='Enter Zip Code'  />
            </div>
            <button className='w-[340px] lg:w-[182px] h-[52px] lg:h-[64px] rounded-[39px] flex justify-center items-center gap-[10px] px-[24px] lg:px-[25px] py-[18px] lg:py-[22px] bg-[#ea0029] font-semibold text-[16px] lg:text-[20px] text-white' >View Results</button>
          
          
        </div>
      }
      
    </div>
  )
}

export default Search
