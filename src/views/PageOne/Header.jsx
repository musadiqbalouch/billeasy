
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import img from "../../assets/pageonebackgroundimage.jpg"
import imgone from "../../assets/ipadPro.png"
import imgtwo from "../../assets/iphone.png"
import { HiMiniArrowUturnRight } from "react-icons/hi2";

const Header = () => {
    return (
        <div className="bg-red-800 min-h-screen pb-20 w-full bg-no-repeat bg-center bg-cover flex flex-col bg-gradient-to-b from-white via-white/50 to-white sm:h-240   md:h-150  lg:w-full lg:screen "
            style={{ background: `url(${img})` }}
        >
            <div>
                <div className='flex flex-row  justify-between h-20 sm:h-23 lg:h-18 lg:ml-10'>
                    <div className=''>  <img className="h-8 w-20 ml-10 mt-2 sm:h-13 sm:w-33 md:h-15 md:w-38  lg:h-18 lg:w-40 lg:mt-1 object-contain xl:h-22 xl:w-47" src="src/assets/Billeasylogo.png" /></div>
                    <div className="flex-row gap-4 h-7 text-xs  p-1 bg-blue-600 rounded-xl me-2  mt-2 mr-3 align-centre justify-center text-center  sm:h-8  sm:p-1 
                    md:h-10 md:p-2 lg:h-10 lg:p-2 lg:mt-5 items-center flex xl:mr-5 xl:mt-7 ">  <h3 className='text-white text-xs font-normal md:text-base lg:text-lg text-nowrap'>Request Early Access</h3>
                        <FaLongArrowAltRight className='text-white   h-5 w-5 text-xs lg:-ml-2 lg:mt-1' /></div></div>
            </div>
            <div className='flex lg:flex-row flex-col justify-between px-8 items-center md:flex md:flex-row container mx-auto xl:mt-5'>
                <div className='flex flex-col  max-w-md  mt-5 lg:ml-10 xl:ml-0  '>
                    <h2 className='text-2xl text-black font-semibold md:text-4xl md:w-140 md:mb-3 lg:m-1 lg:text-5xl xl:w-165 xl:text-5xl'>Construction <span className='text-blue-600'>Simplified.</span></h2>
                    <h3 className='text-xl font-semibold md:text-2xl md:mb-3  md:w-130 lg:m-1 lg:text-3xl xl:w-150 xl:text-3xl'><span className='text-blue-600 '>Stop Drowning</span> in Paperwork. Build <br /> More, <span className='text-blue-600'>Manage Less.</span> </h3>
                    <p className='text-xs font-medium sm:text-sm  md:text-base md:w-160 md:h-25   lg:h-15 lg:text-sm xl:h-18 xl:text-base'>Billeasy is the smart, intuitive platform built specifically for construction professionals to <br />streamline operations, boost profitability, and reclaim their time. Get early access to the <br /> Beta and transform your business.</p>
                    <div className=' flex flex-row h-7 w-33 mt-2 align-centre justify-center text-center bg-blue-600 rounded-xl text-base md:h-8  md:w-40   lg:m-1 lg:rounded-2xl lg:h-10 lg:w-43 lg:pt-1 lg:mt-2 '><h3 className='text-base font-normal   text-white  md:text-lg'>Early access</h3>  < FaLongArrowAltRight className='text-white ml-2 mt-1 h-5 w-5 lg:mt-1.5' /></div>
                    <div className='flex flex-row -ml-22 lg:-ml-40  '>
                        <img className="h-27  mt-15 w-53 object-cover relative left-17 bottom-8 sm:h-50 sm:w-90 md:object-cover md:h-40 md:w-95 lg:h-58 lg:w-125 lg:left-30 xl:h-63 xl:w-130 " src={imgone} />
                        <img className="h-34 w-30 ml-8 sm:h-57 sm:w-60 object-cover md:h-47 md:w-40 lg:h-65 lg:w-120 xl:h-70 xl:w-127" src={imgtwo} />
                    </div>
                </div>
                <div className='flex flex-col h-65 lg:w-2/6 w-full border-1 border-blue-600 align-centre justify-center p-3 rounded-lg mt-2 gap-1 md:relative md:top-23 md:left-3 lg:mb-60 lg:p-5 lg:gap-2 lg:h-68 xl:h-80 xl:w-3/8 xl:mr-20 xl:border-2  xl:gap-3 xl:rounded-2xl '>
                    <h2 className='text-2xl text-blue-600 font-semibold sm:text-3xl xl:text-4xl'>Request a Demo</h2>
                    <input className="outline-none p-1 border-b-2 border-blue-600 placeholder-[rgba(15, 15, 15, 0.3)] placeholder:text-sm sm:placeholder:text-base" type="text" placeholder='Your Name' />
                    <input className='outline-none p-1 border-b-2 border-blue-600 placeholder:text-sm sm:placeholder:text-base' type="email" placeholder='Your Email' />
                    <input className="outline-none p-1 border-b-2 border-blue-600 placeholder:text-sm sm:placeholder:text-base" type="tel" placeholder='Enter Your Number' />
                    <input className="outline-none p-1 border-b-2 border-blue-600  placeholder:text-sm sm:placeholder:text-base" type="text" placeholder='Company Name' />
                    <button className='flex flex-row h-8 w-30 mt-2 bg-blue-600 text-white  rounded-2xl p-2 items-center justify-center text-center text-sm xl:h-12 xl:w-35 xl:text-lg'>Submit  <HiMiniArrowUturnRight className='mt-1 ml-2' />   </button>
                </div>
            </div>
        </div>
    )
}

export default Header
