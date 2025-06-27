import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
import img from "../../assets/Page3frame.png"
import image1 from "../../assets/Page3imageone.png"
import image2 from "../../assets/Page3imagetwo.png"

const Page3 = () => {
  return (
    <div className='container h-screen w-full flex flex-col items-center justify-center text-center bg-cover object-cover bg-no-repeat bg-center
    md:h-screen md:w-full lg:flex lg:flex-row   xl:h-screen xl:w-full xl:flex xl:flex-row xl:items-center xl:justify-center xl:object-cover  ' style={{ backgroundImage: `url(${img})` }}>

      <div className='h-65 w-80 sm:h-60 sm:w-150  z-50 p-0.5 lg:h-45 lg:w-150  xl:h-50 xl:w-170 xl:-ml-50 xl:z-50 lg:text-start'>
        <h2 className='text-lg font-semibold sm:text-2xl lg:text-4xl  xl:text-4xl xl:font-semibold'>  <span className='text-blue-600'>Transforming</span> The Operations <br /> Of Construction <span className='text-blue-600'> Businesses</span></h2>
        <p className='text-xs/5 font-medium sm:text-base lg:text-base/4 lg:font-medium xl:text-base/5 xl:font-medium ;'>Bill Easy is a SaaS platform for the process of estimations, invoicing, and contract management by eliminating manual errors and communication gaps. It offers <br />customizable templates, role-based access, and team collaboration to improve <br /> workflow efficiency.</p>
        <button className='font- text-xs flex flex-row flex-nowrap h-7 w-32 mx-auto    bg-blue-600 p-4 rounded-2xl text-white
         text-center align-centre items-center mt-2 sm:h-9 sm:w-35 sm:text-base sm:p-4 sm:ml-57 lg:m-0 lg:mt-5 xl:h-10 xl:w-30    xl:p-3 xl:text-sm'>Early access <HiArrowLongRight className='text-lg ml-1 mt-0' /> </button>
      </div>
      <div className=' h-60 w-50  mr-15  z-50 lg:h-45 lg:w-80 lg:m-0 lg:mb-20 xl:h-50 xl:w-100  xl:mb-30 xl:-m-17 xl:z-50 sm:h-90 sm:w-100 sm:ml-40'>
        <img className=" h-40 w-60 object-cover rounded-2xl sm:75 sm:w-70 lg:h-50 lg:w-60  xl:h-60 xl:w-80 xl:object-cover xl:rounded-2xl " src={image1} />
        <img className='h-40 w-60 object-cover rounded-2xl relative bottom-7 left-15 border-10 border-white sm:75 sm:w-70 lg:h-50 lg:w-65 lg:relative lg:left-25 lg:bottom-10 xl:h-60 xl:w-80  xl:ml-40 xl:relative  xl:bottom-25   xl:border-10 ' src={image2} />
      </div>
      <div className=' h-20 w-40 border-2 absolute top-10 hidden rounded-2xl border-blue-600  lg:block lg:top-280 lg:left-175  lg:h-55 lg:w-60   xl:block xl:h-65 xl:w-80 xl:border-2  xl:left-200 xl:top-295 '>

      </div>

    </div>
  )
}

export default Page3