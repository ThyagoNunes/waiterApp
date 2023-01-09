import { Product } from '../app/models/Product';
import { IProduct } from '../utils/product';

export interface ProductsRepositoryShowData {
  id: string;
}

export interface ProductsRepositoryCreateData {
  product: IProduct;
}

export interface ProductsRepositoryUpdateData {
  id: string;
  product: IProduct;
}

export interface ProductsRepositoryChangeCategoryData {
  id: string;
  idCategory: string;
}

export interface ProductsRepositoryDeleteData {
  id: string;
}

type Product = typeof Product;

export interface ProductsRepository {
  index: () => Promise<Product[] | ''>;
  show: (data: ProductsRepositoryShowData) => Promise<Product | string>;
  create: (data: ProductsRepositoryCreateData) => Promise<Product>;
  update: (data: ProductsRepositoryUpdateData) => Promise<Product | string>;
  delete: (data: ProductsRepositoryDeleteData) => Promise<Product | string>;
  updateCategory: (
    data: ProductsRepositoryChangeCategoryData
  ) => Promise<Product | string>;
}
