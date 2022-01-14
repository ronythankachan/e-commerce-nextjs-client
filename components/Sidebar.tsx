import {
  HomeIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

const Sidebar = (props: { setTab: any }) => {
  return (
    <div className="w-fit min-h-screen bg-white shadow-md py-2">
      <div className="nav-btn m-2" onClick={() => props.setTab("dashboard")}>
        <HomeIcon className="h-5 w-5" />
        <p className="text-sm pr-12 hover:pr-12">Dashboard</p>
      </div>
      <div className="nav-btn m-2" onClick={() => props.setTab("products")}>
        <ShoppingBagIcon className="h-5 w-5" />
        <p className="text-sm pr-12 hover:pr-12">Products</p>
      </div>
      <div className="nav-btn m-2" onClick={() => props.setTab("orders")}>
        <ShoppingCartIcon className="h-5 w-5" />
        <p className="text-sm pr-12 hover:pr-12">Orders</p>
      </div>
    </div>
  );
};

export default Sidebar;
