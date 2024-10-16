import Transactions from '@/src/Component/App/Transactions/Index';
import Layout from '@/src/Component/Core/Layout/Index';
import Layout2 from '@/src/Component/Core/Layout/Layout2';
import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
export default function Home() {
  const router = useRouter()
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    if(!accessToken){
      router.push('/auth')
    }
  },[])
  return (
    <>
      {/* <Layout>

      </Layout> */}
      <Layout2>
        <Transactions/>
      </Layout2>
    </>
  );
}
