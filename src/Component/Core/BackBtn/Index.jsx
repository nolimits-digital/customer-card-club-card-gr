import Link from 'next/link';
import { useRouter } from 'next/router'; // Import useRouter
import React from 'react';

const BackBtn = ({ pageTitle }) => {
  const router = useRouter(); // Get the router object

  return (
    <div className="pt-[41px] pb-[28px] px-[28px] bg-[#19669D] flex items-center justify-start gap-[23px]">
      <button
        onClick={() => router.back()} // Navigate back when clicked
        className="relative delay-[0.4s] hover:scale-110"
      >
        <img src="../assets/images/icons/back-arrow.svg" alt="icon" />
      </button>
      <span className="text-[22px] font-[500] leading-[150%] text-white">{pageTitle}</span>
    </div>
  );
};

export default BackBtn;
