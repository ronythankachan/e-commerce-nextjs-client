import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import Image from "next/image";
const currencySymbols: any = {
  usd: "$",
  inr: "Rs.",
};
const Product = (props: { product: any }) => {
  return (
    <div className="border-2 p-2 rounded-md space-y-2">
      <Image width={300} height={300} src={props.product.img} />
      <p className="text-sm text-gray-500 mt-2">{props.product.title}</p>
      <p className="text-sm font-semibold">
        {currencySymbols[props.product.price.currency] +
          props.product.price.value}
      </p>
      <div className="flex space-x-2">
        <button className="w-1/2 text-xs py-1 px-2 border border-gray-300 flex justify-evenly items-center rounded text-gray-500 hover:cursor-pointer hover:border-black transition-all duration-150 ease-in-out">
          <PencilIcon className="w-4 h-4" />
          Edit
        </button>
        <button className="w-1/2 text-xs py-1 px-2 border border-gray-300 flex justify-evenly items-center rounded text-red-500 hover:cursor-pointer hover:text-white hover:bg-red-500 hover:border-none transition-all duration-150 ease-in-out">
          <TrashIcon className="w-4 h-4" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default Product;
