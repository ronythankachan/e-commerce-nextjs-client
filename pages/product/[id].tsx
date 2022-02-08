import Head from "next/head";
import ProductDetail from "../../components/client/ProductDetail";
import Layout from "../../components/client/Layout";
import { BrandType, IParams, ProductType } from "../../types";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  getAllBrandsAPI,
  getAllProductIds,
  getBrandByIdAPI,
  getProductByIdAPI,
} from "../../lib/utils";

const ProductInfo = ({
  product,
  brand,
}: {
  product: ProductType;
  brand: BrandType;
}) => {
  return (
    <Layout>
      <Head>
        <title>{product.title}</title>
      </Head>
      <main className="2xl:container 2xl:mx-auto bg-gray-50 mt-16 p-10">
        <ProductDetail product={product} brand={brand} />
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
  return {
    props: {
      product,
      brand,
    },
  };
};

export default ProductInfo;
