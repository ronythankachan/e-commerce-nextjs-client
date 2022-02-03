import server from "../axios";
import { BrandType, CategoryType, ProductType, UserType } from "../types";
import cookie from "cookie";
import { IncomingMessage } from "http";
import jwtDecode from "jwt-decode";

export function parseCookies(req: IncomingMessage) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
}

// Check if there is an accesstoken and is a valid user
const isValidUser = async (req: IncomingMessage) => {
  const data = parseCookies(req);
  const user = data.user ? JSON.parse(data.user) : null;
  if (!user || !user.accessToken) return null;
  try {
    await authorizeAPI(user.accessToken);
    const decoded_user = jwtDecode(user.accessToken);
    return decoded_user;
  } catch (err) {
    return null;
  }
};

const checkAdminAccess = async (req: IncomingMessage, resolvedUrl: string) => {
  const user: any = await isValidUser(req);
  if (!user) {
    return {
      propReturn: false,
      redirect: {
        destination: `/login?next=${resolvedUrl}`,
        permanent: false,
      },
    };
  }
  if (!user.admin) {
    return {
      propReturn: false,
      redirect: {
        source: resolvedUrl,
        destination: "/",
        permanent: true,
      },
    };
  }
  return {
    propReturn: true,
    props: {
      user,
    },
  };
};

const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvbnkubWFpbDJtZUBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjQzNjYxMzc4LCJleHAiOjE2NDQyNjYxNzh9.HJWnKV-DdMdMoaca3PV-HH-U5lN9AYppc9W28DCTd3c";
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
  authorizeAPI,
  checkAdminAccess,
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
