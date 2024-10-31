import React from 'react'
import CategoriesCard from '../components/CategoriesCard'

const Categories = () => {
  return (
    <main className='container flex-col gap-16 justify-center mt-24 font-figtree'>
      <div className='text-center'>
        <div className="inline-block bg-pink-final text-white p-2 text-30 font-barlow rounded-[3px]">
          Categories
        </div>
        <h2 className="text-40 mt-3 font-semibold">
          Wide range of Muslim event categories
        </h2>
      </div>
      
      <div className='flex max-md:flex-col gap-5 items-center bottom'>
        <CategoriesCard
          img1text='Social'
          img2text='Eid Events'
          img1src='/images/Business.png.png'
          img2src='/images/Communities.png.png'
          class1='lg:top-40 max-lg-custom1:top-28'
          class2='lg:-bottom-48 max-lg-custom1:-bottom-32'
        />
        <CategoriesCard
          img1text='Marriage'
          img2text='Community'
          img1src='/images/Councils.png.png'
          img2src='/images/Entertainment.png.png'
          classes='md:mt-24 '
          class1='lg:-bottom-60 max-lg-custom1:-bottom-36'
          class2='lg:-bottom-36 max-lg-custom2:-bottom-24'
        />
        <CategoriesCard
          img1text='Academic'
          img2text='Nasheeds'
          img1src='/images/Academic.png.png'
          img2src='/images/Sporting-Club1.png.png'
          class1='lg:-bottom-48 max-lg-custom1:-bottom-32'
          class2='lg:-bottom-64 max-lg-custom1:-bottom-40'
        />
        <CategoriesCard
          img1text='Charity'
          img2text='Free'
          img1src='/images/Charities.png.png'
          img2src='/images/Cultural.png.png'
          classes='md:mt-24'
          class1='lg:-bottom-60 max-lg-custom1:-bottom-36'
          class2='lg:-bottom-48 max-lg-custom1:-bottom-32'
        />
      </div>
    </main>
  )
}

export default Categories