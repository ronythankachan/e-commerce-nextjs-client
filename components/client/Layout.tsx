import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <div className="bg-gray-50 min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
