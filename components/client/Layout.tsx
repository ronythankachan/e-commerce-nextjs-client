import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-50">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
