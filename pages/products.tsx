import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import Filters from "../components/client/Filters";
import Layout from "../components/client/Layout";
import Product from "../components/client/Product";
import Products from "../components/client/Products";
import {
  getAllBrandsAPI,
  getAllCategoriesAPI,
  getAllProductsAPI,
} from "../lib/utils";
import { BrandType, CategoryType, ProductType } from "../types";

const products = ({
  products,
  brands,
  categories,
}: {
  products: ProductType[];
  brands: BrandType[];
  categories: CategoryType[];
}) => {
  console.log(products);
  return (
    <Layout>
      <Head>
        <title>Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mt-16 bg-gray-50 flex">
        <Filters brands={brands} categories={categories} />
        <div className="flex flex-col items-center md:ml-60 w-full p-3">
          <form className="w-full md:w-1/2 pb-5 md:p-5">
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
  const brands = await getAllBrandsAPI();
  const categories = await getAllCategoriesAPI();
  console.log(products);
  return {
    props: {
      products,
      brands,
      categories,
    },
  };
};
