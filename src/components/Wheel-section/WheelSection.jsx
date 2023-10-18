import React from 'react'
import Logo from '../../assets/tires/honda-logo.png'
import WheelSm from'../../assets/wheels/wheel-sectionsm.png'
import WheelLg from'../../assets/wheels/wheel-sectionlg.png'


const WheelSection = () => {
  return (
    <div className='w-[280.63px] lg:w-[752px] lg:h-[718px] flex flex-col gap-[32px] items-center justify-between  mx-auto'>
      <div className='w-[229px] md:w-[264px] h-[189px] md:h-[216px] flex flex-col items-center gap-[32px] '>
        <div className='flex flex-col justify-between items-center gap-[16px] w-[135px] md:w-[169px] lg:w-[752px]  h-[80px] md:h-[102px] lg:h-[108px] '>
            <img className='md:w-[69.05px] md:h-[56px]' src={Logo} alt='honda-logo' />
            <p className='text-[16px] md:text-[20px] lg:text-[24px] text-[#475569]'>Honda Tire Source</p>
        </div>
        <div className='flex flex-col items-center w-[237px] md:w-[289px] lg:w-[752px] h-[84px] md:h-[98px] lg:h-[118px] '>
            <h1 className='font-bold lg:font-extrabold text-[32px] md:text-[40px] lg:text-[64px] text-slate-800 '>LOWEST PRICE</h1>
            <p className='font-normal text-[24px] md:text-[32px] lg:text-[40px] text-[#475569]'>Guarantee</p>
        </div>
        
      </div>
      <img className='lg:hidden' src={WheelSm} alt='wheelSm' />
      <img className='hidden lg:flex' src={WheelLg} alt='wheelSm' />
      
    </div>
  )
}

export default WheelSection
