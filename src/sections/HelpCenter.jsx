import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const HelpCenter = () => {
  return (
    <main className='max-w-[1240px] border border- mx-auto flex relative h-[361px] overflow-hidden rounded-xl'>
        <img 
          src="/images/helpCenter.jpeg" 
          alt="img"
          className='scale-x-[-1] w-full h-auto object-cover transform translate-x-[20%]'
        />
      <div class="absolute inset-0 bg-gradient-blue opacity-100"></div>
      
      <div className='flex flex-col gap-4 absolute text-white font-figtree top-10 left-7'>
        <h1 className='font-bold text-30'>
          Visit our help center for support
        </h1>
        <p className='leading-relaxed tracking-wide'>
          <span className='block'>
            Our dedicated team is always</span> 
            ready to answer your questions.
        </p>
        <div className='flex'>
        <div className="border-b-2 pb-1 inline-flex gap-4 items-center">
          <a href="#">
            Go to Help Center 
          </a>
          <FaArrowRight />
        </div>
        </div>
      </div>
    </main>
  )
}

export default HelpCenter















