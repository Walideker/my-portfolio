import React from 'react'
import { FaGithub, FaLinkedin, FaHtml5, FaCss3, FaJs, FaBootstrap, FaGit, FaLinux, FaReact, } from 'react-icons/fa';
import { SiTypescript, SiRedux } from 'react-icons/si';
import { GiAlgeria } from 'react-icons/gi';
import { MdLocationOn } from 'react-icons/md'
import Footer from './footer'

function home() {
  return (
    <div>

    <div className='container' >
      <div className='text-center me '>
        <h1 >Front-end React </h1>
        <p>Hello, I am Med Walid Adrouche a passionate react  <br />developer based in Algeria <MdLocationOn />  <GiAlgeria /> </p>
      </div>
      <div className='text-center m-2 sociale '>
        <a className='m-2' href="https://github.com/Walideker"><FaGithub size={25} color='black' /></a>
        <a href="https://www.linkedin.com/in/walid-adr-5939b227a/"><FaLinkedin size={25} color='light blue' /></a>
      </div>
      <div className='m-5 skills'>
        <h5 >skills : </h5>
        < FaHtml5 size={25} color='orange' className='m-2' /> <FaCss3 size={25} color='blue' /> <FaJs size={25} color='yellow' className='m-2' /> <FaBootstrap size={25} color='purple' /> <FaLinux size={25} color='black' className='m-2' /> <FaGit size={25} color='orange' /> <FaReact size={25} color='blue' className='m-2' />  <SiTypescript size={25} color='blue' className='m-2' />  <SiRedux size={25} color='purple' className='m-2' />
        <div>
        </div>
      </div>
    </div>
      <Footer/>
    </div>
  )
}

export default home
