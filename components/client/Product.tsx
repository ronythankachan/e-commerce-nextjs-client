import Image from "next/image";
import Link from "next/link";
import { ProductType } from "../../types";
const Product = ({ product }: { product: ProductType }) => {
  return (
    <Link href={"/product/" + product._id}>
      <a className="border p-1 rounded-md bg-white">
        <Image
          width={250}
          height={270}
          src={product.images[0]}
          placeholder="blur"
          blurDataURL="/placeholder.jpg"
          objectFit="cover"
          className="rounded-md"
        />
        <div className="py-4 px-2 space-y-1">
          <h3 className="text-gray-500 font-thin">{product.title}</h3>
          <p className=" text-sm">Rs. {product.price}</p>

          {product.discount ? (
            <div className="flex items-center gap-x-2">
              <p className="line-through text-sm text-gray-500">
                Rs.
                {Math.ceil((product.price * 100) / (100 - product.discount))}
              </p>
              <p className="px-2 text-red-500 text-sm">
                -{product.discount}% off
              </p>
            </div>
          ) : null}
        </div>
      </a>
    </Link>
  );
};

export default Product;
