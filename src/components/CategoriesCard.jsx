import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const CategoriesCard = ({img1text, img2text, img1src, img2src, class1, class2, classes}) => {
  return (
      <div className={`flex flex-col gap-5 ${classes}`}>
        <div className='relative grid place-items-center'>
          <img 
            src={img1src} 
            alt="img" 
            className='rounded-3xl'
          />
          <div className={`flex inset-0 items-center gap-2 absolute text-white left-6 ${class1}`}>
            <p className='font-semibold  text-[23px]'>
              {img1text}
            </p>
            <FaArrowRight className='text-lg'/>
          </div>
        </div>
        <div className='relative'>
          <img 
            src={img2src} 
            alt="img"
            className='rounded-3xl'
          />
          <div className={`flex items-center gap-2 absolute inset-0 text-white left-6 ${class2}`}>
            <p className='font-semibold text-[23px]'>
              {img2text}
            </p>
            <FaArrowRight className='text-lg'/>
          </div>
        </div>
      </div>

  )
}

export default CategoriesCard