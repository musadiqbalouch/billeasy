import React from 'react'
import img from "../../assets/Page3frame.png"
import image from "../../assets/Page10laptopimage.png"
import { HiArrowLongRight } from "react-icons/hi2";
import logos from "../../assets/Page10logos.png"

const Page10 = () => {
  const items = ["Get ahead of the curve and be among the first to experience the future of construction", " Your feedback will directly influence the development of Billeasy,<br /> ensuring it truly meets the needs of the construction industry"
    , "Early access users will receive 40% discounted for life, support & exclusive training sessions.", " Don't wait to streamline your operations and boost your bottom line "
  ]
  return (
    <div className=' container relative  w-full bg-no-repeat bg-center bg-cover items-center justify-center mx-auto p-5 lg:p-0 overflow-hidden'
    >
      <div style={{ backgroundImage: `url(${img}) ` }} className='absolute opacity-50 inset-0 hidden md:block '></div>
      <div className='z-50  w-full flex flex-col lg:flex-row lg:mt-8 xl:flex  xl:flex-row mt-10  lg:p-10 '>
        <div className=' xl:w-[60%]  items-center justify-center m-auto lg:h-90 lg:w190   xl:h-90 xl:w- xl:pl10  xl:ml10'>
          <h2 className='text-black text-lg font-semibold mb-9 m-auto text-center sm:text-xl md:text-2xl lg:text-2xl/10 lg:mb-6 lg:text-start xl:text-4xl/10 xl:font-semibold xl:mb-9'>Why Join the <span className='text-[rgba(12,113,224,1)]'>Beta / Get Early Access?</span> </h2>
          <ul className=' flex flex-col gap-3 list-disc pl-5 '>

            {items.map((item, index) => (
              <div className=' flex xl:flex xl:-ml-5 ' key={index}>
                <div className=' h-4 w-4 shrink-0 bg-[linear-gradient(to_right,rgba(12,113,224,1),rgba(7,62,112,1))] border border-white rounded-full mt-1 mr-3 xl:h-4 xl:w-4 xl:shrink-0  xl:mt-0.5 xl:mr-3 '></div>
                <div className='text-black text-sm/5 font-medium md:text-sm lg:text-sm xl:text-sm/5 xl:font-medium'><p dangerouslySetInnerHTML={{ __html: item }}></p> </div>
              </div>
            ))}
          </ul>
          <img className='h-8 w-55 object-cover m-5 lg:h-10 lg:w-65 xl:h-10 xl:w-65   xl:m-5' src={logos} />
          <button className='flex flex-row h-8 w-35 flex-nowrap  mt-5 text-xs ml-5 bg-[rgba(12,113,224,1)]
           rounded-2xl p-2 font-sm text-center justify-center items-centre text-white
           md:text-sm md:p-1.5 md:h-8 md:w-40 lg:h-8 lg:w-40   xl:h-9  xl:w-42 xl:p-1 xl:mt-1 xl:mx-auto  xl:text-base  xl:ml-5  xl:font-sm items-cent  ' >Secure Your Spot <HiArrowLongRight className='text-base md:mt-1 ml-1' /></button>
        </div>
        <div className='xl:w '>
          <img className='object-cover w-full relative bottom-5 items-center justify-center sm:h-100 sm:w-150 
          md:h-100 md:w-140   lg:h-130 lg:w-160 lg:bottom-10 lg:top-10 lg:mr-10 xl:right-20 xl:mb-20  xl:relative ' src={image} />
        </div>
      </div>
    </div>
  )
}

export default Page10