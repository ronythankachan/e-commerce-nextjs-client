import { BrandType, CategoryType } from "./types";
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

export { brands, categories };
