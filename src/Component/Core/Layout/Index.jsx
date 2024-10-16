import React from 'react'
import { useRouter } from 'next/router'; // Import useRouter

const Layout = ({ children }) => {
  const router = useRouter();
  
  // Use logical OR (||) to check multiple routes
  const isHomeOrCards = router.pathname === '/' || router.pathname === '/cards';

  return (
    <div className={`max-w-[480px] xsm:max-w-[100%] overflow-y-scroll overflow-x-hidden w-full mx-auto h-[100vh] pb-[90px] ${isHomeOrCards ? 'bg-[#F2F1F7]' : 'bg-[#FFFFFF]'} pb-[45px]`}>
      {children}
    </div>
  );
}

export default Layout;
