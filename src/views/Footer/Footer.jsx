import React from 'react'
import logo from "../../assets/Billeasylogo.png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='  xl:h-[60vh] w-full '>
      <div className='items-center justify-center  flex flex-col mx-auto  pt-10 lg:flex-row xl:gap-130 xl:p-15 xl:flex-row'>
        <div className=' xl:h-30 xl:w-65 mx-auto justify-center items-center  '>
          <img className=' h-10 w-40 object-cover mb-4 mx-auto lg:mx-0 xl:h-15 xl:w-55  xl:mb-4' src={logo} />
          <p className=' text-xs font-medium text-center sm:text-base lg:text-base/4 lg:text-start  xl:text-base/4 xl:font-medium'>At Bill Easy, we’re committed <br /> to simplifying your financial management <br /> so you can focus on what matters mostbr <br /> —growing your business.</p>
          <div className='flex flex-row mt-4  items-center justify-center lg:items-start lg:justify-start xl:flex xl:flex-row xl:mt-4'><FaFacebook className='h-7 w-7 text-[rgba(12,113,224,1)]' />  <FaInstagram className='h-7 w-7 text-[rgba(12,113,224,1)]' /> <FaLinkedin className='h-7 w-7 text-[rgba(12,113,224,1)]' /></div>
        </div>
        <div className='flex flex-col items-center justify-center text-center gap-5 m-2 w-full xl:flex lg:w-110 xl:flex-col xl:gap-2 xl:h-12 xl:w-100 xl:mt-5'>
          <h3 className='text-[rgba(12,113,224,1)] sm:text-base md:text-lg font-medium xl:font-medium'>Sign up for the Bill Easy newsletter for updates:</h3>
          <input className=' h-9 p-3 w-50 border border-[rgba(12,113,224,1)]  rounded-md sm:w-60 md:w-70 lg:w-95 xl:h-9 xl:p-3 xl:w-95 ' type="email" placeholder='Enter Your Email' />
          <button className=' h-9 w-50 bg-[rgba(12,113,224,1)] p-2 rounded-md text-white sm:w-60 md:w-70 sm:p-1 lg:w-95  xl:h-10 xl:w-95  xl:p-2 '>Lets Do It</button>
        </div>
      </div>
      <div className=' h-20 w-full  items-center justify-center text-center mt-10 sm:h-15 xl:h-15 xl:w-full   xl:mt-20' style={{
        backgroundImage: 'linear-gradient(180deg, #073E7A 0%, #0C71E0 100%)'
      }}>
        <p className='p-4 font-lg  text-white xl:p-4 xl:font-lg'>Ⓒ All Rights Reserved 2025 - Bill Easy . Powered by Apex Web Studios</p>
      </div>
    </div>
  )
}

export default Footer