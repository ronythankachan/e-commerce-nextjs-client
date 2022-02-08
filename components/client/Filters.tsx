import React from "react";
import { BrandType, CategoryType, FilterType } from "../../types";

const Filters = ({
  brands,
  categories,
  filters,
  setFilters,
}: {
  brands: BrandType[];
  categories: CategoryType[];
  filters: FilterType;
  setFilters: Function;
}) => {
  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    category: string
  ) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const categoryId =
      categories.find((cat) => cat.name === category)?._id || "";
    value
      ? setFilters({
          ...filters,
          categories: [...filters.categories, categoryId],
        })
      : setFilters({
          ...filters,
          categories: filters.categories.filter((cat) => cat !== categoryId),
        });
  };

  const handleBrandChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const value = event.currentTarget.value;
    if (value !== "Select Brand") {
      setFilters({
        ...filters,
        brand: value,
      });
    }
  };

  return (
    <div className="w-60 bg-white min-h-screen p-5 shadow-md fixed md:visible invisible">
      <form className="space-y-4">
        <div className="form-group">
          <h2 className="text-lg font-bold ml-1">Brands</h2>
          <select
            className="input-text text-sm"
            name="brand"
            value={filters.brand}
            onChange={handleBrandChange}
          >
            <option>Select Brand</option>
            {brands.map((brand) => (
              <option key={brand._id} value={brand._id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>
        <hr />
        <div className="space-y-4">
          <h2 className="text-lg font-bold ml-1">Categories</h2>
          <div className="grid grid-cols-2 gap-2">
            {categories.map((category) => (
              <div key={category._id} className="space-x-2">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(category._id!)}
                  onChange={(e) => handleCategoryChange(e, category.name)}
                />
                <label className="text-sm">{category.name}</label>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Filters;
