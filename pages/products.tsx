import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import Filters from "../components/client/Filters";
import Layout from "../components/client/Layout";
import Product from "../components/client/Product";
import Products from "../components/client/Products";
import { getAllProductsAPI } from "../lib/utils";
import { ProductType } from "../types";

const products = ({ products }: { products: ProductType[] }) => {
  console.log(products);
  return (
    <Layout>
      <Head>
        <title>Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mt-16 bg-gray-50 grid grid-cols-product-page">
        <Filters />

        <div>
          <form className="py-5 px-96">
            <input type="text" placeholder="Search..." className="input-text" />
          </form>
          <Products products={products} />
        </div>
      </main>
    </Layout>
  );
};

export default products;

export const getStaticProps: GetStaticProps = async () => {
  const products = await getAllProductsAPI();
  console.log(products);
  return {
    props: {
      products,
    },
  };
};
