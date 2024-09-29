import "@/styles/globals.css";
import Layout from '@/Layout';
import AuthContext from '@/Context/AuthContext'
import { useRouter } from "next/router";
import Layout2 from "@/Layout/Layout2";
export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      {router.pathname === '/auth' ? <Layout><AuthContext><Component {...pageProps} /></AuthContext></Layout> : <Layout2><AuthContext><Component {...pageProps} /></AuthContext></Layout2>}
    </>
  );
}
