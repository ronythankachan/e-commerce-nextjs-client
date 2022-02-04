import "../styles/globals.css";
import type { AppProps } from "next/app";
import AlertProvider from "../components/general/alert/AlertProvider";
import Alert from "../components/general/alert/Alert";
import { CookiesProvider } from "react-cookie";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AlertProvider>
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
      <Alert />
    </AlertProvider>
  );
}

export default MyApp;
