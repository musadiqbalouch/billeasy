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

    const items =[
        {
            id:1,
            image:Card1,
            title:"Accounting Integration"
        },
         {
            id:2,
            image:Card2,
            title:"Customer Relationship Management"
        },
        {
            id:3,
            image:Card3,
            title:"Financial Accounting Software"
        },
        {
            id:4,
            image:Card4,
            title:"Software as a service"
        },
    ]
  return (
    <div className='h-130 w-full '>
            <div className='h-120 w-[1170px] bg-no-repeat bg-center object-cover items-center justify-center mt-30 m-auto rounded-2xl ' style={{backgroundImage:`url(${image})`}}>
              <div className='items-center justify-center text-center'>
                 <h2 className='text-4xl font-semibold text-white p-4 '>Imagine a construction business where..</h2>
               <h5 className='text-lg font-medium text-white'>The #1 Cloud SaaS Software</h5>
              </div>
              <div className='flex flex-row' >
                 <div className='h-8 w-8 rounded-2xl bg-[rgba(12,113,224,1)] mt-40'><CiCircleChevLeft className='h-8 w-8 text-white'/></div>
                  <div className='flex flex-row gap-3 p-3'>
                {
                items?.length>0?(
                    items?.map((item,index)=>
                    <div className='h-65 w-65  rounded-2xl bg-[rgba(12,113,224,1)] border border-white border-t-0 items-center justify-between text-center bg-opacity-5 mt-8'>

                <img className='object-cover h-50 w-75 m-auto rounded-2xl p-2' src={item.image} />
                <h2 className='text-white text-lg font-semibold'>{item.title}</h2>
          
              </div>
                    )
                )
                :null}
              </div>
                   <div className='h-8 w-8 rounded-2xl bg-[rgba(12,113,224,1)] mt-40 '><CiCircleChevRight className='h-8 w-8 text-white'/></div>
              </div>
                <button className='flex flex-row items-center justify-center text-center h-10 text-white w-40 p-2 rounded-2xl bg-[rgba(12,113,224,1)] mt-1 ml-127'>Secure Your Spot <HiArrowLongRight/></button>
            </div>
    </div>
  )
}

export default page9