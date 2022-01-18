import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/client/Navbar";

interface Product {
  id: string;
  title: string;
  description: string;
  price: {
    currency: string;
    value: number;
  };
  discount: number;
  categories: string[];
  tags: string[];
  images: string[];
  extraInfo: string[];
}

const product: Product = {
  id: "1",
  title: "Choornam",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorum sit magni hic, voluptatum vel blanditiis id enim a aliquid beatae delectus neque necessitatibus magnam non facere sapiente. Hic blanditiis enim qui voluptatum adipisci a quam aliquid reiciendis fuga fugiat!",
  price: {
    currency: "inr",
    value: 1200,
  },
  discount: 30,
  categories: ["Shirt", "Shoes"],
  tags: [],
  images: [
    "https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg",
    "https://c.static-nike.com/a/images/w_1200,c_limit/bzl2wmsfh7kgdkufrrjq/seo-title.jpg",
    "https://res.cloudinary.com/dyyjph6kx/image/upload/fl_lossy,f_auto,q_auto,w_auto/gift_vouchers/phpHUi5ng_nwb2k3.jpg",
    "https://etimg.etb2bimg.com/photo/68610404.cms",
  ],
  extraInfo: [],
};

const ProductDetails = () => {
  return (
    <div>
      <Head>
        <title>{product.title}</title>
      </Head>
      <Navbar />
      <div className="mt-16 grid grid-cols-product-details p-10 gap-x-4">
        <div className="bg-gray-30 flex flex-col gap-y-2">
          {product.images.map((image, index) => (
            <div className="border bg-gray-50 border-gray-200 rounded-md shadow-sm flex justify-center items-center hover:scale-[102%] hover:cursor-pointer transition-all duration-150 ease-out">
              <Image
                width={100}
                height={80}
                src={image}
                key={index}
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div>
        <div className="bg-gray-50 flex items-center justify-center p-1 rounded-md ">
          <Image
            width={1000}
            height={1000}
            src={product.images[0]}
            className="object-cover rounded-md"
          />
        </div>
        <div>details</div>
      </div>
    </div>
  );
};

export default ProductDetails;
