import Head from "next/head";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const dashboard = () => {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar/>
      </header>
      <main>
        <Sidebar/>
        
      </main>
    </div>
  );
};

export default dashboard;
