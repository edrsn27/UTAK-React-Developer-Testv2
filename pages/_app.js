// import App from 'next/app'

import AuthProvider from "../context/AuthProvider";
import QueryProvider from "../context/QueryProvider";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <QueryProvider>
        <Component {...pageProps} />
      </QueryProvider>
    </AuthProvider>
  );
}

export default MyApp;
