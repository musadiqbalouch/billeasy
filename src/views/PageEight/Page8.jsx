import React from 'react'
import Card1 from "../../assets/Page8card1image.png" 
import Card2 from "../../assets/Page8card2image.png" 
import Card3 from "../../assets/Page8card3image.png" 
import { HiArrowLongRight } from "react-icons/hi2";

const Page8 = () => {
    const items =[
        {
            id:1,
            title:"Step 01",
            image:Card1,
            Paragraph:"Holdback Management with Automated Billing Reminders"
        },
         {
            id:2,
            title:"Step 02",
            image:Card2,
            Paragraph:"Holdback Management with Automated Billing Reminders"
        },
         {
            id:3,
            title:"Step 03",
            image:Card3,
            Paragraph:"Holdback Management with Automated Billing Reminders"
        },
    ]
  return (
    <div className='h-screen w-full items-center justify-center text-center '>
          
                <h2 className='text-5xl font-semibold'>BillEasy <span className='text-[rgba(12,113,224,1)]'> Extended </span> Capabilities</h2>
                <p className='font-medium text-sm mt-3'>Always be ready for what’s next by easily extending your Bill Easy cloud finance software.</p>
        
       <div className='flex flex-row pl-17 pr-17'>
         {
            items?.length>0?(
                items?.map((item,index)=>
                
                   <div className='h-100 w-120 items-center justify-center text-center flex flex-col '>
            <h1 className='text-3xl font-semibold text-[rgba(12,113,224,1)] relative top-7'>{item.title}</h1>
            <img className=' h-47 w-85 object-cover m-auto relative top-10 ' src={item.image} />
              <div className='h-42 w-91 rounded-2xl  '
        style={{
    backgroundImage: 'linear-gradient(180deg, #0C71E0 0%, #073E7A 100%)'
  }}>
        <h3 className='text-xl font-semibold text-white mt-20'>Holdback Management with <br /> Automated Billing Reminders</h3>
        </div>
        </div>
                )
            )
        :null}
       </div>
        <button className='flex flex-row items-center justify-center text-center h-10 text-white w-40 p-2 rounded-2xl bg-[rgba(12,113,224,1)] mt-6 ml-150'>Secure Your Spot <HiArrowLongRight/></button>
    </div>
  )
}

export default Page8