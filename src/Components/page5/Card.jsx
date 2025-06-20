import React, { useState } from 'react'

const Card = ({ id,
      backgroundimages,
      image,
      title,
      para}) => {
        const[hovered,setHovered]=useState(false)
        
  return (
  
          <div onMouseEnter={()=>setHovered(!hovered)} onMouseLeave={()=>setHovered(!hovered)}
          >
         {
          hovered === true?(
            <>
<div
  className={`h-70 w-70 border border-blue-600 mr-3 rounded-2xl items-center justify-center text-center p-3 mt-10 gap-10 bg-cover bg-no-repeat bg-center duration-300 ease`}
  style={{
    backgroundImage: `linear-gradient(180deg, rgba(12,113,224,0.5), rgba(7,62,122,0.5)), url(${backgroundimages})`,
  }}
>
             <img className ="items-center justify-center h-10 w-10 object-cover mt-4 mb-2 ml-27 " src={image}/>
             <h3 className='text-white text-lg mb-2'>{title}</h3>
             <p className='text-sm font-medium text-white'>{para}</p>
            </div>
            </>
          ):(
            <>
             <div className={`h-70 w-70 border border-blue-600 mr-3 bg-white rounded-2xl items-center justify-center text-center p-3 mt-10 gap-10`} > 
             <img className ="items-center justify-center h-10 w-10 object-cover mt-4 mb-2 ml-27" src={image}/>
             <h3 className='text-[rgba(12,113,224,1)] text-lg mb-2'>{title}</h3>
             <p className='text-sm font-medium'>{para}</p>
            </div>
            </>
          )
         }
             
          </div>
  )
}

export default Card