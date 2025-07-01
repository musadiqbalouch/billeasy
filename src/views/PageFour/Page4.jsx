import React, { useState } from 'react';
import image from "../../assets/Backgroundimageofpagefour.png"
import { HiArrowLongRight } from "react-icons/hi2";
import imagetwo from "../../assets/laptopimageofpagefour.png"
import Automated from '../Automated/Automated';
import Payment from '../Payment/Payment';
import Integrated from '../Integrated/Integrated';
import Teamm from "../Teamm/Team"

const Page4 = () => {
  const items = [
    { id: 1, label: "Automated Invoice Management", },
    { id: 2, label: "Payment Insights", },
    { id: 3, label: "Integrated Client CRM", },
    { id: 4, label: "Team Collaboration & Role-Based Access", },
  ];
  const [selectbutton, setselectbutton] = useState("Automated Invoice Management")

  console.log(selectbutton)
  return (
    <div className='h-[100%] w-full'>
      <div className='container h-full  bg-no-repeat bg-center object-cover items-center justify-center
       mt-10 mb-10 m-auto rounded-2xl md:h-220 md:m-auto lg:h-160 lg:w5xl    xl:h-160 xl:w-fit  xl:mt-30  xl:m-auto  ' style={{ backgroundImage: `url(${image})` }}>
        <div className='items-center justify-center text-center p-5 xl:p-10 '>
          <h2 className='text-base w-60 m-auto text-white font-semibold sm:text-lg md:w-90 md:text-2xl md:mt-15 lg:w-120 lg:text-4xl xl:w-160 xl:m-auto xl:text-5xl  font-semibold/7 '>Work. Bill. Collaborate. Done.</h2>
          <p className='text-white text-xs m-3 sm:text-sm md:text-base md:mb-5  xl:m-3 '>Bill Easy connects the dots between contracts, estimates, invoicing, and teamwork — giving you control, clarity, and confidence</p>
          <div className='grid grid-cols-1 p-1  h-fit w-fit m-auto gap-2 bg[#9cc3ee] opacity-80 text-center
          sm:grid sm:grid-cols-2 md:mb-5 rounded-2xl lg:flex lg:flex-row lg:h-10 
          lg:w-240 lg:opacity-80 lg:m-auto lg:gap-4 xl:h-10 xl:w-240 xl:opacity-80 xl:m-auto  xl:flex xl:gap-5 xl:rounded-2xl'>

            {items.map((item, index) => (
              <button className={`text-xs  h-fit w-full p-2 m-auto flex flex-nowrap bgwhite rounded-2xl text-[rgba(12,113,224,1)] border-[rgba(12,113,224,1)] md:text-sm lg:text-sm lg:h-8 lg:w-fit lg:p-1.5 lg:px-3 xl:text-sm  xl:h-8 xl:w-fit xl:p-1.5 xl:px-3 ${selectbutton === item.label ? "bg-gradient-to-b from-[#0C71E0] to-[#073E7A] text-white " : "bg-white "}`} key={item.id} onClick={() => setselectbutton(item.label)} >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className='flex flex-col  w-1/2 m-auto items-center justify-center text-center sm:w-150 
        md:h-160 lg:flex lg:flex-row lg:h-100 lg:w-fit xl:flex xl:flex-row xl:h-100 xl:w-270  '>
          <div className='h-90 w-60  sm:w-130 md:h-80 lg:h-90 lg:w-160 lg:pl-10 xl:h-90 xl:w-550 xl:pl-10'>
            <h2 className='text-[rgba(255,255,255,1)] text-base font-semibold sm:text-lg sm:text-start md:text-2xl lg:text-4xl xl:text-4xl/10 '>Automated Invoice Management</h2>
            <h4 className='text-[rgba(255,255,255,1)] text-xs p-2 sm:text-sm sm:text-start sm:p-0 sm:pt-2 md:text-lg xl:text-xl xl:p-2'>Streamline billing. Eliminate manual work</h4>

            <ul className=' flex flex-col gap-3 list-disc pl-5 sm:p-0 md:mt-2 xl:flex xl:flex-col xl:gap-3 xl:list-disc xl:pl-5  '>
              {selectbutton === "Automated Invoice Management" ? (
                <>
                  <Automated />
                </>
              ) : selectbutton === "Payment Insights" ? (
                <>
                  <Payment />
                </>
              ) : selectbutton === "Integrated Client CRM" ? (
                <>
                  <Integrated />
                </>
              ) : selectbutton === "Team Collaboration & Role-Based Access" ? (
                <>
                  <Teamm />
                </>
              ) : null}
            </ul>
            <h4 className='text-[rgba(255,255,255,1)] text-sm font-semibold mt-2 sm:text-start sm:text-lg xl:text-lg xl:mt-2'>Save time, reduce overhead, and boost cash flow consistency.</h4>
            <button className=' flex flex-row text-sm h-7 p-1 px-2 w-37 mt-4 m-auto bg-[rgba(255,255,255,1)] rounded-2xl  font-xs text-center justify-center items-cent text-[rgba(12,113,224,1)] 
            sm:m-0 sm:mt-2 sm:p-1 sm:h-8 md:mt- md:p-1.5 md:w-37 xl:flex xl:flex-row xl:h-8 xl:w-45 xl:mt-4  xl:p-1 xl:font-sm ' >Secure Your Spot <HiArrowLongRight className='text-base mt-0.5 ml-1' /></button>
          </div>
          <div className=''>
            <img className=' h-40 w-40 object-cover hidden md:block  md:h-90 md:w-110 md:relative md:bottom-20 md:left-40 lg:relative lg:bottom-10 lg:left-0  lg:h-110  lg:w-110  xl:relative xl:bottom-10 xl:right10 xl:h-105 xl:w-350 ' src={imagetwo} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Page4