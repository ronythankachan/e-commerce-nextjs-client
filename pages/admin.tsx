import Head from "next/head";
import { useState } from "react";
import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";
import Orders from "../components/Orders";
import Products from "../components/Products";
import Sidebar from "../components/Sidebar";

const admin = () => {
  const [tab, setTab] = useState<String>("products");
  const openedTab = (tab: String) => {
    switch (tab) {
      case "dashboard":
        return <Dashboard />;
      case "products":
        return <Products />;
      case "orders":
        return <Orders />;
    }
  };

  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="flex">
        <Sidebar setTab={setTab} />
        {openedTab(tab)}
      </main>
    </div>
  );
};

export default admin;
