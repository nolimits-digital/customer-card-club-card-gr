import React from 'react';
import Link from 'next/link';
const ForgotPass = () => {
  return (
    <div className="py-[20px] h-[100vh] flex justify-center items-center bg-[#f0f7f6] relative">
        <div className="relative z-10 bg-white rounded-[8px] max-w-[420px] w-full mx-auto px-[30px] md:px-[20px] py-[40px]" style={{ boxShadow: 'rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px' }}>
          <div className="w-[120px] mx-auto flex items-center justify-center mb-[30px]" style={{ border: '3px solid #FFFFFF' }}>
            <img src="../assets/images/logo/logo.jpg" alt="img" />
          </div>
          <form action='/auth'>
            <p className="text-center mb-[30px]">Please enter the email address associated with your account and We will email you a link to reset your password.</p>
            <label className="relative">Email Adddress</label>
            <input
              className="w-full h-[50px] px-[20px] py-[5px] text-[#111] text-[15px] font-[500] rounded-[6px] mb-[25px] mt-[5px] border-[1px] border-[rgba(0,0,0,0.15)]"
              id="email-basic" label="Email" name='email' variant="outlined"
            />

            <button type='submit' variant="contained" className="bg-[#5985fd] opacity-[0.9] hover:opacity-[1] delay-75 h-[50px] w-full text-[16px] font-[600] rounded-[6px] text-white">Submit</button>
            <Link href="/auth" className="bg-[#5985fd3a] hover:bg-[#5985fd59] flex items-center justify-center delay-75 h-[50px] w-full text-[16px] font-[600] rounded-[6px] mt-[20px] text-[#5985fd]">Back to Login</Link>

          </form>
        </div>
      </div>
  );
};

export default ForgotPass;