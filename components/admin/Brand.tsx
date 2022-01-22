import Image from "next/image";
import React from "react";
import { BrandType } from "../../types";

const Brand = ({ brand }: { brand: BrandType }) => {
  return (
    <div className="flex justify-center items-center w-max flex-col min-w-fit space-y-4 hover:cursor-pointer hover:scale-105 transition-all duration-150 ease-out">
      <div className="ring-2 ring-gray-300 rounded-full p-1 flex items-center justify-center bg-gray-100">
        <Image
          width={100}
          height={100}
          src={brand.image}
          className="rounded-full shadow-sm object-cover "
        />
      </div>
      <p className="text-sm font-bold">{brand.name}</p>
    </div>
  );
};

export default Brand;
