import Head from "next/head";
import ProductDetail from "../../components/client/ProductDetail";
import Layout from "../../components/client/Layout";
import { BrandType, IParams, ProductType } from "../../types";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  getAllProductIds,
  getBrandByIdAPI,
  getProductByIdAPI,
  getReviewsByProductIdAPI,
} from "../../lib/utils";
import Reviews from "../../components/client/Reviews";
import { createRef } from "react";

const ProductInfo = ({
  product,
  brand,
}: {
  product: ProductType;
  brand: BrandType;
}) => {
  const reviewRef = createRef<HTMLElement>();
  return (
    <Layout>
      <Head>
        <title>{product.title}</title>
      </Head>
      <main className="2xl:container 2xl:mx-auto bg-gray-50 mt-16 p-10">
        <ProductDetail product={product} brand={brand} reviewRef={reviewRef} />
        <hr className="my-8" />
        <Reviews id={product._id!} reviewRef={reviewRef} />
      </main>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllProductIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;
  const product = await getProductByIdAPI(id as string);
  const brand = await getBrandByIdAPI(product.brand);
  const reviews = await getReviewsByProductIdAPI(product._id);
  return {
    props: {
      product,
      brand,
      reviews,
    },
  };
};

export default ProductInfo;
