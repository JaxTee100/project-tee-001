import React from 'react'
import Hero from '../../assets/hero-section/hero.png'
import HeroMd from '../../assets/hero-section/hero-md.png'
import Hero2 from '../../assets/hero-section/hero2.png'

const HeroSection = () => {
  return (
    <div className=''>
      <img className='lg:hidden md:hidden w-[350px]   h-[152px]  mx-auto rounded-4 ' src={Hero} alt='hero-imgg' />
      <img className='mx-auto hidden md:flex lg:hidden' src={HeroMd} alt='heromd' />
      <img className='mx-auto hidden md:hidden lg:flex' src={Hero2} alt='hero2' />
    </div>
  )
}

export default HeroSection
