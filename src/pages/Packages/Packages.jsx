import React from 'react'
import { NavbarComponent } from '../../components'
import { Packages } from '../../containers'

const PackagesPage = () => {
  return (
    <div>
      <div>
        <NavbarComponent />
      </div>
      <div>
        <Packages />
      </div>
    </div>
  )
}

export default PackagesPage
