interface BrandType {
  id: string;
  name: string;
  img: string;
}

interface ProductType {
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

export type { BrandType, ProductType };
