import Transactions from '@/src/Component/App/Transactions/Index';
import Layout from '@/src/Component/Core/Layout/Index';
import Layout2 from '@/src/Component/Core/Layout/Layout2';
import React from 'react'

export default function Home() {
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
