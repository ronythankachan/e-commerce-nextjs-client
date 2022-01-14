import {
  HomeIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

const Sidebar = () => {
  return (
    <div className="w-fit h-screen bg-white shadow-md py-2">
      <div className="nav-btn m-2">
        <HomeIcon className="h-5 w-5" />
        <p className="text-sm pr-12 hover:pr-12">Dashboard</p>
      </div>
      <div className="nav-btn m-2">
        <ShoppingBagIcon className="h-5 w-5" />
        <p className="text-sm pr-12 hover:pr-12">Products</p>
      </div>
      <div className="nav-btn m-2">
        <ShoppingCartIcon className="h-5 w-5" />
        <p className="text-sm pr-12 hover:pr-12">Orders</p>
      </div>
    </div>
  );
};

export default Sidebar;
