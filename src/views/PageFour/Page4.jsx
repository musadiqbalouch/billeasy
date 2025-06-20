import React from 'react'
import image from "../../assets/Backgroundimageofpagefour.png"
import { HiArrowLongRight } from "react-icons/hi2";
import imagetwo from "../../assets/laptopimageofpagefour.png"

const Page4 = () => {

    const items=["Auto-generate invoices from approved estimates or templates"," Set smart reminders for due, overdue, or partial payments."
        ," Schedule recurring invoices and auto-apply taxes or late fees"," Reduce human error and get paid faster with less follow-up. "
    ]
  return (
    <div className='h-[100vh] w-full'>
        <div className='h-160 w-6xl bg-no-repeat bg-center object-cover items-center justify-center mt-30 m-auto rounded-2xl ' style={{backgroundImage:`url(${image})`}}>
            <div className='items-center justify-center text-center p-10'>
                <h2 className='text-5xl text-white font-semibold/7 m-3'>Work. Bill. Collaborate. Done.</h2>
                <p className='text-white m-3'>Bill Easy connects the dots between contracts, estimates, invoicing, and teamwork — giving you control, clarity, and confidence</p>
                <div className='h-10 w-240 bg-[rgba(12,113,224,1)] opacity-80 m-auto items-center justify-center text-center flex gap-5 rounded-2xl'>
                    <button className='text-sm h-7 w-65 p-1  bg-white rounded-2xl text-[rgba(12,113,224,1)] border-[rgba(12,113,224,1)]'>Automated Invoice Management</button>
                    <button className='text-sm h-7 w-40 p-1 bg-white rounded-2xl text-[rgba(12,113,224,1)] border-[rgba(12,113,224,1)]'>Payment Insights</button>
                    <button className='text-sm h-7 w-45 p-1 bg-white rounded-2xl text-[rgba(12,113,224,1)] border-[rgba(12,113,224,1)]'>Integrated Client CRM</button>
                    <button className='text-sm  h-7 w-70 p-1 bg-white rounded-2xl text-[rgba(12,113,224,1)] border-[rgba(12,113,224,1)]'>Team Collaboration & Role-Based Access</button>
                </div>
            </div>
            <div className='flex flex-row h-100 w-300 '>
          <div className='h-90 w-550 pl-10'>
            <h2 className='text-[rgba(255,255,255,1)] text-4xl/10'>Automated Invoice Management</h2>           
             <h4 className='text-[rgba(255,255,255,1)] text-xl p-2'>Streamline billing. Eliminate manual work</h4>
      
             <ul className=' flex flex-col gap-3 list-disc pl-5 '>
               
                {items.map((item,index)=>(
                     <div className='flex  ' key={index}>
                       <div className='h-4 w-4 shrink-0 bg-[linear-gradient(to_right,rgba(12,113,224,1),rgba(7,62,112,1))] border border-white rounded-full mt-2 mr-3 '></div>
                    <div className='text-[rgba(255,255,255,1)] text-lg'>{item} </div>
                </div>
                ))}
             </ul>
            <h4 className='text-[rgba(255,255,255,1)] text-lg mt-2 '>Save time, reduce overhead, and boost cash flow consistency.</h4>
            <button className=' flex flex-row h-9 w-45 mt-4 bg-[rgba(255,255,255,1)] rounded-2xl p-1 font-sm text-center justify-center items-cent text-[rgba(12,113,224,1)] ' >Secure Your Spot <HiArrowLongRight className='text-base mt-1 ml-1'/></button>
          </div>
          <div className=''>
          <img className='relative bottom-70 right-10 h-220 w-570 object-cover  ' src={imagetwo} />
          </div>
            </div>
           
        </div>
    </div>
  )
}

export default Page4