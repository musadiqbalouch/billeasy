import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
import imageone from "../../assets/Pageboard.png"
import laptopimage from "../../assets/Page7laptopimage.png"
import tabletimage from "../../assets/Page7tabletimage.png"


const Page7 = () => {
  return (
    <div className=' w-full  pt-20 pb-10 flex flex-row m-auto  '>
      <div className='relative sm:h:75 sm:w-150 lg:h-75 lg:p10 lg:w-235  m-auto  bg-no-repeat bg-cover bg-center  rounded-2xl items-center justify-center xl:h-75 xl:w-285 '
        style={{
          backgroundImage: `linear-gradient(rgba(12,113,224,1), rgba(7,62,122,1)), url(${imageone})`
        }}>
        <div className=' h-40 w-full items-center justify-center p-5 xl:h-40 xl:w-150  xl:p-15 '>
          <h2 className='text-lg font-semibold text-white sm:text-2xl lg:text-3xl xl:text-4xl '>Work Smarter,<br /> Anywhere. Anytime.</h2>
          <p className='text-white text-base mt-2 mb-2 sm:text-lg lg:text-base  xl:text-base xl:mt-2 xl:mb-2'>Access Billeasy on the go — right from your phone or tablet.</p>
          <button className=' text-[rgba(12,113,224,1)] text-xs cursor-pointer flex flex-row flex-nowrap h-6 w-28 bg-white rounded-2xl 
          p-2 items-center justify-center text-center mt-4 sm:h-7 sm:w-30 sm:text-sm lg:h-9 lg:w-35 lg:text-base   xl:flex xl:flex-row   xl:mt-4  xl:h-10 xl:w-35    xl:p-3 xl:text-sm'>Early Access < HiArrowLongRight className='text-lg ml-1 mt-1' /></button>
        </div>
        <div className='flex flex-row   relative left10 sm:ml-30 lg:ml-60 lg:bottom-60 xl:flex xl:flex-row xl:ml-80  xl:relative xl:bottom-64 '>
          <img className='object-cover h-28 w-28 ml-25 mb-3 sm:h-38 sm:w-45 md:h-40 md:w-48 lg:h-85 lg:w-100 xl:h-100 xl:w-125' src={laptopimage} />
          <img className="object-cover h-32 w-32 relative right-5 bottom-4 sm:right-12 sm:h-40 sm:w-38 md:h-43 md:w-42 md:right-11 lg:h-85 lg:w-85 lg:right-20  xl:h-100 xl:w-100 xl:relative xl:right-27" src={tabletimage} />
        </div>
      </div>
    </div>
  )
}

export default Page7