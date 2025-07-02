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

    const items = [
        {
            id: 1,
            image: box1,
            title: "Dashboard overview",
            paragraph: "Get a bird s-eye view of your business with real-time financial insights, trends, and"
        },
        {
            id: 2,
            image: box2,
            title: "Contract Lifecycle Management",
            paragraph: "Get a birds-eye view of your business with real-time financial insights, trends, and"
        },
        {
            id: 3,
            image: box3,
            title: "Team Collaboration",
            paragraph: "Get a birds-eye view of your business with real-time financial insights, trends, and"
        },
        {
            id: 4,
            image: box4,
            title: "Smart Invoicing",
            paragraph: "Get a birds-eye view of your business with real-time financial insights, trends, and"
        },
        {
            id: 5,
            image: box5,
            title: "Client Management",
            paragraph: "Get a birds-eye view of your business with real-time financial insights, trends, and"
        }, {
            id: 6,
            image: box6,
            title: "Task Management",
            paragraph: "Get a birds-eye view of your business with real-time financial insights, trends, and"
        }, {
            id: 7,
            image: box7,
            title: "Estimates Management",
            paragraph: "Get a birds-eye view of your business with real-time financial insights, trends, and"
        }, {
            id: 8,
            image: box8,
            title: "Payment Insights",
            paragraph: "Get a birds-eye view of your business with real-time financial insights, trends, and"
        }, {
            id: 9,
            image: box9,
            title: "Department Management",
            paragraph: "Get a birds-eye view of your business with real-time financial insights, trends, and"
        }
    ]
    return (
        <div className='  w-full items-center justify-center m-auto xl  xl:w-full '>
            <div className=' w-full  m-auto items-center justify-center text-center lg:h-150 lg:w-full lg:p-7 xl:h-160 xl:w-300 '>
                <div className='p-2 w-80  items-center justify-center text-center md:w-120 m-auto lg:h-27 lg:w-230 xl:h-27 xl:w-250  '>
                    <h2 className='text-lg font-semibold mt-7 sm:text-2xl md:text-3xl lg:text-4xl lg:mt-2 xl:text-5xl xl:font-semibold xl:mt-2'>All-in-One Features to <span className='text-[rgba(12,113,224,1)]'> Power Your Business</span></h2>
                    <p className=' text-xs font-medium mt-4  sm:text-sm lg:text-lg lg:mt-2  xl:text-lg xl:font-medium xl:mt-4  '>Billeasy brings together every tool to manage your finances, clients, and team — all in one platform.</p>
                </div>

                <div className='flex flex-col flex-wrap gap-3 md:flex md:flex-row md:pl-10 lg:mt-2  md:pr-10 lg:flex lg:flex-row lg:flex-wrap lg:p-0  xl:flex xl:flex-row xl:flex-wrap xl:gap-1 '>
                    {
                        items?.length > 0 ? (
                            items?.map((item, index) =>



                                <div key={index} className='h-27 w-70  m-auto mt-1 rounded-md p-2 border-[rgba(12,113,224,1)] border
                                sm:h-30 sm:w-80 md:h-30 md:w-83 md:m-auto lg:h-33 lg:w-78 lg:m-auto xl:h-35 xl:w-90 xl:mt-1 xl:mx-auto xl:p-5    ' style={{
                                        background: `radial-gradient(55.92% 29.44% at 82.12% 96.3%, rgba(12, 113, 224, 0.5) 0%, rgba(12, 113, 224, 0) 100%)`,
                                    }}>
                                    <div className='flex flex-row  xl:flex xl:flex-row text-start xl:text-start'>
                                        <img className="h-8 w-8" src={item.image} />
                                        <h3 className='text-base  font-semibold ml-3 mt-1  xl:text-2xl  xl:font-semibold xl:ml-3 xl:mt-0 '>{item.title}</h3>
                                    </div>

                                    <p className=' text-xs mt-3  text-start sm:text-sm xl:mt-3  xl:text-start'>Get a bird’s-eye view of your business with real-time financial insights, trends, and</p>
                                </div>

                            )
                        )
                            : null}
                </div>
                <button className='flex flex-row flex-nowrap cursor-pointer items-center justify-center text-center text-sm h-8 text-white 
                sm:h-9 w- p-2 rounded-2xl bg-[rgba(12,113,224,1)] mt-3 m-auto  xl:flex xl:flex-row   xl:h-9  xl:w-42 xl:p-1 xl:mt-2 xl:mx-auto  xl:text-base '>Secure Your Spot <HiArrowLongRight className='xl:mt-0.5 xl:ml-1' /></button>
            </div>
        </div>
    )
}

export default Page6