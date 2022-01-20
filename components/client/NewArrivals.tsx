import { ProductType } from "../../types";
import Product from "./Product";

const NewArrivals = ({ products }: { products: ProductType[] }) => {
  return (
    <section className="w-full p-5 md:p-10 space-y-8">
      <h1 className="text-4xl font-bold justify-start">New Arrivals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-9 gap-4 w-fit">
        {products.map((item) => (
          <Product product={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
