import Head from "next/head";
import Layout from "../../components/admin/Layout";

const brands = () => {
  return (
    <Layout>
      <Head>
        <title>Orders</title>
      </Head>
      <div className="bg-gray-50 p-5 md:p-10">
        <h1 className="text-4xl font-bold justify-start">Brands</h1>
      </div>
    </Layout>
  );
};

export default brands;
