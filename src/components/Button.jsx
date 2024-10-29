import React from 'react'

function Button({children, classes}) {
  return (
    <div className= {`rounded-[3px] px-4 py-1 text-14 font-semibold items-center flex cursor-pointer ${classes}`}>
      {children}
    </div>
  )
}

export default Button