import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
import imageone from "../../assets/Pageboard.png"
import laptopimage from "../../assets/Page7laptopimage.png"
import tabletimage from "../../assets/Page7tabletimage.png"


const Page7 = () => {
  return (
    <div className='h-120 w-full  pt-22 flex flex-row  '>
        <div className='relative h-75 w-285   ml-25  bg-no-repeat bg-cover bg-center  rounded-2xl items-center justify-center '
           style={{
                  backgroundImage: `linear-gradient(rgba(12,113,224,1), rgba(7,62,122,1)), url(${imageone})`
                }}>
            <div className='h-40 w-150 items-center justify-center p-15 '>
                <h2 className='text-4xl font-semibold text-white'>Work Smarter,<br /> Anywhere. Anytime.</h2>
                <p className='text-white text-base mt-2 mb-2'>Access Billeasy on the go — right from your phone or tablet.</p>
                <button className='text-[rgba(12,113,224,1)] text-base flex flex-row h-9 w-35 bg-white rounded-2xl p-2 items-center justify-center text-center mt-4'>Early Access < HiArrowLongRight className='text-lg ml-1 mt-1'/></button>
            </div>
            <div className='flex flex-row ml-110  relative bottom-64 '>
                <img className='object-cover h-100 w-125' src={laptopimage}  />
                <img className=" object-cover h-100 w-100 relative right-30"src={tabletimage}  />
            </div>
        </div>
    </div>
  )
}

export default Page7