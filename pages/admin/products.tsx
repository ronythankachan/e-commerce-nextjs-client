import { GetServerSideProps } from "next";
import Head from "next/head";
import Layout from "../../components/admin/Layout";
import Product from "../../components/admin/Product";
import { CategoryType, ProductType, TokenType } from "../../types";
import Link from "next/link";
import {
  deleteCategoryAPI,
  extractTokensFromCookie,
  getAllCategoriesAPI,
  getAllProductsAPI,
  saveCategoryAPI,
} from "../../lib/utils";
import { useContext, useEffect, useState } from "react";
import Modal from "../../components/general/modal/Modal";
import { AlertContext } from "../../components/general/alert/AlertProvider";
import {
  showDissapearingSuccessAlert,
  showErrorAlert,
  showSuccessAlert,
} from "../../components/general/alert/AlertActions";
import { TrashIcon } from "@heroicons/react/outline";
import Router from "next/router";

const Products = ({
  products,
  categories,
  tokens,
}: {
  products: ProductType[];
  categories: CategoryType[];
  tokens: TokenType;
}) => {
  //Get alert context
  const value: any = useContext(AlertContext);
  const [_, dispatch] = value;
  const [open, setOpen] = useState(false);
  const [categoryData, setCategoryData] = useState<CategoryType>({
    name: "",
  });

  const clearCategoryForm = () => {
    setCategoryData({
      name: "",
    });
  };

  // Refresh page after deleting
  const refreshData = () => {
    Router.replace(Router.asPath);
  };

  const handleCategorySubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!categoryData.name)
      showErrorAlert(dispatch, "Category field is required");
    else {
      try {
        showSuccessAlert(dispatch, "Saving...");
        await saveCategoryAPI(categoryData, tokens.accessToken);
        clearCategoryForm();
        refreshData();
        showDissapearingSuccessAlert(dispatch, "Category added successfully");
      } catch (err: any) {
        showErrorAlert(dispatch, err.response.data.message);
      }
    }
  };

  const handleCategoryChange = (event: React.FormEvent<HTMLInputElement>) => {
    let target = event.target as HTMLInputElement;
    setCategoryData({
      ...categoryData,
      [target.name]: target.value,
    });
  };

  const deleteCategory = async (id: string) => {
    try {
      showSuccessAlert(dispatch, "Deleting");
      await deleteCategoryAPI(id, tokens.accessToken);
      refreshData();
      showDissapearingSuccessAlert(dispatch, "Category deleted successfully");
    } catch (err: any) {
      showErrorAlert(dispatch, err.response.data.message);
    }
  };

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
          <Modal title="Add Category" open={open} setOpen={setOpen}>
            <form onSubmit={handleCategorySubmit}>
              <div className="flex items-center gap-x-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Category name"
                  className="input-text"
                  value={categoryData.name}
                  onChange={handleCategoryChange}
                />
                <button
                  type="submit"
                  className="bg-green-600 px-4 py-3 md:h-fit rounded-md text-white hover:text-gray-300 w-fit h-fit"
                >
                  Save
                </button>
              </div>
            </form>
            <hr className="mt-2" />
            <div className="space-y-2 py-2">
              {categories.map((category) => (
                <div
                  className="flex items-center justify-between px-3 py-2 rounded-md bg-gray-50 border"
                  key={category._id}
                >
                  <small>{category.name}</small>
                  <button
                    className="p-1 bg-gray-300 rounded hover:scale-105"
                    onClick={() => deleteCategory(category._id!)}
                  >
                    <TrashIcon className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </Modal>
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
              <Product product={product} key={product._id} tokens={tokens} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
};
export default Products;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const tokens = extractTokensFromCookie(req.cookies);
  const products = await getAllProductsAPI();
  const categories = await getAllCategoriesAPI();
  return {
    props: {
      products,
      categories,
      tokens,
    },
  };
};
