import Head from "next/head";
import Navbar from "../../components/client/Navbar";
import ProductDetail from "../../components/client/ProductDetail";
import Reviews from "../../components/client/Reviews";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../../components/client/Layout";

interface Product {
  id: string;
  title: string;
  brand: string;
  description: string;
  price: number;
  discount: number;
  categories: string[];
  tags: string[];
  images: string[];
  extraInfo: string[];
  rating: number;
}

const product: Product = {
  id: "1",
  title: "Jordan Shoes",
  brand: "Nike",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorum sit magni hic, voluptatum vel blanditiis id enim a aliquid beatae delectus neque necessitatibus magnam non facere sapiente. Hic blanditiis enim qui voluptatum adipisci a quam aliquid reiciendis fuga fugiat!",
  price: 1200,
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
  rating: 4.5,
};

const ProductDetails = () => {
  const router = useRouter();
  const { productId } = router.query;

  useEffect(() => {});
  return (
    <Layout>
      <Head>
        <title>{product.title}</title>
      </Head>
      <main className="2xl:container 2xl:mx-auto bg-gray-50 mt-16 p-10">
        <ProductDetail product={product} />
        <Reviews id={product.id} />
      </main>
    </Layout>
  );
};

export default ProductDetails;
