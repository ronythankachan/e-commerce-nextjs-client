import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { deleteProductAPI } from "../../lib/utils";
import { ProductType } from "../../types";
import {
  showDissapearingSuccessAlert,
  showSuccessAlert,
} from "../general/alert/AlertActions";
import { AlertContext } from "../general/alert/AlertProvider";

const Product = ({ product }: { product: ProductType }) => {
  //Get alert context
  const value: any = useContext(AlertContext);
  const [_, dispatch] = value;

  // Refresh page after deleting
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };

  const deleteProduct = async (id: string) => {
    showSuccessAlert(dispatch, "Deleting...");
    await deleteProductAPI(id);
    refreshData();
    showDissapearingSuccessAlert(dispatch, "Deleted successfully");
  };

  return (
    <div className="border-2 p-2 rounded-md space-y-2 max-w-fit">
      <Image
        width={250}
        height={270}
        src={product.images[0]}
        placeholder="blur"
        blurDataURL="/placeholder.jpg"
        className="object-cover rounded-md"
      />
      <p className="text-sm text-gray-500 mt-2">{product.title}</p>
      <p className="text-sm font-semibold">Rs. {product.price}</p>
      <div className="flex space-x-2">
        <Link href={`/admin/product/${product._id}`}>
          <a className="w-1/2 text-xs py-2 px-4 border border-gray-300 flex justify-evenly items-center rounded text-gray-500 hover:cursor-pointer hover:border-black transition-all duration-150 ease-in-out">
            <PencilIcon className="w-4 h-4" />
            Edit
          </a>
        </Link>
        <button
          className="w-1/2 text-xs py-2 px-4 border border-gray-300 flex justify-evenly items-center rounded text-red-500 hover:cursor-pointer hover:text-white hover:bg-red-500 hover:border-none transition-all duration-150 ease-in-out"
          onClick={() => deleteProduct(product._id!)}
        >
          <TrashIcon className="w-4 h-4" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default Product;
