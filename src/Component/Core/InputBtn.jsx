import React from 'react'

const InputBtn = ({btnText, btnType}) => {
  return (
    <button type={btnType} className="flex items-center justify-center h-[47px] rounded-[5px] bg-[#000] text-[17px] text-white font-[500] w-full">
        {btnText}
    </button>
  )
}

export default InputBtn