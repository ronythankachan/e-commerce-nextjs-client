import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Fallback = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/admin/login");
  }, []);
  return <div>Login First</div>;
};

export default Fallback;
