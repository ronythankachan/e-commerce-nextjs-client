import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { ProductType } from "../../types";
const Product = ({ product }: { product: ProductType }) => {
  const saveProductURI = product.id
    ? `/admin/saveproduct?id=${product.id}`
    : "/admin/saveproduct";
  return (
    <div className="border-2 p-2 rounded-md space-y-2 max-w-fit">
      <Image
        width={250}
        height={270}
        src={product.images[0]}
        className="object-cover rounded-md"
      />
      <p className="text-sm text-gray-500 mt-2">{product.title}</p>
      <p className="text-sm font-semibold">Rs. {product.price}</p>
      <div className="flex space-x-2">
        <Link href={saveProductURI}>
          <a className="w-1/2 text-xs py-2 px-4 border border-gray-300 flex justify-evenly items-center rounded text-gray-500 hover:cursor-pointer hover:border-black transition-all duration-150 ease-in-out">
            <PencilIcon className="w-4 h-4" />
            Edit
          </a>
        </Link>
        <button className="w-1/2 text-xs py-2 px-4 border border-gray-300 flex justify-evenly items-center rounded text-red-500 hover:cursor-pointer hover:text-white hover:bg-red-500 hover:border-none transition-all duration-150 ease-in-out">
          <TrashIcon className="w-4 h-4" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default Product;
