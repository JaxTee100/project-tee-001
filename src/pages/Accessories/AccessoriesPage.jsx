import React from 'react'
import { NavbarComponent } from '../../components'
import { Accessories, SearchFilter } from '../../containers'

const AccessoriesPage = () => {
  return (
    <div>
      <div>
        <NavbarComponent />
      </div>
      <div>
        <SearchFilter />
      </div>
      <div>
        <Accessories />
      </div>
      
    </div>
  )
}

export default AccessoriesPage
