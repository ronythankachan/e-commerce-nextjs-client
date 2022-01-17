import {
  CurrencyRupeeIcon,
  ShoppingBagIcon,
  TruckIcon,
} from "@heroicons/react/outline";

const Dashboard = () => {
  return (
    <div className="bg-gray-50 w-full p-5 md:p-10 ml-16 md:ml-60 space-y-8">
      <h1 className="text-4xl font-bold justify-start">Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded h-20 px-10 flex  items-center border space-x-8 min-w-max">
          <CurrencyRupeeIcon className="h-12 w-12 text-green-600 p-2 bg-green-300 rounded-full" />
          <div>
            <h3 className="font-semibold">Total Sales</h3>
            <p className="text-md">Rs. 123000</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded h-20 px-10 flex items-center border space-x-8 min-w-max">
          <TruckIcon className="h-12 w-12 text-blue-600 p-2 bg-blue-300 rounded-full" />
          <div>
            <h3 className="font-semibold">Total Orders</h3>
            <p className="text-md">4353</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded h-20 px-10 flex  items-center border space-x-8 min-w-max">
          <ShoppingBagIcon className="h-12 w-12 text-yellow-600 p-2 bg-yellow-300 rounded-full" />
          <div>
            <h3 className="font-semibold">Total products</h3>
            <p className="text-md">47395</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
