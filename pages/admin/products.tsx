import { GetServerSideProps } from "next";
import Head from "next/head";
import Layout from "../../components/admin/Layout";
import Product from "../../components/admin/Product";
import { BrandType, CategoryType, ProductType, TokenType } from "../../types";
import Link from "next/link";
import {
  extractTokensFromCookie,
  getAllBrandsAPI,
  getAllCategoriesAPI,
  getAllProductsAPI,
} from "../../lib/utils";
import { useEffect, useState } from "react";
import Router from "next/router";
import ProductSearchForm from "../../components/admin/ProductSearchForm";
import CategoryModal from "../../components/admin/CategoryModal";
import { Url } from "url";

export interface SearchFormDataType {
  search: string;
  brand: string;
  category: string;
}

const Products = ({
  products,
  categories,
  brands,
  tokens,
}: {
  products: ProductType[];
  categories: CategoryType[];
  brands: BrandType[];
  tokens: TokenType;
}) => {
  const [open, setOpen] = useState(false);
  // Refresh page
  const refreshData = () => {
    Router.replace(Router.asPath);
  };

  const [searchFormData, setSearchFormData] = useState<SearchFormDataType>({
    search: "",
    brand: "",
    category: "",
  });

  const createSearchQuery = () => {
    let query = "";
    for (let key in searchFormData) {
      const value = searchFormData[key as keyof SearchFormDataType];
      if (value)
        query = query.concat(
          `${key}=${searchFormData[key as keyof SearchFormDataType]}&`
        );
    }
    query = query.substring(0, query.length - 1);
    return query;
  };

  useEffect(() => {
    const queryParams: string = createSearchQuery();
    if (queryParams) {
      const newRoute: string = `${Router.basePath}?${queryParams}`;
      Router.push(newRoute);
    }
  }, [searchFormData]);

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
            <button
              className="bg-black px-4 py-2 md:h-fit rounded-md text-white hover:text-gray-300 w-fit h-fit"
              onClick={() => setOpen(true)}
            >
              Categories
            </button>
            <Link href="/admin/product/new">
              <a className="bg-blue-600 px-4 py-2 md:h-fit rounded-md text-white hover:text-gray-300 w-fit h-fit">
                Add Product
              </a>
            </Link>
          </div>
          <CategoryModal
            categories={categories}
            tokens={tokens}
            setOpen={setOpen}
            open={open}
            refreshData={refreshData}
          />
        </header>
        <section className="bg-white shadow-sm rounded-md p-3">
          <ProductSearchForm
            categories={categories}
            brands={brands}
            searchFormData={searchFormData}
            setSearchFormData={setSearchFormData}
          />
          <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-8 gap-4 h-fit mt-4">
            {products.map((product) => (
              <Product product={product} key={product._id} tokens={tokens} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
};
export default Products;

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  console.log("queries are ", query);
  const tokens = extractTokensFromCookie(req.cookies);
  const products = await getAllProductsAPI();
  const categories = await getAllCategoriesAPI();
  const brands = await getAllBrandsAPI();
  return {
    props: {
      products,
      categories,
      tokens,
      brands,
    },
  };
};
