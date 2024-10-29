import React from 'react'
import Button from '../components/Button'

function Hero() {
  return (
      <main className='relative'>
        
        <figure>
          <img 
            src="/images/hero-img.png" 
            alt="hero-img"
            className='w-full object-cover' 
          />
        </figure>
        
        {/* overlay */}
        
        <div className='absolute inset-0 bg-[linear-gradient(260.31deg,rgb(36,0,255,0.5),rgb(248,26,132,0.3))]'></div>
        
        {/* hero text */}

        <div className='absolute inset-0 font-figtree text-white text-center flex flex-col gap-4 items-center justify-center p-4 md:p-8 lg:p-12'>
        
          <h1 className='font-bold text-60 max-lg:text-[40px] max-sm:text-base'>
            Event ticketing made simple
          </h1>
        
          <p className='font-semibold text-30 max-lg:text-[20px] max-sm:text-14'>
            Providing a global platform for Muslim friendly events, built for Muslims, built by Muslims.
          </p>
        
          <button className='bg-white text-navy-blue rounded-md lg:p-3 max-lg:p-1 lg:mt-4 font-bold lg:text-xl max-sm:text-14'>
            Create event
          </button>
        
        </div>
      </main>
  )
}

export default Hero