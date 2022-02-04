import server from "../axios";
import { BrandType, CategoryType, ProductType, UserType } from "../types";

const at =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvbnkubWFpbDJtZUBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjQzNjYxMzc4LCJleHAiOjE2NDQyNjYxNzh9.HJWnKV-DdMdMoaca3PV-HH-U5lN9AYppc9W28DCTd3c";
const headers = {
  headers: {
    Authorization: "Bearer " + at,
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
// Sign Up API

const signUpAPI = async (user: UserType) => {
  const result = await server.post("/auth/signup", user);
  return result.data;
};

// Login api
const loginAPI = async (user: { email: string; password: string }) => {
  const result = await server.post("/auth/login", user);
  return result.data;
};

// Check if a token is valid
const authorizeAPI = async (accessToken: string) => {
  const result = await server.post("/auth/authorize", { accessToken }, headers);
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

// Add a new brand
const saveBrandAPI = async (brand: BrandType) => {
  const result = await server.post("/brand/add", brand, headers);
  return result.data;
};

// Delete a brand
const deleteBrandAPI = async (id: string) => {
  const result = await server.delete(`/brand/${id}`, headers);
  return result.data;
};

// Add a new category
const saveCategoryAPI = async (category: CategoryType) => {
  const result = await server.post("/category/add", category, headers);
  return result.data;
};

// Delete a category
const deleteCategoryAPI = async (id: string) => {
  const result = await server.delete(`/category/${id}`, headers);
  return result.data;
};

export {
  loginAPI,
  signUpAPI,
  getAllProductIds,
  getProductByIdAPI,
  uploadImageToS3API,
  saveProductAPI,
  getAllCategoriesAPI,
  getAllProductsAPI,
  deleteProductAPI,
  getAllBrandsAPI,
  createNewProduct,
  saveCategoryAPI,
  deleteCategoryAPI,
  saveBrandAPI,
  deleteBrandAPI,
};
