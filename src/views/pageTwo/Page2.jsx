import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import imageone from "../../assets/Pageboard.png"

const Page2 = () => {
  return (
    <div className='h-75 w-full   '>
      <div
        className='relative h-50 w-300  ml-20 mt-25 bg-no-repeat bg-cover bg-center rounded-2xl'
        style={{
          backgroundImage: `linear-gradient(rgba(12,113,224,1), rgba(7,62,122,1)), url(${imageone})`
        }}
      >
        <div className='items-center justify-center text-center p-5'>
        <h2 className='text-white text-4xl '>Contract + Invoice + Estimate Synergy</h2>
        <h3 className='text-3xl text-white'>One workspace to manage it all.</h3>
        <button className='h-10 w-40  bg-white flex flex-row text-blue-600 text-base rounded-2xl text-center justify-center items-center ml-125 mt-2'>Secure Your Spot <FaLongArrowAltRight /></button></div>
      </div>
    </div>
  )
}

export default Page2
