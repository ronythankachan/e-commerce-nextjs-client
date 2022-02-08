import {
  LoginIcon,
  MenuAlt1Icon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import DropDown from "../general/dropdown/DropDown";

const Navbar = () => {
  return (
    <ul className="h-16 bg-white shadow-md flex px-5 py-3 fixed w-full top-0 justify-between items-center z-20">
      <li>
        <Link href="/">
          <a>
            <Image src="/logo.png" width={50} height={50} />
          </a>
        </Link>
      </li>
      <li className="nav-btn">
        <MenuAlt1Icon className="w-5 h-5 flex md:hidden" />
      </li>
      <div className="md:flex items-center space-x-6 hidden">
        <li>
          <Link href="/products">
            <a className="hover:cursor-pointer hover:text-gray-400">Products</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="hover:cursor-pointer hover:text-gray-400">About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className="hover:cursor-pointer hover:text-gray-400">Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/cart">
            <a className="flex hover:cursor-pointer hover:text-gray-400">
              <ShoppingCartIcon className="h-5 w-5" />
              <small className="border rounded-full px-1 text-white h-min -mt-4 -mr-2 bg-green-500">
                3
              </small>
            </a>
          </Link>
        </li>
        <li>
          <DropDown title="Account">
            <Link href="/login">
              <a className="w-full px-2 py-2 rounded hover:bg-blue-50 hover:text-gray-500 flex items-center gap-x-4">
                <LoginIcon className="w-5 h-5 text-blue-500" />
                Login
              </a>
            </Link>
            <Link href="/orders">
              <a className="w-full px-2 py-2 rounded hover:bg-blue-50 hover:text-gray-500 flex items-center gap-x-4">
                <ShoppingBagIcon className="w-5 h-5 text-blue-500" />
                My Bag
              </a>
            </Link>
          </DropDown>
        </li>
      </div>
    </ul>
  );
};

export default Navbar;
