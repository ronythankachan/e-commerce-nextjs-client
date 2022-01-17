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
const NewArrivals = () => {
  return (
    <div className="bg-gray-50 w-full p-5 md:p-10 space-y-8">
      <h1 className="text-4xl font-bold justify-start">New Arrivals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-9 gap-4 h-fit mt-4">
        {products.map((item) => (
          <Product product={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
