import { ParsedUrlQuery } from "querystring";

interface BrandType {
  _id?: string;
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
  _id?: string;
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

interface UserType {
  name: string;
  email: string;
  phone: string;
  password: string;
  cpassword?: string;
}
interface LoginFormType {
  email: string;
  password: string;
}
interface TokenType {
  accessToken: string;
  refreshToken: string;
}

export type {
  BrandType,
  ProductType,
  IParams,
  CategoryType,
  AlertType,
  UserType,
  LoginFormType,
  TokenType,
};
