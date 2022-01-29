import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useReducer } from "react";
import { alertReducer } from "../components/general/alert/AlertReducer";

interface AlertType {
  content: string;
  loading: boolean;
  visible: boolean;
}

const initialAlertValue: AlertType = {
  content: "",
  loading: false,
  visible: false,
};
export const AlertContext = createContext(initialAlertValue);

function MyApp({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(alertReducer, initialAlertValue);
  const value: any = [state, dispatch];
  return (
    <AlertContext.Provider value={value}>
      <Component {...pageProps} />
    </AlertContext.Provider>
  );
}

export default MyApp;
