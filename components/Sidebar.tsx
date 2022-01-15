import {
  HomeIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

const Sidebar = (props: { setTab: any }) => {
  return (
    <ul className="w-60 min-h-screen bg-white shadow-md py-2 fixed z-10">
      <li className="nav-btn m-2" onClick={() => props.setTab("dashboard")}>
        <HomeIcon className="h-5 w-5" />
        <p className="text-sm ">Dashboard</p>
      </li>
      <li className="nav-btn m-2" onClick={() => props.setTab("products")}>
        <ShoppingBagIcon className="h-5 w-5" />
        <p className="text-sm">Products</p>
      </li>
      <li className="nav-btn m-2" onClick={() => props.setTab("orders")}>
        <ShoppingCartIcon className="h-5 w-5" />
        <p className="text-sm">Orders</p>
      </li>
    </ul>
  );
};

export default Sidebar;
