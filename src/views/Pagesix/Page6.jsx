import React from 'react'
import box1 from "../../assets/box1image.png"
import box2 from "../../assets/box2image.png"
import box3 from "../../assets/box3image.png"
import box4 from "../../assets/box4image.png"
import box5 from "../../assets/box5image.png"
import box6 from "../../assets/box6image.png"
import box7 from "../../assets/box7image.png"
import box8 from "../../assets/box8image.png"
import box9 from "../../assets/box9image.png"
import { HiArrowLongRight } from "react-icons/hi2";


const Page6 = () => {

    const items =[
        {
            id:1,
            image:box1,
            title:"Dashboard overview",
            paragraph:"Get a bird s-eye view of your business with real-time financial insights, trends, and"
        },
           {
            id:2,
            image:box2,
            title:"Dashboard overview",
            paragraph:"Get a birds-eye view of your business with real-time financial insights, trends, and"
        },
           {
            id:3,
            image:box3,
            title:"Dashboard overview",
            paragraph:"Get a birds-eye view of your business with real-time financial insights, trends, and"
        },
           {
            id:4,
            image:box4,
            title:"Dashboard overview",
            paragraph:"Get a birds-eye view of your business with real-time financial insights, trends, and"
        },
           {
            id:5,
            image:box5,
            title:"Dashboard overview",
            paragraph:"Get a birds-eye view of your business with real-time financial insights, trends, and"
        },   {
            id:6,
            image:box6,
            title:"Dashboard overview",
            paragraph:"Get a birds-eye view of your business with real-time financial insights, trends, and"
        },   {
            id:7,
            image:box7,
            title:"Dashboard overview",
            paragraph:"Get a birds-eye view of your business with real-time financial insights, trends, and"
        },   {
            id:8,
            image:box8,
            title:"Dashboard overview",
            paragraph:"Get a birds-eye view of your business with real-time financial insights, trends, and"
        },   {
            id:9,
            image:box9,
            title:"Dashboard overview",
            paragraph:"Get a birds-eye view of your business with real-time financial insights, trends, and"
        }
    ]
  return (
    <div className='h-screen w-full items-center justify-center m-auto'>
        <div className=' h-160 w-290  m-auto items-center justify-center text-center'>
         <div className='h-27 w-250  items-center justify-center text-center m-auto '>
            <h2 className='text-5xl font-semibold '>All-in-One Features to <span className='text-[rgba(12,113,224,1)]'> Power Your Business</span></h2>
            <p className='text-lg font-medium mt-4  '>Billeasy brings together every tool to manage your finances, clients, and team — all in one platform.</p>
         </div>

      <div className='flex flex-row flex-wrap gap-1 '>
          {
            items?.length >0 ?(
                items?.map((item,index)=>
                   
                
       
 <div  key={index} className='h-33 w-90  mt-1 rounded-md p-5 border-[rgba(12,113,224,1)] border ml-4   '  style={{
    background: `radial-gradient(55.92% 29.44% at 82.12% 96.3%, rgba(12, 113, 224, 0.5) 0%, rgba(12, 113, 224, 0) 100%)`,
  }}>
          <div className='flex flex-row'>  
          <img className="h-8 w-8"src={item.image} />
          <h3 className='text-2xl  font-semibold ml-3 '>{item.title}</h3>      
          </div>
         
          <p className='mt-3  text-start'>Get a bird’s-eye view of your business with real-time financial insights, trends, and</p>
         </div>
              
                )
            )
        :null}
      </div>
         <button className='flex flex-row items-center justify-center text-center h-10 text-white w-40 p-2 rounded-2xl bg-[rgba(12,113,224,1)] mt-3 ml-125'>Secure Your Spot <HiArrowLongRight/></button>
        </div>
    </div>
  )
}

export default Page6