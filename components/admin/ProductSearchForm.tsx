import React from "react";
import { BrandType, CategoryType } from "../../types";

const ProductSearchForm = ({
  categories,
  brands,
}: {
  categories: CategoryType[];
  brands: BrandType[];
}) => {
  return (
    <form className="flex flex-col md:flex-row justify-between items-center border-b-2 pb-4 md:space-x-2 space-y-2 md:space-y-0">
      <input
        type="text"
        placeholder="Search..."
        className="input-text w-full md:w-1/2"
      />
      <select
        name="categories"
        id="categories"
        className="input-text bg-white w-full md:w-fit"
      >
        <option>All Categories</option>
        {categories.map((category) => (
          <option className="p-4" key={category._id}>
            {category.name}
          </option>
        ))}
      </select>
    </form>
  );
};

export default ProductSearchForm;
