import React from 'react'

const Button = ({ type, onClick, children, extrClass }) => {
  return (
    <button onClick={onClick} type={type} className={`bg-[#363740] cursor-pointer ${extrClass} text-white font-semibold text-[12px] rounded-[20px] p-2`}>{children}</button>
  )
}

export default Button