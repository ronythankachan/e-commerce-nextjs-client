import {
  CurrencyRupeeIcon,
  ShoppingBagIcon,
  TruckIcon,
} from "@heroicons/react/outline";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Layout from "../../components/admin/Layout";
import { checkAdminAccess } from "../../lib/utils";

const dashboard = () => {
  return (
    <Layout>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-50 w-full p-5 md:p-10 space-y-8">
        <h1 className="page-title">Dashboard</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="bg-white shadow-sm rounded h-20 px-10 flex items-center border space-x-8 min-w-max">
            <CurrencyRupeeIcon className="h-12 w-12 text-green-600 p-2 bg-green-300 rounded-full" />
            <div>
              <h3 className="font-semibold">Total Sales</h3>
              <p className="text-md">Rs. 123000</p>
            </div>
          </div>
          <div className="bg-white shadow-sm rounded h-20 px-10 flex items-center border space-x-8 min-w-max">
            <TruckIcon className="h-12 w-12 text-blue-600 p-2 bg-blue-300 rounded-full" />
            <div>
              <h3 className="font-semibold">Total Orders</h3>
              <p className="text-md">4353</p>
            </div>
          </div>
          <div className="bg-white shadow-sm rounded h-20 px-10 flex  items-center border space-x-8 min-w-max">
            <ShoppingBagIcon className="h-12 w-12 text-yellow-600 p-2 bg-yellow-300 rounded-full" />
            <div>
              <h3 className="font-semibold">Total products</h3>
              <p className="text-md">47395</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default dashboard;

export const getServerSideProps: GetServerSideProps = async ({
  req,
  resolvedUrl,
}) => {
  return await checkAdminAccess(req, resolvedUrl);
};
