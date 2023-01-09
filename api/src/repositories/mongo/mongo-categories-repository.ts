import { Category } from '../../app/models/Category';
import { Product } from '../../app/models/Product';
import {
  CategoriesRepository,
  CategoriesRepositoryShowData,
  CategoriesRepositoryCreateData,
  CategoriesRepositoryUpdateData,
  CategoriesRepositoryDeleteData,
  CategoriesRepositoryListProductsByCategory,
} from '../categories-repository';

export class mongoCategoriesRepository implements CategoriesRepository {
  async index() {
    const categories = await Category.find();

    return categories;
  }

  async show({ id }: CategoriesRepositoryShowData) {
    const categories = await Category.findById({ id });

    return categories;
  }
  async create({ category }: CategoriesRepositoryCreateData) {
    const categories = await Category.create({
      name: category.name,
      icon: category.icon,
    });

    return categories;
  }
  async update({ id, category }: CategoriesRepositoryUpdateData) {
    const categories = await Category.findByIdAndUpdate(
      { id },
      {
        name: category.name,
        icon: category.icon,
      }
    );

    return categories;
  }
  async delete({ id }: CategoriesRepositoryDeleteData) {
    await Category.findByIdAndDelete({ id });

    return 'Deleted';
  }

  async indexProducts({ id }: CategoriesRepositoryListProductsByCategory) {
    const products = await Product.find().where('category').equals({ id });

    return products;
  }
}
