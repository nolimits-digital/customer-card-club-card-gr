import React, { createContext, useEffect, useState } from 'react';
import {baseUrl} from '@/baseUrl'

export const UserContext = createContext();
const index = ({children}) => {
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState('');

  const value = {
    user, setUser, userId, setUserId
  }

  useEffect(() => {
    const decodeJWT = (token) => {
      try {
        const base64Url = token.split('.')[1]; // Get the payload part of the token
        if (!base64Url) {
          throw new Error('Invalid token format');
        }
        
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Replace URL-safe characters
        const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
  
        return JSON.parse(jsonPayload);
      } catch (error) {
        console.error('Failed to decode JWT:', error);
        return null;
      }
    };
  
    const localToken = localStorage.getItem('accessToken');
    const decodeResult = localToken ? decodeJWT(localToken) : { id: '' };
    
    setUserId(decodeResult?.id);
  }, [userId]);

  useEffect(() => {
    fetch(`${baseUrl}/customer/customer/${userId}`)
    .then(res => res.json())
    .then(data => setUser(data?.Item))
    .catch(err => console.log(err))
  },[userId, user])

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export default index;