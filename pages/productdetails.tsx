import { CurrencyRupeeIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "../components/client/Navbar";

interface Product {
  id: string;
  title: string;
  brand: string;
  description: string;
  price: number;
  discount: number;
  categories: string[];
  tags: string[];
  images: string[];
  extraInfo: string[];
  rating: number;
}

const product: Product = {
  id: "1",
  title: "Jordan Shoes",
  brand: "Nike",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorum sit magni hic, voluptatum vel blanditiis id enim a aliquid beatae delectus neque necessitatibus magnam non facere sapiente. Hic blanditiis enim qui voluptatum adipisci a quam aliquid reiciendis fuga fugiat!",
  price: 1200,
  discount: 30,
  categories: ["Shirt", "Shoes"],
  tags: [],
  images: [
    "https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg",
    "https://c.static-nike.com/a/images/w_1200,c_limit/bzl2wmsfh7kgdkufrrjq/seo-title.jpg",
    "https://res.cloudinary.com/dyyjph6kx/image/upload/fl_lossy,f_auto,q_auto,w_auto/gift_vouchers/phpHUi5ng_nwb2k3.jpg",
    "https://etimg.etb2bimg.com/photo/68610404.cms",
  ],
  extraInfo: [],
  rating: 4.5,
};

const ProductDetails = () => {
  const [mainImg, setMainImg] = useState("/placeholder.jpg");
  useEffect(() => {
    setMainImg(product.images[0]);
  }, []);
  return (
    <div>
      <Head>
        <title>{product.title}</title>
      </Head>
      <Navbar />
      <div className="mt-16 grid grid-cols-product-details p-10 gap-x-4">
        <div className="bg-gray-30 flex flex-col gap-y-2">
          {product.images.map((image, index) => (
            <div
              className="border bg-gray-50 border-gray-200 rounded-md shadow-sm flex justify-center items-center hover:scale-[102%] hover:cursor-pointer"
              onClick={() => setMainImg(image)}
            >
              <Image
                width={100}
                height={80}
                src={image}
                key={index}
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div>
        <div className="bg-gray-50 flex items-center justify-center p-1 rounded-md">
          <Image
            width={500}
            height={500}
            src={mainImg}
            className="object-cover rounded-md"
          />
        </div>
        <div className="p-4">
          <small className="text-sm font-thin">
            {product.brand.toUpperCase() + "'s"}
          </small>
          <span className="flex gap-2">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="flex items-center gap-1">
              ( 4.5 <StarIcon className="w-3 h-3 inline-block" />)
            </p>
          </span>
          <h2 className="font-semibold mt-4">RS. {product.price}</h2>
          <p className="text-sm font-thin mt-4 text-gray-500">
            {product.description}
          </p>
          <p className="text-xs font-thin mt-4">SELECT SIZE</p>
          <div className="flex gap-x-4 mt-2">
            <h2 className="py-2 px-4 border rounded-md bg-gray-100 text-blue-500">S</h2>
            <h2 className="py-2 px-4 border rounded-md bg-gray-100 text-blue-500">M</h2>
            <h2 className="py-2 px-4 border rounded-md bg-gray-100 text-blue-500">L</h2>
            <h2 className="py-2 px-4 border rounded-md bg-gray-100 text-blue-500">XL</h2>
          </div>
          <button className="mt-4 px-10 border rounded-md bg-black text-white py-2">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
