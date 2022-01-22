import { GetStaticProps } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Layout from "../../components/admin/Layout";
import { BrandType, CategoryType, ProductType } from "../../types";
import { brands } from "../../data";
import { categories } from "../../data";
import { useFormik } from "formik";
import { XIcon } from "@heroicons/react/outline";

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

const saveproduct = ({
  id = "",
  brands,
  categories,
}: {
  id: string;
  brands: BrandType[];
  categories: CategoryType[];
}) => {
  const isAddMode = !id;
  const validate = (values: ProductType) => {
    const errors: any = {};
    if (!values.title) errors.title = "This field is required";
    if (!values.brand) errors.brand = "This field is required";
  };
  const formik = useFormik({
    initialValues: {
      id: "",
      title: "",
      brand: "",
      description: "",
      price: 0,
      discount: 0,
      categories: [],
      tags: [
        "test",
        "shirt",
        "test",
        "shirt",
        "test",
        "shirt",
        "test",
        "shirt",
      ],
      images: [],
      extraInfo: [],
      rating: 7.5,
      publish: false,
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
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
          <button
            className="bg-blue-600 px-4 py-2 md:h-fit rounded-md text-white hover:text-gray-300 w-fit h-fit"
            type="submit"
            form="saveForm"
          >
            Save Now
          </button>
        </header>
        <section>
          <form id="saveForm" onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-product-save gap-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white p-4 rounded-md shadow-md flex flex-col gap-y-4">
                  <div className="form-group">
                    <label className="text-md ml-1">Title</label>
                    <input
                      type="text"
                      placeholder="Title"
                      className="input-text"
                      name="title"
                      value={formik.values.title}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-md ml-1">Brands</label>
                    <select
                      className="input-text"
                      name="brand"
                      value={formik.values.brand}
                      onChange={formik.handleChange}
                    >
                      <option>Select Brands</option>
                      {brands.map((brand) => (
                        <option key={brand.id}>{brand.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-md shadow-md">
                  <div className="form-group">
                    <label className="text-md ml-1">Description</label>
                    <textarea
                      placeholder="Type description..."
                      className="input-textarea"
                      rows={4}
                      name="description"
                      value={formik.values.description}
                      onChange={formik.handleChange}
                    ></textarea>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-md shadow-md">
                  <div className="form-group">
                    <label className="text-md ml-1">Images</label>
                    <input type="file" className="bg-white p-2" />
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-md shadow-md space-y-4">
                <div className="form-group">
                  <label className="text-md ml-1">Price</label>
                  <input
                    type="number"
                    placeholder="Price"
                    className="input-text"
                    name="price"
                    value={formik.values.price}
                  />
                </div>
                <div className="form-group">
                  <label className="text-md ml-1">Discount</label>
                  <input
                    type="number"
                    placeholder="Discount"
                    className="input-text"
                    name="discount"
                    value={formik.values.discount}
                  />
                </div>
                <div className="form-group">
                  <label className="text-md ml-1">Tags</label>
                  <input
                    type="text"
                    placeholder="Type and press Enter"
                    className="input-text"
                    name="tags"
                    onKeyPress={(event: React.KeyboardEvent) => {
                      if (event.key === "Enter") {
                        formik.values.tags.push(
                          (event.target as HTMLInputElement).value
                        );
                        (event.target as HTMLInputElement).value = "";
                      }
                    }}
                  />
                  <div className="grid grid-cols-3 gap-2">
                    {formik.values.tags.map((tag, index) => (
                      <div className="flex items-center justify-center gap-x-2 bg-gray-100 px-3 py-1 rounded-md">
                        <small>{tag}</small>
                        <button
                          className="hover:scale-125 transition-all duration-150 ease-in-out"
                          onClick={() => formik.values.tags.splice(index, 1)}
                        >
                          <XIcon className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </form>
        </section>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      brands,
      categories,
    },
  };
};
export default saveproduct;
