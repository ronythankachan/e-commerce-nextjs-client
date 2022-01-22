import Head from "next/head";
import Layout from "../../components/admin/Layout";

const users = () => {
  return (
    <Layout>
      <Head>
        <title>Users</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-50 p-5 md:p-10">
        <h1 className="text-4xl font-bold justify-start">Users</h1>
      </div>
    </Layout>
  );
};

export default users;
