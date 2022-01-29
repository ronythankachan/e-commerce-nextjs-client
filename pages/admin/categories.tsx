import Head from "next/head";
import Layout from "../../components/admin/Layout";

const categories = () => {
  return (
    <Layout>
      <Head>
        <title>Categories</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-50 p-5 md:p-10 space-y-8">
        <header className="flex flex-col md:flex-row justify-between md:items-center">
          <h1 className="page-title">Categories</h1>
          <div className="flex space-x-2 mt-4 md:mt-0 md:space-y-0">
            <button className="bg-blue-600 px-4 py-2 md:h-fit rounded-md text-white hover:text-gray-300 w-fit h-fit">
              Add Category
            </button>
          </div>
        </header>
      </div>
    </Layout>
  );
};

export default categories;
