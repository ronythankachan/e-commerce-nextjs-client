import Image from "next/image";
import Link from "next/link";
import { ProductType } from "../../types";
const Product = ({ product }: { product: ProductType }) => {
  return (
    <Link href={"/product/" + product._id}>
      <a className="bg-[#f7f7f7] shadow-md rounded-md space-y-2 w-fit hover:scale-[102%] transition-all duration-150 ease-out hover:cursor-pointer">
        <Image
          width={250}
          height={270}
          src={product.images[0]}
          className="object-cover rounded-md"
        />
        <div className="py-4 px-4 bg-white">
          <p className="text-lg font-thin text-gray-500 mt-2">
            {product.title}
          </p>
          <p className="text-sm font-thin">Rs. {product.price}</p>
        </div>
      </a>
    </Link>
  );
};

export default Product;
