import Head from "next/head";
import { useState } from "react";
import Dashboard from "../../components/admin/Dashboard";
import Navbar from "../../components/admin/Navbar";
import Orders from "../../components/admin/Orders";
import Products from "../../components/admin/Products";
import Sidebar from "../../components/admin/Sidebar";
import Users from "../../components/admin/Users";

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
