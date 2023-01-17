import { Product } from '../../app/models/Product';
import {
  ProductsRepository,
  ProductsRepositoryShowData,
  ProductsRepositoryFindName,
  ProductsRepositoryCreateData,
  ProductsRepositoryUpdateData,
  ProductsRepositoryDeleteData,
  ProductsRepositoryChangeCategoryData,
} from '../products-repository';

export class MongoProductsRepository implements ProductsRepository {
  async index() {
    const products = await Product.find();

    return products;
  }

  async show({ _id }: ProductsRepositoryShowData) {
    const products = await Product.findById({ _id });

    return products;
  }

  async findByName({ name }: ProductsRepositoryFindName) {
    const product = await Product.findOne({ name }).where('name').equals(name);

    return product;
  }
  async create({ product }: ProductsRepositoryCreateData) {
    const newProduct = await Product.create(product);

    console.log(`mongo-products-repository ${newProduct}`);

    return newProduct;
  }
  async update({ _id, product }: ProductsRepositoryUpdateData) {
    const products = await Product.findByIdAndUpdate(_id, product);
    console.log(`mongo-update ${products}`);
    return products;
  }
  async delete({ _id }: ProductsRepositoryDeleteData) {
    await Product.findByIdAndDelete({ _id });

    return 'Deleted';
  }

  async updateCategory({
    _id,
    _idCategory,
  }: ProductsRepositoryChangeCategoryData) {
    const changeIdCategory = await Product.findByIdAndUpdate(
      { _id },
      {
        _idCategory: _idCategory,
      }
    );

    return changeIdCategory;
  }
}
