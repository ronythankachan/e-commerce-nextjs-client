import Head from "next/head";
import Brands from "../components/client/Brands";
import NewArrivals from "../components/client/NewArrivals";
import Layout from "../components/client/Layout";
import { ProductType } from "../types";
import { products, brands } from "../data";
import { GetStaticProps } from "next";

export default function Home({ products }: { products: ProductType[] }) {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-16 bg-gray-50">
        <Brands brands={brands} />
        <NewArrivals products={products} />
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      products,
      brands,
    },
  };
};
