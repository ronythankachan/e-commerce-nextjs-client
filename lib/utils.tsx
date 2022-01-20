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

export { getAllProductIds };
