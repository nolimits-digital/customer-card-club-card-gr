import React, { useContext } from 'react';
import { UserContext } from '@/Context/AuthContext';
import QRCode from 'react-qr-code';
import ClubCardBalance from './ClubCardBalance'

const MyClubcard = () => {
    const { user } = useContext(UserContext)
    return (
        <div className="relative">
            <div className="absolute top-0 left-0 w-full bg-[#19669D] h-[200px] z-0" />
            <div className="relative z-10 pt-[87px] px-[18px] pb-[25px]">
                <div className="bg-white px-[20%] rounded-[6px]" style={{ boxShadow: '0px 6px 3px 0px rgba(0, 0, 0, 0.16)' }}>
                    <div className="bg-[#19669D] rounded-full h-[96px] w-[96px] mx-auto flex items-center justify-center px-[20px] translate-y-[-53px]" style={{ border: '3px solid #FFFFFF' }}>
                        <img src="./assets/images/img/record-circle.png" alt="img" />
                    </div>
                    <div className="mx-auto mt-[4px] overflow-hidded relative w-full translate-y-[-47px] mb-[11px]">
                        <QRCode
                            size={256}
                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                            value={user?.cardNumber ? user?.cardNumber : ''}
                            viewBox={`0 0 256 256`}
                        />
                    </div>
                    <p className="text-[16px] font-[600] leafing-[160%] text-[#000] text-center translate-y-[-45px]">{user?.cardNumber}</p>
                </div>
                <ClubCardBalance />
            </div>
        </div>
    )
}

export default MyClubcard