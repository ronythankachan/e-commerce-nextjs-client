import Head from "next/head";
import Layout from "../../components/admin/Layout";

const orders = () => {
  return (
    <Layout>
      <Head>
        <title>Orders</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-50 p-5 md:p-10">
        <h1 className="page-title">Orders</h1>
      </div>
    </Layout>
  );
};

export default orders;
