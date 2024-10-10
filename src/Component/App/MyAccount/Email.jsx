import React from 'react'
import BackBtn from '../../Core/BackBtn/Index'
import InputFild from '../../Core/InputFild'
import InputBtn from '../../Core/InputBtn'

const Email = () => {
  return (
    <div className="relative">
        <BackBtn pageTitle="Basic Info" />
        <div className="px-[25px] pt-[34px]">
            <h4 className="text-[22px] font-[600] mb-[15px]">Email</h4>
            <p className="mb-[63px]">You'll use this email to get notifications, sign-in and recover your account.</p>

            <form action="/my-account/email-verification">
                <div className="mb-[6px] relative">
                    <InputFild inputType="email" placeholder="your email" inputValue="john@maltezos.com"/>
                </div>
                <p className="text-[13px] font-[500]">A verification code will be sent to this email</p>

                <div className="mt-[30px]">
                    <InputBtn btnText="Update" btnType="submit" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Email