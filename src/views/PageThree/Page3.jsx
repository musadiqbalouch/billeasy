import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
import img from "../../assets/Page3frame.png"
import image1 from "../../assets/Page3imageone.png"
import image2 from "../../assets/Page3imagetwo.png"

const Page3 = () => {
  return (
    <div className='h-screen w-full flex flex-row items-center justify-center object-cover bg-no-repeat bg-center  ' style={{backgroundImage:`url(${img})`}}>
  
      <div className='h-50 w-170 -ml-50 z-50'>
        <h2 className='text-4xl font-semibold'>  <span className='text-blue-600'>Transforming</span> The Operations <br /> Of Construction <span className='text-blue-600'> Businesses</span></h2>
        <p className='text-base/5 font-medium ;'>Bill Easy is a SaaS platform for the process of estimations, invoicing, and contract management by eliminating manual errors and communication gaps. It offers <br />customizable templates, role-based access, and team collaboration to improve <br /> workflow efficiency.</p>
        <button className='font-lg flex flex-row h-6 w-40 bg-blue-600 p-5 rounded-2xl text-white text-center align-centre items-center mt-2'>Early access <HiArrowLongRight className='text-lg ml-2 mt-1' /> </button>
      </div>
      <div className='h-50 w-100  mb-30 -m-17 z-50 '>
        <img className="h-60 w-80 object-cover rounded-2xl "src={image1} />
        <img className='h-60 w-80 object-cover rounded-2xl ml-60 relative bottom-20 border-10 border-white' src={image2} />
      </div>
      <div className='h-80 w-90 border-2 absolute right-50 rounded-2xl border-blue-600'>
        
      </div>

    </div>
  )
}

export default Page3