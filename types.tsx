import { ParsedUrlQuery } from "querystring";

interface BrandType {
  _id: string;
  name: string;
  image: string;
}

interface ProductType {
  _id?: string;
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
  publish: boolean;
  new: boolean;
}

interface IParams extends ParsedUrlQuery {
  _id: string;
}

interface CategoryType {
  _id: string;
  name: string;
}

interface AlertType {
  message: string;
  loading: boolean;
  type: AlertCategories;
}
export enum AlertCategories {
  SUCCESS = "success",
  ERROR = "error",
  NONE = "NONE",
}

export type { BrandType, ProductType, IParams, CategoryType, AlertType };
