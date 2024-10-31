import React from 'react'

const Benefits = () => {

  const benefits = [
    {
      text: 'Easy to Use',
      img: '/images/easyToUse-img.png',
      icon: '/images/hand-icon.png',
      alt:'img'
    },
    {
      text: 'Low Fees',
      img: '/images/lowFee-img.png',
      icon: '/images/lowFee-icon.png',
      alt:'img'
    },
    {
      text: 'More Features',
      img: '/images/moreFeatures-img.png',
      icon: '/images/morefeatures-icon.png',
      alt:'img'
    },
    {
      text: 'Get Discounts',
      img: '/images/discounts-img.png',
      icon: '/images/discounts-icon.png',
      alt:'img'
    }
  ]

  return (
    <main className='container flex-wrap justify-evenly gap-5 mt-9'>
      {
        benefits.map((item, index) => (
          <div key={index} className='relative'>
            <div>
              <img 
                src={item.img} 
                alt={item.alt} 
              />
            </div>

            <div className='absolute inset-0 flex flex-col justify-around ms-3'>
              <div>
                <img src={item.icon} />
              </div>
              <p className='text-30 text-white'>
                {item.text}
              </p>
            </div>
          </div>
        ))
      }
    </main>
  )
}

export default Benefits