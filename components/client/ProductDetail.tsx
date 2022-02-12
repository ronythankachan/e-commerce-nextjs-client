import { useState } from "react";
import Image from "next/image";
import { BrandType, ProductType } from "../../types";
import { TruckIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

const ProductDetail = ({
  product,
  brand,
  reviewRef,
}: {
  product: ProductType;
  brand: BrandType;
  reviewRef: React.RefObject<HTMLElement>;
}) => {
  const [mainImg, setMainImg] = useState<string>(product.images[0]);
  const [variation, setVariation] = useState<string>();
  return (
    <section className="grid md:grid-cols-2">
      {/* Image section */}
      <div className="flex gap-x-4 md:border-r md:pr-4">
        <div className="flex flex-col gap-y-4">
          {product.images.map((image, index) => (
            <div
              className="hover:cursor-pointer hover:scale-[102%] transition-all duration-150 ease-out"
              onClick={() => setMainImg(image)}
              key={index}
            >
              <Image
                src={image}
                width={100}
                height={100}
                objectFit="cover"
                className="rounded"
                placeholder="blur"
                blurDataURL="/placeholder.jpg"
              />
            </div>
          ))}
        </div>
        <div>
          <Image
            src={mainImg}
            width={600}
            height={600}
            objectFit="cover"
            className="rounded"
            placeholder="blur"
            blurDataURL="/placeholder.jpg"
          />
        </div>
      </div>
      <hr className="md:hidden my-4" />
      {/* Detail section */}
      <div className="p-5 space-y-4">
        <div>
          <small>{`${brand.name.toUpperCase()}'s`}</small>
          <h1 className="text-3xl font-bold">{product.title}</h1>
        </div>
        <h2 className="text-xl font-semibold">
          <span className="mr-1">{"\u20B9"}</span>
          {product.price}
        </h2>
        <div className="flex items-center gap-x-2 text-sm">
          <p>{4.5} </p>
          (<StarIcon className="w-4 h-4" />)
          <button
            className="underline"
            onClick={() =>
              reviewRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            125 ratings
          </button>
        </div>
        <p className="text-sm font-thin text-gray-500">{product.description}</p>
        {/* variations */}
        <div className="space-y-2">
          <small className="text-xs font-semibold">SELECT</small>
          <div className="flex gap-2 flex-wrap">
            {product.variations.map((variationName, index) => (
              <button
                className="bg-emerald-500 text-white py-1 px-2 text-[10px] rounded"
                key={index}
                onClick={() => setVariation(variationName)}
              >
                {variationName}
              </button>
            ))}
          </div>
        </div>
        <div className="space-x-4 pb-4">
          <button className="ring-2 ring-black bg-white px-4 py-2 hover:text-gray-500 hover:bg-gray-100">
            Buy Now
          </button>
          <button className="ring-2 ring-black bg-black px-4 py-2 text-white hover:bg-gray-600">
            Add to bag
          </button>
        </div>
        <hr />
        <div className="flex items-center gap-x-2">
          <TruckIcon className="w-6 h-6" />
          <small className="font-thin">Delivery in 8-10 days</small>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
