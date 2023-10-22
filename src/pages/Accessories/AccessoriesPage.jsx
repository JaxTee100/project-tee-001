import React from 'react'
import { NavbarComponent } from '../../components'
import { Accessories, SearchFilter } from '../../containers'

const AccessoriesPage = () => {
  return (
    <div className='relative flex flex-col bg-slate-50'>
      <div className='bg-white/[0.45]'>
        <NavbarComponent />
      </div>
      <div className='p-4 border  lg:flex lg:justify-center'>
        <SearchFilter />
      </div>
      <div className='p-4'>
        <Accessories />
      </div>
      
    </div>
  )
}

export default AccessoriesPage
