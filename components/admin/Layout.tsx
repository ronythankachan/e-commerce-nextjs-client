import Router from "next/router";
import useUser from "../../lib/useUser";
import Loading from "../general/loading/Loading";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({
  children,
  source,
}: {
  children: React.ReactNode;
  source: string;
}) => {
  const { user }: { user: any } = useUser({
    redirect: "/login",
    source,
  });
  if (!user || typeof window === undefined) {
    return (
      <div>
        <Navbar />
        <div className="flex mt-16">
          <Sidebar />
          <Loading />
        </div>
      </div>
    );
  }
  if (user && !user.admin) {
    Router.push("/");
  }
  return (
    <div>
      <Navbar />
      <div className="flex mt-16">
        <Sidebar />
        <div className="ml-16 md:ml-60 w-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
