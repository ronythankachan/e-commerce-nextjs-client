import {
  HomeIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  SparklesIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

const Sidebar = () => {
  return (
    <ul className="w-18 md:w-60 min-h-screen bg-white shadow-sm py-2 fixed z-10">
      <li>
        <Link href="/admin/">
          <a className="nav-btn m-2">
            <HomeIcon className="h-5 w-5" />
            <p className="text-sm hidden md:block">Dashboard</p>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/admin/products">
          <a className="nav-btn m-2">
            <ShoppingBagIcon className="h-5 w-5" />
            <p className="text-sm hidden md:block">Products</p>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/admin/orders">
          <a className="nav-btn m-2">
            <ShoppingCartIcon className="h-5 w-5" />
            <p className="text-sm hidden md:block">Orders</p>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/admin/users">
          <a className="nav-btn m-2">
            <UserIcon className="h-5 w-5" />
            <p className="text-sm hidden md:block">Users</p>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/admin/brands">
          <a className="nav-btn m-2">
            <SparklesIcon className="h-5 w-5" />
            <p className="text-sm hidden md:block">Brands</p>
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
