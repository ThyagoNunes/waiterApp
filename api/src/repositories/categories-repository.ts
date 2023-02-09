import { Category } from '../app/models/Category';
import { Product } from '../app/models/Product';
import { ICategory } from '../utils/category';
import { IProduct } from '../utils/product';

export interface CategoriesRepositoryShowData {
  _id: string | any;
}

export interface CategoriesRepositoryCreateData {
  category: ICategory;
  _id?: string;
}

export interface CategoriesRepositoryUpdateData {
  _id: string;
  category: ICategory;
}

export interface CategoriesRepositoryDeleteData {
  _id: string;
}

export interface CategoriesRepositoryListProductsByCategory {
  _id: string;
  product?: IProduct | '';
}

export interface CategoriesRepositoryFindByName {
  _id?: string;
  name: string;
  icon: string;
}

export interface CategoriesRepositoryFindById {
  _idCategory: string | any;
}

export interface CategoriesRepositoryUpdateCategoryId {
  _id: string | any;
  _idCategory: string | any;
}

type Category = typeof Category;
type Product = typeof Product;

export interface CategoriesRepository {
  index: () => Promise<Category[] | any>;
  show: (data: CategoriesRepositoryShowData) => Promise<Category | any>;
  create: (data: CategoriesRepositoryCreateData) => Promise<Category | any>;
  update: (data: CategoriesRepositoryUpdateData) => Promise<Category | any>;
  delete: (data: CategoriesRepositoryDeleteData) => Promise<'' | any>;
  indexProducts: (
    data: CategoriesRepositoryListProductsByCategory
  ) => Promise<Product[] | any>;
  findByName: (
    data: CategoriesRepositoryFindByName
  ) => Promise<Category | string | any>;
  findById: (
    data: CategoriesRepositoryFindById
  ) => Promise<Category | string | any>;
  updateCategory: (
    data: CategoriesRepositoryUpdateCategoryId
  ) => Promise<Category | any>;
}
