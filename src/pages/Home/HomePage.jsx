import React from 'react'
import { FooterComponent, HeroSection, NavbarComponent, Search } from '../../components'
import Wheels from '../../assets/wheels/wheels.jpg'

const HomePage = () => {
  return (
    <div className='relative flex flex-col'>
      <img className='fixed w-[100%] h-[100%] opacity-10 z-[-1]' src={Wheels} alt='wheel-bg' />
      <div className='bg-white/[0.45]  lg:mb-[50px]'>
        <NavbarComponent />
      </div>
      <div className='flex flex-col  justify-between'>
        <div className='mt-2 mb-[70px] md:mb-[150px]'>
            <HeroSection />
        </div>
        <div className='mb-[90px] md:mb-[70px] lg:mb-[10px] md:h-[392px]'>
            <Search />
        </div>
        <div className='flex items-center justify-center gap-[24px] p-[24px] bg-slate-100 z-[-2]'>
            <FooterComponent />
        </div>
      </div>
      
    </div>
  )
}

export default HomePage
