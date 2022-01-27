import server from "../axios";
import { ProductType } from "../types";

const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvbnkubWFpbDJtZUBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NDMyODA5NjksImV4cCI6MTY0MzM2NzM2OX0.EP0E6LSyQ-YQ2PrFPc528ayMbsVCO7NVNYgNqOtCXZY";
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
const getProductById = async (id: string) => {
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

const deleteProductAPI = async (id: string) => {
  const result = await server.delete(`/product/${id}`, headers);
  return result.data;
};

export {
  getAllProductIds,
  getProductById,
  uploadImageToS3API,
  saveProductAPI,
  getAllCategoriesAPI,
  getAllProductsAPI,
  deleteProductAPI,
};
