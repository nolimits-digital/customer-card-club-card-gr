import Link from 'next/link';
import { useRouter } from 'next/router'; // Import useRouter
import React from 'react';

const BottomNavigation = () => {
  const router = useRouter(); // Get the router object

  return (
    <div className="fixed bottom-nav z-[999] bottom-0 max-w-[480px] xsm:max-w-[100%] w-full bg-white" style={{ borderTop: '1px solid #E8E8E8' }}>
      <div className="flex items-center justify-between">
        <div className="w-1/3">
          <Link href="/" className={`flex flex-col items-center pb-[14px] pt-[22px] justify-center w-full text-center ${router.pathname === '/' ? 'active' : ''}`}>
            <img src="../assets/images/icons/transactions-icon.svg" alt="icon" className="icon-defult" />
            <img src="../assets/images/icons/transactions-icon-active.svg" alt="icon" className="icon-active" />
            <span className="font-[500] text-[15px] text-[#000] mt-[12px]">Transactions</span>
          </Link>
        </div>
        <div className="w-1/3">
          <Link href="/cards" className={`flex flex-col items-center pb-[14px] pt-[22px] justify-center w-full text-center ${router.pathname === '/cards' ? 'active' : ''}`}>
            <img src="../assets/images/icons/clubcard-icon.svg" alt="icon" className="icon-defult" />
            <img src="../assets/images/icons/clubcard-icon-active.svg" alt="icon" className="icon-active" />
            <span className="font-[500] text-[15px] text-[#000] mt-[12px]">Clubcard</span>
          </Link>
        </div>
        <div className="w-1/3">
          <Link href="/my-account" className={`flex flex-col items-center pb-[14px] pt-[22px] justify-center w-full text-center ${router.pathname === '/my-account' ? 'active' : ''}`}>
            <img src="../assets/images/icons/account-icon.svg" alt="icon" className="icon-defult" />
            <img src="../assets/images/icons/account-icon-active.svg" alt="icon" className="icon-active" />
            <span className="font-[500] text-[15px] text-[#000] mt-[12px]">My Account</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
