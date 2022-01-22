import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
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
