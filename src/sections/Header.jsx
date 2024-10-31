import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri'
import Button from '../components/Button';
import { GiHamburgerMenu } from 'react-icons/gi';

function Header() {

  const rightList = [
    'How it works',
    'Features',
    'Pricing',
    'FAQs',
    'About us',
    'Get Started',
  ]

  return (
    <main className='font-barlow'>
      {/* nav-top */}
      <div className='bg-custom-gradient h-[50px] text-white '>
        <div className='container items-center justify-between pt-3'>
        
          {/*nav left side */}
          <div className='flex items-center justify-center gap-4'>
            <div className='flex items-center gap-2'>
              <figure>
                <img src="/images/logo.png" alt="logo" />
              </figure>
              <p>English(UK)</p>
            </div>

            <button className='flex items-center justify-center bg-white text-dark-grey rounded-sm w-[99px] h-[27px] text-14  font-semibold'>
              Help Center
              <RiArrowDropDownLine/>
            </button>
          </div>

          {/*nav right side  */}
          <div className='flex items-center justify-center gap-6 max-lg:hidden text-base font-semibold'>
            <p>Find Events</p>
            <p>Create Events</p>

            <div className='flex items-center justify-center gap-3'>
              <Button classes='bg-pink-500'>
                Register
              </Button>
              
              <Button classes='bg-white text-dark-grey'>
                Sign in
              </Button>
              
              <Button classes='bg-white text-dark-grey'>
                For Customers
              </Button>
            </div>
          </div>

          {/* burger menu */}
          <div className='lg:hidden max-lg:block'>
            <GiHamburgerMenu/>
          </div>
        </div>
      </div>

      {/* nav-bottom */}
      <div className='container justify-between items-center h-[85px]'>
        <div>
          <figure>
            <img src="/images/Vector.png" alt="" />
          </figure>
        </div>

        <div className='flex items-center gap-11 max-lg:hidden'>
          {rightList.map((text, index) => (
           <p key={index} className={
              `text-base ${text === 'Get Started' ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#F81A84] to-[#2200F3]' : 'text-gray-700'} font-medium`
            }>
              {text}
            </p>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Header























// import React from 'react'
// import { RiArrowDropDownLine } from 'react-icons/ri'
// import Button from '../components/Button'
// import { GiHamburgerMenu } from 'react-icons/gi'

// function Header() {
//   return (
//     <main>
//       <div className='bg-custom-gradient h-[50px]'>
//         <div className='container text-whi'>
//           <div className='flex gap-4 items-center'>
//             <div className='flex items-center gap-2'>
//               <div>
//                 <img 
//                   src="/images/logo.png" 
//                   alt="logo"
//                   className='mb-1' 
//                 />
//               </div>

//               <p>English(UK)</p>
//             </div>
          
//             <div>
//               <Button classes='font-semibold text-sm flex bg-white text-dark-grey'>
//                 Help Center
//                 <RiArrowDropDownLine />
//               </Button>
//             </div>
//           </div>

//           <div className='flex items-center gap-3 max-lg:hidden'>
//             <div className='flex gap-2'>
//               <p>Find events</p>
//               <p>Create events</p>
//             </div>
//             <div className='flex gap-2'>
//               <Button classes='bg-pink-500' >
//                 Register
//               </Button>
//               <Button classes='text-dark-grey bg-white'>
//                 Sign in
//               </Button>
//               <Button classes='text-dark-grey bg-white'>
//                 For Customers
//               </Button>
//             </div>
//             <div className='lg:hidden max-lg:block'>
//               <GiHamburgerMenu />
//             </div>
//             <div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }

// export default Header