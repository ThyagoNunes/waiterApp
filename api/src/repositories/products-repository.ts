import { Product } from '../app/models/Product';
import { IProduct } from '../utils/product';

export interface ProductsRepositoryShowData {
  _id: string;
}

export interface ProductsRepositoryCreateData {
  _id?: string;
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients?: {
    name: string;
    icon: string;
  }[];
  category?: string;
}

export interface ProductsRepositoryUpdateData {
  _id: string;
  product: IProduct;
}

export interface ProductsRepositoryChangeCategoryData {
  _id: string;
  _idCategory: string;
}

export interface ProductsRepositoryDeleteData {
  _id: string;
}

export interface ProductsRepositoryFindName {
  name: string;
}

type Product = typeof Product;

export interface ProductsRepository {
  index: () => Promise<Product[] | any>;
  show: (data: ProductsRepositoryShowData) => Promise<Product | any>;
  create: (data: ProductsRepositoryCreateData) => Promise<Product | any>;
  update: (data: ProductsRepositoryUpdateData) => Promise<Product | any>;
  delete: (data: ProductsRepositoryDeleteData) => Promise<Product | any>;
  findByName: (data: ProductsRepositoryFindName) => Promise<Product | any>;
  updateCategory: (
    data: ProductsRepositoryChangeCategoryData
  ) => Promise<Product | any>;
}
