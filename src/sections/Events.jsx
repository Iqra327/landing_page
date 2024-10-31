import React from 'react'
import Button from '../components/Button'
import { IoTicket } from 'react-icons/io5'

const Events = () => {

  const content = [
    {
      heading: 'Culture and Ethics Debate Session with Muslim Debate',
      text1: 'Monday • 26th May • 11:00 AM (GMT +5)',
      text2: 'Town Hall, Leeds, UK',
      img: '/images/event-img1.png',
      alt:'img'
    },
    {
      heading: 'Culture and Ethics Debate Session with Muslim Debate',
      text1: 'Monday • 26th May • 11:00 AM (GMT +5)',
      text2: 'Town Hall, Leeds, UK',
      img: '/images/event-img2.png',
      alt:'img'
    },
    {
      heading: 'Culture and Ethics Debate Session with Muslim Debate',
      text1: 'Monday • 26th May • 11:00 AM (GMT +5)',
      text2: 'Town Hall, Leeds, UK',
      img: '/images/event-img3.png',
      alt:'img'
    },
    {
      heading: 'Culture and Ethics Debate Session with Muslim Debate',
      text1: 'Monday • 26th May • 11:00 AM (GMT +5)',
      text2: 'Town Hall, Leeds, UK',
      img: '/images/event-img4.png',
      alt:'img'
    }
  ]

  return (
    <main className='container flex-col gap-16 justify-center mt-24 '>
      <div className='inline-block text-center'>
        <div className="inline-block bg-pink-final text-white p-2 text-30 font-barlow rounded-[3px]">
          Events
        </div>
        <h2 className="text-40 mt-3 font-semibold">
          Discover Events
        </h2>
        <p className='font-figtree mt-5 text-light-grey'>
          At Muslim Ticket, we've streamlined our process to ensure a seamless experience for both event organizers and attendees. Our approach is designed to make event planning and participation as effortless and rewarding as possible. Here's how our process works:
        </p>
      </div>

     {/* cards */}
      <div className='flex flex-wrap gap-6 items-center justify-center'>
        {
          content.map((item, index) => (
            <div key={index} className='max-w-[294px] shadow-custom-light'>
              <img 
                src={item.img} 
                width={500}
                alt={item.alt} 
              />
              <div className='m-2'>
                <div className='flex flex-col '>
                  <h2 className='text-black text-18 font-semibold mt-3'>
                    {item.heading}
                  </h2>
                  <p className='text-light-grey text-14 mt-2'>
                    {item.text1}
                  </p>
                  <p className='text-light-grey text-14 mt-1'>
                    {item.text2}
                  </p>
                </div>
                <div className='flex items-center justify-center py-3 rounded-[4px] bg-gray-200 gap-2 mt-6'>
                  <IoTicket/>
                  <p className='text-base'>
                    Book Tickets
                  </p>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <div className="bg-gray-200 w-full h-4 rounded-xl">
        <div className="bg-gradient h-full rounded-xl" style={{ width: '10%' }}>
        </div>
      </div>

    </main>
  )
}

export default Events