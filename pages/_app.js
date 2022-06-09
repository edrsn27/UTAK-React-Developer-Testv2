// import App from 'next/app'

import AuthProvider from "../context/AuthProvider";
import QueryProvider from "../context/QueryProvider";
import PosProvider from "../context/PosProvider";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <QueryProvider>
        <PosProvider>
          <Component {...pageProps} />
        </PosProvider>
      </QueryProvider>
    </AuthProvider>
  );
}

export default MyApp;
