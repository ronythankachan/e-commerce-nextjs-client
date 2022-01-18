import Image from "next/image";
import Brand from "./Brand";
interface Brand {
  id: string;
  name: string;
  img: string;
}

const brands: Brand[] = [
  {
    id: "1",
    name: "Addidas",
    img: "https://pbs.twimg.com/profile_images/1387727047468929028/iptHUHoJ_400x400.jpg",
  },
  {
    id: "2",
    name: "Nike",
    img: "https://c.static-nike.com/a/images/w_1200,c_limit/bzl2wmsfh7kgdkufrrjq/seo-title.jpg",
  },
  {
    id: "3",
    name: "Allen Solly",
    img: "https://etimg.etb2bimg.com/photo/68610404.cms",
  },
  {
    id: "4",
    name: "Van Heusen",
    img: "https://res.cloudinary.com/dyyjph6kx/image/upload/fl_lossy,f_auto,q_auto,w_auto/gift_vouchers/phpHUi5ng_nwb2k3.jpg",
  },
];

const Brands = () => {
  return (
    <section className="bg-gray-50 w-full p-5 md:p-10 space-y-8">
      <h1 className="text-4xl font-bold justify-start">Brands</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 2xl:grid-cols-11 gap-4">
        {brands.map((brand) => (
          <Brand brand={brand} />
        ))}
      </div>
    </section>
  );
};
export default Brands;
