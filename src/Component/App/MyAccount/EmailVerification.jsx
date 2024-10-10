import React, { useRef } from 'react'
import BackBtn from '../../Core/BackBtn/Index'
import InputBtn from '../../Core/InputBtn'

const EmailVerification = () => {
  const codeLength = 6
  const inputRefs = useRef([])

  // Function to handle input change and move focus to the next input
  const handleInputChange = (e, index) => {
    const { value } = e.target
    if (value.length === 1 && index < codeLength - 1) {
      // Move to the next input if a single character is entered
      inputRefs.current[index + 1].focus()
    }
  }

  // Function to handle backspace and move to the previous input
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      // Move to the previous input if backspace is pressed and the current input is empty
      inputRefs.current[index - 1].focus()
    }
  }

  return (
    <div className="relative">
      <BackBtn pageTitle="Basic Info" />
      <div className="px-[25px] pt-[34px]">
        <h4 className="text-[22px] font-[600] mb-[15px]">Email Verification code</h4>
        <p className="mb-[38px]">We sent a verification code to your email. Enter the code from the mobile in the field below.</p>

        <form action="/my-account">
          <p className="text-[13px] font-[500] mb-[11px]">Type your 6 digits security code</p>

          {/* Map to generate input fields dynamically */}
          <div className="flex items-center justify-between">
            {Array(codeLength).fill(0).map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="rounded-[5px] bg-[#F4F4F4] w-[14%] h-[50px] text-[17px] font-[500] px-[17px] text-center"
                onChange={(e) => handleInputChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputRefs.current[index] = el)} // Assign ref for each input
              />
            ))}
          </div>

          <div className="my-[25px]">
            <InputBtn btnText="Confirm" btnType="submit" />
          </div>
          <p className="text-[14px] font-[500]">Didn't get the code? <span className="text-[#19669D] cursor-pointer">Resend</span></p>
        </form>
      </div>
    </div>
  )
}

export default EmailVerification
