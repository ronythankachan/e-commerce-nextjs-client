import { BrandType } from "../../types";
import Brand from "./Brand";

const Brands = ({ brands }: { brands: BrandType[] }) => {
  return (
    <section className="bg-gray-50 w-full p-5 md:p-10 space-y-8">
      <h1 className="text-4xl font-bold justify-start">Brands</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 2xl:grid-cols-12 gap-4">
        {brands.map((brand) => (
          <Brand brand={brand} />
        ))}
      </div>
    </section>
  );
};
export default Brands;
