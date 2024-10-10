import Link from 'next/link'
import React, { useContext } from 'react';
import { UserContext } from '@/Context/AuthContext';

const ClubCardBalance = () => {
    const { user } = useContext(UserContext)
    return (
        <div className="mt-[25px] rounded-[6px] p-[33px] bg-white" style={{ boxShadow: '0px 6px 3px 0px rgba(0, 0, 0, 0.16)' }}>
            <Link href='#' className="flex items-center justify-center max-w-[147px] w-full h-[51px] mx-[auto] rounded-[16px] text-[24px] font-[600] text-[#00549E]" style={{ border: '3px solid #00549E' }}>ClubCard</Link>
            <div className="mt-[29px]">
                <p className="text-[21px] font-[500] leafing-[160%] text-[#000] text-center mb-[7px]">Available: <span className="text-[#2F981C]">${parseFloat(user?.availableCoins).toFixed(2)}</span> <span className="font-[700]">Club€uros</span></p>
                <p className="text-[21px] font-[500] leafing-[160%] text-[#000] text-center">Total: <span>${parseFloat(user?.availableCoins).toFixed(2)}</span> <span className="font-[700]">Club€uros</span></p>
            </div>
        </div>
    )
}

export default ClubCardBalance