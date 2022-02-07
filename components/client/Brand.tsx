import Image from "next/image";
import { BrandType } from "../../types";
const Brand = ({ brand }: { brand: BrandType }) => {
  return (
    <div className="flex justify-center items-center w-max flex-col min-w-fit space-y-4 hover:cursor-pointer hover:scale-105 transition-all duration-150 ease-out">
      <div className="w-24 h-24 bg-white rounded-full p-[2px] ring-2 ring-gray-300">
        <div className="relative w-full h-full rounded-full border">
          <Image
            src={brand.image}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL="/placeholder.jpg"
            className="rounded-full "
          />
        </div>
      </div>
      <p className="text-sm font-bold">{brand.name}</p>
    </div>
  );
};

export default Brand;
