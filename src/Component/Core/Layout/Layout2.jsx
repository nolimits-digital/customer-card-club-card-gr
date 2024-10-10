import React from 'react';
import BottomNavigation from '../Footer/Index';
import { useRouter } from 'next/router'; // Import useRouter

const Layout2 = ({ children }) => {
  const router = useRouter();
  
  // Use logical OR (||) to check multiple routes
  const isHomeOrCards = router.pathname === '/' || router.pathname === '/cards';

  return (
    <div className={`max-w-[480px] xsm:max-w-[100%] w-full mx-auto h-[100vh] ${isHomeOrCards ? 'bg-[#F2F1F7]' : 'bg-[#FFFFFF]'} relative overflow-y-scroll overflow-x-hidden pb-[45px]`}>
      <div className="relative z-0">
        {children}
      </div>
      <BottomNavigation />
    </div>
  );
}

export default Layout2;
