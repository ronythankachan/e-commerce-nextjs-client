import Head from "next/head";
import ProductDetail from "../../components/client/ProductDetail";
import Layout from "../../components/client/Layout";
import {
  BrandType,
  IParams,
  ProductType,
  RatingType,
  ReviewType,
} from "../../types";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  getAllProductIds,
  getBrandByIdAPI,
  getProductByIdAPI,
  getRatingByProductIdAPI,
  getReviewsByProductIdAPI,
} from "../../lib/utils";
import Reviews from "../../components/client/Reviews";
import { createRef } from "react";

const ProductInfo = ({
  product,
  brand,
  rating,
  reviews,
}: {
  product: ProductType;
  brand: BrandType;
  rating: RatingType;
  reviews: ReviewType[];
}) => {
  const reviewRef = createRef<HTMLElement>();
  return (
    <Layout>
      <Head>
        <title>{product.title}</title>
      </Head>
      <main className="2xl:container 2xl:mx-auto bg-white shadom-sm mt-16 p-10">
        <ProductDetail
          rating={rating}
          reviews={reviews}
          product={product}
          brand={brand}
          reviewRef={reviewRef}
        />
        <hr className="my-8" />
        <Reviews rating={rating} reviews={reviews} reviewRef={reviewRef} />
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
  const rating = await getRatingByProductIdAPI(product._id);
  console.log(reviews);
  console.log(rating);
  return {
    props: {
      product,
      brand,
      reviews,
      rating,
    },
  };
};

export default ProductInfo;
