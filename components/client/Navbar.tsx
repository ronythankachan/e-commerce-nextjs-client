import {
  ArrowRightIcon,
  MenuAlt1Icon,
  ShoppingCartIcon,
  UserIcon,
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
        <li className="hover:cursor-pointer hover:text-gray-400">
          <Link href="/products">
            <a>Products</a>
          </Link>
        </li>
        <li className="hover:cursor-pointer hover:text-gray-400">About</li>
        <li className="hover:cursor-pointer hover:text-gray-400">Contact</li>
        <li className="flex hover:cursor-pointer hover:text-gray-400">
          <ShoppingCartIcon className="h-5 w-5" />
          <small className="border rounded-full px-1 text-white h-min -mt-4 -mr-2 bg-green-500">
            3
          </small>
        </li>
        <li>
          <DropDown title="Account">
            <Link href="login">
              <a className="w-full px-2 py-2 rounded hover:bg-blue-100">
                Login
              </a>
            </Link>
            <Link href="login">
              <a className="w-full px-2 py-2 rounded hover:bg-blue-100">
                Orders
              </a>
            </Link>
          </DropDown>
        </li>
      </div>
    </ul>
  );
};

export default Navbar;
