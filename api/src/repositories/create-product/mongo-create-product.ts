import { Product } from '../../app/models/Product';
import { IProduct } from '../../utils/product';
import {
  ICreateProductRepository,
  ICreateProductRepositoryParams,
} from '../../controllers/product/create-product/protocols';

export class MongoCreateProduct implements ICreateProductRepository {
  async createProduct({
    name,
    description,
    imagePath,
    price,
    category,
    ingredients,
  }: ICreateProductRepositoryParams): Promise<IProduct> {
    const createProduct = await Product.create({
      name,
      description,
      imagePath,
      price,
      category,
      ingredients,
    });

    return createProduct;
  }
}
