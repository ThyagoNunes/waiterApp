import { Product } from '../../app/models/Product';
import {
  ProductsRepository,
  ProductsRepositoryShowData,
  ProductsRepositoryFindName,
  ProductsRepositoryCreateData,
  ProductsRepositoryUpdateData,
  ProductsRepositoryDeleteData,
  ProductsRepositoryChangeCategoryData,
  ProductsRepositoryChangeImageData,
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

  async create({ product }: ProductsRepositoryCreateData) {
    const newProduct = await Product.create(product);
    console.log(`mongo newProduct: ${newProduct}`);

    return newProduct;
  }

  async update(data: ProductsRepositoryUpdateData) {
    const { _id, product } = data;
    const { name, description, imagePath, price, category, ingredients } =
      product;

    const categories = await Product.findByIdAndUpdate(_id, {
      name,
      description,
      imagePath,
      price: Number(price),
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
    });

    return categories!;
  }

  async delete({ _id }: ProductsRepositoryDeleteData) {
    await Product.findByIdAndDelete({ _id });

    return 'Deleted';
  }

  async findByName(data: ProductsRepositoryFindName) {
    const product = await Product.findOne({ data }).where('name').equals(data);

    return product?.name;
  }

  async updateCategory(data: ProductsRepositoryChangeCategoryData) {
    const category = await Product.findByIdAndUpdate(data._id, {
      category: data._idCategory,
    });
    return category;
  }

  async updateImage(data: ProductsRepositoryChangeImageData) {
    const imagePath = data.imagePath;
    return await Product.findByIdAndUpdate(data._id, {
      imagePath: imagePath,
    });
  }
}
