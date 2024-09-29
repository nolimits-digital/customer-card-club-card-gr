import { Box, Button, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import {baseUrl} from '@/baseUrl'
import { UserContext } from '@/Context/AuthContext';
import { useRouter } from 'next/router';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setUserId} = useContext(UserContext);
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const signIn = await fetch(`${baseUrl}/customer/customerLogIn`,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({email, password}),
    })
    const response = await signIn.json();
    localStorage.setItem('accessToken', response.token)
    if (response.token) {
      const accessToken = response.token;
      const decodedToken = decodeJWT(accessToken);
      setUserId(decodedToken?.id);
      router.push('/dashboard/cards')
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
    <Box display='flex' justifyContent='center' py={20}>
      <Box width={'50%'} >
        <form onSubmit={handleSubmit}>
          <TextField onChange={(e) => setEmail(e.target.value)} fullWidth id="email-basic" label="Email" name='email' variant="outlined" />
          <TextField onChange={(e) => setPassword(e.target.value)} fullWidth id="email-basic" sx={{ my: 2 }} label="Password" name='password' variant="outlined" />
          <Box display='flex' justifyContent='center'><Button type='submit' variant="contained">Log In</Button></Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;