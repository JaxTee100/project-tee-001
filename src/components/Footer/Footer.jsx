import React from 'react'
import Bfgoodrich from '../../assets/footer/bfgoodrich.png'
import Hankook from '../../assets/footer/hankook.png'
import GoodYear from '../../assets/footer/good-year.png'
import Pirelli from '../../assets/footer/pirelli.png'
import ToyoTires from '../../assets/footer/toyotires.png'
import Continental from '../../assets/footer/continental.png'
import Firestone from '../../assets/footer/firestone.png'
import Uniroyal from '../../assets/footer/uniroyal.png'
import GeneralTire from '../../assets/footer/general-tire.png'

const Footer = () => {
  return (
    <div className='grid  grid-cols-3 gap-4 lg:gap-[70px] md:flex md:justify-center lg:justify-between   overflow-hidden'>
      <img src={Hankook} alt='logo' className='w-[100.5px] h-[16px] md:w-[201px] md:h-[32px]'/>
      <img src={GoodYear} alt='logo' className='w-[64px] h-[16px] md:w-[128px] md:h-[32px]'/>
      <img src={Pirelli} alt='logo' className='w-[64px] h-[16px] md:w-[128px] md:h-[32px]'/>
      <img src={ToyoTires} alt='logo' className='w-[64px] h-[16px] md:w-[128px] md:h-[32px]'/>
      <img src={Continental} alt='logo' className='w-[79.35px] h-[16px] md:w-[190.02px] md:h-[32px]'/>
      <img src={Bfgoodrich} alt='logo' className='w-[64px] h-[16px] md:w-[128px] md:h-[32px]'/>
      <img src={Firestone} alt='logo' className='w-[91.5px] h-[16px] md:w-[183px] md:h-[32px]'/>
      <img src={Uniroyal} alt='logo' className='w-[76.8px] h-[16px] md:w-[153.6px] md:h-[32px]'/>
      <img src={GeneralTire} alt='logo' className='w-[120.48px] h-[16px] md:w-[128px] md:h-[32px]'/>


    </div>
  )
}

export default Footer
