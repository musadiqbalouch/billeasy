import React from 'react'
import img from "../../assets/Page3frame.png"
import image from "../../assets/Page10laptopimage.png"
import { HiArrowLongRight } from "react-icons/hi2";
import logos from "../../assets/Page10logos.png"

const Page10 = () => {
    const items=["Get ahead of the curve and be among the first to experience the future of construction"," Your feedback will directly influence the development of Billeasy,<br /> ensuring it truly meets the needs of the construction industry"
        ,"Early access users will receive 40% discounted for life, support & exclusive training sessions."," Don't wait to streamline your operations and boost your bottom line "
    ]
  return (
    <div className='h-[100vh] w-full bg-no-repeat bg-center bg-cover items-center justify-center m-auto ' style={{backgroundImage:`url(${img})`}}>
    <div className='flex flex-row'>
         <div className='h-90 w-440 pl-10 items-center justify-center m-auto ml-20'>
                 <h2 className='text-black text-4xl/10 font-semibold mb-9'>Why Join the <span className='text-[rgba(12,113,224,1)]'>Beta / Get Early Access?</span> </h2> 
                  <ul className=' flex flex-col gap-3 list-disc pl-5 '>
                    
                     {items.map((item,index)=>(
                          <div className='flex  ' key={index}>
                            <div className='h-4 w-4 shrink-0 bg-[linear-gradient(to_right,rgba(12,113,224,1),rgba(7,62,112,1))] border border-white rounded-full mt-2 mr-3 '></div>
                         <div className='text-black text-base/5 font-medium'><p dangerouslySetInnerHTML={{ __html: item}}></p> </div>
                     </div>
                     ))}
                  </ul>
                  <img className='h-10 w-65 object-cover m-5' src={logos} />
                 <button className=' flex flex-row h-9 w-45 mt-5 ml-5 bg-[rgba(12,113,224,1)] rounded-2xl p-1 font-sm text-center justify-center items-cent text-white ' >Secure Your Spot <HiArrowLongRight className='text-base mt-1 ml-1'/></button>
               </div>  
               <div>
                <img className='object-cover h-160 w-370 relative right-15' src={image} />
                </div>   
    </div>           
    </div>
  )
}

export default Page10