import React from "react";
import { ProductType } from "../../types";
import Product from "./Product";

const Products = ({ products }: { products: ProductType[] }) => {
  return (
    <div className="grid grid-cols-5 gap-4 p-4 bg-white shadow-sm">
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;
