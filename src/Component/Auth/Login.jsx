import React, { useContext, useState } from 'react';
import { UserContext } from '@/Context/AuthContext';
import { useRouter } from 'next/router';
import { baseUrl } from '@/baseUrl';
import Link from 'next/link';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUserId } = useContext(UserContext);
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const signIn = await fetch(`${baseUrl}/customer/customerLogIn`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    const response = await signIn.json();
    localStorage.setItem('accessToken', response.token)
    if (response.token) {
      const accessToken = response.token;
      const decodedToken = decodeJWT(accessToken);
      setUserId(decodedToken?.id);
      router.push('/cards')
      console.log({ decodedToken });
    } else {
      console.error('No access token found in the response');
    }
    debugger

  }

  const decodeJWT = (token) => {
    const base64Url = token.split('.')[1]; // Get the payload part of the token
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Replace URL-safe characters
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  };

  return (
    <div className="py-[20px] h-[100vh] flex justify-center items-center bg-[#f0f7f6] relative">
        <div className="relative z-10 bg-white rounded-[20px] max-w-[375px] w-full mx-auto px-[30px] py-[40px]" style={{ boxShadow: '0px 6px 3px 0px rgba(0, 0, 0, 0.16)' }}>
          <div className="w-[120px] mx-auto flex items-center justify-center mb-[30px]" style={{ border: '3px solid #FFFFFF' }}>
            <img src="./assets/images/logo/logo.jpg" alt="img" />
          </div>
          <form onSubmit={handleSubmit}>
            <label className="relative">Username</label>
            <input
              className="w-full h-[50px] px-[20px] py-[5px] text-[#111] text-[15px] font-[500] rounded-[6px] mb-[25px] mt-[5px]" style={{ border: '2px solid #ccc' }}
              onChange={(e) => setEmail(e.target.value)} fullWidth id="email-basic" label="Email" name='email' variant="outlined"
            />

            <label className="relative">Password</label>
            <input
              className="w-full h-[50px] px-[20px] py-[5px] text-[#111] text-[15px] font-[500] rounded-[6px] mb-[25px] mt-[5px]" style={{ border: '2px solid #ccc' }}
              onChange={(e) => setPassword(e.target.value)} fullWidth id="email-basic" sx={{ my: 2 }} label="Password" name='password' variant="outlined"
            />
            <div className="flex items-center justify-between">
              <div class="flex items-center gap-[8px] justify-start">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded !outline-none focus:ring-blue-00 dark:focus:ring-blue-00 dark:ring-offset-gray-00 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="default-checkbox" class="text-[14px] text-[#111]">Remember this Device</label>
              </div>
              <Link href="/auth/forgot-password" className="text-[#5985fd] font-[600] text-[14px] hover:underline">Forgot Password?</Link>
            </div>
            <button type='submit' variant="contained" className="bg-[#5985fd] opacity-[0.9] hover:opacity-[1] delay-75 h-[50px] w-full text-[16px] font-[600] rounded-[6px] mt-[25px] text-white">Sign In</button>
          </form>
        </div>
      </div>
  );
};

export default Login;