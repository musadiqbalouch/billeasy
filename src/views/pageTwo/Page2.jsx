import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import imageone from "../../assets/Pageboard.png"
import { HiArrowLongRight } from "react-icons/hi2";

const Page2 = () => {
  return (
    <div className='h-30 w-full  sm:h-50 xl:h-60   '>
      <div
        className='container h-25 w-70  m-auto mt-15 bg-no-repeat bg-cover bg-center rounded-2xl sm:h-25 sm:w-125 md:h-30 md:w-155  lg:h-35 lg:w-220 xl:h-40 xl:w-300   xl:mt-25 xl:bg-no-repeat xl:bg-cover xl:bg-center xl:rounded-2xl'
        style={{
          backgroundImage: `linear-gradient(rgba(12,113,224,1), rgba(7,62,122,1)), url(${imageone})`
        }}
      >
        <div className=' items-center justify-center text-center p-2  xl:items-center xl:justify-center xl:text-center xl:p-5  '>
          <h2 className='text-sm text-white  sm:text-base md:text-xl lg:text-2xl xl:text-4xl '>Contract + Invoice + Estimate Synergy</h2>
          <h3 className=' text-sm sm:text-base  md:text-xl lg:text-2xl xl:text-3xl text-white'>One workspace to manage it all.</h3>
          <button className='flex flex-row flex-nowrap items-center justify-center text-center text-xs h-7 w-33 text-white 
                sm:h-9 w- p-1 rounded-2xl bg-[rgba(12,113,224,1)] mt-3 m-auto  xl:flex xl:flex-row   xl:h-9  xl:w-42 xl:p-1 xl:mt-2 xl:mx-auto  xl:text-base '>Secure Your Spot <HiArrowLongRight className='xl:mt-0.5 xl:ml-1 h-5 w-5 mt-0.5 ml-1' /></button>
        </div>
      </div>
    </div>
  )
}

export default Page2
