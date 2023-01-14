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

    console.log(categories);
    return categories;
  }
  async create({ category }: CategoriesRepositoryCreateData) {
    const categories = await Category.create({
      name: category.name,
      icon: category.icon,
    });

    return categories;
  }
  async update({ _id, category }: CategoriesRepositoryUpdateData) {
    const categories = await Category.findByIdAndUpdate(
      { _id },
      {
        name: category.name,
        icon: category.icon,
      }
    );

    return categories;
  }
  async delete({ _id }: CategoriesRepositoryDeleteData) {
    await Category.findByIdAndDelete({ _id });

    return 'Deleted';
  }

  async indexProducts({ _id }: CategoriesRepositoryListProductsByCategory) {
    const products = await Product.find().where('category').equals({ _id });

    return products;
  }

  async findByName({ name }: CategoriesRepositoryFindByName) {
    const nameFind = await Category.findById({ name });

    console.log(`aaaa ${{ nameFind }}`);
    return nameFind;
  }
}
