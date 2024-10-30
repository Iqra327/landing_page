import React from 'react'

const EventCard = ({count, heading, text, classes}) => {
  return (
    <div className={`flex items-center shadow-lg bg-white mt-3 rounded-[10px] max-w-[547px] px-5 py-4 gap-6 max-md:mx-auto max-md:ms-6 ${classes}`}>
      <div>
        <h1 className='font-bold text-100 text-gradient-violet bg-gradient-voilet bg-clip-text'>
          {count}
        </h1>
      </div>
     
      <div className='flex flex-col gap-2'>
        <h1 className='font-bold text-30'>
          {heading}
        </h1>
        <p className='font-medium text-xl text-light-grey'>
          {text} 
        </p>
      </div>
    </div>
  )
}

export default EventCard