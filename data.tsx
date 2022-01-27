import { BrandType, CategoryType, ProductType } from "./types";

const products: ProductType[] = [
  {
    _id: "1",
    title: "Jordan shoes",
    brand: "Nike",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus nisi totam quibusdam alias unde ipsum officia, aut est dolorum omnis ducimus numquam maiores cum sequi possimus assumenda accusantium repellendus ipsam beatae consectetur delectus cumque. Beatae, itaque nulla! Aspernatur, eius libero.",
    price: 1120,
    discount: 0,
    categories: ["Shoes", "Hoodies"],
    tags: ["test", "another"],
    images: [
      "https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg",
    ],
    extraInfo: [],
    rating: 7.5,
    publish: true,
  },
  {
    _id: "2",
    title: "Nike Air",
    brand: "Nike",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias veritatis assumenda laudantium deleniti quos tenetur, vitae nobis explicabo enim perspiciatis placeat sunt rem, possimus dolorem sint modi saepe facilis eligendi!",
    price: 1450,
    discount: 0,
    categories: [],
    tags: [],
    images: [
      "https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg",
    ],
    extraInfo: [],
    rating: 0,
    publish: true,
  },
  {
    _id: "3",
    title: "Fila Comfort - All weather",
    brand: "Nike",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque accusamus, voluptatem, nulla repellat harum quia",
    price: 3480,
    discount: 0,
    categories: [],
    tags: [],
    images: [
      "https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg",
    ],
    extraInfo: [],
    rating: 4.5,
    publish: true,
  },
  {
    _id: "4",
    title: "Addidas sport",
    brand: "Addidas",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quisquam facere fuga cumque laboriosam autem eos voluptatum, nam quibusdam illum officiis repudiandae nobis, mollitia quasi soluta explicabo nostrum perspiciatis dolore odio sed sapiente in eveniet quam animi. Suscipit dicta id aut unde quidem itaque accusamus excepturi dolor, laborum, eius tempora?",
    price: 4530,
    discount: 10,
    categories: [],
    tags: [],
    images: [
      "https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg",
    ],
    extraInfo: [],
    rating: 3.2,
    publish: true,
  },
  {
    _id: "5",
    title: "HRX brand shoes",
    brand: "HRX",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    price: 3000,
    discount: 0,
    categories: [],
    tags: [],
    images: [
      "https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg",
    ],
    extraInfo: [],
    rating: 4,
    publish: true,
  },
];

const brands: BrandType[] = [
  {
    _id: "1",
    name: "Addidas",
    image:
      "https://pbs.twimg.com/profile_images/1387727047468929028/iptHUHoJ_400x400.jpg",
  },
  {
    _id: "2",
    name: "Nike",
    image:
      "https://c.static-nike.com/a/images/w_1200,c_limit/bzl2wmsfh7kgdkufrrjq/seo-title.jpg",
  },
  {
    _id: "3",
    name: "Allen Solly",
    image: "https://etimg.etb2bimg.com/photo/68610404.cms",
  },
  {
    _id: "4",
    name: "Van Heusen",
    image:
      "https://res.cloudinary.com/dyyjph6kx/image/upload/fl_lossy,f_auto,q_auto,w_auto/gift_vouchers/phpHUi5ng_nwb2k3.jpg",
  },
];

const categories: CategoryType[] = [
  {
    _id: "1",
    name: "Shoes",
  },
  {
    _id: "2",
    name: "Shirts",
  },
  {
    _id: "3",
    name: "Pants",
  },
  {
    _id: "4",
    name: "Hoodies",
  },
];

export { products, brands, categories };
