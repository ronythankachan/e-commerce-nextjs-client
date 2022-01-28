import server from "../axios";
import { ProductType } from "../types";

const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvbnkubWFpbDJtZUBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NDMzNjg4MTIsImV4cCI6MTY0MzQ1NTIxMn0.EaU_QzJwxQZMWQb41iaYCXAx5olF7ben2PlIxWj2ro0";
const headers = {
  headers: {
    Authorization: "Bearer " + accessToken,
  },
};

// Get all products
const getAllProductsAPI = async () => {
  const result = await server.get("/product/", headers);
  return result.data;
};

const createNewProduct = (): ProductType => {
  return {
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
    new: false,
  };
};

// Get productIds of all products
const getAllProductIds = async () => {
  const products = await getAllProductsAPI();
  return products.map((product: ProductType) => {
    return {
      params: {
        id: product._id,
      },
    };
  });
};

// Return product details given an ID
const getProductByIdAPI = async (id: string) => {
  const result = await server.get(`/product/${id}`, headers);
  return result.data;
};

// Get all categories
const getAllCategoriesAPI = async () => {
  const result = await server.get("/category/", headers);
  return result.data;
};

// Upload image to amazon s3
const uploadImageToS3API = async (file: File) => {
  const body = new FormData();
  body.append("image", file);
  const result = await server.post("/product/upload", body, headers);
  return result.data;
};

// Add/Update a product in database
const saveProductAPI = async (body: ProductType) => {
  const result = await server.post("/product/save", body, headers);
  return result.data;
};

// Delete a product using ID
const deleteProductAPI = async (id: string) => {
  const result = await server.delete(`/product/${id}`, headers);
  return result.data;
};

// Get all brands
const getAllBrandsAPI = async () => {
  const result = await server.get("/brand/", headers);
  return result.data;
};

export {
  getAllProductIds,
  getProductByIdAPI,
  uploadImageToS3API,
  saveProductAPI,
  getAllCategoriesAPI,
  getAllProductsAPI,
  deleteProductAPI,
  getAllBrandsAPI,
  createNewProduct,
};
