import React from "react";
import { ProductType } from "../../types";
import Product from "./Product";

const Products = ({ products }: { products: ProductType[] }) => {
  return (
    <div className="w-full bg-white shadow-sm rounded-md p-3 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center md:justify-items-start ">
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;
