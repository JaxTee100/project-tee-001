import React from 'react'
import {MdArrowBack} from 'react-icons/md'
import {FaPhoneAlt} from 'react-icons/fa'
import {HiMailOpen} from 'react-icons/hi'
import {HiLocationMarker} from 'react-icons/hi'

const Contact = () => {
  return (
      <div className='flex flex-col gap-[16px] mx-auto'>
        <div className='w-[120px] flex justify-between items-center  md:ml-[30px] lg:ml-[180px] text-[#475569]'>
            <MdArrowBack className='text-[#475569] text-[20px]'/>
            <p className='text-[14px]'>Back to Quote</p>
        </div>

        <div className='flex flex-col md:flex-row justify-between md:items-center w-[350px] md:w-[696px] lg:w-[1536px] h-[99px] md:h-[51px] lg:h-[83px]  mx-auto '>
            <h2 className='font-semibold text-[24px] lg:text-[32px] text-[#1e293b]'>Contact Us</h2>
            <button className='w-[350px] lg:w-[249px] h-[51px] px-[28px] py-[12px] flex items-center justify-center gap-[10px] font-semibold text-[#ea0029] text-[18px] lg:text-[16px] border border-[#ea0029] hover:bg-red-50 rounded-[39px]'>
                Book a Training Session
            </button>   
        </div>
        
        <div className='lg:w-[1536px] lg:h-[843px] flex flex-col gap-[24px] lg:gap-[48px] lg:px-[80px] lg:py-[48px] lg:mx-auto lg:rounded-[16px]  lg:border'>

          <div className='w-[350px] md:w-[696px] lg:w-[1376px] h-[310px] md:h-[208px] lg:h-[256px]  grid grid-cols-1 md:grid-cols-3 gap-[12px] md:gap-[16px]  mx-auto'>
            <div className=' h-[92px] md:h-[208px] lg:h-[256px] flex md:flex-col justify-start items-center  gap-[16px] px-[12px] py-[16px] md:p-[24px] lg:p-[48px] border rounded-[16px] shadow-sm lg:shadow-md hover:bg-slate-50'>
              <div className='w-[60px] h-[60px] rounded-[50%] bg-red-200 flex justify-center items-center'>
                <FaPhoneAlt className='text-[#ea0029] text-[20px]'/>
              </div>
              <div className='flex flex-col md:items-center gap-[8px]'>
                <h3 className='font-semibold text-[20px] text-[#1f2937]'>Phone</h3>
                <p className='text-[14px] md:text-[16px] text-[#4b5563] '>(007) 095-6890</p>
              </div>
              
            </div>
            <div className='flex md:flex-col justify-start items-center h-[92px] md:h-[208px] lg:h-[256px] gap-[16px] px-[12px] py-[16px] md:p-[24px] lg:p-[48px] border rounded-[16px] shadow-sm lg:shadow-md hover:bg-slate-50'>
              <div className='w-[60px] h-[60px] rounded-[50%] bg-red-200 flex justify-center items-center'>
                <HiMailOpen className='text-[#ea0029] text-[20px]'/>
              </div>
              <div className='flex flex-col md:items-center  gap-[8px]'>
                <h3 className='font-semibold text-[20px] text-[#1f2937]'>Email</h3>
                <p className='text-[14px] md:text-[16px] text-[#4b5563]'>honda@gmail.com</p>
              </div>
            </div>
            <div className='flex md:flex-col justify-start items-center h-[92px] md:h-[208px] lg:h-[256px] gap-[16px] px-[12px] py-[16px] md:p-[24px] lg:p-[48px] border rounded-[16px] shadow-sm lg:shadow-md hover:bg-slate-50'>
              <div className='w-[60px] h-[60px] rounded-[50%] bg-red-200 flex justify-center items-center '>
                <HiLocationMarker className='text-[#ea0029] text-[20px]'/>
              </div>
              <div className='flex flex-col md:items-center  gap-[8px]'>
                <h3 className='font-semibold text-[20px] text-[#1f2937]'>Address</h3>
                <p className='text-[14px] md:text-[16px] text-[#4b5563] flex-wrap  md:text-center'>13245-OakStret, New york City <span className='text-[12px] lg:text-[16px]'>(9123400)</span></p>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-[22px]'>
            <div className='md:w-[696px] md:h-[64px]  flex flex-col gap-[4px] text-center w-[350px] h-[41px] mx-auto'>
                <h2 className='font-semibold text-[16px] md:text-[24px] text-[#1f2937]'>Tire Wizard Customer Service</h2>
                <p className='text-[12px] md:text-[16px] text-[#4b5563]'>Our Business Hours</p>
            </div>
            
            <div className='md:w-[432px] md:mx-auto border  flex flex-col gap-[24px]  rounded-[16px] p-[32px]'>
              <div className='flex justify-between items-center hover:bg-slate-50'>
                <p className='text-[14px] text-[#475569]'>Monday:</p>
                <span className='text-[14px]  font-bold text-slate-800'>08:00 am to 05:00pm (EST)</span>
              </div>
              <div className='flex justify-between items-center hover:bg-slate-50'>
                <p className='text-[14px] text-[#475569]'>Tuesday:</p>
                <span className='text-[14px] font-bold text-slate-800'>08:00 am to 05:00pm (EST)</span>
              </div>
              <div className='flex justify-between items-center hover:bg-slate-50'>
                <p className='text-[14px] text-[#475569]'>Wednesday:</p>
                <span className='text-[14px] font-bold text-slate-800'>08:00 am to 05:00pm (EST)</span>
              </div>
              <div className='flex justify-between items-center hover:bg-slate-50'>
                <p className='text-[14px] text-[#475569]'>Thursday:</p>
                <span className='text-[14px] font-bold text-slate-800'>08:00 am to 05:00pm (EST)</span>
              </div>
              <div className='flex justify-between items-center hover:bg-slate-50'>
                <p className='text-[14px] text-[#475569]'>Friday:</p>
                <span className='text-[14px] font-bold text-slate-800'>08:00 am to 05:00pm (EST)</span>
              </div>
              <div className='flex justify-between items-center hover:bg-slate-50'>
                <p className='text-[14px] text-[#475569]'>Saturday:</p>
                <span className='text-[14px] font-bold text-slate-800'>Closed</span>
              </div>
              <div className='flex justify-between items-center hover:bg-slate-50'>
                <p className='text-[14px] text-[#475569]'>Sunday:</p>
                <span className='text-[14px] font-bold text-slate-800'>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Contact
