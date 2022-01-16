import {
  MenuAlt1Icon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/outline";
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
      <li className="nav-btn">
        <MenuAlt1Icon className="w-5 h-5 flex md:hidden" />
      </li>
      <div className="md:flex items-center space-x-6 hidden">
        <li className="hover:cursor-pointer hover:text-blue-500">Products</li>
        <li className="hover:cursor-pointer hover:text-blue-500">About</li>
        <li className="hover:cursor-pointer hover:text-blue-500">Contact</li>
        <li className="flex hover:cursor-pointer hover:text-blue-500">
          <ShoppingCartIcon className="h-5 w-5" />
          <small className="border rounded-full px-1 text-white h-min -mt-4 -mr-2 bg-green-500">
            3
          </small>
        </li>
        <li className="nav-btn border">
          <UserIcon className="h-5 w-5" />
        </li>
      </div>
    </ul>
  );
};

export default Navbar;
