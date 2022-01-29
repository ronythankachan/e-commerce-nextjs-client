import { GetStaticProps } from "next";
import Head from "next/head";
import Layout from "../../components/admin/Layout";
import Product from "../../components/admin/Product";
import { CategoryType, ProductType } from "../../types";
import Link from "next/link";
import { getAllCategoriesAPI, getAllProductsAPI } from "../../lib/utils";

const Products = ({
  products,
  categories,
}: {
  products: ProductType[];
  categories: CategoryType[];
}) => {
  return (
    <Layout>
      <Head>
        <title>Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-50 w-full p-5 md:p-10 space-y-8">
        <header className="flex flex-col md:flex-row justify-between md:items-center">
          <h1 className="page-title">Products</h1>
          <div className="flex space-x-2 mt-4 md:mt-0 md:space-y-0">
            <Link href="/admin/product/new">
              <a className="bg-blue-600 px-4 py-2 md:h-fit rounded-md text-white hover:text-gray-300 w-fit h-fit">
                Add Product
              </a>
            </Link>
          </div>
        </header>
        <section className="bg-white shadow-sm rounded-md p-3">
          <form className="flex flex-col md:flex-row justify-between items-center border-b-2 pb-4 md:space-x-2 space-y-2 md:space-y-0">
            <input
              type="text"
              placeholder="Search..."
              className="input-text w-full md:w-1/2"
            />
            <select
              name="categories"
              id="categories"
              className="input-text bg-white w-full md:w-fit"
            >
              <option>All Categories</option>
              {categories.map((category) => (
                <option className="p-4" key={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </form>
          <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-8 gap-4 h-fit mt-4">
            {products.map((product) => (
              <Product product={product} key={product._id} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
};
export default Products;
export const getStaticProps: GetStaticProps = async () => {
  const products = await getAllProductsAPI();
  const categories = await getAllCategoriesAPI();
  return {
    props: {
      products,
      categories,
    },
  };
};
