import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { authorizeAPI } from "./utils";

const useUser = ({
  redirect,
  source,
}: {
  redirect: string;
  source: string;
}) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  useEffect(() => {
    // verify user
    const verifyUser = async () => {
      const accessToken: string = localStorage.getItem("accessToken") || "";
      try {
        await authorizeAPI(accessToken);
        const decoded_token: any = jwtDecode(accessToken);
        setUser(decoded_token);
      } catch (err) {
        if (source) router.push(`${redirect}?next=${source}`);
        else router.push(`${redirect}`);
      }
    };
    verifyUser();
  }, []);
  return {
    user,
  };
};

export default useUser;
