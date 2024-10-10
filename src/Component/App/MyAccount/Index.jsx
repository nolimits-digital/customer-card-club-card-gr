import React from 'react'
import BackBtn from '../../Core/BackBtn/Index'
import Link from 'next/link'

const MyAccount = () => {
    return (
        <div className="relative mb-[100px]">
            <BackBtn pageTitle="My Account" />
            <div className="pt-[34px]">
                <h4 className="text-[22px] font-[600] mb-[26px] px-[25px]">Basic Info</h4>
                <div className="pl-[25px]">
                    <Link href="/my-account/edit-name">
                        <div className="flex items-center justify-between pr-[23px] py-[16px]" style={{ borderBottom: '1px solid #E8E8E8' }}>
                            <div className="w-[90%]">
                                <h6 className="text-[16px] font-[700] mb-[10px]">Name</h6>
                                <p className="text-[18px] font-[400] text-[#717171]">John Maltezos</p>
                            </div>
                            <img src="./assets/images/icons/arrow-right.svg" alt="icon" />
                        </div>
                    </Link>
                    <Link href="/my-account/edit-number">
                        <div className="flex items-center justify-between pr-[23px] py-[16px]" style={{ borderBottom: '1px solid #E8E8E8' }}>
                            <div className="w-[90%]">
                                <h6 className="text-[16px] font-[700] mb-[10px]">Phone number</h6>
                                <p className="text-[18px] font-[400] text-[#717171]">+30 3893 3783 721</p>
                            </div>
                            <img src="./assets/images/icons/arrow-right.svg" alt="icon" />
                        </div>
                    </Link>
                    <Link href="/my-account/edit-email">
                        <div className="flex items-center justify-between pr-[23px] py-[16px]" style={{ borderBottom: '1px solid #E8E8E8' }}>
                            <div className="w-[90%]">
                                <h6 className="text-[16px] font-[700] mb-[10px]">Email</h6>
                                <p className="text-[18px] font-[400] text-[#717171]">john@maltezos.com</p>
                            </div>
                            <img src="./assets/images/icons/arrow-right.svg" alt="icon" />
                        </div>
                    </Link>
                    <Link href="/my-account/changed-password">
                        <div className="flex items-center justify-between pr-[23px] py-[16px]" style={{ borderBottom: '1px solid #E8E8E8' }}>
                            <div className="w-[90%]">
                                <h6 className="text-[16px] font-[700] mb-[10px]">Password</h6>
                                <p className="text-[18px] font-[400] text-[#717171]">********</p>
                            </div>
                            <img src="./assets/images/icons/arrow-right.svg" alt="icon" />
                        </div>
                    </Link>
                    <Link href="#">
                        <div className="flex items-center justify-start gap-[20px] py-[18px]" style={{ borderBottom: '1px solid #E8E8E8' }}>
                            <img src="./assets/images/icons/signout.svg" alt="icon" />
                            <span className="text-[16px] font-[700]">Sign-out</span>
                        </div>
                    </Link>

                    <p className="text-[17px] font-[500] mt-[19px] mb-[15px]">Loyalty Club Member</p>
                    <div className="relative">
                        <img src="./assets/images/img/img.png" alt="img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyAccount