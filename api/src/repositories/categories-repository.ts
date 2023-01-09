import { Category } from '../app/models/Category';
import { ICategory } from '../utils/category';

export interface CategoriesRepositoryShowData {
  id: string;
}

export interface CategoriesRepositoryCreateData {
  category: ICategory;
}

export interface CategoriesRepositoryUpdateData {
  id?: string;
  category: ICategory;
}

export interface CategoriesRepositoryDeleteData {
  id: string;
}

export interface CategoriesRepositoryListProductsByCategory {
  id: string;
}

type Category = typeof Category;

export interface CategoriesRepository {
  index: () => Promise<Category[] | any>;
  show: (data: CategoriesRepositoryShowData) => Promise<Category | any>;
  create: (data: CategoriesRepositoryCreateData) => Promise<Category | any>;
  update: (data: CategoriesRepositoryUpdateData) => Promise<Category | any>;
  delete: (data: CategoriesRepositoryDeleteData) => Promise<'' | any>;
  indexProducts: (
    data: CategoriesRepositoryListProductsByCategory
  ) => Promise<Category[] | any>;
}
