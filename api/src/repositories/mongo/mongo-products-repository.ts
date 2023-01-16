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
    const productByName = await Product.findOne({ name })
      .where('name')
      .equals({ name });

    return productByName;
  }
  async create({
    name,
    description,
    imagePath,
    price,
    category,
    ingredients,
  }: ProductsRepositoryCreateData) {
    const newProduct = await Product.create({
      name: name,
      description: description,
      imagePath: imagePath,
      price: Number(price),
      category: category,
      ingredients: ingredients ? ingredients : [],
    });

    console.log(`mongo-products-repository ${newProduct}`);

    return newProduct;
  }
  async update({ _id, product }: ProductsRepositoryUpdateData) {
    const categories = await Product.findByIdAndUpdate(
      { _id },
      {
        name: product.name,
        description: product.description,
        imagePath: product.imagePath,
        price: product.price,
        ingredients: product.ingredients,
        category: product.category,
      }
    );

    return categories;
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
