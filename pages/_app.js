import Layout from "@/src/Component/Core/Layout/Index";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import AuthContext from '@/Context/AuthContext';
import Layout2 from "@/src/Component/Core/Layout/Layout2";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  
  const isAuthPath = router.pathname === '/auth' || router.pathname === '/auth/forgot-password';

  return (
    <>
      {isAuthPath ? (
        <Layout>
          <AuthContext>
            <Component {...pageProps} />
          </AuthContext>
        </Layout>
      ) : (
        <Layout2>
          <AuthContext>
            <Component {...pageProps} />
          </AuthContext>
        </Layout2>
      )}
    </>
  );
}
