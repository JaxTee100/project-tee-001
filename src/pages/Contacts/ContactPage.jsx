import React from 'react'
import { ContactSection, NavbarComponent } from '../../components'

const ContactPage = () => {
  return (
    <div>
      <div>
        <NavbarComponent />
      </div>
      <div className='p-4 lg:p-8'>
        <ContactSection />
      </div>
      
    </div>
  )
}

export default ContactPage
