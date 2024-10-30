import React from 'react'

const Input = ({type, value, classes}) => {
  return (
    <input 
      type={type} 
      value={value}
      className={`bg-gray-100 text-center rounded-sm py-3 px-4 w-full font-semibold text-xl`} 
    />
  )
}

export default Input