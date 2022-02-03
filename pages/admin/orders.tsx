import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/admin/Layout";

const orders = () => {
  const router = useRouter();
  return (
    <Layout source={router.asPath}>
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
