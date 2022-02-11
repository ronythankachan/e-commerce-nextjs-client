import { GetStaticProps } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Filters from "../components/client/Filters";
import Layout from "../components/client/Layout";
import Products from "../components/client/Products";
import {
  getAllBrandsAPI,
  getAllCategoriesAPI,
  getAllProductsAPI,
} from "../lib/utils";
import { BrandType, CategoryType, FilterType, ProductType } from "../types";

const products = ({
  products,
  brands,
  categories,
}: {
  products: ProductType[];
  brands: BrandType[];
  categories: CategoryType[];
}) => {
  const [filters, setFilters] = useState<FilterType>({
    search: "",
    brand: "",
    categories: [],
  });
  //whenever a change in filters, reload the data
  useEffect(() => {
    console.log(filters);
  }, [filters]);

  return (
    <Layout>
      <Head>
        <title>Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mt-16 bg-gray-50 flex">
        <Filters
          brands={brands}
          categories={categories}
          filters={filters}
          setFilters={setFilters}
        />
        <div className="flex flex-col items-center md:ml-60 w-full p-3">
          <form className="w-full md:w-1/2 pb-5 md:p-5">
            <input
              type="text"
              placeholder="Search..."
              className="input-text"
              name="search"
              value={filters.search}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  [e.target.name]: e.target.value,
                })
              }
            />
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
