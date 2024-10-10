import React from 'react'

const InputFild = ({label, inputType, placeholder, inputValue}) => {
  return (
    <div className="relative">
        {label && <label className="text-[#000] text-[16px] font-[600] flex items-start justify-start mb-[8px]">{label}</label>}
        <input type={inputType} placeholder={placeholder} value={inputValue} className="py-[8px] px-[20px] rounded-[5px] bg-[#F4F4F4] w-full h-[47px] text-[17px] font-[500]" />
    </div>
  )
}

export default InputFild