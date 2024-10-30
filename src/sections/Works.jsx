import React from 'react'
import EventCard from '../components/EventCard'

const Works = () => {
  return (
    <main className='container flex-col gap-16 justify-center mt-24 '>
    <div className='inline-block text-center'>
      <div className="inline-block bg-pink-final text-white p-2 text-30 font-barlow rounded-[3px] capitalize">
        How it works
      </div>
      <h2 className="text-40 mt-3 font-semibold">
        How we work out things here
      </h2>
      <p className='font-figtree mt-5 text-light-grey'>
        At Muslim Ticket, we've streamlined our process to ensure a seamless experience for both event organizers and attendees. Our approach is designed to make event planning and participation as effortless and rewarding as possible. Here's how our process works:
      </p>
    </div>

    <div className='sm:relative'>
      <div className='flex max-sm:flex-wrap justify-between max-sm:hidden'>
        <img 
          src="images/girls.png" 
          alt="img" 
          className='object-contain'
        />
          <img 
            src="images/happy.png" 
            alt="img"
            className='sm:mt-24 object-contain' 
          />
      </div>

      <div className='sm:absolute sm:inset-0 max-w-[933px] mx-auto'>
        <div className='flex flex-col justify-center gap-3 font-figtree'>
          <EventCard 
            count='1'
            heading='Create Event'
            text='Create an event and add a name, date, tickets , agenda, location and description.' 
            classes='lg:ms-10'
          />
          <EventCard 
            count='2'
            heading='Choose ticket type'
            text='Choose ticket type of your choice, paid free or donation' 
            classes='ml-auto'
          />
          <EventCard 
            count='3'
            heading='Publish events'
            text='Generate sales with early-bird discounts, coupons and more.' 
          />
          <EventCard 
            count='4'
            heading='Start making sales'
            text='Get paid directly to your bank account according to your schedule.' 
            classes='ml-auto lg:mr-3'
          />
        </div>
      </div>
    </div>

  </main>
  )
}

export default Works