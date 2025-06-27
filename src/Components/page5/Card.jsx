import React, { useState } from 'react'

const Card = ({ id,
  backgroundimages,
  image,
  title,
  para }) => {
  const [hovered, setHovered] = useState(false)

  return (

    <div onMouseEnter={() => setHovered(!hovered)} onMouseLeave={() => setHovered(!hovered)}
    >
      {
        hovered === true ? (
          <>
            <div
              className={`m-auto h-65 w-65 border border-blue-600 mr-3 rounded-2xl items-center
                 justify-center text-center p-3 mt-5 gap-10 bg-cover bg-no-repeat bg-center duration-500 ease
                  md:h-68 md:w-68 md:mt-5 lg:p-0 lg:mr-1  xl:h-70 xl:w-70  xl:mr-3  xl:p-3 xl:mt-10 xl:gap-10  ease`}
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(12,113,224,0.5), rgba(7,62,122,0.5)), url(${backgroundimages})`,
              }}
            >
              <img className=" items-center justify-center h-10 w-10 object-cover mt-2 mb-2 m-auto   xl:h-10 xl:w-10  xl:mt-4 xl:mb-2 xl:ml-27 " src={image} />
              <h3 className=' text-base mb-2 text-white md:text-lg  xl:text-lg xl:mb-2'>{title}</h3>
              <p className=' text-sm font-medium text-white xl:text-sm xl:font-medium '>{para}</p>
            </div>
          </>
        ) : (
          <>
            <div className={`m-auto h-65 w-65 border border-blue-600 mr-3 bg-white rounded-2xl items-center
               justify-center text-center p-3 mt-5 gap-10 bg-center duration-500 ease md:h-68 md:w-68 md:mt-5  lg:h-70 lg:w-62 lg:mr-1
               xl:h-70  xl:w-70  xl:mr-3  xl:rounded-2xl  xl:p-3 xl:mt-10xl:gap-10`} >
              <img className=" items-center justify-center h-10 w-10 object-cover mt-2 mb-2 m-auto  xl:h-10 xl:w-10  xl:mt-4 xl:mb-2 xl:ml-27" src={image} />
              <h3 className='text-base mb-2 text-[rgba(12,113,224,1)] md:text-lg xl:text-lg xl:mb-2'>{title}</h3>
              <p className=' text-sm font-medium xl:text-sm xl:font-medium'>{para}</p>
            </div>
          </>
        )
      }

    </div>
  )
}

export default Card