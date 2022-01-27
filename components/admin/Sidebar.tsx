import {
  HomeIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  SparklesIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";

const Sidebar = () => {
  const path = useRouter().pathname;

  return (
    <ul className="w-18 md:w-60 min-h-screen bg-white shadow-sm py-2 fixed z-10">
      <li>
        <Link href="/admin/dashboard">
          <a
            className={cn("nav-btn", "m-2", {
              "text-blue-500 bg-gray-100": path.includes("dashboard"),
            })}
          >
            <HomeIcon className="h-5 w-5" />
            <p className="text-sm hidden md:block">Dashboard</p>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/admin/products">
          <a
            className={cn("nav-btn", "m-2", {
              "text-blue-500 bg-gray-100": path.includes("product"),
            })}
          >
            <ShoppingBagIcon className="h-5 w-5" />
            <p className="text-sm hidden md:block">Products</p>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/admin/orders">
          <a
            className={cn("nav-btn", "m-2", {
              "text-blue-500 bg-gray-100": path.includes("orders"),
            })}
          >
            <ShoppingCartIcon className="h-5 w-5" />
            <p className="text-sm hidden md:block">Orders</p>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/admin/users">
          <a
            className={cn("nav-btn", "m-2", {
              "text-blue-500 bg-gray-100": path.includes("users"),
            })}
          >
            <UserIcon className="h-5 w-5" />
            <p className="text-sm hidden md:block">Users</p>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/admin/brands">
          <a
            className={cn("nav-btn", "m-2", {
              "text-blue-500 bg-gray-100": path.includes("brands"),
            })}
          >
            <SparklesIcon className="h-5 w-5" />
            <p className="text-sm hidden md:block">Brands</p>
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
