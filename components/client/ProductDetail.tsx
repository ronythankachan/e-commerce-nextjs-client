import { useState } from "react";
import Image from "next/image";
import { TruckIcon } from "@heroicons/react/solid";
import { BrandType, ProductType } from "../../types";

const ProductDetail = ({
  product,
  brand,
}: {
  product: ProductType;
  brand: BrandType;
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
        <p className="text-sm font-thin text-gray-500">{product.description}</p>
        {/* variations */}
        <div className="space-y-2">
          <small className="text-xs font-semibold">SELECT</small>
          <div className="flex gap-2 flex-wrap">
            {product.variations.map((variationName, index) => (
              <button
                className="bg-emerald-500 text-white py-2 px-4 text-xs"
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
        <div className="flex items-center gap-x-4">
          <TruckIcon className="w-5 h-5" />
          <small className="font-thin">Delivery in 8-10 days</small>
        </div>
      </div>
    </section>

    // <section className="grid grid-cols-product-details gap-x-4">

    //   <div className="flex flex-col gap-y-4">
    //     {product.images.map((image, index) => (
    //       <div
    //         onClick={() => setMainImg(image)}
    //         key={index}
    //         className="hover:cursor-pointer hover:scale-[102%] transition-all duration-150 ease-out"
    //       >
    //         <Image
    //           layout="responsive"
    //           width={100}
    //           height={100}
    //           src={image}
    //           key={index}
    //           placeholder="blur"
    //           blurDataURL="/placeholder.jpg"
    //           objectFit="cover"
    //           className="rounded-md"
    //         />
    //       </div>
    //     ))}
    //   </div>
    //   <div className="h-fit w-fit ">
    //     <Image
    //       width={600}
    //       height={600}
    //       src={mainImg}
    //       placeholder="blur"
    //       blurDataURL="/placeholder.jpg"
    //       className="object-cover rounded-md"
    //     />
    //   </div>
    //   <div className="p-4">
    //     <div>
    //       <p className="text-sm font-thin">{brand.name.toUpperCase() + "'s"}</p>
    //       <span className="flex gap-2">
    //         <h1 className="text-2xl font-bold">{product.title}</h1>
    //         <p className="flex items-center gap-1">
    //           ( 4.5 <StarIcon className="w-3 h-3 inline-block" />)
    //         </p>
    //       </span>
    //       <h2 className="text-sm font-thin text-gray-500">
    //         RS. {product.price}
    //       </h2>
    //     </div>

    //     <p className="text-sm font-thin mt-4 text-gray-500">
    //       {product.description}
    //     </p>
    //     <hr className="my-4" />
    //     <small className="text-xs font-thin">SELECT</small>
    //     <div className="flex gap-x-4 mt-2">
    //       {product.variations.map((variation, index) => (
    //         <button className="text-xs uppercase px-4 py-2 rounded-md bg-blue-100 text-gray-500 hover:bg-blue-50 animation">
    //           {variation}
    //         </button>
    //       ))}
    //     </div>
    //     <hr className="my-4" />
    //     <button className="px-10 border rounded-md bg-black text-white py-2">
    //       Add to cart
    //     </button>
    //     <div className="flex items-center gap-x-2 mt-2">
    //       <TruckIcon className="w-6 h-6" />
    //       <small className="text-xs font-thin">
    //         Delivery in 5-7 days if you order now.
    //       </small>
    //     </div>
    //   </div>
    // </section>
  );
};

export default ProductDetail;
