import "../styles/globals.css";
import type { AppProps } from "next/app";
import AlertProvider from "../components/general/alert/AlertProvider";
import Alert from "../components/general/alert/Alert";
import { useEffect, useState } from "react";
import { decode } from "jsonwebtoken";
import { useRouter } from "next/router";
import Layout from "../components/admin/Layout";
import Fallback from "../components/admin/Fallback";

interface UserData {
  email: string;
  admin: boolean;
}
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [user, setUser] = useState<UserData | null>(null);

  // get user info from localstorage and set it as state
  useEffect(() => {
    let accessToken: string = localStorage.getItem("accessToken") || "";
    const result: any = decode(accessToken);
    console.log("result", result);
    if (result) {
      console.log("result is not empty");
      setUser({
        email: result.email,
        admin: result.admin,
      });
    }
  }, []);

  console.log("user data is ", user);
  if (pageProps.protected && user && user.admin && !pageProps.admin) {
    return <p>You dont have permission to view this page</p>;
  }

  if (pageProps.protected && !user) {
    return <Fallback />;
  }

  return (
    <AlertProvider>
      <Component {...pageProps} />
      <Alert />
    </AlertProvider>
  );
}

export default MyApp;
