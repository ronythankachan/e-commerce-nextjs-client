import Head from "next/head";
import ProductDetail from "../../components/client/ProductDetail";
import Layout from "../../components/client/Layout";
import { IParams, ProductType } from "../../types";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllProductIds, getAllProductsAPI } from "../../lib/utils";

const ProductInfo = ({ product }: { product: ProductType }) => {
  return (
    <Layout>
      <Head>
        <title>{product.title}</title>
      </Head>
      <main className="2xl:container 2xl:mx-auto bg-gray-50 mt-16 p-10">
        <ProductDetail product={product} />
      </main>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllProductIds();
  console.log("paths are", paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;
  console.log("id is" + id);
  const products = await getAllProductsAPI();
  console.log(products);
  const product = products.find((product: ProductType) => product._id === id);
  console.log("product is", product);
  return {
    props: {
      product,
    },
  };
};

export default ProductInfo;
