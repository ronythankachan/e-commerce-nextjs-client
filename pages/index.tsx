import Head from "next/head";
import Navbar from "../components/client/Navbar";
import NewArrivals from "../components/client/NewArrivals";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <NewArrivals />
      </main>
    </div>
  );
}
