import React from 'react'
import Input from '../components/Input'

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

      <div className='flex flex-wrap justify-center max-w-[943px] mx-auto gap-8'>
        <div className='bg-gradient-pink flex flex-col items-center gap-11 rounded-[30px] p-5 lg-custom:mt-52  w-72 h-[196px]'>
          <div>
            <h2 className='text-white text-2xl font-semibold'>
              Exclusive Discounts for Charities
            </h2>
          </div>
          <div className='bg-white w-full rounded-lg p-2 text-center'>
            <p className='gradient-text font-semibold text-xl'>Get Discount</p>
          </div>
        </div>

        <div className='bg-custom-gradient text-white p-5 w-72 h-[404px] rounded-[30px] text-center flex flex-col items-center gap-5'>
          <div className='gradient-background w-[255px] py-2 h-[53px] text-center rounded-[50px]'>
            <h2 className='text-30 font-semibold'>
              Paid Events
            </h2>
          </div>

          <div>
            <h1>
              <span className='text-6xl font-semibold block'>6.5%</span> 
              <span className='text-7xl font-semibold block'>+</span>
              <span className='text-5xl font-bold'>£0.30</span>
            </h1>
          </div>

          <div>
            <p>Per ticket sold</p>
            <small>exclusive of processing fees.*</small>
          </div>
          
        </div>

        <div className='bg-custom-gradient flex flex-col items-center justify-center rounded-[30px] p-5 lg-custom:mt-52 max-lg-custom:-order-2 w-72 h-[196px] text-white font-semibold'>
          <h2 className='text-2xl'>Free Events</h2>
          <h1 className='text-40'>No Fee</h1>
        </div>

        <p className='text-light-grey text-center'>
          Stripe payment processor, need to register with stripe and connect their account, this helps vendors keep their costs low. Funds will be deposited directly to their account, we don’t get any of the funds, we take the platform fee.*
        </p>
      </div>

    {/*ticekt fee calculator  */}
      <div className='bg-gradient-pink rounded-[20px] py-7 px-5'>
        <h1 className='font-bold text-40 leading-normal text-white '>
          Ticket Fee Calculator
        </h1>

        {/* 1st card row */}
        <div className='bg-white rounded-2xl px-8 py-4 flex max-sm:flex-col gap-9 mt-3'>
          <div className='flex-1'>
            <p className='text-light-grey font-semibold text-xl mb-4'>
              Ticket price
            </p>
            <Input
               type="text" 
               value='£ 2'
            />
            <p className='font-bold text-xl text-dark-grey mt-10'>
              Total ticket price:    
                <span className='text-violet-700'> £ 20.00 </span>
            </p>
          </div>
          <div className='flex-1'>
            <p className='text-light-grey font-semibold text-xl mb-4'>
              Total tickets
            </p>
            <Input
              type='text'
              value='10'
            />
            <p className='font-bold text-xl text-dark-grey mt-10'>
              Booking fee:    
                <span className=' text-violet-700'> £ 20.00 </span>
            </p>
          </div>
        </div>

        {/* 2nd card row  */}
        <div className='flex max-sm:flex-col gap-7 mt-3'>

          {/* card 1 */}
          <div className='bg-white rounded-2xl px-8 py-4 flex flex-col gap-9 mt-3 flex-1 text-center'>
            <h1 className='gradient-text text-30 font-semibold'>
              you absorb booking fee
            </h1>
            <div className=' flex gap-9 max-sm:flex-col'>
              <div className='flex-1'>
                <p className='text-light-grey font-semibold text-xl mb-4'>
                  Customer pays
                </p>
                <Input
                  type="text" 
                  value='£ 21.68' 
                />
              </div>
              <div className='flex-1'>
                <p className='text-light-grey font-semibold text-xl mb-4'>
                  Total due to you
                </p>
                <Input
                  type="text" 
                  value='£ 20.00'
                />
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className='bg-white rounded-2xl px-8 py-4 flex flex-col gap-9 mt-3 flex-1 text-center'>
            <h1 className='gradient-text text-30 font-semibold'>
              Customer pays booking fee
            </h1>
            
            <div className=' flex gap-9 max-sm:flex-col'>
              <div className='flex-1'>
                <p className='text-light-grey font-semibold text-xl mb-4'>
                  Customer pays
                </p>
                <Input
                  type="text" 
                  value='£ 21.68'
                />
              </div>
              
              <div className='flex-1'>
                <p className='text-light-grey font-semibold text-xl mb-4'>
                  Total due to you
                </p>
                <Input
                  type='text'
                  value='£ 20.00'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Pricing