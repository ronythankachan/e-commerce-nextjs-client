import React from "react";
import { SearchFormDataType } from "../../pages/admin/products";
import { BrandType, CategoryType } from "../../types";

const ProductSearchForm = ({
  categories,
  brands,
  searchFormData,
  setSearchFormData,
}: {
  categories: CategoryType[];
  brands: BrandType[];
  searchFormData: SearchFormDataType;
  setSearchFormData: Function;
}) => {
  const handleSearchChange = (event: React.FormEvent<EventTarget>) => {
    let target = event.target as HTMLInputElement;
    setSearchFormData({
      ...searchFormData,
      [target.name]: target.value,
    });
  };

  const handleSelectChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const value = event.currentTarget.value;
    if (value !== "Select Brand" && value !== "Select Category") {
      setSearchFormData({
        ...searchFormData,
        [event.currentTarget.name]: value,
      });
    }
  };

  return (
    <form className="flex flex-col md:flex-row justify-between items-center border-b-2 pb-4 md:space-x-2 space-y-2 md:space-y-0">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        className="input-text w-full md:w-1/2"
        value={searchFormData.search}
        onChange={handleSearchChange}
      />
      <div className="space-y-2 md:space-x-4">
        <select
          className="input-text w-full md:w-fit"
          name="brand"
          value={searchFormData.brand}
          onChange={handleSelectChange}
        >
          <option>Select Brand</option>
          {brands.map((brand) => (
            <option key={brand._id} value={brand._id}>
              {brand.name}
            </option>
          ))}
        </select>
        <select
          className="input-text w-full md:w-fit"
          name="category"
          value={searchFormData.category}
          onChange={handleSelectChange}
        >
          <option>Select Category</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default ProductSearchForm;
