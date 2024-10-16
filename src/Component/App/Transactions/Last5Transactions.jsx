import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '@/Context/AuthContext';
import { baseUrl } from '@/baseUrl';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

const Last5Transactions = () => {
  const { user } = useContext(UserContext);
  const [transaction, setTransaction] = useState([]);
  
  useEffect(() => {
    if (!user?.id) return; // Ensure user ID is available before fetching
    fetch(`${baseUrl}/transaction/customer/${user.id}`)
      .then((res) => res.json())
      .then((data) => {
        Promise.all(
          data?.map(async (myData) => {
            const merchantRes = await fetch(`${baseUrl}/marchent/merchent/${myData?.merchantId}`);
            const merchantData = await merchantRes.json();
            return { ...myData, merchantName: merchantData?.Item?.businessName };
          })
        )
          .then((results) => setTransaction(results))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log({ err }));
  }, [user?.id]);
  


  console.log({transaction})
  return (
    <div className="rounded-[6px] bg-white mb-[24px] pt-[5px]" style={{ boxShadow: '0px 6px 3px 0px rgba(0, 0, 0, 0.16)' }}>
      <h5 className="text-[18px] font-[700] leading-[160%] text-[#000] py-[18px] px-[23px]">Last {transaction.length} transactions</h5>
      <ul style={{ borderTop: '1px solid #E8E8E8' }}>
        {transaction.map((transaction) => (
          <li key={transaction.id} className="px-[23px] py-[14px] flex items-center justify-between" style={{ borderBottom: '1px solid #E8E8E8' }}>
            <div className="w-[70%]">
              <p className="font-[700] text-[16px]">{transaction?.merchantName}</p>
              <span className="font-[500] text-[14px]">{format(new Date(transaction.date), 'dd/mm/yyyy')}</span>
            </div>
            <div className="w-[30%] text-right" style={{ color: transaction.color }}>
              <h6 className="font-[700] text-[16px]" style={{color: transaction?.method === 'CTM' ? 'red': 'green'}}>{transaction?.method === "MTC" ? `+ ${parseFloat(transaction?.Customerscashback).toFixed(2)}` :  `- ${parseFloat(transaction?.ammount).toFixed(2)}`}</h6>
              <i className='font-[500] text-[14px]' style={{color: transaction?.method === 'CTM' ? 'red': 'green'}}>Confirmed</i>
            </div>
          </li>
        ))}
      </ul>
      <div className="px-[23px] py-[15px]">
        <Link href="#" className="font-[500] text-[14px]"><span className="text-[#19669D]">Load more transactions</span></Link>
      </div>
    </div>
  )
}

export default Last5Transactions
