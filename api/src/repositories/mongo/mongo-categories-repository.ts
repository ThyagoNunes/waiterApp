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
  async update(data: CategoriesRepositoryUpdateData) {
    const categories = await Category.findByIdAndUpdate({
      _id: data._id,
      name: data.category!.name,
      icon: data.category!.icon,
    });

    console.log(categories);

    return categories!;
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

  async findByName(data: CategoriesRepositoryFindByName) {
    console.log(`mongo-categories: ${data}`);
    const nameFind = await Category.find(data.name).where('name').equals(data);

    console.log(`nameFind: ${nameFind}`);
    if (nameFind === null) {
      return false;
    }
    return true;
  }

  async findAllNames() {
    const allNames = await Category.find({ name }).where('name').equals(name);

    console.log(`mongo: ${allNames}`);
    return allNames;
  }
}
