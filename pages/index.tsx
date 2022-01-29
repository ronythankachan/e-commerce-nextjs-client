import Head from "next/head";
import Brands from "../components/client/Brands";
import NewArrivals from "../components/client/NewArrivals";
import Layout from "../components/client/Layout";
import { BrandType, ProductType } from "../types";
import { GetStaticProps } from "next";
import { getAllBrandsAPI, getAllProductsAPI } from "../lib/utils";

export default function Home({
  products,
  brands,
}: {
  products: ProductType[];
  brands: BrandType[];
}) {
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
  const products = await getAllProductsAPI();
  const brands = await getAllBrandsAPI();
  return {
    props: {
      products,
      brands,
    },
  };
};
