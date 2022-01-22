import Head from "next/head";
import React, { useEffect, useState } from "react";
import Layout from "../../components/admin/Layout";
import { ProductType } from "../../types";

const productInitialValues: ProductType = {
  id: "",
  title: "",
  brand: "",
  description: "",
  price: 0,
  discount: 0,
  categories: [],
  tags: [],
  images: [],
  extraInfo: [],
  rating: 7.5,
  publish: false,
};

const saveproduct = ({ id = "" }: { id: string }) => {
  const isAddMode = !id;
  const [productData, setProductData] = useState(productInitialValues);
  useEffect(() => {
    if (!isAddMode) {
      //  populate productInitialValues
    }
  }, []);
  return (
    <Layout>
      <Head>
        <title>Save Product</title>
      </Head>
      <main className="bg-gray-50 w-full p-5 md:p-10 space-y-8">
        <h1 className="page-title">Save Product</h1>
      </main>
    </Layout>
  );
};

export default saveproduct;
