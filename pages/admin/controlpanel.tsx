import Head from "next/head";
import { useState } from "react";
import Dashboard from "../../components/Dashboard";
import Navbar from "../../components/Navbar";
import Orders from "../../components/Orders";
import Products from "../../components/Products";
import Sidebar from "../../components/Sidebar";
import Users from "../../components/Users";

const controlpanel = () => {
  const [tab, setTab] = useState<String>("products");
  const openedTab = (tab: String) => {
    switch (tab) {
      case "dashboard":
        return <Dashboard />;
      case "products":
        return <Products />;
      case "orders":
        return <Orders />;
      case "users":
        return <Users />;
    }
  };

  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex mt-16">
        <Sidebar setTab={setTab} />
        {openedTab(tab)}
      </main>
    </div>
  );
};

export default controlpanel;
