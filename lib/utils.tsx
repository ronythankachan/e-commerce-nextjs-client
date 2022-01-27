import server from "../axios";
import { products } from "../data";
import { ProductType } from "../types";

const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvbnkubWFpbDJtZUBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NDMyODA5NjksImV4cCI6MTY0MzM2NzM2OX0.EP0E6LSyQ-YQ2PrFPc528ayMbsVCO7NVNYgNqOtCXZY";
const headers = {
  headers: {
    Authorization: "Bearer " + accessToken,
  },
};

const getAllProductIds = () => {
  return products.map((product: ProductType) => {
    return {
      params: {
        id: product._id,
      },
    };
  });
};

// Return product details given an ID
const getProductById = (id: string) => {
  const product = products.find((product) => product._id === id);
  return product!;
};

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
  delete body._id;
  const result = await server.post("/product/save", body, headers);
  return result;
};

export {
  getAllProductIds,
  getProductById,
  uploadImageToS3API,
  saveProductAPI,
  getAllCategoriesAPI,
};
