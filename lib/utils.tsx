import server from "../axios";
import { products } from "../data";
import { ProductType } from "../types";

const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvbnkubWFpbDJtZUBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NDMyODA5NjksImV4cCI6MTY0MzM2NzM2OX0.EP0E6LSyQ-YQ2PrFPc528ayMbsVCO7NVNYgNqOtCXZY";

const getAllProductIds = () => {
  return products.map((product: ProductType) => {
    return {
      params: {
        id: product.id,
      },
    };
  });
};

// Return product details given an ID
const getProductById = (id: string) => {
  const product = products.find((product) => product.id === id);
  return product!;
};

// Upload image to amazon s3
const uploadImageToS3 = async (file: File) => {
  const body = new FormData();
  body.append("image", file);
  const headers = {
    Authorization: "Bearer " + accessToken,
  };
  const result = await server.post("/product/upload", body, {
    headers: headers,
  });
  return result.data;
};

export { getAllProductIds, getProductById, uploadImageToS3 };
