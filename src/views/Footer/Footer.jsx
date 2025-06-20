import React from 'react'
import logo from "../../assets/Billeasylogo.png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='h-[60vh] w-full '>
       <div className='items-center justify-center flex flex-row gap-130 p-15'>
        <div className='h-30 w-65'>
            <img className='h-15 w-50 object-cover mb-4' src={logo}/>
            <p className='text-lg/4 font-medium'>At Bill Easy, we’re committed <br /> to simplifying your financial management <br /> so you can focus on what matters mostbr <br /> —growing your business.</p>
             <div className='flex flex-row mt-4'><FaFacebook className='h-7 w-7 text-[rgba(12,113,224,1)]'/>  <FaInstagram className='h-7 w-7 text-[rgba(12,113,224,1)]' /> <FaLinkedin className='h-7 w-7 text-[rgba(12,113,224,1)]' /></div>
        </div>
        <div className='flex flex-col gap-2 h-12 w-100 mt-5'>
            <h3 className='text-[rgba(12,113,224,1)] font-medium'>Sign up for the Bill Easy newsletter for updates:</h3>
            <input className='h-9 p-3 w-85 border border-[rgba(12,113,224,1)] rounded-md' type="email" placeholder='Enter Your Email' />
            <button className='h-9 w-85 bg-[rgba(12,113,224,1)] p-2 rounded-md text-white'>Lets Do It</button>
        </div>
       </div>
       <div className='h-15 w-full  items-center justify-center text-center mt-20' style={{
    backgroundImage: 'linear-gradient(180deg, #073E7A 0%, #0C71E0 100%)'
  }}>
        <p className='text-white p-4 font-lg'>Ⓒ All Rights Reserved 2025 - Bill Easy . Powered by Apex Web Studios</p>
       </div>
    </div>
  )
}

export default Footer