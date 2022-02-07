import { NextApiRequestCookies } from "next/dist/server/api-utils";
import server from "../axios";
import {
  BrandType,
  CategoryType,
  LoginFormType,
  ProductType,
  TokenType,
  UserType,
} from "../types";

const at =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvbnkubWFpbDJtZUBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjQ0MDE0Nzg5LCJleHAiOjE2NDQwMTQ4NDl9.-nAzATIQvD9Ehf0UStumkrRQ0aeKlwr2xk8hzjTg_PY";
const headers = {
  headers: {
    Authorization: "Bearer " + at,
  },
};

export const extractTokensFromCookie = (
  cookies: NextApiRequestCookies
): TokenType => {
  return cookies.user === undefined
    ? { accessToken: "", refreshToken: "" }
    : JSON.parse(cookies.user);
};

export const generateAuthHeader = (accessToken: string) => {
  return {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
};

// Initial data for new product
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
const loginAPI = async (user: LoginFormType) => {
  const result = await server.post("/auth/login", user);
  return result.data;
};

// Get all products
const getAllProductsAPI = async (body: any = {}) => {
  const result = await server.post("/product/", body);
  return result.data;
};
// Get all products
const getPublishedProductsAPI = async () => {
  const result = await server.get("/product/published");
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
  const result = await server.get(`/product/${id}`);
  return result.data;
};

// Get all categories
const getAllCategoriesAPI = async () => {
  const result = await server.get("/category/");
  return result.data;
};

// Upload image to amazon s3
const uploadImageToS3API = async (file: File, accessToken: string) => {
  const body = new FormData();
  body.append("image", file);
  const result = await server.post(
    "/product/upload",
    body,
    generateAuthHeader(accessToken)
  );
  return result.data;
};

// Add/Update a product in database
const saveProductAPI = async (body: ProductType, accessToken: string) => {
  const result = await server.post(
    "/product/save",
    body,
    generateAuthHeader(accessToken)
  );
  return result.data;
};

// Delete a product using ID
const deleteProductAPI = async (id: string, accessToken: string) => {
  const result = await server.delete(
    `/product/${id}`,
    generateAuthHeader(accessToken)
  );
  return result.data;
};

// Get all brands
const getAllBrandsAPI = async () => {
  const result = await server.get("/brand/");
  return result.data;
};

// Add a new brand
const saveBrandAPI = async (brand: BrandType, accessToken: string) => {
  const result = await server.post(
    "/brand/add",
    brand,
    generateAuthHeader(accessToken)
  );
  return result.data;
};

// Delete a brand
const deleteBrandAPI = async (id: string, accessToken: string) => {
  const result = await server.delete(
    `/brand/${id}`,
    generateAuthHeader(accessToken)
  );
  return result.data;
};

// Add a new category
const saveCategoryAPI = async (category: CategoryType, accessToken: string) => {
  const result = await server.post(
    "/category/add",
    category,
    generateAuthHeader(accessToken)
  );
  return result.data;
};

// Delete a category
const deleteCategoryAPI = async (id: string, accessToken: string) => {
  const result = await server.delete(
    `/category/${id}`,
    generateAuthHeader(accessToken)
  );
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
  getPublishedProductsAPI,
};
export const backendURL = "http://localhost:8000";
