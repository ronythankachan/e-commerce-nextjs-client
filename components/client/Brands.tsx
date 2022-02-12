import { BrandType } from "../../types";
import Brand from "./Brand";

const Brands = ({ brands }: { brands: BrandType[] }) => {
  return (
    <section className="w-full p-5 md:p-10 space-y-8">
      <h1 className="text-4xl font-bold justify-start">Brands</h1>
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-7 xl:grid-cols-10 2xl:grid-cols-12 gap-4">
        {brands.map((brand) => (
          <Brand brand={brand} key={brand._id} />
        ))}
      </div>
    </section>
  );
};
export default Brands;
