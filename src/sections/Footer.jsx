import React from 'react'

const Footer = () => {
  const footerContent = [
    {
      h1: 'Customers',
      text1: 'Find an event',
      text2: 'Find your tickets',
      text3: 'FAQS'
    },
    {
      h1: 'Organisers',
      text1: 'create an event',
      text2: 'List your event',
      text3: 'Help'
    },
    {
      h1: 'Company',
      text2: 'Privacy & terms',
    },
    {
      h1: 'Connect',
      text1: 'Contact us',
      text2: 'Facebook',
      text3: 'Instagram',
      text4: 'X.com'
    }
  ]
  
  return (
    <footer className='bg-custom-gradient text-white font-barlow px-24 py-12 mt-9'>
      <div className='flex container flex-wrap justify-center'>
        <div className='flex-grow mb-5 mr-2'>
          <figure>
            <img 
              src="/images/footer-logo.png" 
              alt="logo" 
            />
          </figure>
          <p className='mt-6'>
            © 2024 themuslimticket
          </p>
        </div>

        <div>
          <ul className='flex gap-x-24 gap-y-3 mr-14 flex-wrap'>
            {
              footerContent.map((footer) => (
                <li key={footer.h1} className='flex flex-col gap-3'>
                  <h2 className='font-semibold text-lg'>
                    {footer.h1}
                  </h2>
                  <p>{footer.text1}</p>
                  <p>{footer.text2}</p>
                  <p>{footer.text3}</p>
                  <p>{footer.text4}</p>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer