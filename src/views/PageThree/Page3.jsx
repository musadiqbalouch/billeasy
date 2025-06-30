import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
import img from "../../assets/Page3frame.png"
// import image from "../../Page3image.png"
import imagee from "../../assets/Page3image.png"


const Page3 = () => {
  return (
    <div className=' h-screen w-full flex flex-col items-center justify-center text-center bg-cover object-cover bg-no-repeat bg-center
    md:h-screen md:w-full lg:flex lg:flex-row lg:p-7    xl:w-full xl:flex xl:flex-row xl:items-center xl:justify-center xl:object-cover xl:p-0 ' style={{ backgroundImage: `url(${img})` }}>

      <div className='container h-65 w-80 sm:h-60 sm:w-150  z-50 p-0.5 lg:h-45 lg:w-150   xl:z-50 lg:text-start'>
        <h2 className='text-lg font-semibold sm:text-2xl lg:text-4xl  xl:text-4xl xl:font-semibold'>  <span className='text-blue-600'>Transforming</span> The Operations <br /> Of Construction <span className='text-blue-600'> Businesses</span></h2>
        <p className='text-xs/5 font-medium sm:text-base lg:text-sm/4 lg:font-medium xl:text-base/5 xl:font-medium ;'>Bill Easy is a SaaS platform for the process of estimations, invoicing, and contract management by eliminating manual errors and communication gaps. It offers <br />customizable templates, role-based access, and team collaboration to improve <br /> workflow efficiency.</p>
        <button className='font- text-xs flex flex-row flex-nowrap h-7 w-32 mx-auto    bg-blue-600 p-4 rounded-2xl text-white
         text-center align-centre items-center mt-2 sm:h-9 sm:w-35 sm:text-base sm:p-4 sm:ml-57 lg:m-0 lg:mt-5 xl:h-10 xl:w-30    xl:p-3 xl:text-sm'>Early access <HiArrowLongRight className='text-lg ml-1 mt-0' /> </button>
      </div>
      <div className=' h60 w50  '>
        <img className=" h-45 w-70 object-cover  sm:70 sm:w-80 md:h-75 md:w-120 lg:h-70 lg:w-115  xl:h-80 xl:w-120 xl:object-cover xl:rounded-2xl " src={imagee} />
      </div>

    </div>
  )
}

export default Page3