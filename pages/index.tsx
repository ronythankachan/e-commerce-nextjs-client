import Head from "next/head";
import Brands from "../components/client/Brands";
import NewArrivals from "../components/client/NewArrivals";
import Layout from "../components/client/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-16 bg-gray-50">
        <Brands />
        <NewArrivals />
      </div>
    </Layout>
  );
}
