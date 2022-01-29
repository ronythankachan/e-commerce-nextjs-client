import "../styles/globals.css";
import type { AppProps } from "next/app";
import AlertProvider from "../components/general/alert/AlertProvider";
import Alert from "../components/general/alert/Alert";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AlertProvider>
      <Component {...pageProps} />
      <Alert />
    </AlertProvider>
  );
}

export default MyApp;
