import { GetStaticProps } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Layout from "../../components/admin/Layout";
import { BrandType, CategoryType, ProductType } from "../../types";
import { brands } from "../../data";
import { categories } from "../../data";
import { useFormik } from "formik";
import { TrashIcon, XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Image from "next/image";

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
  brands,
  categories,
}: {
  brands: BrandType[];
  categories: CategoryType[];
}) => {
  const { id } = useRouter().query;
  console.log("id is " + id);
  const addMode = !id;
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
      tags: ["test", "shirt", "test", "shirt", "test"],
      images: [
        "https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg",
      ],
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
    if (!addMode) {
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
                <div className="bg-white p-4 rounded-md shadow-md flex flex-col gap-y-4 ">
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
                    <div className="border w-fit rounded-md p-2 bg-black text-white">
                      <p className="absolute ml-4 ">Browse</p>
                      <input
                        type="file"
                        className="w-24 opacity-0  hover:cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="flex gap-x-4 mt-4">
                    {formik.values.images.map((image, index) => (
                      <div
                        key={index}
                        className="w-24 h-24 relative hover:scale-105 transition-all duration-150 ease-out"
                      >
                        <Image
                          src={image}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-md"
                        />
                        <div className="opacity-0 absolute w-full h-full rounded-md hover:bg-black hover:opacity-100 hover:bg-opacity-50 flex justify-center items-center transition-all duration-150 ease-out">
                          <button
                            onClick={() =>
                              formik.values.images.splice(index, 1)
                            }
                          >
                            <TrashIcon className="w-10 h-10 p-2 rounded-full bg-white hover:cursor-pointer" />
                          </button>
                        </div>
                      </div>
                    ))}
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
                      <div className="flex items-center justify-between gap-x-2 bg-white border px-2 py-1 rounded-md">
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
                <hr />
                <div className="space-y-4">
                  <h2 className="text-lg font-bold">Categories</h2>
                  <div className="grid grid-cols-2 gap-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="space-x-2">
                        <input type="checkbox" />
                        <label className="text-md">{category.category}</label>
                      </div>
                    ))}
                  </div>
                </div>
                <hr />
                <div className="space-y-4">
                  <h2 className="text-lg font-bold">Status</h2>
                  <div className="space-x-2">
                    <input type="checkbox" />
                    <label>Publish to site</label>
                  </div>
                </div>
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
