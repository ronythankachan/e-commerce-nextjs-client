import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React, { useContext, useState } from "react";
import Layout from "../../../components/admin/Layout";
import { BrandType, CategoryType, IParams, ProductType } from "../../../types";
import { ArrowLeftIcon, TrashIcon, XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  createNewProduct,
  getAllBrandsAPI,
  getAllCategoriesAPI,
  getAllProductIds,
  getProductByIdAPI,
  saveProductAPI,
  uploadImageToS3API,
} from "../../../lib/utils";
import Link from "next/link";
import { AlertContext } from "../../../components/general/alert/AlertProvider";
import {
  showDissapearingErrorAlert,
  showDissapearingSuccessAlert,
  showErrorAlert,
  showSuccessAlert,
} from "../../../components/general/alert/AlertActions";

const saveproduct = ({
  product,
  brands,
  categories,
}: {
  product: ProductType;
  brands: BrandType[];
  categories: CategoryType[];
}) => {
  const router = useRouter();
  //Get alert context
  const value: any = useContext(AlertContext);
  const [_, dispatch] = value;
  //Empty form data
  const [alertData, setAlertData] = useState({
    content: "",
    type: "error",
    loading: false,
    visible: false,
    dissapear: false,
    duration: 1,
  });
  const [formData, setFormData] = useState<ProductType>(product);
  const addTags = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      let value = (event.target as HTMLInputElement).value;
      if (!formData.tags.includes(value)) {
        setFormData({
          ...formData,
          tags: [...formData.tags, value],
        });
        (event.target as HTMLInputElement).value = "";
      }
      event.preventDefault();
    }
  };

  const deleteTag = (event: React.MouseEvent<HTMLElement>, tag: string) => {
    event.preventDefault();
    setFormData({
      ...formData,
      tags: formData.tags.filter((tagVal) => tagVal !== tag),
    });
  };
  const uploadImage = async (event: any) => {
    const file = event.target.files[0];
    showSuccessAlert(dispatch, "Uploading...please wait");
    const result = await uploadImageToS3API(file);
    if (formData.images.includes(result.url)) {
      showErrorAlert(dispatch, "Image already exists");
    } else {
      setFormData({
        ...formData,
        images: [...formData.images, result.url],
      });
      showDissapearingSuccessAlert(dispatch, "Image uploaded successfully");
    }
  };

  const deleteImage = (event: React.MouseEvent<HTMLElement>, image: string) => {
    event.preventDefault();
    showSuccessAlert(dispatch, "Deleting...");
    setFormData({
      ...formData,
      images: formData.images.filter((img) => img !== image),
    });
    showDissapearingSuccessAlert(dispatch, "Deleted");
  };
  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    category: string
  ) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const categoryId =
      categories.find((cat) => cat.name === category)?._id || "";
    value
      ? setFormData({
          ...formData,
          categories: [...formData.categories, categoryId],
        })
      : setFormData({
          ...formData,
          categories: formData.categories.filter((cat) => cat !== categoryId),
        });
  };

  const handleBrandChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const value = event.currentTarget.value;
    if (value !== "Select Brand") {
      setFormData({
        ...formData,
        brand: value,
      });
    }
  };

  const checkErrors = (): string => {
    let error = "";
    if (!formData.title) error = "Title field is required";
    else if (!formData.brand || formData.brand === "Select Brand")
      error = "Brand field is required";
    else if (!formData.description) error = "Description field is required";
    else if (formData.price <= 0) error = "Price should be greater than zero";
    else if (formData.discount >= 100)
      error = "Discount should be less than 100%";
    else if (formData.images.length == 0) error = "Add atleast one image";
    else if (formData.categories.length == 0)
      error = "Select atleast one category";
    return error;
  };

  //Go to products page after saving
  const goToProductsPage = () => {
    router.push({
      pathname: "/admin/products",
    });
  };

  //submit form
  const handleSubmit = async (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    const error = checkErrors();
    if (!error) {
      showSuccessAlert(dispatch, "Saving...");
      await saveProductAPI(formData);
      showDissapearingSuccessAlert(dispatch, "Saved successfully");
      goToProductsPage();
    } else {
      showDissapearingErrorAlert(dispatch, error);
    }
  };

  const handleChange = (event: React.FormEvent<EventTarget>) => {
    let target = event.target as HTMLInputElement;
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  return (
    <Layout>
      <Head>
        <title>Save Product</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-50 w-full p-5 md:p-10 space-y-8">
        <header className="flex flex-col md:flex-row justify-between md:items-center gap-y-4">
          <h1 className="page-title">Save Product</h1>
          <div className="flex gap-x-4 items-center md:justify-center">
            <Link href="/admin/products">
              <a className="flex items-center justify-center gap-x-2 text-blue-500 hover:text-blue-300 border rounded-md px-4 py-2 bg-white">
                <ArrowLeftIcon className="w-5 h-5" />
                <p>Go Back</p>
              </a>
            </Link>
            <button
              className="bg-blue-600 px-4 py-2 md:h-fit rounded-md text-white hover:text-gray-300 w-fit h-fit"
              type="submit"
              form="saveForm"
            >
              Save Now
            </button>
          </div>
        </header>
        <section>
          <form id="saveForm" onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-product-save gap-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white p-4 rounded-md shadow-md flex flex-col gap-y-4 ">
                  <div className="form-group">
                    <label className="text-md ml-1">Title</label>
                    <input
                      type="text"
                      placeholder="Title"
                      className="input-text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-md ml-1">Brands</label>
                    <select
                      className="input-text"
                      name="brand"
                      value={formData.brand}
                      onChange={handleBrandChange}
                    >
                      <option>Select Brand</option>
                      {brands.map((brand) => (
                        <option key={brand._id} value={brand._id}>
                          {brand.name}
                        </option>
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
                      value={formData.description}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-md shadow-md">
                  <div className="form-group">
                    <label className="text-md ml-1">Images</label>
                    <div className="border w-fit rounded-md p-2 bg-black text-white">
                      <p className="absolute ml-4">Browse</p>
                      <input
                        type="file"
                        className="w-24 opacity-0  hover:cursor-pointer"
                        disabled={formData.images.length === 4}
                        onChange={uploadImage}
                      />
                    </div>
                  </div>
                  <div className="flex gap-x-4 mt-4">
                    {formData.images.map((image, index) => (
                      <div
                        key={index}
                        className="w-24 h-24 relative hover:scale-105 transition-all duration-150 ease-out"
                      >
                        <Image
                          src={image}
                          layout="fill"
                          objectFit="cover"
                          placeholder="blur"
                          blurDataURL="/placeholder.jpg"
                          className="rounded-md"
                        />
                        <div className="opacity-0 absolute w-full h-full rounded-md hover:bg-black hover:opacity-100 hover:bg-opacity-50 flex justify-center items-center transition-all duration-150 ease-out">
                          <button onClick={(e) => deleteImage(e, image)}>
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
                    value={formData.price}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="text-md ml-1">Discount (%)</label>
                  <input
                    type="number"
                    placeholder="Type a number"
                    className="input-text"
                    name="discount"
                    value={formData.discount}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="text-md ml-1">Tags</label>
                  <input
                    type="text"
                    placeholder="Type and press Enter"
                    className="input-text"
                    name="tags"
                    onKeyPress={addTags}
                  />
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {formData.tags.map((tag, index) => (
                      <div
                        className="flex items-center justify-between gap-x-2 bg-white border px-2 py-1 rounded-md min-w-fit"
                        key={index}
                      >
                        <small>{tag}</small>
                        <button
                          className="hover:scale-125 transition-all duration-150 ease-in-out"
                          onClick={(event) => deleteTag(event, tag)}
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
                      <div key={category._id} className="space-x-2">
                        <input
                          type="checkbox"
                          checked={formData.categories.includes(category._id)}
                          onChange={(e) =>
                            handleCategoryChange(e, category.name)
                          }
                        />
                        <label className="text-md">{category.name}</label>
                      </div>
                    ))}
                  </div>
                </div>
                <hr />
                <div className="space-y-4">
                  <h2 className="text-lg font-bold">Status</h2>
                  <div className="space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.publish}
                      onChange={() =>
                        setFormData({ ...formData, publish: !formData.publish })
                      }
                    />
                    <label>Publish to site</label>
                  </div>
                  <div className="space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.new}
                      onChange={() =>
                        setFormData({ ...formData, new: !formData.new })
                      }
                    />
                    <label>Newly arrived</label>
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
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllProductIds();
  paths.push({ params: { id: "new" } });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;
  let product: ProductType;
  if (id === "new") product = createNewProduct();
  else product = await getProductByIdAPI(id as string);
  const categories = await getAllCategoriesAPI();
  const brands = await getAllBrandsAPI();
  return {
    props: {
      brands,
      product,
      categories,
    },
  };
};
export default saveproduct;
