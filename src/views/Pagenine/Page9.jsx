import React from 'react'
import image from "../../assets/Backgroundimageofpagefour.png"
import Card1 from "../../assets/Page9card1image.png"
import Card2 from "../../assets/Page9card2image.png"
import Card3 from "../../assets/Page9card3image.png"
import Card4 from "../../assets/Page9card4image.png"
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import { HiArrowLongRight } from "react-icons/hi2";


const page9 = () => {

  const items = [
    {
      id: 1,
      image: Card1,
      title: "Accounting Integration"
    },
    {
      id: 2,
      image: Card2,
      title: "Customer Relationship Management"
    },
    {
      id: 3,
      image: Card3,
      title: "Financial Accounting Software"
    },
    {
      id: 4,
      image: Card4,
      title: "Software as a service"
    },
  ]
  return (
    <div className=' w-full  '>
      <div className=' container w-full bg-no-repeat bg-center bg-cover  items-center justify-center mt-20 pb-10 m-auto rounded-2xl   xl:w-[1170px] xl:mt-30  ' style={{ backgroundImage: `url(${image})` }}>
        <div className='items-center justify-center text-center'>
          <h2 className=' text-xl font-semibold text-white p-4 sm:text-2xl md:text-3xl xl:text-4xl xl:p-4 '>Imagine a construction business where..</h2>
          <h5 className='text-xs font-medium text-white sm:text-base  xl:text-lg '>The #1 Cloud SaaS Software</h5>
        </div>
        <div className='flex flex-row   xl:flex xl:flex-row  ' >
          <div className=' h-8 w-8 rounded-2xl bg-[rgba(12,113,224,1)] mt-40 hidden lg:block xl:h-8 xl:w-8  xl:mt-40'><CiCircleChevLeft className='h-8 w-8 text-white' /></div>
          <div className=' flex flex-col gap-2 m-auto md:flex-row md:flex-wrap md:items-center md:justify-center lg:flex-nowrap xl:flex xl:flex-row xl:gap-3 xl:p-3'>
            {
              items?.length > 0 ? (
                items?.map((item, index) =>
                  <div className='h-65 w-65 sm:w-80 md:w-65 lg:w-57 rounded-2xl bg-[rgba(12,113,224,1)] border border-white border-t-0 items-center justify-between text-center bg-opacity-5 mt-8  xl:h-65 xl:w-65  bg-opacity-5 xl:mt-8'>

                    <img className=' object-cover h-50 w-75 m-auto rounded-2xl p-2  xl:h-50 xl:w-75 xl:p-2' src={item.image} />
                    <h2 className='text-white text-base font-semibold xl:text-lg'>{item.title}</h2>

                  </div>
                )
              )
                : null}
          </div>
          <div className='h-8 w-8 rounded-2xl bg-[rgba(12,113,224,1)] mt-40 hidden lg:block xl:h-8 xl:w-8  xl:mt-40 '><CiCircleChevRight className='h-8 w-8 text-white' /></div>
        </div>
        <button className='flex flex-row flex-nowrap items-center justify-center text-center h-8 text-white w-35 m-auto p-1 mt-5  text-sm rounded-2xl bg-[rgba(12,113,224,1)] lg:h-10 lg:w-40 lg:p-2 lg:text-base  xl:h-9 xl:w-42 xl:p-1 xl:mt-1 xl:mx-auto'>Secure Your Spot <HiArrowLongRight className='xl:ml-1 xl:mt-0.5' /></button>
      </div>
    </div>
  )
}

export default page9