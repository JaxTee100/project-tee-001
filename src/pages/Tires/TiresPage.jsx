import React from 'react'
import { FooterComponent, NavbarComponent, Search, TireSection } from '../../components'
import Wheels from '../../assets/wheels/wheels.jpg'

const TiresPage = () => {
  return (
    <div className='relative flex flex-col md:gap-[50px]'>
      <img className='fixed w-[100%] h-[100%] opacity-10 z-[-1]' src={Wheels} alt='wheel-bg' />
      <div className='bg-white/[0.45] mb-[50px]'>
        <NavbarComponent />
      </div>

      <div>
        <TireSection />
      </div>

      <div className='mb-[90px] lg:mb-[10px] mt-[-110px]  md:mt-0 lg:mt-[-200px]  md:h-[250px]'>
        <Search />
      </div>

      <div className='flex p-[24px]  justify-center items-center bg-slate-100'>
        <FooterComponent />
      </div>
    </div>
  )
}

export default TiresPage
