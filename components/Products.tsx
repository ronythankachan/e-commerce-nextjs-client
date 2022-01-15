import Product from "./Product";

interface Product {
  id: number;
  img: string;
  title: string;
  price: {
    currency: string;
    value: number;
  };
}

const products: Product[] = [
  {
    id: 1,
    img: "https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg",
    title: "Jordan shoes",
    price: {
      currency: "inr",
      value: 1200,
    },
  },
  {
    id: 2,
    img: "https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg",
    title: "Nike shoes",
    price: {
      currency: "inr",
      value: 1300,
    },
  },
  {
    id: 3,
    img: "https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg",
    title: "Nike shoes",
    price: {
      currency: "inr",
      value: 1300,
    },
  },
  {
    id: 4,
    img: "https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg",
    title: "Nike shoes",
    price: {
      currency: "inr",
      value: 1300,
    },
  },
  {
    id: 5,
    img: "https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg",
    title: "Nike shoes",
    price: {
      currency: "inr",
      value: 1300,
    },
  },
  {
    id: 6,
    img: "https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg",
    title: "Nike shoes",
    price: {
      currency: "inr",
      value: 1300,
    },
  },
  {
    id: 7,
    img: "https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg",
    title: "Nike shoes",
    price: {
      currency: "inr",
      value: 1300,
    },
  },
  {
    id: 8,
    img: "https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg",
    title: "Nike shoes",
    price: {
      currency: "inr",
      value: 1300,
    },
  },
  {
    id: 9,
    img: "https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg",
    title: "Nike shoes",
    price: {
      currency: "inr",
      value: 1300,
    },
  },
  {
    id: 10,
    img: "https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg",
    title: "Nike shoes",
    price: {
      currency: "inr",
      value: 1300,
    },
  },
];

const categories: string[] = ["Shoes", "Shirts", "Pants"];

const Products = () => {
  return (
    <div className="bg-gray-50 w-full p-5 md:p-10 ml-16 md:ml-60">
      <header className="flex justify-between items-center h-10 mb-5 sticky overflow-x-auto">
        <h1 className="text-3xl font-bold">Products</h1>
        <div className="flex space-x-2">
          <button className="bg-black px-4 py-2 rounded-md text-white hover:text-gray-300">
            Create Category
          </button>
          <button className="bg-blue-600 px-4 py-2 rounded-md text-white hover:text-gray-300">
            Add Product
          </button>
        </div>
      </header>
      <section className="bg-white shadow-sm rounded-md p-3">
        <form className="flex flex-col md:flex-row justify-between items-center border-b-2 pb-4 md:space-x-2 space-y-2 md:space-y-0">
          <input
            type="text"
            placeholder="Search..."
            className="input-text w-full md:w-1/2"
          />
          <select
            name="categories"
            id="categories"
            className="input-text bg-white w-full md:w-fit"
          >
            <option>All Categories</option>
            {categories.map((category) => (
              <option className="p-4">{category}</option>
            ))}
          </select>
        </form>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-8 gap-4 h-fit mt-4">
          {products.map((item) => (
            <Product product={item} key={item.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
