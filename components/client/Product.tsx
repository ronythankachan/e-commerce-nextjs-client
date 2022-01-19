import { ShoppingCartIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
const currencySymbols: any = {
  usd: "$",
  inr: "Rs.",
};
const Product = (props: { product: any }) => {
  return (
    <div className="border-2 p-2 rounded-md space-y-2 w-fit hover:scale-[102%] transition-all duration-150 ease-out hover:cursor-pointer bg-white">
      <Link href={"/product/" + props.product.id}>
        <a>
          <Image
            width={250}
            height={270}
            src={props.product.img}
            className="object-cover rounded-md"
          />
          <p className="text-md text-gray-500 mt-2">{props.product.title}</p>
          <p className="text-lg font-semibold">
            {currencySymbols[props.product.price.currency] +
              props.product.price.value}
          </p>
          <button className="flex items-center w-full justify-center py-2 border rounded-md space-x-2 bg-gray-300 text-black hover:text-white hover:bg-black transition-all duration-150 ease-in-out">
            <ShoppingCartIcon className="w-4 h-4" />
            <small className="text-xs font-semibold">Add to cart</small>
          </button>
        </a>
      </Link>
    </div>
  );
};

export default Product;
