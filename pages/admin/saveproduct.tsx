import Head from "next/head";
import React, { useEffect, useState } from "react";
import Layout from "../../components/admin/Layout";
import { ProductType } from "../../types";

const productInitialValues: ProductType = {
  id: "",
  title: "",
  brand: "",
  description: "",
  price: 0,
  discount: 0,
  categories: [],
  tags: [],
  images: [],
  extraInfo: [],
  rating: 7.5,
  publish: false,
};

const saveproduct = ({ id = "" }: { id: string }) => {
  const isAddMode = !id;
  const [productData, setProductData] = useState(productInitialValues);
  useEffect(() => {
    if (!isAddMode) {
      //  populate productInitialValues
    }
  }, []);
  return (
    <Layout>
      <Head>
        <title>Save Product</title>
      </Head>
      <main className="bg-gray-50 w-full p-5 md:p-10 space-y-8">
        <header className="flex flex-col md:flex-row justify-between md:items-center gap-y-4">
          <h1 className="page-title">Save Product</h1>
          <button className="bg-blue-600 px-4 py-2 md:h-fit rounded-md text-white hover:text-gray-300 w-fit h-fit">
            Save Now
          </button>
        </header>
        <section>
          <form>
            <div className="grid grid-cols-product-save gap-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white p-4 rounded-md shadow-md flex flex-col gap-y-4">
                  <div className="form-group">
                    <label className="text-md ml-1">Title</label>
                    <input
                      type="text"
                      placeholder="Title"
                      className="input-text"
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-md ml-1">Brands</label>
                    <select className="input-text">
                      <option>Select Brands</option>
                      <option>Apple </option>
                    </select>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-md shadow-md">
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      placeholder="Type description..."
                      className="input-textarea"
                      rows={4}
                    ></textarea>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-md shadow-md">
                  <div className="form-group">
                    <label>Images</label>
                    <input type="file" className="bg-white p-2" />
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-md shadow-md">
                categories and stuff
              </div>
            </div>
          </form>
        </section>
      </main>
    </Layout>
  );
};

export default saveproduct;
