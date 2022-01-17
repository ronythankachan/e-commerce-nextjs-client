import Head from "next/head";
import Brands from "../components/client/Brands";
import Navbar from "../components/client/Navbar";
import NewArrivals from "../components/client/NewArrivals";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mt-16 bg-gray-50">
        <Navbar />
        <Brands />
        <NewArrivals />
      </main>
    </div>
  );
}
