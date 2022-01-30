import { TrashIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { deleteBrandAPI } from "../../lib/utils";
import { BrandType } from "../../types";
import {
  showDissapearingSuccessAlert,
  showSuccessAlert,
} from "../general/alert/AlertActions";
import { AlertContext } from "../general/alert/AlertProvider";

const Brand = ({ brand }: { brand: BrandType }) => {
  //Get alert context
  const value: any = useContext(AlertContext);
  const [_, dispatch] = value;

  // Refresh page after deleting
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };

  const deleteBrand = async () => {
    showSuccessAlert(dispatch, "Deleting");
    await deleteBrandAPI(brand._id!);
    refreshData();
    showDissapearingSuccessAlert(dispatch, "Brand deleted successfully");
  };

  return (
    <div className="w-40 shadow-md border rounded-md relative p-1">
      <div className="relative w-full h-28">
        <Image
          src={brand.image}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL="/placeholder.jpg"
        />
      </div>
      <hr />
      <div className="p-4 text-center w-full">
        <h3>{brand.name}</h3>
        <button className="text-blue-500 underline hover:cursor-pointer hover:scale-[105%] transition-all duration-150 ease-out">
          398 items
        </button>
      </div>
      <button
        onClick={deleteBrand}
        className="absolute top-2 right-2 rounded p-[2px] bg-gray-300 hover:opacity-50"
      >
        <TrashIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Brand;
