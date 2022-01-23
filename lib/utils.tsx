import { products } from "../data";
import { ProductType } from "../types";

const getAllProductIds = () => {
  return products.map((product: ProductType) => {
    return {
      params: {
        id: product.id,
      },
    };
  });
};

const getProductById = (id: string) => {
  const product = products.find((product) => product.id === id);
  return product!;
};

export { getAllProductIds, getProductById };
