import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-50">{children}</div>
    </div>
  );
};

export default Layout;
