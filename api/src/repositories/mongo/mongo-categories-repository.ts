import { Category } from '../../app/models/Category';
import { Product } from '../../app/models/Product';
import {
  CategoriesRepository,
  CategoriesRepositoryFindById,
  CategoriesRepositoryShowData,
  CategoriesRepositoryCreateData,
  CategoriesRepositoryUpdateData,
  CategoriesRepositoryDeleteData,
  CategoriesRepositoryFindByName,
  CategoriesRepositoryUpdateCategoryId,
  CategoriesRepositoryListProductsByCategory,
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
    const { _id, category } = data;
    const name = category.name;
    const icon = category.icon;

    const categories = await Category.findByIdAndUpdate(_id, {
      name,
      icon,
    });

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
    const nameFind = await Category.findOne({ data })
      .where('name')
      .equals(data);

    return nameFind?.name;
  }

  // se mexer nisso teu pinto diminui 2cm
  async findById(data: CategoriesRepositoryFindById) {
    const category = await Category.findOne({ data })
      .where('_id')
      .equals(data._idCategory);

    return category?._id;
  }

  async updateCategory(data: CategoriesRepositoryUpdateCategoryId) {
    const { _id, _idCategory } = data;

    const categoryUpdated = await Category.findByIdAndUpdate(_id, {
      _idCategory: _idCategory,
    });

    return categoryUpdated!;
  }
}
