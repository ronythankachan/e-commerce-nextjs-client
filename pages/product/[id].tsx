import Head from "next/head";
import ProductDetail from "../../components/client/ProductDetail";
import Reviews from "../../components/client/Reviews";
import Layout from "../../components/client/Layout";
import { IParams, ProductType } from "../../types";
import { GetStaticPaths, GetStaticProps } from "next";
import { products } from "../../data";
import { getAllProductIds } from "../../lib/utils";

const ProductInfo = ({ product }: { product: ProductType }) => {
  return (
    <Layout>
      <Head>
        <title>{product.title}</title>
      </Head>
      <main className="2xl:container 2xl:mx-auto bg-gray-50 mt-16 p-10">
        <ProductDetail product={product} />
        <Reviews id={product.id} />
      </main>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProductIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;
  const product = products.filter((product) => product.id === id)[0];
  return {
    props: {
      product,
    },
  };
};

export default ProductInfo;
