import { GetStaticProps } from "next";
import Head from "next/head";
import Brand from "../../components/admin/Brand";
import Layout from "../../components/admin/Layout";
import { BrandType } from "../../types";
import { brands } from "../../data";

const Brands = ({ brands }: { brands: BrandType[] }) => {
  return (
    <Layout>
      <Head>
        <title>Brands</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-50 p-5 md:p-10 space-y-8">
        <h1 className="text-4xl font-bold justify-start">Brands</h1>
        <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 2xl:grid-cols-12 gap-4 justify-items-center">
          {brands.map((brand) => (
            <Brand brand={brand} key={brand.id} />
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default Brands;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      brands,
    },
  };
};
