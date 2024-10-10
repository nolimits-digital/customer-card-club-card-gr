import React, { useState, useEffect } from 'react'
import BackBtn from '../../Core/BackBtn/Index'
import InputFild from '../../Core/InputFild'

const ChangePasswordComponent = () => {
  // States to manage visibility of password inputs and form values
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // State to manage button enabled/disabled and password match error
  const [isBtnEnabled, setIsBtnEnabled] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  // Function to toggle password visibility
  const togglePasswordVisibility = (field) => {
    if (field === 'current') {
      setShowCurrentPassword(!showCurrentPassword)
    } else if (field === 'new') {
      setShowNewPassword(!showNewPassword)
    } else if (field === 'confirm') {
      setShowConfirmPassword(!showConfirmPassword)
    }
  }

  // useEffect to check password match and form validation
  useEffect(() => {
    if (newPassword && confirmPassword) {
      if (newPassword === confirmPassword) {
        setErrorMessage('')
        setIsBtnEnabled(true) // Enable the button
      } else {
        setErrorMessage('Passwords do not match!')
        setIsBtnEnabled(false) // Disable the button
      }
    } else {
      setIsBtnEnabled(false) // Disable if fields are empty
    }
  }, [newPassword, confirmPassword]) // Run when these states change

  // Function to handle password input changes
  const handleInputChange = (e, field) => {
    const value = e.target.value

    if (field === 'current') {
      setCurrentPassword(value)
    } else if (field === 'new') {
      setNewPassword(value)
    } else if (field === 'confirm') {
      setConfirmPassword(value)
    }
  }

  return (
    <div className="relative">
      <BackBtn pageTitle="Basic Info" />
      <div className="px-[25px] pt-[34px]">
        <h4 className="text-[22px] font-[600] mb-[15px]">Password</h4>
        <p className="mb-[28px]">Your password must be at least 8 characters long and contain at least one digit and one non-digit character</p>

        <form action="/my-account">
          {/* Current Password Field */}
          <div className="mb-[20px] relative">
            <InputFild
              label="Current password"
              inputType={showCurrentPassword ? 'text' : 'password'}
              onChange={(e) => handleInputChange(e, 'current')}
            />
            <span
              className={`absolute z-10 right-[15px] ${showCurrentPassword ? 'bottom-[12px]' : 'bottom-[15px]'} cursor-pointer`}
              onClick={() => togglePasswordVisibility('current')}
            >
              <img
                src={showCurrentPassword ? '../assets/images/icons/eye-close.svg' : '../assets/images/icons/eye.svg'}
                alt="icon"
              />
            </span>
          </div>

          {/* New Password Field */}
          <div className="mb-[20px] relative">
            <InputFild
              label="New password"
              inputType={showNewPassword ? 'text' : 'password'}
              onChange={(e) => handleInputChange(e, 'new')}
            />
            <span
              className={`absolute z-10 right-[15px] ${showNewPassword ? 'bottom-[12px]' : 'bottom-[15px]'} cursor-pointer`}
              onClick={() => togglePasswordVisibility('new')}
            >
              <img
                src={showNewPassword ? '../assets/images/icons/eye-close.svg' : '../assets/images/icons/eye.svg'}
                alt="icon"
              />
            </span>
          </div>

          {/* Confirm New Password Field */}
          <div className="mb-[20px] relative">
            <InputFild
              label="Confirm new password"
              inputType={showConfirmPassword ? 'text' : 'password'}
              onChange={(e) => handleInputChange(e, 'confirm')}
            />
            <span
              className={`absolute z-10 right-[15px] ${showConfirmPassword ? 'bottom-[12px]' : 'bottom-[15px]'} cursor-pointer`}
              onClick={() => togglePasswordVisibility('confirm')}
            >
              <img
                src={showConfirmPassword ? '../assets/images/icons/eye-close.svg' : '../assets/images/icons/eye.svg'}
                alt="icon"
              />
            </span>
          </div>

          {/* Error message for password mismatch */}
          {errorMessage && <p className="mb-4 text-sm text-red-500">{errorMessage}</p>}

          {/* Update Button */}
          <div className="mt-[57px]">
            <button
              type="submit"
              className={`flex items-center justify-center h-[47px] rounded-[5px] text-[17px] font-[500] w-full ${
                isBtnEnabled ? 'bg-[#000] text-white' : 'bg-[#F4F4F4] text-[#A5A5A5] cursor-not-allowed'
              }`}
              disabled={!isBtnEnabled}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ChangePasswordComponent
