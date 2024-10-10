import React from 'react'
import BackBtn from '../../Core/BackBtn/Index'
import InputFild from '../../Core/InputFild'
import InputBtn from '../../Core/InputBtn'

const NameComponent = () => {
  return (
    <div className="relative">
        <BackBtn pageTitle='Basic Info' />
        <div className="px-[25px] pt-[34px]">
            <h4 className="text-[22px] font-[600] mb-[15px]">Basic Info</h4>
            <p className="mb-[28px]">This is the name that is displayed in your account.</p>

            <form action="/my-account">
                <div className="mb-[20px] relative">
                    <InputFild label="First Name" inputType="text" placeholder="First Name" inputValue="John"/>
                    <span className="absolute z-10 right-[15px] bottom-[15px] cursor-pointer"><img src="../assets/images/icons/cross.svg" alt="icon" /></span>
                </div>
                <div className="mb-[20px] relative">
                    <InputFild label="Last Name" inputType="text" placeholder="Last Name" inputValue="Maltezos"/>
                    <span className="absolute z-10 right-[15px] bottom-[15px] cursor-pointer"><img src="../assets/images/icons/cross.svg" alt="icon" /></span>
                </div>

                <div className="mt-[57px]">
                    <InputBtn btnText="Update" btnType="submit" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default NameComponent