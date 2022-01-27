import { useState } from "react";
import Image from "next/image";
import { StarIcon, TruckIcon } from "@heroicons/react/solid";
import { ProductType } from "../../types";

const ProductDetail = ({ product }: { product: ProductType }) => {
  const [mainImg, setMainImg] = useState(product.images[0]);
  return (
    <section className="grid grid-cols-product-details gap-x-4">
      <div className="flex flex-col gap-y-4">
        {product.images.map((image, index) => (
          <div onClick={() => setMainImg(image)} key={index}>
            <Image
              layout="responsive"
              width={100}
              height={100}
              src={image}
              key={index}
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        ))}
      </div>
      <div className="h-fit w-fit">
        <Image
          width={600}
          height={600}
          src={mainImg}
          className="object-cover rounded-md"
        />
      </div>
      <div className="p-4">
        <div>
          <p className="text-sm font-thin">
            {product.brand.toUpperCase() + "'s"}
          </p>
          <span className="flex gap-2">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="flex items-center gap-1">
              ( 4.5 <StarIcon className="w-3 h-3 inline-block" />)
            </p>
          </span>
          <h2 className="text-2xl text-gray-500">RS. {product.price}</h2>
        </div>

        <p className="text-sm font-thin mt-4 text-gray-500">
          {product.description}
        </p>
        <small className="text-xs font-thin mt-4">SELECT SIZE</small>
        <div className="flex gap-x-4 mt-2">
          <h2 className="py-2 px-4 border rounded-md bg-gray-100 text-blue-500">
            S
          </h2>
          <h2 className="py-2 px-4 border rounded-md bg-gray-100 text-blue-500">
            M
          </h2>
          <h2 className="py-2 px-4 border rounded-md bg-gray-100 text-blue-500">
            L
          </h2>
          <h2 className="py-2 px-4 border rounded-md bg-gray-100 text-blue-500">
            XL
          </h2>
        </div>
        <button className="mt-4 px-10 border rounded-md bg-black text-white py-2">
          Add to cart
        </button>
        <div className="flex items-center gap-x-2 mt-2">
          <TruckIcon className="w-6 h-6" />
          <small className="text-xs font-thin">
            Delivery in 5-7 days if you order now.
          </small>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
