import React from 'react'
import Footer from './footer'
import { CiLocationOn } from 'react-icons/ci'
import { BsPhone } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import   './css/contact.css'

function contact() {
  return (
    <div>
      <div className='container'>
        <h1 className='mt-5 first'>lets get in touch</h1>
        <h6 className='text-center mt-5'>It would make my day to hear from you</h6>
        <div className='dall mt-5'>
          <div className='text-center '>
            <CiLocationOn />
            <p>bois sacre <br />gouraya,tipaza</p>
          </div>
          <div className='text-center'>
            <BsPhone />
            <p>call me at <br />+213 668473849 </p>
          </div>
          <div className='text-center'>
            <HiOutlineMail />
            <p>Email me at <br />walidadr95@gmail.com</p>
          </div>
        </div>
      </div>
      <Footer  />
    </div>
  )
}

export default contact
