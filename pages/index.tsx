import Head from "next/head";
import Brands from "../components/client/Brands";
import NewArrivals from "../components/client/NewArrivals";
import Layout from "../components/client/Layout";
import { BrandType, ProductType } from "../types";
import { GetStaticProps } from "next";
import { getAllBrandsAPI, getAllProductsAPI } from "../lib/utils";
import { useContext } from "react";
import { AlertContext } from "../components/general/alert/AlertProvider";

export default function Home({
  products,
  brands,
}: {
  products: ProductType[];
  brands: BrandType[];
}) {
  const value: any = useContext(AlertContext);
  const [state, dispatch] = value;

  const showSuccessAlert = () => {
    dispatch({
      type: "SHOW_SUCCESS_ALERT",
      payload: { message: "This is a success alert" },
    });
  };
  const showErrorAlert = () => {
    dispatch({
      type: "SHOW_ERROR_ALERT",
      payload: { message: "This is a error alert" },
    });
  };

  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mt-16 bg-gray-50">
        <Brands brands={brands} />
        <button onClick={showSuccessAlert}> Show Success Alert</button>
        <button onClick={showErrorAlert}> Show Error Alert</button>

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
