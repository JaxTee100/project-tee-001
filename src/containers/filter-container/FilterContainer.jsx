import React from 'react'
import { BrandDropdown, ItemsDropdown, ModelDropdown, PostalDropdown, YearDropdown } from '../../components'

const FilterContainer = () => {
  return (
    <div className='max-w-md md:max-w-[648px] lg:max-w-[989px] mx-auto  gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 '>
      <YearDropdown />
      <ModelDropdown />
      <BrandDropdown />
      <ItemsDropdown />
      <PostalDropdown /> 
      
    </div>
  )
}

export default FilterContainer
