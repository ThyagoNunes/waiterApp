import { Category } from '../../app/models/Category';
import { Product } from '../../app/models/Product';
import {
  CategoriesRepository,
  CategoriesRepositoryShowData,
  CategoriesRepositoryCreateData,
  CategoriesRepositoryUpdateData,
  CategoriesRepositoryDeleteData,
  CategoriesRepositoryListProductsByCategory,
  CategoriesRepositoryFindByName,
} from '../categories-repository';

export class MongoCategoriesRepository implements CategoriesRepository {
  async index() {
    const categories = await Category.find();

    return categories;
  }

  async show({ _id }: CategoriesRepositoryShowData) {
    const categories = await Category.findById({ _id });

    return categories;
  }
  async create({ category }: CategoriesRepositoryCreateData) {
    const categories = await Category.create({
      name: category.name,
      icon: category.icon,
      _id: category?._id,
    });

    return categories;
  }
  async update({ _id, category }: CategoriesRepositoryUpdateData) {
    const categories = await Category.findByIdAndUpdate({ _id }, category);

    return categories;
  }
  async delete({ _id }: CategoriesRepositoryDeleteData) {
    await Category.findByIdAndDelete({ _id });

    return 'Deleted';
  }

  async indexProducts({
    _id,
    product,
  }: CategoriesRepositoryListProductsByCategory) {
    const products = await Product.find({ product })
      .where('category')
      .equals({ _id });

    return products;
  }

  async findByName({ name }: CategoriesRepositoryFindByName) {
    return await Category.findOne({ name }).where('category').equals({ name });
  }
}
