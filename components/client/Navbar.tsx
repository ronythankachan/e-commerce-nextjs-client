import { ShoppingCartIcon, UserIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <ul className="h-16 bg-white shadow-md flex px-5 py-3 fixed w-full top-0 justify-between items-center">
      <li>
        <Link href="/">
          <a>
            <Image src="/vercel.svg" width={100} height={100} />
          </a>
        </Link>
      </li>
      <div className="flex items-center space-x-4">
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
        <li className="flex">
          <ShoppingCartIcon className="h-5 w-5" />
          <span className="-mt-2 ml-1">3</span>
        </li>
        <li>
          <UserIcon className="h-5 w-5" />
        </li>
      </div>
    </ul>
  );
};

export default Navbar;
