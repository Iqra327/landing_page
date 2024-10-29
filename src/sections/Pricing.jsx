import React from 'react'

const Pricing = () => {
  return (
    <main className='container flex-col gap-16 justify-center mt-24 '>
      <div className='inline-block text-center'>
        <div className="inline-block bg-pink-final text-white p-2 text-30 font-barlow rounded-[3px]">
          Pricing
        </div>
        <h2 className="text-40 mt-3 font-semibold">
          We keep it simple, no contracts, no need to pre pay, no fuss.
        </h2>
      </div>

      <div className='flex gap-16'>
        <div className='bg-gradient-pink flex flex-col items-center gap-11 rounded-[30px] p-5 mt-36 max-w-[288px]'>
          <div>
            <h2 className='text-white text-2xl font-semibold'>
              Exclusive Discounts for Charities
            </h2>
          </div>
          <div className='bg-white w-full rounded-lg p-2 text-center'>
            <p className='gradient-text font-semibold text-xl'>Get Discount</p>
          </div>
        </div>

        <div className='bg-custom-gradient text-white p-5 rounded-[30px]'>
          <h1 className='text-30 font-semibold gradient-background py-2 px-10 rounded-[50px]'>Paid Events</h1>
        </div>
      </div>
    </main>
  )
}

export default Pricing