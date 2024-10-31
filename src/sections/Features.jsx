import React from 'react'

const Features = () => {
  const content = [
    {
      img: '/images/eventPage.png',
      heading: 'Build your event page',
      text: 'lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ip' 
    },
    {
      img: '/images/analytics-outline.png',
      heading: 'Reporting and analytics',
      text: '  Our support team is always available to answer questions, assist with event setup, and address even complex issues.' 
    },
    {
      img: '/images/pound-circle.png',
      heading: 'Pass the fees on',
      text: "Effortlessly create, manage, and promote events with EventBookings' simple and straightforward interface." 
    },
    {
      img: '/images/Vector (1).png',
      heading: 'Secure payment methods',
      text: "Save time and money with EventBookings' integrated video conferencing platform." 
    },
    {
      img: '/images/tickets-two.png',
      heading: 'Multiple ticket types',
      text: 'Dedicated to making event booking easy and cost-effective, our Australian-based company offers aplatform accessible globally.' 
    },
    {
      img: '/images/widgets-outline.png',
      heading: 'Booking widget for your website',
      text: 'Say goodbye to third-party email providers and access all the necessary tools for successful email marketing within EventBookings.' 
    },
    {
      img: '/images/dollar.png',
      heading: 'Add donation pages for events',
      text: "Ensure your attendees' data stays safe with our PCI-compliant payment gateway." 
    },
    {
      img: '/images/check-in.png',
      heading: 'Attendee check-in',
      text: "Protect your attendees' information with EventBookings - it will never be shared with marketing agencies or advertisers." 
    },
    {
      img: '/images/orders.png',
      heading: 'Manage orders',
      text: 'Host a successful event with features including mobile ticket scanning, team collaboration, promotional tools, and analytics, without any complexity. ' 
    },
    {
      img: '/images/percentage.png',
      heading: 'Discount codes',
      text: ' With a built-in video platform, host online events without needing to purchase additional tools.' 
    },
  ]

  return (
    <main className='container flex-col gap-16 justify-center mt-24 '>
    <div className='inline-block text-center'>
      <div className="inline-block bg-pink-final text-white p-2 text-30 font-barlow rounded-[3px]">
        Features
      </div>
      <h2 className="text-40 mt-3 font-semibold">
        Simplified ticketing with a full suite of features
      </h2>
    </div>

    <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-y-14 gap-x-24'>
      {
        content.map((item) => (
          <div key={item.heading} className='flex w-full items-center gap-7'>
            <div className='bg-gradient-custom rounded-full lg:w-[99px] lg:h-[99px] max-lg:w-20 max-lg:h-20 flex items-center justify-center flex-shrink-0'>
              <img 
                src={item.img} 
                alt="icon" 
                className='max-w-[50px] h-1/2 object-contain'
              />
            </div>
            <div className='flex flex-col justify-center gap-3'>
              <h2 className='text-2xl font-bold'>
                {item.heading}
              </h2>
              <p className='text-base text-light-grey text-balance'>
                {item.text}
              </p>
            </div>
          </div>
        ))
      }
    </div>

    <div className='bg-custom-gradient flex flex-col justify-center items-center rounded-lg p-24 gap-5'>
      <h1 className='font-bold text-40 text-white text-center'>A simpler way to manage events</h1>
      <button className='bg-white text-pink-final rounded-md lg:p-3 max-lg:p-1 lg:mt-4 font-bold lg:text-xl max-sm:text-14'>
        Create event
      </button>
    </div>
    </main>
  )
}

export default Features