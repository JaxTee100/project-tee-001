import React from 'react'
import { NavbarComponent } from '../../components'
import { Packages, SearchFilter } from '../../containers'

const PackagesPage = () => {
  return (
    <div>
      <div>
        <NavbarComponent />
      </div>
      <div className='flex flex-col gap-[24px]'>
        <div className='lg:p-[20px]'>
          <SearchFilter />
        </div>
        <div>
          <Packages />
        </div>
      </div>
      
    </div>
  )
}

export default PackagesPage
