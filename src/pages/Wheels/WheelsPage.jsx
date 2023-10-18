import React from 'react'
import { FooterComponent, NavbarComponent, Search, WheelSection } from '../../components'
import Wheels from '../../assets/wheels/wheels.jpg'

const WheelsPage = () => {
  return (
    <div className='relative flex flex-col md:gap-[50px]'>
      <img className='fixed w-[100%] h-[100%] opacity-10 z-[-1]' src={Wheels} alt='wheel-bg' />
      <div className='bg-white/[0.45] mb-[50px]'>
        <NavbarComponent />
      </div>
      <div>
        <WheelSection />
      </div>
      <div className='mb-[120px] md:mb-[20px] lg:mb-[0] h-[390px] mt-[-100px] lg:mt-[-150px] md:mt-[0]'>
        <Search />
      </div>
      <div className='flex p-[24px] justify-center items-center bg-white/[0.4]'>
        <FooterComponent  />
      </div>
    </div>
  )
}

export default WheelsPage
