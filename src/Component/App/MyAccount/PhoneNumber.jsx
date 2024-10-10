import React from 'react'
import BackBtn from '../../Core/BackBtn/Index'
import InputFild from '../../Core/InputFild'
import InputBtn from '../../Core/InputBtn'

const PhoneNumber = () => {
  return (
    <div className="relative">
        <BackBtn pageTitle="Basic Info" />
        <div className="px-[25px] pt-[34px]">
            <h4 className="text-[22px] font-[600] mb-[15px]">Phone number</h4>
            <p className="mb-[63px]">You'll use this number to get notifications and recover your account.</p>

            <form action="/my-account/phn-verification">
                <div className="mb-[6px] relative">
                    <InputFild inputType="text" placeholder="Phone number" inputValue="+3038933783721"/>
                </div>
                <p className="text-[13px] font-[500]">A verification code will be sent on this number</p>

                <div className="mt-[30px]">
                    <InputBtn btnText="Update" btnType="submit" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default PhoneNumber